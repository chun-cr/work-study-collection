function productExceptSelf(nums){
    let prefix = 1
    let suffix = 1
    for(let i = 0;i < nums.length; i++){
        prefix *= nums[i-1]
        suffix *= nums[i+1]
    }
}