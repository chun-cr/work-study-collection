const Arr = [1, 2, 3, 4, 4]
const newArr = Arr.reduce((acc, curr) => {
    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
},[])
console.log(newArr)