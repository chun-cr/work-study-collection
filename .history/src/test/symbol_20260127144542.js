let sy = Symbol('test');
let syObject = {}

syObject[sy] = 'symbol value';
console.log(syObject); // 输出: symbol value

let obj = {
    [sy]: 'symbol in object literal'
};
console.log(obj); // 输出: symbol in object literal

Object.defineProperty(syObject, Symbol('another'), {
    value: 'defined symbol property',
    writable: true
});
console.log(syObject[Symbol('another')]);