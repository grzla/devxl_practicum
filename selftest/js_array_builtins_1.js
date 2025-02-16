/*
Exercise 1: Array Squaring

Write a function that takes an array of numbers and returns a new array with each number squared.

Use the `map` method to solve this problem.

Example:
Input: [1, 2, 3, 4, 5]
Output: [1, 4, 9, 16, 25]
*/

function squareArray(arr) {
    // Write your code here
    return arr.map(num => num ** 2)
} 