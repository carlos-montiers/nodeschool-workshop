#!/usr/bin/env bash

for ((n = $1; n <= $2; n++)); do
    if [[ $(($n % 2)) -eq 0 ]]; then
        echo "$n"
    fi
done
