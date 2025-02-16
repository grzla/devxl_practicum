/*
Exercise 2: Array Sum

Write a function that takes an array of numbers and returns the sum of all the numbers.

Use the `reduce` method to solve this problem.

Example:
Input: [1, 2, 3, 4, 5]
Output: 15
*/

function sumArray(arr) {
    // Write your code here
    return arr.reduce((sum, num) => sum + num, 0)
} 