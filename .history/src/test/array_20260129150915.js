let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);

console.log(Array.of(1,2,'3',true))

const arr1 = Array.from(new Set([1,2,3,4,4]))
console.log(arr1)

let map = new Map()
map.set('key1', 'value1')
map.set('key2', 'value2')
console.log(Array.from(map))

let str = 'ABC'
console.log(Array.from(str))

let arr = Array.of(1, 2, 3, 4)
console.log(arr.find(i => i > 2))

// 参数1：被修改的起始索引
// 参数2：被用来覆盖的数据的起始索引
// 参数3(可选)：被用来覆盖的数据的结束索引，默认为数组末尾
console.log([1, 2, 3, 4].copyWithin(0,2,4)); // [3, 4, 3, 4]
 
// 参数1为负数表示倒数
console.log([1, 2, 3, 4].copyWithin(-2, 0)); // [1, 2, 1, 2]
 
console.log([1, 2, ,4].copyWithin(0, 2, 4)); // [, 4, , 4]