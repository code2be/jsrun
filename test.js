const {VM} = require('vm2');
let result = new VM({
    eval: false,
    wasm: false,
    timeout: 1000
}).run('var x = Math.round(100.7); x;');
console.log(result);
// console.log('Never gets executed.');