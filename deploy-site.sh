#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "${ROOT_DIR}/wwwroot"
rm -rf ./dist
npm run build
npx wrangler deploy

cd "${ROOT_DIR}"
