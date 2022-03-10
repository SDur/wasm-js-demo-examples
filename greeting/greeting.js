

import loader from "@assemblyscript/loader"; // or require
let myModule = await loader.instantiate(
  // Binary to instantiate
  fetch("greeting.wasm")
)
console.log(myModule)
console.log(myModule.exports)

const { greet } = myModule.exports
const { __newString, __getString } = myModule.exports

function doConcat(aStr, bStr) {
  let aPtr = __newString(aStr)
  let bPtr = __newString(bStr)
  let cPtr = greet(aPtr, bPtr)
  let cStr = __getString(cPtr)
  return cStr
}

console.log(doConcat("Buttercup ", "Cumbersnatch"))
document.querySelector('#demo').textContent = doConcat("Buttercup ", "Cumbersnatch")