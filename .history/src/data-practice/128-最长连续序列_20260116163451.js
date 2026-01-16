//给一个未排序的整数数组
const set = new Set([1,2,2,3])

console.log(set)

const numSet = new Set([10,20,30])
for(let num of numSet){
    console.log(num)
}

function longestConsecutive(nums){
    const numSet = new Set(nums)
    let maxLength = 0
    for(const num of numSet){
        if(!numSet.has(num - 1)){
            let currentNum = num
            let currentLength = 1

            while(numSet.has(currentNum + 1)){
                currentNum++
                currentLength++
            }
            maxLength = Math.max(maxLength,currentLength)
        }
    }
    return maxLength
}