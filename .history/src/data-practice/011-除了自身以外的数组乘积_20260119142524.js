function productExceptSelf(nums){
    const n = nums.length
    const result = new Array(n)  //定义前缀积数组
    result[0] = 1   //第一个元素没有前缀积
    for(let i = 1; i < n; i++){
        result[i] = result[i - 1] * nums[i - 1]
    }

    let 
}