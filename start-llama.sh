#!/usr/bin/env bash

set -euo pipefail

llama-cli \
  -m ~/Models/Qwen2.5-14B-Instruct-Q4_K_M.gguf \
  -ngl 99 \
  -c 16384 \
  -n 4000
