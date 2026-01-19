/*function productExceptSelf(nums){
    const n = nums.length
    const result = new Array(n)  //定义结果数组
    result[0] = 1   //第一个元素没有前缀积
    for(let i = 1; i < n; i++){
        result[i] = result[i - 1] * nums[i - 1]
    }

    let suffix = 1
    for(let i = n - 1; i >= 0; i--){
        result[i] = result[i] * suffix
        suffix = suffix * nums[i]
    }
    return result
}*/

function productExceptSelf(nums){
    let n = nums.length
    let result = new Array(n)
    for
}

console.log(productExceptSelf([1,2,3,4])); // 输出: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3]));