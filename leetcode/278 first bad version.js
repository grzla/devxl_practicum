/*
https://leetcode.com/problems/first-bad-version/description/

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

 

Constraints:

    1 <= bad <= n <= 231 - 1


*/

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n
        while (left < right) {
            var mid = Math.floor((left+right)/2)
            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    };
};

// Pattern 1: Finding a boundary (like first bad version)
while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (condition) {
        right = mid     // notice we don't do mid-1
    } else {
        left = mid + 1
    }
}
return left  // left and right converge to the answer

// Pattern 2: Finding a specific target
while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (array[mid] === target) {
        return mid      // found exact match
    } else if (array[mid] < target) {
        left = mid + 1
    } else {
        right = mid - 1
    }
}
return -1    // target not found