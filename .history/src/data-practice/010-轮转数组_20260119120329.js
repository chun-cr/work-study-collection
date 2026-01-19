// 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

function rotate(nums, k){
    let n = nums.length
    k = k % n
    reverse(nums, 0, n)
    reverse(nums, 0, k - 1)
    reverse(nums, k , n)
}

function reverse(nums,start,end){
    while(start < end){
        [nums[start],nums[end]] = [nums[end],nums[start]]
        start++
        end--
    }
}