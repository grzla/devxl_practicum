/*
Exercise 2: Merge Objects

Write a function that takes two objects and returns a new object that combines the properties of both objects. If a property exists in both objects, the value from the second object should overwrite the value from the first object.

Example:
Input: { a: 1, b: 2 }, { b: 3, c: 4 }
Output: { a: 1, b: 3, c: 4 }
*/

function mergeObjects(obj1, obj2) {
    // Write your code here
    return { ...obj1, ...obj2 }
} 