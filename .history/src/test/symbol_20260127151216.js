let sy = Symbol('key1')
const obj = {}
obj[sy] = 'value1'

console.log(obj) 

let obj1 = {
    test: 'value2',
}
console.log(obj1)

//如果直接通过字面量的形式定义对象并使用 Symbol 作为键，同样需要中括号
let sy2 = Symbol('key2')
let obj2 = {
    [sy2]: 'value3',
}
console.log(obj2)