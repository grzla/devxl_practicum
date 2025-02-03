// Link: https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    // create a map to store number -> index pairs
    const map = new Map()
    
    // iterate through the array once
    for (let i = 0; i < nums.length; i++) {
        // calculate the complement needed to reach target
        // [2, 7, 11, 15], target = 9
        // first pass: 9 - 2 = 7 -> store 2:7 in map
        // second pass: 9 - 7 = 2 -> 2 found in map, return [0, 1]
        const complement = target - nums[i]
        
        // check if complement exists in our map
        if (map.has(complement)) {
            // if found, return current index and complement's index
            return [map.get(complement), i]
        }
        
        // store current number and its index
        map.set(nums[i], i)
    }
    
    // return empty array if no solution found (per problem constraints, should never happen)
    return []
}

/* 
// alternate solution 

function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};

*/