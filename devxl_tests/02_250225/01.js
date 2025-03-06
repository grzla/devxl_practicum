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

    let minPoints = points[0]
    let maxPoints = points[0]
    
    let i = 0
    let count = 1
    
    while (i < points.length) {
        if (maxPoints - minPoints >= threshold) {
            return count
        }
        
        // always choose i+2 if it's available - that is the fastest way to accumulate points.
        // only choose i + 1 if i+2 is not available
        if (i + 2 < points.length) {
            maxPoints = points[i+2]
            i += 2
        } else {
            maxPoints = points[i+1]
            i += 1
        }
        
        count++
    }
    return points.length
}