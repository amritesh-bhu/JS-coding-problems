var maxProfit = function (prices) {
    let maxDiff = 0
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j <= prices.length - 1; j++) {
            if ((prices[j] - prices[i]) > maxDiff) {
                maxDiff = prices[j] - prices[i]
            }
        }
    }
    return maxDiff
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))