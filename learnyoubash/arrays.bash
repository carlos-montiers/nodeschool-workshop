#!/usr/bin/env bash

# slice of positional parameters
# from the second, and 2 elements
arr=${@:2:2}
tokens=(I am "${arr[*]}" and "${@:4:1}")

echo "${tokens[*]}"
