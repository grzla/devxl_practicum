/*
Exercise 5: Grouping by Property

Write a function that takes an array of objects and a property name, and returns an object where the elements are grouped by the specified property.

Use the `reduce` method to solve this problem.

Example:
Input: 
[
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 },
  { name: 'David', age: 30 }
], 'age'

Output:
{
  '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
  '30': [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
}
*/

function groupByProperty(arr, prop) {
    // Write your code here
    return arr.reduce((grouped, obj) => {
        const key = obj[prop]
        if (!grouped[key]) {
            grouped[key] = []
        }
        grouped[key].push(obj)
        return grouped
    }, {})
} 