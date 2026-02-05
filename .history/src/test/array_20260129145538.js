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