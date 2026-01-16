function moveZeroes(nums){
    let j = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            [nums[j],nums[i]] = [nums[i],nums[j]]
            j++
        }
    }
    return nums
}
console.log(moveZeroes([2,4,0,5,8,9,0,12,0]))