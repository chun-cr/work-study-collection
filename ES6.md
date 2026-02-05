### 1.`Symbol`

**原始数据类型**，用于表示独一无二的值，解决对象属性名冲突的问题，常作为对象的私有属性键。

当使用`symbol`作为对象的属性键时，必须通过中括号的方式来定义和访问，这是因为点语法（`.`）仅支持字符串类型的属性名，而 `Symbol` 是独立的基本数据类型，无法通过点语法识别。

~~~javascript
let syObject = {};
syObject[sy] = "kk";
 
syObject[sy];  // "kk"
syObject.sy;   // undefined
~~~

**基础使用：**

~~~javascript
//用symbol作为对象的属性键时
let sy = Symbol('key1')
const obj = {}
obj[sy] = 'value1'
console.log(obj)  //{ [Symbol(key1)]: 'value1' }

//普通对象
let obj1 = {
    test: 'value2',
}
console.log(obj1) //{ test: 'value2' }

//如果直接通过字面量的形式定义对象并使用 Symbol 作为键，同样需要中括号
let sy2 = Symbol('key2')
let obj2 = {
    [sy2]: 'value3',
}
console.log(obj2)  //{ [Symbol(key2)]: 'value3' }
~~~

`Symbol`值为属性名时，该属性是共有属性不是私有属性，可以在类的外部访问。但是不会出现在 `for...in` 、 `for...of` 的循环中，也不会被 `Object.keys()` 、 `Object.getOwnPropertyNames()` 返回。如果要读取到一个对象的 `Symbol` 属性，可以通过 `Object.getOwnPropertySymbols()` 和 `Reflect.ownKeys()` 取到。

**获取方法：**

~~~javascript
const user = {
    name: '小春',
    [Symbol('id')]: 123,
    [Symbol('id')]: 456 //不会覆盖上一个，因为symbol实例唯一
}
console.log(user[Symbol('id')]) //undefined ,每个Symbol都是最新的
console.log(Object.keys(user)) //['name'](常规方法无法获取Symbol属性)
console.log(Object.getOwnPropertySymbols(user)); //[Symbol(id),Symbol(id)](需要专用方法)
console.log(Reflect.ownKeys(user)) //[ 'name', Symbol(id), Symbol(id) ]
~~~

#### **1.1`Symbol.for()`**

`Symbol.for()`类似于单例模式，首先会在全局搜索被登记的`Symbol`中是否有该字符串参数作为名称的`Symbol`值，如果有即返回该`Symbol`值，若没有则新建并返回一个以该字符串参数为名称的`Symbol`值，并登记在全局环境中供搜索。

~~~javascript
let yellow = Symbol("Yellow");
let yellow1 = Symbol.for("Yellow");
yellow === yellow1;      // false
 
let yellow2 = Symbol.for("Yellow");
yellow1 === yellow2;     // true
~~~

#### 1.2`Symbol.keyFor()`

`Symbol.keyFor()`返回一个已登记的`Symbol`类型值的`key`，用来检测该字符串参数作为名称的`Symbol`值是否已被登记

~~~javascript
let yellow1 = Symbol.for('Yellow')
Symbol.keyFor(yellow1) // Yellow
~~~

### 2.`Iterator` 对象

`Iterator`（迭代器）为不同的数据结构（如`Map`、`Array`、`Set`等）提供了统一的遍历接口，核心是一个包含`next()`方法的对象

- 迭代器对象必须拥有`next()`方法，调用该方法会返回一个包含`value`（当前遍历值）和`done`（布尔值，表示遍历是否结束）的对象
- 遍历遵循按插入顺序的规则（如 `Map` 的迭代器会严格按照 `set` 的顺序返回元素）。

~~~javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 方式1：直接遍历 Map（底层调用迭代器）
//for...of 循环的本质是自动调用可迭代对象的迭代器的 next() 方法，直到 done 为 true；
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}

// 方式2：显式调用 entries() 获取迭代器
for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
~~~

**手动调用迭代器的示例**

~~~javascript
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

// 获取 Map 的迭代器（等同于 myMap.entries()）
const iterator = myMap[Symbol.iterator]();

// 手动调用 next() 遍历
console.log(iterator.next()); // { value: [0, 'zero'], done: false }
console.log(iterator.next()); // { value: [1, 'one'], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
~~~

**常见可迭代对象的迭代器**

| 数据结构 | 迭代器获取方式                             | 迭代返回值          |
| -------- | ------------------------------------------ | ------------------- |
| `Array`  | `arr[Symbol.iterator]()`                   | 数组的每个元素      |
| `Map`    | `map[Symbol.iterator]()` / `map.entries()` | `[key, value]` 数组 |
| `Set`    | `set[Symbol.iterator]()`                   | Set 的每个元素      |
| `String` | `str[Symbol.iterator]()`                   | 字符串的每个字符    |

### 3.扩展运算符和剩余运算符

#### 3.1扩展运算符

**核心作用：**把一个可迭代对象，比如数组、对象、字符串展开成单独的元素

~~~javascript
//数组拼接
const str1 = [1,2,3]
const str2 = [4,5,6]
const combineArr = [...str1, ...str2]
console.log(combineArr)

//复制数组（浅拷贝）
const originalArr = [7,8,9]
const copyArr = [...originalArr]
console.log(copyArr)  //修改copyArr不会影响originalArr

//向数组中添加元素
const baseArr = [10,11]
const newArr = [0, ...baseArr, 1]
console.log(newArr)

//对象合并
const obj1 = {
    name : '张',
    age: 20
}
const obj2 = {
    sex: '男',
    city: '北京'
}
const combineObj = {...obj1, ...obj2}
console.log(combineObj)

// 把数组展开成函数的多个参数
function sum(a, b, c){
    return a + b + c
}
const num = [1, 2, 3]
console.log(sum(...num))
~~~

拓展运算符后面是空对象，没有任何效果也不会报错。

```javascript
let a = {...{}, a: 1, b: 2}; a;  //{a: 1, b: 2}
```

拓展运算符后面是null或者undefined，没有效果也不会报错。

```javascript
let b = {...null, ...undefined, a: 1, b: 2}; b;  //{a: 1, b: 2}
```



#### 3.2剩余运算符

**核心作用：**把多个独立的元素收集成一个数组或对象

~~~javascript
// 收集不确定数量的参数成一个数组
function sumAll(...numbers) {
  // numbers 是一个数组，包含所有传入的参数
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3, 4)); // 10

// 结合固定参数使用
function printUser(name, age, ...hobbies) {
  console.log(`姓名：${name}，年龄：${age}`);
  console.log(`爱好：${hobbies.join("、")}`);
}
printUser("李四", 25, "看书", "打球", "听歌");
// 姓名：李四，年龄：25
// 爱好：看书、打球、听歌

// 数组解构
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4,5]

// 对象解构
const { name, ...otherInfo } = { name: "王五", age: 30, city: "上海" };
console.log(name); // 王五
console.log(otherInfo); // { age: 30, city: "上海" }
~~~

### 4.字符串

**字符串补全**

-  `padStart`：返回新的字符串，表示用参数字符串从头部（左侧）补全字符串
- `padEnd`：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。

~~~javascript
console.log("h".padStart(5,"o"));  // "ooooh"
console.log("h".padEnd(5,"o"));    // "hoooo"
console.log("h".padStart(5));      // "    h"
~~~

如果指定的长度小于或者等于原字符串的长度，则返回原字符串:

```javascript
console.log("hello".padStart(5,"A"));  // "hello"
```

如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串:

```javascript
console.log("hello".padEnd(10,",world!"));  // "hello,worl"
```

常用于补全位数：

```javascript
console.log("123".padStart(10,"0"));  // "0000000123"
```

### 5.数值

#### 5.1`ParseInt()`

`parseInt`将一个字符串或其他可转换类型解析并转换成整数。如果无法从输入值中提取有效整数，会返回`NaN`，传两个参数：`parseInt（string, radix）`

-  第一个参数`string`：需要被解析的字符串（如果不是字符串，会先被隐式转换为字符串）。
- **第二个参数 `radix`（可选，但强烈推荐必传）**：表示要解析的数字的**进制**，取值范围是 `2 ~ 36`（2 进制、8 进制、10 进制、16 进制等，36 进制包含 0-9 和 a-z）。

**（1）解析10进制整数（推荐显式指定 `radix=10`）**

~~~javascript
// 2. 解析带小数的字符串（会舍弃小数部分，不是四舍五入）
console.log(parseInt("123.456", 10)); // 输出：123（仅提取整数部分，直接丢弃 .456）

// 3. 解析开头是数字、后面带非数字的字符串（提取开头连续的有效数字）
console.log(parseInt("123abc456", 10)); // 输出：123（遇到非数字字符 "a" 停止解析）

// 4. 解析开头是非数字的字符串（无法提取有效整数，返回 NaN）
console.log(parseInt("abc123", 10)); // 输出：NaN
~~~

**（2）指定不同进制解析**，可用于转换不同进制的字符串为10进制整数

~~~javascript
// 1. radix=2（解析 2 进制字符串，仅 0/1 有效）
console.log(parseInt("1010", 2)); // 输出：10（2 进制 1010 对应 10 进制 10）

// 2. radix=8（解析 8 进制字符串，仅 0-7 有效）
console.log(parseInt("17", 8)); // 输出：15（8 进制 17 对应 10 进制 15）

// 3. radix=16（解析 16 进制字符串，0-9 + a-f/A-F 有效）
console.log(parseInt("ff", 16)); // 输出：255（16 进制 ff 对应 10 进制 255）
console.log(parseInt("FF", 16)); // 输出：255（16 进制不区分大小写）

// 4. radix=36（最大进制，包含 0-9 和 a-z）
console.log(parseInt("z", 36)); // 输出：35（z 是 36 进制中的第 35 位，对应 10 进制 35）
~~~

>  把非十进制数相互转换
>
> ~~~javascript
> //8进制 --> 16进制
> const octalStr = "77"  // 源：8 进制字符串
> const sourceRadix = 8 //源进制：8
> const targetRadix = 16; // 目标进制：16
> const decimalNum = parseInt(octalStr,sourceRadix)
> if(isNaN(decimalNum)){
>     console.log("无效的字符串")
> }else{
>     const hexStr = decimalNum.toString(targetRadix).toUpperCase()
> }
> ~~~
>
> 

#### 5.2 `Number()`

`Number()`是一个通用类型转换函数，能将任意合法 JavaScript 类型的值转换为数字类型（整数或浮点数）

~~~javascript
//成功转换

// 1. 纯整数字符串
console.log(Number("123")); // 输出：123（整数）

// 2. 纯小数字符串
console.log(Number("123.456")); // 输出：123.456（浮点数）

// 3. 带正负号的数字字符串
console.log(Number("+789")); // 输出：789
console.log(Number("-123.45")); // 输出：-123.45

// 4. 科学计数法字符串（parseInt() 无法正确解析，Number() 可以）
console.log(Number("1e3")); // 输出：1000（1*10^3）
console.log(Number("1.23e2")); // 输出：123（1.23*10^2）

// 5. 特殊空字符串/正负无穷/NaN 字符串（特殊场景）
console.log(Number("")); // 输出：0（空字符串特殊处理，转为 0）
console.log(Number("Infinity")); // 输出：Infinity（无穷大）
console.log(Number("-Infinity")); // 输出：-Infinity（负无穷大）
console.log(Number("NaN")); // 输出：NaN（非数字）

/*失败转换成NaN只要字符串中包含「非数字格式字符」（除了上述合法场景的符号、小数点、e/E），都会转换失败，这是和 parseInt() 最大的区别之一（parseInt() 会提取开头有效数字）。*/

// 1. 字符串中包含字母、汉字等非数字字符
console.log(Number("123abc")); // 输出：NaN（包含字母 "abc"）
console.log(Number("一百二十三")); // 输出：NaN（中文数字，不识别）

// 2. 字符串中包含多余的空格（首尾空格除外，会自动忽略）
console.log(Number("123 456")); // 输出：NaN（中间有空格，非法格式）
console.log(Number("  789  ")); // 输出：789（首尾空格会被忽略，合法）

// 3. 带千位分隔符的数字字符串
console.log(Number("1,234")); // 输出：NaN（包含逗号 ","，非法格式）

// 4. 仅包含符号、小数点的字符串
console.log(Number("+")); // 输出：NaN
console.log(Number(".")); // 输出：NaN
console.log(Number("123.")); // 输出：123（末尾小数点，特殊兼容，合法）
console.log(Number(".123")); // 输出：0.123（开头小数点，合法）
~~~

`Number()` 是通用类型转换函数，除了字符串，还能转换 `boolean`、`null`、`undefined`、对象等类型

~~~javascript
// 1. 转换布尔值（true → 1，false → 0，固定规则）
console.log(Number(true)); // 输出：1
console.log(Number(false)); // 输出：0

// 2. 转换 null（固定转为 0）
console.log(Number(null)); // 输出：0

// 3. 转换 undefined（固定转为 NaN）
console.log(Number(undefined)); // 输出：NaN

// 4. 转换数字类型（直接返回自身，无变化）
console.log(Number(123)); // 输出：123
console.log(Number(45.67)); // 输出：45.67

// 5. 转换对象（先调用对象的 valueOf() 方法，再转换结果；若失败，调用 toString() 再转换）
// 数组示例（简单数组）
console.log(Number([123])); // 输出：123（先 valueOf() 返数组自身，再 toString() 转为 "123"，最终转换为 123）
console.log(Number([123, 456])); // 输出：NaN（toString() 转为 "123,456"，包含逗号，转换失败）
// 普通对象示例
console.log(Number({})); // 输出：NaN（toString() 转为 "[object Object]"，转换失败）
~~~

### 6.数组

#### 6.1`Array.from()`

用于将类数组对象或可迭代对象转成真正的数组，还支持可选的映射函数

~~~javascript
const arr1 = Array.from(new Set([1,2,3,4,4]))
console.log(arr1)

<-- 转换可迭代对象 -->

//转换map
let map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')
console.log(Array.from(map)) //[ [ 'key1', 'value1' ], [ 'key2', 'value2' ] ]

//转换字符串
let str = 'ABC'
console.log(Array.from(str))  //[ 'A', 'B', 'C' ]
~~~

#### 6.2`Array.of()`

解决传统`new Array()`传入单个数字的歧义问题

- `new Array(n)`:创建一个长度为n的空数组（项为`undefined`）
- `Array.of(n)`:创建一个包含单个元素n的数组，传入多个参数时，会正常创建包含这个参数的数组

~~~javascript
console.log(new Array(3))  //[empty * 3](长度为3的空数组)
console.log(Array.of(3))  //[3](包含元素3的数组)

//传入多个参数时表现一直
console.log(new Array(1,2,3)) // [1, 2, 3]
console.log(Array.of(1,2,3)) // [1, 2, 3]
~~~

#### 6.3`Array.find()`

查找数组中符合条件的元素，若有多个符合条件的元素，则返回第一个

~~~javascript
let arr = Array.of(1, 2, 3, 4)
console.log(arr.find(i => i > 2))
~~~

#### 6.4`Array.findIndex()`

查找数组中符合条件的元素索引，若有多个符合条件的元素，则返回第一个元素索引。

~~~javascript
let arr = Array.of(1, 2, 1, 3);
// 参数1：回调函数
// 参数2(可选)：指定回调函数中的 this 值
console.log(arr.findIndex(item => item == 2)); // 1
~~~

#### 6.5`Array.fill()`

将一定范围索引的数组元素内容填充为单个指定的值。

~~~javascript
let arr = Array.of(1, 2, 3, 4);
// 参数1：用来填充的值
// 参数2：被填充的起始索引
// 参数3(可选)：被填充的结束索引，默认为数组末尾
console.log(arr.fill(0,1,2)); // [1, 0, 3, 4]
~~~

#### 6.6`Array.copyWithin()`

将一定范围索引的数组元素修改为此数组另一指定范围索引的元素

~~~javascript
// 参数1：被修改的起始索引
// 参数2：被用来覆盖的数据的起始索引
// 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
console.log([1, 2, 3, 4].copyWithin(0,2,4)); // [3, 4, 3, 4]
 
// 参数1为负数表示倒数
console.log([1, 2, 3, 4].copyWithin(-2, 0)); // [1, 2, 1, 2]
 
console.log([1, 2, ,4].copyWithin(0, 2, 4)); // [, 4, , 4]
~~~

#### 6.7 `Array.prototype.keys()` / `values()` / `entries()`

这三个方法都返回**可迭代对象（Iterator）**，用于遍历数组的「索引」「值」「键值对」，通常配合 `for...of` 循环使用。

~~~javascript
const arr = ['a', 'b', 'c'];

// 1. keys()：遍历索引
for (const index of arr.keys()) {
  console.log(index); // 0, 1, 2
}

// 2. values()：遍历值
for (const value of arr.values()) {
  console.log(value); // 'a', 'b', 'c'
}

// 3. entries()：遍历键值对（[索引, 值]）
for (const [index, value] of arr.entries()) {
  console.log(index, value); // 0 'a'、1 'b'、2 'c'
}
//不用for...of
const entries = arr.entries()
console.log(entries.next().value) //迭代器对象只有一个核心方法 next()
console.log(entries.next().value)
console.log(entries.next().value)

// 也可以用 Array.from() 转为数组查看结果
console.log(Array.from(arr.entries())); // [[0, 'a'], [1, 'b'], [2, 'c']]
~~~

#### 6.8嵌套数组转一维数组

##### 6.8.1`arr.flat([depth])`

- `depth`（可选）：扁平化的深度，默认 1（只拍平一层嵌套）
- 传入 `Infinity`：可以拍平任意深度的嵌套数组

~~~javascript
const arr1 = [1, [2, 3], [4, [5, 6]]];

// 默认拍平一层
const flat1 = arr1.flat();
console.log(flat1); // [1, 2, 3, 4, [5, 6]]

// 拍平两层
const flat2 = arr1.flat(2);
console.log(flat2); // [1, 2, 3, 4, 5, 6]

// 拍平任意深度（适合未知嵌套深度的场景）
const arr2 = [1, [[[[2]]]]];
const flatInfinity = arr2.flat(Infinity);
console.log(flatInfinity); // [1, 2]
~~~

##### 6.8.2`flatMap()`

先对数组中每个元素进行了处理，再对数组执行`flat()`方法。：`flatMap()` = `map()` + `flat(1)`，**只能拍平 1 层嵌套**，效率比分开调用更高，核心价值是「映射后自动扁平化一维」

~~~javascript
const users = [
  { id: 1, name: '张三', age: 18, isVip: true },
  { id: 2, name: '李四', age: 22, isVip: false },
  { id: 3, name: '王五', age: 25, isVip: true },
  { id: 4, name: '赵六', age: 30, isVip: true }
];
// 需求：获取所有 VIP 用户的姓名（先过滤 VIP，再映射姓名）
// 传统方式：filter() + map()（两次遍历）
const vipName1 = users.filter(u => u.isVip).map(u => u.name)

// flatMap() 实现（一次遍历，更高效）
const vipName1 = users.flatMap(u => {
    return u.isVip ? [u.name] : []
})
~~~

#### 6.9`filter()`

用于**筛选数组中符合指定条件的所有元素**，返回一个包含所有符合条件元素的**新数组**，**不会修改原数组**。

~~~javascript
const fruits = ['苹果', '香蕉', '苹果', '橙子', '香蕉', '苹果'];

// 需求：筛选出所有「第一次出现之后」的苹果（即排除索引 0 的苹果）
const extraApples = fruits.filter((fruit, index) => {
  return fruit === '苹果' && index !== 0;
});

console.log(extraApples); // 输出：['苹果', '苹果']
~~~

> 注：不只是 `filter()`，`map()`、`find()`、`forEach()` 等数组遍历方法的回调函数，都支持这个 `index` 参数（含义完全相同，都是当前元素的数组索引）。