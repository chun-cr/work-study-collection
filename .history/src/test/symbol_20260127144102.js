let sy = Symbol('test');

let syObject = {}
syObject[sy] = 'symbol value';
console.log(syObject); // 输出: symbol value

let syObject = {
    [sy]: 'symbol in object literal'
};
console.log(syObject); // 输出: symbol in object literal

Object.defineProperty(syObject, sy, {
    value: 'defined symbol property',
    writable: true
});
console.log(Object.keys(ayObject1));