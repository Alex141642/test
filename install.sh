#!/bin/bash
touch /tmp/ttt.json
echo "toto" >> /tmp/ttt.json
if [[ -d  "./src" ]]; then
    tsc
fi
rm -rf ./src ./tsconfig.json
