let sy = Symbol('test');

let syObject = {}
syObject[sy] = 'symbol value';
console.log(syObject); // 输出: symbol value

let syObject1 = {
    [sy]: 'symbol in object literal'
};
console.log(syObject1); // 输出: symbol in object literal

let syObject2 = {};
Object.defineProperty(syObject2, sy, {
    value: 'defined symbol property',
    writable: true
});
console.log(syObject2);