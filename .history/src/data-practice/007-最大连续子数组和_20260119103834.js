function maxSubArray(nums){
    let currentSum = nums[0]
    let maxSum = nums[0]
    for(let i = 1 ; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum,maxSum)
    }
    return maxSum
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6

console.log(maxSubArray([-1,-2,-3,-4])); // -1

console.log(maxSubArray([1,2,3,4])); // 10

console.log(maxSubArray([5])); // 5

console.log(maxSubArray([5,-4,3,-2,1]));