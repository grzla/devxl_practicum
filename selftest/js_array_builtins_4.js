/*
Exercise 4: Filtering Even Numbers

Write a function that takes an array of numbers and returns a new array with only the even numbers.

Use the `filter` method to solve this problem.

Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]
*/

function filterEvenNumbers(arr) {
    // Write your code here
    return arr.filter(num => num % 2 === 0)
} 