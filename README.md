# wasm-js-performance
Small example of performance improvement of js with wasm

## JS perf
In the unperformant/index.html is a small js script which shows why js performance is problematic.

## Minimal AssemblyScript examples
appelmoes and appelmoes-log contain some minimal examples of using assembly script.

## Improve perf with wasm
Let's rewrite the script in AssemblyScript and compare the results

`npm install -g assemblyscript`

`npm install --save @assemblyscript/loader`

`asc appelmoes.ts -b appelmoes.wasm -t appelmoes.wat`
