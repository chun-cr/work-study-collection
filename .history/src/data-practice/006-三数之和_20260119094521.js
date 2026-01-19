function threeSum(nums){
    nums.sort((a, b) => a - b)
    let result = []
    let n = nums.length
    for(let i = 0; i < n - 2; i++){
        let left = i + 1
        let right = n - 1
        while(left < right){
            const sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                result.push[nums[i],nums[left],nums[right]]
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