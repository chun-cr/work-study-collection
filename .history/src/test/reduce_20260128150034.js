const Arr = [1, 2, 3, 4, 4]
const newArr = Arr.reduce((acc, curr) => {
    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
},[])
console.log(newArr)

const nestedArr = [1, [2, [3, 4], 5], 6];
function flattenArr(arr){
    return arr.reduce((acc,curr) => {
        return acc.concat(Array.isArray(curr) ? flattenArr(curr) : curr)
    },[])
}
console.log(flattenArr(nestedArr))

const numbers = [1, 2, 3, 4, 5, 6];
// 需求：筛选偶数，再乘以2
// 传统写法(遍历两次)
const result1 = numbers.filter(n => n % 2 === 0).map(n => n * 2)

//reduce写法（遍历一次）
const result2 = numbers.reduce((acc,curr) => {
    if(curr % 2 === 0){
        acc.push(curr * 2)
    }
    return acc
},[])
console.log(result1)
console.log(result2)