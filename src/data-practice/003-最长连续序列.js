//给一个未排序的整数数组
const set = new Set([1,2,2,3])

console.log(set)

const numSet = new Set([10,20,30])
for(let num of numSet){
    console.log(num)
}

// function longestConsecutive(nums){
//     const numSet = new Set(nums)
//     let maxLength = 0
//     for(const num of numSet){
//         if(!numSet.has(num - 1)){
//             let currentNum = num
//             let currentLength = 1

//             while(numSet.has(currentNum + 1)){
//                 currentNum++
//                 currentLength++
//             }
//             maxLength = Math.max(maxLength,currentLength)
//         }
//     }
//     return maxLength
// }
function longestConsecutive(nums){
    const numSet = new Set(nums)
    let maxLength = 0
    for(let num of numSet){
        if(!numSet.has(num-1)){
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

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 输出：4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 输出：9
console.log(longestConsecutive([1, 0, 1, 2]));