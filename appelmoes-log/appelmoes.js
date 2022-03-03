// This is our recommended way of loading WebAssembly.
(async () => {
    const fetchPromise = fetch('appelmoes.wasm');
    const { instance } = await WebAssembly.instantiateStreaming(fetchPromise, {
      "appelmoes": {
        print: console.log
      }
    });
    const result = instance.exports.appelmoes(42, 42);
    console.log(result);
  })();