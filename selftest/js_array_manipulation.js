/*
Array Manipulation

Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each of the array elements between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

Example:
n = 10
queries = [[1,5,3],[4,8,7],[6,9,1]]

Queries are interpreted as follows:
    a b k
    1 5 3
    4 8 7
    6 9 1

Add the values of k between the indices a and b inclusive:

index->	 1 2 3  4  5 6 7 8 9 10
	[0,0,0, 0, 0,0,0,0,0, 0]
	[3,3,3, 3, 3,0,0,0,0, 0]
	[3,3,3,10,10,7,7,7,0, 0]
	[3,3,3,10,10,8,8,8,1, 0]

The largest value is 10 after all operations are performed.

Function Description:
Complete the function arrayManipulation in the editor below.

arrayManipulation has the following parameters:
- int n: the number of elements in the array
- int queries[q][3]: a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

Returns:
- int: the maximum value in the resultant array

Constraints:
- 3 ≤ n ≤ 10^7
- 1 ≤ q ≤ 2 * 10^5 
- 1 ≤ a ≤ b ≤ n
- 0 ≤ k ≤ 10^9

Sample Input:
5 3
1 2 100
2 5 100
3 4 100

Sample Output:
200
*/

function arrayManipulation(n, queries) {
    // Write your code here
    
    // create array of size n+1 to store differences
    let arr = new Array(n + 1).fill(0)
    
    // iterate through queries and update differences
    for (let [a, b, k] of queries) {
        arr[a-1] += k
        arr[b] -= k
    }
    
    // track maximum value and current running sum 
    let maxValue = 0, currentSum = 0
    
    // calculate prefix sums and track maximum
    for (let i = 0; i < n; i++) {
        currentSum += arr[i]
        maxValue = Math.max(maxValue, currentSum)
    }
    
    return maxValue
} 