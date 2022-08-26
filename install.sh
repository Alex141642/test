#!/bin/bash
if [[ -d  "./src" ]]; then
    tsc
fi
rm -rf ./src ./tsconfig.json