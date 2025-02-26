/*
Compliance Priorities
A system used by a compliance department contains a queue of all current compliance issues along with their priorities. The priorities range from 1 to 99. Create an algorithm that will reassign priorities so that the value of the maximum priority assigned is minimized, keeping the relative priorities between all issues the same.
Example
priorities = [1, 4, 8, 4]
There are three priority levels: 1, 4 and 8. The array elements are reassigned to priorities [1, 2, 3, 2]. Their relative priorities are maintained while the value of the maximum priority is minimized.
Given the priorities of the issues, return a list that contains the reassigned priority values without reordering.
Function Description
Complete the reassignedPriorities function in the editor below. It must return an integer array that represents the reassigned priorities of each element in the original order.
reassignedPriorities has the following parameter(s):
int priorities[n]: an array of integers that represents current priorities
Constraints
1 ≤ n ≤ 10⁵
1 ≤ priorities[i] ≤ 99
*/
function reassignedPriorities(priorities) {
    // create a set to get unique values, then convert back to array and sort ascending
    // example: [1, 4, 8, 4] -> Set{1, 4, 8} -> [1, 4, 8]
    let uniquePriorities = [...new Set(priorities)].sort((a, b) => a - b)
    
    // create an object to store the mapping between original and new priorities
    // each unique priority will map to its position in the sorted array (1-based)
    // example: {1: 1, 4: 2, 8: 3}
    let priorityMap = {}
    uniquePriorities.forEach((priority, index) => {
        // index + 1 ensures priorities start at 1 instead of 0
        priorityMap[priority] = index + 1
    })
    
    // transform each priority in the original array to its new minimal value
    // while maintaining the relative order
    // example: [1, 4, 8, 4] -> [1, 2, 3, 2]
    return priorities.map(priority => priorityMap[priority])
}