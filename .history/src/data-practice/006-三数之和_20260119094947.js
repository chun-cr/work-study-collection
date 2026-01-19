function threeSum(nums){
    nums.sort((a, b) => a - b)
    let result = []
    let n = nums.length
    for(let i = 0; i < n - 2; i++){
        let left = i + 1
        let right = n - 1
        if(nums[i] === nums[i + 1]) continue
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                result.push([nums[i],nums[left],nums[right]])
                while (left < right && nums[left] === nums[left + 1] ) left++
                while (left < right && nums[right] === nums[right - 1] ) right++
                left++
                right--
            }else if(sum > 0){
                right--
            }else{
                left++
            }
        }
    }
    return result
}

// 示例1
console.log(threeSum([-1,0,1,2,-1,-4]));
// [[-1,-1,2], [-1,0,1]]

// 示例2：全0
console.log(threeSum([0,0,0,0]));
// [[0,0,0]]

// 示例3：无解
console.log(threeSum([1,2,3,4]));
// []

// 示例4：多个重复
console.log(threeSum([-2,0,0,2,2]));
// [[-2,0,2]]