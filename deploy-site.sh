#!/usr/bin/env bash

set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")"
rm -rf ./dist
npm run build
npx wrangler deploy
