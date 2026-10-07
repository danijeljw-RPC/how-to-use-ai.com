#!/usr/bin/env bash

set -euo pipefail

AMOUNT="${1:?Usage: $0 <amount> [currency]}"
BASE="${2:-AUD}"
BASE="${BASE^^}"

CURRENCIES=(AUD USD GBP EUR JPY BRL CAD MXN DKK NZD CHF HKD NOK SEK)

# Build target list, excluding base currency
QUOTES=$(
    printf '%s\n' "${CURRENCIES[@]}" |
    grep -v "^${BASE}$" |
    paste -sd, -
)

DATA=$(
    curl -fsS \
        "https://api.frankfurter.dev/v2/rates?base=${BASE}&quotes=${QUOTES}"
)

printf "%-5s %12s\n" "CUR" "PRICE"
printf "%-5s %12s\n" "-----" "------------"

for currency in "${CURRENCIES[@]}"; do
    if [[ "$currency" == "$BASE" ]]; then
        price="$AMOUNT"
    else
        rate=$(jq -r --arg currency "$currency" \
            '.[] | select(.quote == $currency) | .rate' <<< "$DATA")

        price=$(awk -v amount="$AMOUNT" -v rate="$rate" \
            'BEGIN { printf "%.2f", amount * rate }')
    fi

    printf "%-5s %12s\n" "$currency" "$price"
done
