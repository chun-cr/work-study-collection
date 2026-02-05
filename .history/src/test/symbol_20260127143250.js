let sy = Symbol('test');

let syObject = {}
syObject[sy] = 'symbol value';
console.log(syObject); // 输出: symbol value

let ayObject1 = {
    [sy]: 'symbol in object literal'
};
console.log(ayObject1[sy]); // 输出: symbol in object literal
