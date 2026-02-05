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
        arr.concat(Array.isArray(curr) ? fla)
    })
}