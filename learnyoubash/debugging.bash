#!/usr/bin/env bash

# enable verbose and noexec
set -vn
echo $@
touch $@
mkdir ./folder
mv file* ./folder
cd ./folder
ls
set +vn
