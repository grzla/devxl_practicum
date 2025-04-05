/*
2. JavaScript: Throttle Function

Create a function named throttleFunction that takes another function as input and returns a new function that restricts the original
function to execute only once every 100 milliseconds. For instance, if the function is called 4 times within 100 milliseconds, it should
execute only the first call, ignore the next 3 calls, and wait until 100 milliseconds have passed to execute again.

Function Description
Complete the function throttleFunction in the editor with the following parameter(s):
  func: a function

Returns
  function: throttled version of the function

Constraints
- 1 ≤ n ≤ 10
- 1 ≤ a,b ≤ 100
- 0 ≤ t ≤ 200

Sample Case 0

Sample Input For Custom Testing
STDIN    Function
-----    --------
2        n = 2
2 3 140  a = 2, b = 3, t = 140
1 5 0    a = 1, b = 5, t = 0

Sample Output
5
6

Explanation
For the first test case, a = 5, b = 6, and t = 140 ms. As this is the first function call, the add function returns a value.
For the second test case, a = 1, b = 5, and t = 0 ms. 140 ms have passed, which is greater than 100 ms, so the function is called, and it returns 6.
*/

/**
 * @param {Function} func - The function to throttle
 * @return {Function} - Throttled function that executes at most once every 100ms
 */
function throttleFunction(func) {
  let lastExecutionTime = 0
  
  return function(...args) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecutionTime >= 100) {
      lastExecutionTime = currentTime
      return func(...args)
    }
  }
}
