function productExceptSelf(nums){
    const n = nums.length
    const result = new Array(n)
    for(let i = 1; i < n; i++){
        result[0] = 1
        result[i] = result[i - 1] * nums[i - 1]
    }
}