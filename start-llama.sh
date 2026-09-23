#!/usr/bin/env bash

set -euo pipefail

SCRIPT_NAME="$(basename "$0")"
DEFAULT_PROFILE="ministral"
DEFAULT_TOOLS="read_file,file_glob_search,grep_search,write_file,edit_file,get_info"

usage() {
  cat <<EOF
Usage:
  ${SCRIPT_NAME} [PROFILE] [OPTIONS]
  ${SCRIPT_NAME} --list

Profiles:
  ministral  Ministral 3 8B Instruct Q5_K_M (recommended for manuscript work)
  granite    Granite 4.2 8B Q5_K_M (recommended for tool-driven repository work)
  qwen3      Qwen3 8B Q5_K_M (balanced writing and instruction following)
  gemma3     Gemma 3 12B Instruct Q4_K_M (heavier prose-focused option)
  qwen25     Existing local Qwen2.5 14B Q4_K_M, with Hugging Face fallback
  custom     Supply --model-path and/or --hf-model yourself

Options:
  --working-dir PATH       Repository exposed to the model (default: current directory)
  --model-path PATH        Use a local GGUF file
  --hf-model REPO:QUANT    Download/cache and run a Hugging Face GGUF
  -c, --context TOKENS     Override the profile context size
  -np, --parallel COUNT    Override the number of server slots
  --flash-attn MODE        on, off, or auto
  --cache-k TYPE           KV key-cache type, e.g. q8_0 or q4_0
  --cache-v TYPE           KV value-cache type, e.g. q8_0 or q4_0
  --host HOST              Server bind address (default: 127.0.0.1)
  --port PORT              Server port (default: 8080)
  --tools LIST             Comma-separated llama-server tools
  --no-tools               Start without filesystem tools
  --llama-server PATH      llama-server executable (default: resolved from PATH)
  --dry-run                Print the resolved command without running it
  --list                   List profiles and exit
  -h, --help               Show this help

Examples:
  ./${SCRIPT_NAME} ministral
  ./${SCRIPT_NAME} granite --context 32768
  ./${SCRIPT_NAME} qwen3 --dry-run
  ./${SCRIPT_NAME} custom --model-path ~/Models/my-model.gguf --context 24576
  ./${SCRIPT_NAME} custom --hf-model owner/repository:Q5_K_M --context 24576

Named Hugging Face profiles use llama-server's -hf support. Missing models are
downloaded automatically and then reused from llama.cpp's cache.
EOF
}

list_profiles() {
  cat <<'EOF'
ministral  HF  mistralai/Ministral-3-8B-Instruct-2512-GGUF:Q5_K_M  c=24576 np=1 fa=on ctk=q8_0 ctv=q8_0
granite    HF  ibm-granite/granite-4.2-8b-GGUF:Q5_K_M              c=24576 np=1 fa=on ctk=q8_0 ctv=q8_0
qwen3      HF  Qwen/Qwen3-8B-GGUF:Q5_K_M                           c=24576 np=1 fa=on ctk=q8_0 ctv=q8_0
gemma3     HF  bartowski/google_gemma-3-12b-it-GGUF:Q4_K_M         c=24576 np=1 fa=on ctk=q4_0 ctv=q4_0
qwen25     local/HF fallback, Qwen2.5 14B Q4_K_M                   c=20480 np=1 fa=on ctk=q4_0 ctv=q4_0
custom     values supplied with --model-path and/or --hf-model
EOF
}

fail() {
  printf 'Error: %s\n' "$*" >&2
  exit 2
}

require_value() {
  local option="$1"
  local value="${2:-}"
  [[ -n "${value}" ]] || fail "${option} requires a value"
}

is_positive_integer() {
  [[ "$1" =~ ^[1-9][0-9]*$ ]]
}

PROFILE="${DEFAULT_PROFILE}"
if [[ $# -gt 0 && "${1}" != -* ]]; then
  PROFILE="$1"
  shift
fi

WORKING_DIR="${PWD}"
MODEL_PATH=""
HF_MODEL=""
CONTEXT_SIZE=""
PARALLEL=""
FLASH_ATTN=""
CACHE_K=""
CACHE_V=""
HOST="127.0.0.1"
PORT="8080"
TOOLS="${DEFAULT_TOOLS}"
LLAMA_SERVER_BIN="llama-server"
CHAT_TEMPLATE_KWARGS=""
DRY_RUN=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --working-dir)
      require_value "$1" "${2:-}"
      WORKING_DIR="$2"
      shift 2
      ;;
    --model-path|-m)
      require_value "$1" "${2:-}"
      MODEL_PATH="$2"
      shift 2
      ;;
    --hf-model|-hf)
      require_value "$1" "${2:-}"
      HF_MODEL="$2"
      shift 2
      ;;
    -c|--context)
      require_value "$1" "${2:-}"
      CONTEXT_SIZE="$2"
      shift 2
      ;;
    -np|--parallel)
      require_value "$1" "${2:-}"
      PARALLEL="$2"
      shift 2
      ;;
    --flash-attn|-fa)
      require_value "$1" "${2:-}"
      FLASH_ATTN="$2"
      shift 2
      ;;
    --cache-k|-ctk)
      require_value "$1" "${2:-}"
      CACHE_K="$2"
      shift 2
      ;;
    --cache-v|-ctv)
      require_value "$1" "${2:-}"
      CACHE_V="$2"
      shift 2
      ;;
    --host)
      require_value "$1" "${2:-}"
      HOST="$2"
      shift 2
      ;;
    --port)
      require_value "$1" "${2:-}"
      PORT="$2"
      shift 2
      ;;
    --tools)
      require_value "$1" "${2:-}"
      TOOLS="$2"
      shift 2
      ;;
    --no-tools)
      TOOLS=""
      shift
      ;;
    --llama-server)
      require_value "$1" "${2:-}"
      LLAMA_SERVER_BIN="$2"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    --list)
      list_profiles
      exit 0
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    --)
      shift
      break
      ;;
    *)
      fail "unknown option: $1 (use --help)"
      ;;
  esac
done

[[ $# -eq 0 ]] || fail "unexpected positional argument: $1"

case "${PROFILE}" in
  ministral)
    HF_MODEL="${HF_MODEL:-mistralai/Ministral-3-8B-Instruct-2512-GGUF:Q5_K_M}"
    CONTEXT_SIZE="${CONTEXT_SIZE:-24576}"
    PARALLEL="${PARALLEL:-1}"
    FLASH_ATTN="${FLASH_ATTN:-on}"
    CACHE_K="${CACHE_K:-q8_0}"
    CACHE_V="${CACHE_V:-q8_0}"
    ;;
  granite)
    HF_MODEL="${HF_MODEL:-ibm-granite/granite-4.2-8b-GGUF:Q5_K_M}"
    CONTEXT_SIZE="${CONTEXT_SIZE:-24576}"
    PARALLEL="${PARALLEL:-1}"
    FLASH_ATTN="${FLASH_ATTN:-on}"
    CACHE_K="${CACHE_K:-q8_0}"
    CACHE_V="${CACHE_V:-q8_0}"
    CHAT_TEMPLATE_KWARGS='{"enable_thinking":false}'
    ;;
  qwen3)
    HF_MODEL="${HF_MODEL:-Qwen/Qwen3-8B-GGUF:Q5_K_M}"
    CONTEXT_SIZE="${CONTEXT_SIZE:-24576}"
    PARALLEL="${PARALLEL:-1}"
    FLASH_ATTN="${FLASH_ATTN:-on}"
    CACHE_K="${CACHE_K:-q8_0}"
    CACHE_V="${CACHE_V:-q8_0}"
    CHAT_TEMPLATE_KWARGS='{"enable_thinking":false}'
    ;;
  gemma3)
    HF_MODEL="${HF_MODEL:-bartowski/google_gemma-3-12b-it-GGUF:Q4_K_M}"
    CONTEXT_SIZE="${CONTEXT_SIZE:-24576}"
    PARALLEL="${PARALLEL:-1}"
    FLASH_ATTN="${FLASH_ATTN:-on}"
    CACHE_K="${CACHE_K:-q4_0}"
    CACHE_V="${CACHE_V:-q4_0}"
    ;;
  qwen25)
    MODEL_PATH="${MODEL_PATH:-/Users/danijeljw/Models/Qwen2.5-14B-Instruct-Q4_K_M.gguf}"
    HF_MODEL="${HF_MODEL:-bartowski/Qwen2.5-14B-Instruct-GGUF:Q4_K_M}"
    CONTEXT_SIZE="${CONTEXT_SIZE:-20480}"
    PARALLEL="${PARALLEL:-1}"
    FLASH_ATTN="${FLASH_ATTN:-on}"
    CACHE_K="${CACHE_K:-q4_0}"
    CACHE_V="${CACHE_V:-q4_0}"
    ;;
  custom)
    CONTEXT_SIZE="${CONTEXT_SIZE:-24576}"
    PARALLEL="${PARALLEL:-1}"
    FLASH_ATTN="${FLASH_ATTN:-on}"
    CACHE_K="${CACHE_K:-q8_0}"
    CACHE_V="${CACHE_V:-q8_0}"
    ;;
  *)
    fail "unknown profile '${PROFILE}' (use --list)"
    ;;
esac

[[ -d "${WORKING_DIR}" ]] || fail "working directory does not exist: ${WORKING_DIR}"
is_positive_integer "${CONTEXT_SIZE}" || fail "context must be a positive integer"
is_positive_integer "${PARALLEL}" || fail "parallel must be a positive integer"
is_positive_integer "${PORT}" || fail "port must be a positive integer"
[[ "${FLASH_ATTN}" == "on" || "${FLASH_ATTN}" == "off" || "${FLASH_ATTN}" == "auto" ]] || \
  fail "flash-attn must be on, off, or auto"

MODEL_ARGS=()
if [[ -n "${MODEL_PATH}" && -f "${MODEL_PATH}" ]]; then
  MODEL_ARGS=(-m "${MODEL_PATH}")
  MODEL_DESCRIPTION="local: ${MODEL_PATH}"
elif [[ -n "${HF_MODEL}" ]]; then
  MODEL_ARGS=(-hf "${HF_MODEL}")
  MODEL_DESCRIPTION="Hugging Face: ${HF_MODEL} (downloads automatically if missing)"
elif [[ -n "${MODEL_PATH}" ]]; then
  fail "model file does not exist and no --hf-model fallback was supplied: ${MODEL_PATH}"
else
  fail "profile '${PROFILE}' requires --model-path or --hf-model"
fi

if [[ "${DRY_RUN}" != true ]]; then
  command -v "${LLAMA_SERVER_BIN}" >/dev/null 2>&1 || fail "llama-server not found: ${LLAMA_SERVER_BIN}"
fi

COMMAND=(
  "${LLAMA_SERVER_BIN}"
  "${MODEL_ARGS[@]}"
  -ngl all
  -c "${CONTEXT_SIZE}"
  -np "${PARALLEL}"
  -fa "${FLASH_ATTN}"
  -ctk "${CACHE_K}"
  -ctv "${CACHE_V}"
  --host "${HOST}"
  --port "${PORT}"
)

if [[ -n "${CHAT_TEMPLATE_KWARGS}" ]]; then
  COMMAND+=(--chat-template-kwargs "${CHAT_TEMPLATE_KWARGS}")
fi

if [[ -n "${TOOLS}" ]]; then
  COMMAND+=(--tools "${TOOLS}")
fi

printf 'Profile: %s\n' "${PROFILE}"
printf 'Working directory: %s\n' "${WORKING_DIR}"
printf 'Model: %s\n' "${MODEL_DESCRIPTION}"
printf 'Context: %s | Parallel slots: %s | Flash Attention: %s | KV cache: %s/%s\n' \
  "${CONTEXT_SIZE}" "${PARALLEL}" "${FLASH_ATTN}" "${CACHE_K}" "${CACHE_V}"

if [[ "${DRY_RUN}" == true ]]; then
  printf 'Command:'
  printf ' %q' "${COMMAND[@]}"
  printf '\n'
  exit 0
fi

cd "${WORKING_DIR}"
exec "${COMMAND[@]}"
