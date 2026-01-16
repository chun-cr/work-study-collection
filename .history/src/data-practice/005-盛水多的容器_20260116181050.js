function maxArea(height){
    let left = 0
    let right = height.length -1
    let area = 0
    while(left < right){
        const h = Math.min(height[left],height[right])
        const w = right -left
        area = h * w
    }
}