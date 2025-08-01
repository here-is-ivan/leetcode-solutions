// Description: You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Time complexity: O(n)
// Space complexity: O(1)

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let smallestStockIndex = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < prices[smallestStockIndex]) {
      smallestStockIndex = i;
      continue;
    }

    maxProfit = Math.max(maxProfit, prices[i] - prices[smallestStockIndex]);
  }

  return maxProfit;
}
