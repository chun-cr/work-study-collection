function twoSum(nums, target){
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
    return []
}

const nums = [2, 7, 9, 11]
const target = 9

const result = twoSum(nums,target)
console.log(`满足条件的下标：${result}`)


const map = new Map([[2,0], [7,1],[5,6]])

for (const [key,value] of map){
    console.log(`键:${key},值:${value}`)
}

for (const key of map.key){
    console.log(`键：${key}`)
}
for (const value of map.value){
    console.log(`值：${value}`)
}
//forEach遍历
map.forEach((key,value)=>{
    console.log(`键:${key},值:${value}`)
})