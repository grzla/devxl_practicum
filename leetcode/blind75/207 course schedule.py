"""
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


"""
from typing import List
from collections import defaultdict

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # build adjacency list using defaultdict
        graph = defaultdict(list)
        
        # add edges to graph
        for course, prereq in prerequisites:
            graph[course].append(prereq)
            
        # track node states: 0=unvisited, 1=visiting, 2=visited
        visited = [0] * numCourses
        
        def has_cycle(course: int) -> bool:
            # if we're currently visiting this node, we found a cycle
            if visited[course] == 1:
                return True
                
            # if we've already fully visited this node, no cycle here
            if visited[course] == 2:
                return False
                
            # mark as currently visiting
            visited[course] = 1
            
            # check all prerequisites
            if any(has_cycle(prereq) for prereq in graph[course]):
                return True
                
            # mark as fully visited
            visited[course] = 2
            return False
            
        # check each course for cycles
        return not any(has_cycle(course) for course in range(numCourses))




from typing import List
from collections import defaultdict

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = {k: [] for k in range(numCourses)}
        visited = defaultdict(int)

        def buildGraph():
            for a, b in prerequisites:
                graph[a].append(b)

        buildGraph()

        def explore(node):
            if visited[node] == 1:
                return True
            if visited[node] == 2:
                return False
            visited[node] = 1
            for each in graph[node]:
                if explore(each):
                    return True
            
            visited[node] = 2
            return False

        for each in graph:
            if visited[each] == 0:
                if explore(each):
                    return False

        return True
