/*
https://leetcode.com/problems/course-schedule/description/?envType=problem-list-v2&envId=oizxjoit

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

 

Constraints:

    1 <= numCourses <= 2000
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.


*/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // build adjacency list
    let graph = new Map()
    
    // initialize graph with empty arrays for each course
    for (let i = 0; i < numCourses; i++) {
        graph.set(i, [])
    }
    
    // add edges to graph
    for (let [course, prereq] of prerequisites) {
        graph.get(course).push(prereq)
    }
    
    // track node states: 0=unvisited, 1=visiting, 2=visited
    let visited = new Array(numCourses).fill(0)
    
    // check each course for cycles
    for (let course = 0; course < numCourses; course++) {
        if (hasCycle(course, graph, visited)) {
            return false
        }
    }
    
    return true
}

function hasCycle(course, graph, visited) {
    // if we're currently visiting this node, we found a cycle
    if (visited[course] === 1) {
        return true
    }
    
    // if we've already fully visited this node, no cycle here
    if (visited[course] === 2) {
        return false
    }
    
    // mark as currently visiting
    visited[course] = 1
    
    // check all prerequisites
    for (let prereq of graph.get(course)) {
        if (hasCycle(prereq, graph, visited)) {
            return true
        }
    }
    
    // mark as fully visited
    visited[course] = 2
    return false
}