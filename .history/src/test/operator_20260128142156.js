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

function sum(a, b, c){
    return a + b + c
}
const num = [1, 2, 3]
console.log(sum(...num))

function sumAll(...numbers){
    return numbers.reduce((total,num) => total + num, 0)
}