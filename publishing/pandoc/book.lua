-- How To Use AI.com book filter (ADR-03-0008, Option B design).
--
-- * "# Chapter 1 — Title" and "# Epilogue — Title" become styled chapter
--   openers (\hwChapter in LaTeX; a labelled heading in EPUB).
-- * Block quotes that start with a callout label ("> **Key Idea:** ...")
--   become callout boxes. Other block quotes stay plain quotes.
-- * With metadata hw-notes=back, each "## Chapter Notes" heading is removed:
--   its footnote definitions are already collected by pandoc, and its prose
--   moves to the back-of-book notes (LaTeX) or stays as a short note (EPUB).

local CALLOUTS = {
  ["Key Idea"] = "key", ["Watch Out"] = "watch", ["Try This"] = "try",
  ["Recap"] = "recap", ["Plain English"] = "plain", ["Myth vs Reality"] = "myth",
  ["Example"] = "example", ["Author Note"] = "author", ["Reflection"] = "reflection",
}

local notes_mode = "inline"
local is_latex = FORMAT:match("latex") ~= nil

local function latex_escape(text)
  local replacements = {
    ["\\"] = "\\textbackslash{}", ["{"] = "\\{", ["}"] = "\\}", ["$"] = "\\$",
    ["&"] = "\\&", ["#"] = "\\#", ["%"] = "\\%", ["_"] = "\\_",
    ["~"] = "\\textasciitilde{}", ["^"] = "\\textasciicircum{}",
  }
  return (text:gsub("[\\{}$&#%%_~^]", replacements))
end

local function to_latex(blocks)
  return pandoc.write(pandoc.Pandoc(blocks), "latex"):gsub("%s+$", "")
end

-- "Chapter 1 — Title" -> "Chapter 01", "1", "Title"; "Epilogue — Title" -> "Epilogue", nil, "Title"
-- Dashes are multi-byte in UTF-8, so each separator is tried as a whole string
-- (a Lua character class would match single bytes and split the em dash).
local SEPARATORS = { "—", "–", "%-", ":" }

local function split_heading(text)
  for _, separator in ipairs(SEPARATORS) do
    local number, title = text:match("^Chapter%s+(%d+)%s*" .. separator .. "%s*(.+)$")
    if number then
      return string.format("Chapter %02d", tonumber(number)), number, title
    end
    local label, rest = text:match("^(%a+)%s*" .. separator .. "%s*(.+)$")
    if label == "Epilogue" or label == "Prologue" or label == "Introduction" or label == "Preface" then
      return label, nil, rest
    end
  end
  return "", nil, text
end

local function chapter_header(header)
  local label, number, title = split_heading(pandoc.utils.stringify(header.content))
  if is_latex then
    local toc
    if number then
      -- The PDF bookmark gets plain text; the printed contents get the styled number.
      toc = string.format("\\texorpdfstring{\\hwTocNum{%s}}{Chapter %d: }%s",
        number, tonumber(number), latex_escape(title))
    elseif label ~= "" then
      toc = latex_escape(label .. ": " .. title)
    else
      toc = latex_escape(title)
    end
    return pandoc.RawBlock("latex", string.format("\\hwChapter[%s]{%s}{%s}{%s}",
      number or "0", latex_escape(label), latex_escape(title), toc))
  end
  local content = { pandoc.Str(title) }
  if label ~= "" then
    content = { pandoc.Span({ pandoc.Str(label) }, { class = "chapter-label" }), pandoc.Space() }
    for _, inline in ipairs(pandoc.Inlines(title)) do table.insert(content, inline) end
  end
  header.content = content
  header.classes:insert("chapter")
  return header
end

local function tail(list, start)
  local result = pandoc.List()
  for position = start, #list do result:insert(list[position]) end
  return result
end

-- "> [Author reflection placeholder: ...]" is shown as an Author Reflection
-- callout so reviewers can see where the author's own stories will go.
local REFLECTION_PREFIX = "[Author reflection placeholder:"

local function reflection(quote)
  local text = pandoc.utils.stringify(quote)
  if text:sub(1, #REFLECTION_PREFIX) ~= REFLECTION_PREFIX then return nil end
  if is_latex then
    local blocks = pandoc.List({ pandoc.RawBlock("latex", "\\begin{hwcallout}{Author Reflection}{reflection}") })
    blocks:extend(quote.content)
    blocks:insert(pandoc.RawBlock("latex", "\\end{hwcallout}"))
    return blocks
  end
  local blocks = pandoc.List({ pandoc.Para({ pandoc.Span({ pandoc.Str("Author Reflection") }, { class = "callout-label" }) }) })
  blocks:extend(quote.content)
  return pandoc.Div(blocks, { class = "callout callout-reflection" })
end

-- A paragraph ending in a colon introduces the block after it ("A plausible
-- but wrong summary would be:"), so the two must not be split across pages.
local function ends_with_colon(block)
  if block.t ~= "Para" then return false end
  return pandoc.utils.stringify(block):match(":%s*$") ~= nil
end

local function callout(quote)
  local first = quote.content[1]
  if not first or first.t ~= "Para" or not first.content[1] or first.content[1].t ~= "Strong" then
    return nil
  end
  local label = pandoc.utils.stringify(first.content[1]):gsub(":%s*$", "")
  local kind = CALLOUTS[label]
  if not kind then return nil end
  local rest = tail(first.content, 2)
  while rest[1] and (rest[1].t == "Space" or rest[1].t == "SoftBreak") do rest:remove(1) end
  local blocks = tail(quote.content, 2)
  if #rest > 0 then blocks:insert(1, pandoc.Para(rest)) end
  if is_latex then
    blocks:insert(1, pandoc.RawBlock("latex", string.format("\\begin{hwcallout}{%s}{%s}", latex_escape(label), kind)))
    blocks:insert(pandoc.RawBlock("latex", "\\end{hwcallout}"))
    return blocks
  end
  blocks:insert(1, pandoc.Para({ pandoc.Span({ pandoc.Str(label) }, { class = "callout-label" }) }))
  return pandoc.Div(blocks, { class = "callout callout-" .. kind })
end

local function process(blocks)
  local output = pandoc.List()
  local index = 1
  while index <= #blocks do
    local block = blocks[index]
    if block.t == "Header" and block.level == 1 then
      output:insert(chapter_header(block))
      index = index + 1
    elseif block.t == "Header" and block.level == 2 and notes_mode == "back"
        and pandoc.utils.stringify(block.content) == "Chapter Notes" then
      local prose = pandoc.List()
      index = index + 1
      -- Collect the notes prose; stop at the next section or at generated
      -- raw output (such as the back matter appended after the last chapter).
      while index <= #blocks and blocks[index].t ~= "RawBlock"
          and not (blocks[index].t == "Header" and blocks[index].level <= 2) do
        prose:insert(blocks[index])
        index = index + 1
      end
      if #prose > 0 then
        if is_latex then
          output:insert(pandoc.RawBlock("latex", "\\hwNotesIntro{" .. to_latex(prose) .. "}"))
        else
          output:insert(pandoc.Div(prose, { class = "chapter-provenance" }))
        end
      end
    elseif is_latex and ends_with_colon(block) and blocks[index + 1]
        and blocks[index + 1].t ~= "Header" then
      output:insert(pandoc.RawBlock("latex", "\\hwKeepStart"))
      output:insert(block)
      output:insert(pandoc.RawBlock("latex", "\\hwKeepEnd"))
      index = index + 1
    elseif block.t == "BlockQuote" then
      local replacement = callout(block) or reflection(block)
      if replacement then
        if replacement.t == "Div" then output:insert(replacement) else output:extend(replacement) end
      else
        output:insert(block)
      end
      index = index + 1
    else
      output:insert(block)
      index = index + 1
    end
  end
  return output
end

-- Images sized as a percentage ("{ width=50% }") skip pandoc's fitting, so a
-- tall diagram could overrun the 7.5 x 9.25in page. Cap their height too.
function Image(image)
  if not is_latex then return nil end
  local width = image.attributes.width
  local percent = width and width:match("^(%d+%.?%d*)%%$")
  if not percent then return nil end
  return pandoc.RawInline("latex", string.format(
    "\\includegraphics[width=%.3f\\linewidth,height=0.72\\textheight,keepaspectratio]{%s}",
    tonumber(percent) / 100, image.src))
end

function Pandoc(doc)
  if doc.meta["hw-notes"] then
    notes_mode = pandoc.utils.stringify(doc.meta["hw-notes"])
  end
  doc.blocks = process(doc.blocks)
  return doc
end
