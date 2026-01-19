function maxProfit(prices){
    let minPrice = prices[0]
    let maxProfit = 0
    for(let i = 1; i < prices.length; i++){
        const todayProfit = prices[i] - minPrice
        maxProfit = Math.max(maxProfit,todayProfit)
        minPrice = Math.min(minPrice,prices[i])
    }
    return maxProfit
}

console.log(maxProfit([7,1,5,3,6,4]));