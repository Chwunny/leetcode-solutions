// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

export const linearSolution = {
  maxProfit: (prices: number[]): number => {
    let l = 0;
    let r = 1;

    let maxP = 0;

    while (r < prices.length) {
      if (prices[l] < prices[r]) {
        maxP = maxP > prices[r] - prices[l] ? maxP : prices[r] - prices[l];
      } else {
        l = r;
      }
      r++;
    }
    return maxP;
  }, // 72ms, 52.3MB
  secondTry: function maxProfit(prices: number[]): number {
    let l = 0;
    let res = 0;

    for (let r = 1; r < prices.length; r++) {
      if (prices[l] > prices[r]) {
        l = r;
      }
      res = Math.max(res, prices[r] - prices[l]);
    }
    return res;
  }, // 120ms, 52.3MB
};
