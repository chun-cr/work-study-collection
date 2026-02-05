let sy = Symbol('test');

let syObject = {}
syObject[sy] = 'symbol value';
console.log(syObject[sy]); // 输出: symbol value