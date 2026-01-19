function maxSubArray(nums){
    let currentSum = nums[0]
    let maxSum = nums[0]
    for(let i = 0 ; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum,maxSum)
    }
    return maxSum
}