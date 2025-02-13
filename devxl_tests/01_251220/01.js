/*
# 1. Closest Numbers

Given an array of distinct integers, determine the minimum absolute difference between any two elements. Print all pairs of elements with that difference, ensuring the smaller number appears first in each pair, and the pairs are sorted in ascending order.

Example: 

numbers = [6,2,4,10]

The minimum absolute difference is 2 and the pairs with that difference are (2,4) and (4,6).


2 4

4 6

Function Description:
Complete the function `closestNumbers` in the editor.

closestNumbers has the following parameter(s):
- `int numbers[n]`: an array of integers

Returns:
- NONE

Prints:
- distinct element pairs that share the minimum absolute difference, displayed in ascending order with each pair separated by one space on a single line

Constraints:
- 2 ≤ n ≤ 10^5
- -10^9 ≤ numbers[i] ≤ 10^9

► Input Format for Custom Testing

▼ Sample Case 0

Sample Input 0

STDIN       Function
-----       --------
4       →   numbers[] size n = 4
4       →   numbers = [4, 2, 1, 3]
2
1
3
*/

function closestNumbers(numbers) {
    // sort the array to make finding pairs easier
    numbers.sort((a, b) => a - b)
    
    // find minimum difference
    let minDiff = Infinity
    for (let i = 0; i < numbers.length - 1; i++) {
        const diff = Math.abs(numbers[i] - numbers[i + 1])
        minDiff = Math.min(minDiff, diff)
    }
    
    // collect and print pairs with minimum difference
    for (let i = 0; i < numbers.length - 1; i++) {
        const diff = Math.abs(numbers[i] - numbers[i + 1])
        if (diff === minDiff) {
            console.log(numbers[i], numbers[i + 1])
        }
    }
}
