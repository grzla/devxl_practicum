/*
https://leetcode.com/problems/coin-change/?envType=problem-list-v2&envId=oizxjoit

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

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

 

Constraints:

    1 <= coins.length <= 12
    1 <= coins[i] <= 231 - 1
    0 <= amount <= 104


*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp[i] will store the minimum number of coins needed to make amount i
    // initialize dp array with a value larger than any possible answer (amount + 1 or Infinity)
    // amount + 1 is a safe upper bound because if only coin 1 exists, we'd need 'amount' coins
    const dp = new Array(amount + 1).fill(amount + 1) // or Infinity

    // base case: 0 coins are needed to make amount 0
    dp[0] = 0

    // iterate through all amounts from 1 to the target amount
    for (let i = 1; i <= amount; i++) {
        // for each amount 'i', iterate through all available coin denominations
        for (const coin of coins) {
            // if the current coin value is less than or equal to the current amount 'i'
            if (coin <= i) {
                // check if using this 'coin' can lead to a smaller number of total coins
                // for the amount 'i'
                // dp[i - coin] is the minimum coins needed for the remaining amount (after using 'coin')
                // add 1 because we are using the current 'coin'
                // compare this with the current best count for amount 'i' (stored in dp[i])
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }

    // after filling the dp array, dp[amount] holds the minimum coins for the target amount
    // if dp[amount] is still the initial large value (amount + 1), it means the amount
    // cannot be made up by any combination of the coins, so return -1
    return dp[amount] > amount ? -1 : dp[amount]
};