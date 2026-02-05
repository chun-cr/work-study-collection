/*let sy = Symbol('key1')
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

const user = {
    name: '小春',
    [Symbol('id')]: 123,
    [Symbol('id')]: 456 //不会覆盖上一个，因为symbol实例唯一
}
console.log(user[Symbol('id')]) //undefined ,每个Symbol都是最新的
console.log(Object.keys(user)) //['name'](常规方法无法获取Symbol属性)
console.log(Object.getOwnPropertySymbols(user)); //[Symbol(id),Symbol(id)](需要专用方法)
console.log(Reflect.ownKeys(user))*/

const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");
 
function ColorException(message) {
   this.message = message;
   this.name = "ColorException";
}
function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            return "COLOR_RED";
        case COLOR_YELLOW :
            return "COLOR_YELLOW ";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        default:
            throw new ColorException("Can't find this color");
    }
}
 
try {
   
   var color = "green"; // green 引发异常
   var colorName = getConstantName(color);
} catch (e) {
   var colorName = "unknown";
   console.log(e.message, e.name); // 传递异常对象到错误处理
}