export default function maxProfit(prices) {
  if (!Array.isArray(prices)) throw new Error("Parameter must be an Array");
  if (!prices.length) throw new Error("The array cannot be empty");

  let biggestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      const profit = prices[j] - prices[i];

      if (profit > biggestProfit && profit > 0) {
        biggestProfit = profit;
      }
      if (profit <= 0 && biggestProfit <= 0) {
        biggestProfit = -1;
      }
    }
  }

  return biggestProfit;
}
