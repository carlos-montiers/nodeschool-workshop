#!/usr/bin/env bash

odd_tree() {
    local n=$1
    local limit=$2
    local level=$(( $3 ))
    
    if [[ level -eq 0 ]]; then
        level=1
    fi

    if [[ ($((n % 2)) -eq 0) ]]; then
        local spaces=level
        while [[ spaces -gt 0 ]]; do
            spaces=$(( spaces - 1 ))
            echo -n " "
        done
        echo "$n"
        level=$(( level + 1 ))
    fi

    if [[ n -lt limit ]]; then
        n=$(( n + 1 ))
        odd_tree $n $limit $level
    fi
}

main() {
    echo $FUNCNAME
    odd_tree $1 $2
}

main $1 $2
