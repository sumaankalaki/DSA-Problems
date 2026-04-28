function maxProfit(prices) {
    let left = 0;   // buy day
    let right = 1;  // sell day
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
        } else {
            left = right; // move buy day
        }
        right++;
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([1,2,3,4,5])); // 4
console.log(maxProfit([7,6,4,3,1])); // 0           