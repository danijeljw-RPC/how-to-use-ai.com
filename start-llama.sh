#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "${ROOT_DIR}"


llama-server \
  -m /Users/danijeljw/Models/Qwen2.5-14B-Instruct-Q4_K_M.gguf \
  -ngl all \
  -c 20480 \
  -np 1 \
  -fa on \
  -ctk q4_0 \
  -ctv q4_0 \
  --host 127.0.0.1 \
  --port 8080 \
  --tools read_file,file_glob_search,grep_search,write_file,edit_file,get_info

