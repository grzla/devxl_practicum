/*
https://leetcode.com/problems/combination-sum/?envType=problem-list-v2&envId=oizxjoit

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the

of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:

Input: candidates = [2], target = 1
Output: []

 

Constraints:

    1 <= candidates.length <= 30
    2 <= candidates[i] <= 40
    All elements of candidates are distinct.
    1 <= target <= 40

*/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // candidates are distinct
    // candidates may be summed any number of times
    // a combination is unique if the frequency of at least one of the candidates is different

    if (candidates.length === 0) return []

    candidates.sort((a,b) => (a-b))

    let result = []
    let current = []

    function backtrack(index, sum) {
        // found a valid combination
        if (sum === target) {
            // copy current and add to result
            result.push([...current])
            return
        }

        // stop if we've exceeded the target
        if (sum > target) {
            return
        }

        // try each candidate from current index
        for (let i=index; i<candidates.length; i++) {
            let num = candidates[i]

            // if this num would exceed target, so will remaining 
            if (sum + num > target) break

            // but since it won't exceed...
            // include this number in our combination
            current.push(num)

            // recursive call - we can reuse this number, so we pass i
            // will get called w/ same index until valid combo found or exceeds
            backtrack(i, sum + num)

            // backtrack by removing the number
            current.pop()
        }
    }

    backtrack(0,0)
    return result
};

// if we could only use each number once
var combinationSum = function(candidates, target) {
    if (candidates.length === 0) return []
    
    candidates.sort((a,b) => (a-b))
    
    let result = []
    let current = []
    
    function backtrack(index, sum) {
        if (sum === target) {
            result.push([...current])
            return
        }
        
        if (sum > target) {
            return
        }
        
        for (let i = index; i < candidates.length; i++) {
            let num = candidates[i]
            if (sum + num > target) break
            
            current.push(num)
            // key change: pass i + 1 instead of i
            // this means "start looking at the next number"
            backtrack(i + 1, sum + num)
            current.pop()
        }
    }
    
    backtrack(0, 0)
    return result
}

// slightly more performant version (no sort)
var combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(start, path, remaining){
        // Base Case
        if(remaining === 0){
            result.push([...path]);
            return;
        }
        
        for(let i=start;i<candidates.length;i++){
            // if the current number is bigger than what we need
            // skip it and try the next number
            if(remaining < candidates[i]){
                continue;
            }

            path.push(candidates[i]);

            backtrack(i, path, remaining - candidates[i]);

            path.pop();

        }


    }
    backtrack(0, [], target);
    return result;
};