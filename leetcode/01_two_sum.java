// Link: https://leetcode.com/problems/two-sum/

import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // create a hashmap to store number -> index pairs
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // iterate through the array once
        for (int i = 0; i < nums.length; i++) {
            // calculate the complement needed to reach target
            int complement = target - nums[i];
            
            // check if complement exists in our map
            if (map.containsKey(complement)) {
                // if found, return current index and complement's index
                return new int[] {map.get(complement), i};
            }
            
            // store current number and its index
            map.put(nums[i], i);
        }
        
        // return empty array if no solution found (per problem constraints, should never happen)
        return new int[] {};
    }
}