/**

322. Coin Change


You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var dp = [];
  return coin(coins, amount, dp); // initiate recursion
};

var coin = function (coins, amount, dp) { // helper recursive function
  if (dp[amount - 1] !== undefined) return dp[amount - 1]; // edge case 
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  var count = Number.MAX_SAFE_INTEGER; // starting dummy value
  var tmp = 0;

  for (var i = 0; i < coins.length; i++) {
    tmp = coin(coins, amount - coins[i], dp); // initiate recursion to find possible coin change possibilities
    if (tmp !== -1) count = Math.min(count, tmp + 1);
  }

  dp[amount - 1] = count === Number.MAX_SAFE_INTEGER ? -1 : count;

  return dp[amount - 1];
};
