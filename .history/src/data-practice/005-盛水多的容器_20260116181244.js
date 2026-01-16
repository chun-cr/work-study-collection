function maxArea(height){
    let left = 0
    let right = height.length -1
    let maxArea = 0
    while(left < right){
        const h = Math.min(height[left],height[right])
        const w = right -left
        let area = h * w
        maxArea = Math.max(maxArea,area)

        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
}