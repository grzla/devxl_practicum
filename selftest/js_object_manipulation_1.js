/*
Exercise 1: Object Property Value

Write a function that takes an object and a key, and returns the value associated with the key. If the key is not found in the object, return null.

Example:
Input: { a: 1, b: 2, c: 3 }, 'b'
Output: 2

Input: { a: 1, b: 2, c: 3 }, 'd'
Output: null
*/

function getPropertyValue(obj, key) {
    // Write your code here
    return obj.hasOwnProperty(key) ? obj[key] : null
} 