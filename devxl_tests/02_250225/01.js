/*
Students have been assigned a series of math problems that have points associated with them. Given a sorted points array, minimize the number of problems a student needs to solve based on these criteria:
They must always solve the first problem, index i = 0
After solving the ith problem, they choose to solve either the next problem (i+1) or skip ahead and solve the (i+2) problem
Students must keep solving problems until the difference between the maximum and minimum points questions solved so far meets or exceeds a specified threshold
If students cannot meet or exceed the threshold, they must solve all the problems
Example:
If a student solves points[0] = 1, points[2] = 3 and points[3] = 5, then the difference between the minimum and maximum points solved is 5 - 1 = 4. This meets the threshold, so the student must solve at least 3 problems. Return 3.
If the threshold is 7, again it takes 3 problems solving problems 0, 2 and 4 where points[4] - points[0] = 8 - 1 = 7. This meets the threshold, so return 3.
If the threshold is greater than 7, then there is no way to meet the threshold. In that case, all problems need to be solved and the return value is 5.
Function Description:
Complete the function minNum in the editor.
Parameters:
int threshold: the minimum difference required
int points[n]: a sorted array of integers
Returns:
int: the minimum number of problems that must be solved
*/

function minNum(threshold, points) {
    // start with first problem
    let minPoints = points[0]
    let maxPoints = points[0]
    let i = 0
    let count = 1

    while (i < points.length - 1) {
        // check if we can meet threshold
        if (maxPoints - minPoints >= threshold) {
            return count
        }

        // decide whether to take i+1 or i+2
        if (i + 2 < points.length) {
            // can choose either next or skip one
            if (points[i + 2] - minPoints >= threshold) {
                // take i+2 if it meets threshold
                maxPoints = points[i + 2]
                i += 2
            } else {
                // otherwise take i+1
                maxPoints = points[i + 1]
                i += 1
            }
        } else if (i + 1 < points.length) {
            // can only take next one
            maxPoints = points[i + 1]
            i += 1
        }
        count++
    }

    // if we get here, we couldn't meet threshold
    return points.length
}

/* 
// optimal solution
function minNum(threshold, points) {
    const n = points.length
    
    // array to memoize results (though not currently used - could optimize further)
    // each index represents the minimum problems needed when starting from that index
    const dp = new Array(n).fill(Infinity)
    
    // helper function that checks if a set of chosen problem indices meets our threshold
    // returns true if max-min points difference >= threshold
    function meetsThreshold(indices) {
        if (indices.length === 0) return false
        const values = indices.map(i => points[i])
        return Math.max(...values) - Math.min(...values) >= threshold
    }
    
    // recursive function that tries all possible combinations
    // i: current index we're considering
    // used: array of indices we've used so far in this path
    function solve(i, used) {
        // if we've gone past array end, check if our path met threshold
        // return path length if valid, Infinity if not
        if (i >= n) {
            return meetsThreshold(used) ? used.length : Infinity
        }
        
        // if we've already met threshold, no need to add more problems
        // return current path length
        if (meetsThreshold(used)) {
            return used.length
        }
        
        // try both possible moves from current position:
        // 1. take next problem (i+1)
        // 2. skip one and take (i+2)
        // for each move, add current index i to our used list
        const takeNext = solve(i + 1, [...used, i])
        const skipOne = solve(i + 2, [...used, i])
        
        // return the better (smaller) of the two options
        return Math.min(takeNext, skipOne)
    }
    
    // start solving from index 1, with index 0 already used
    // (problem requires always using first problem)
    const result = solve(1, [0])
    
    // if no solution found (result is Infinity)
    // we must solve all problems
    return result === Infinity ? n : result
}

// note: this solution explores every possible combination of taking i+1 or i+2
// at each step. while correct, it could be optimized with proper memoization
// or a bottom-up dp approach. current time complexity is O(2^n) 
*/