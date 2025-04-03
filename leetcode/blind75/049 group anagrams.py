"""
https://leetcode.com/problems/group-anagrams/description/?envType=problem-list-v2&envId=oizxjoit

Given an array of strings strs, group the

together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

"""


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # initialize empty dictionary
        result = {}
        
        for word in strs:
            # create key by sorting characters
            key = ''.join(sorted(word))
            
            # check if key exists and handle accordingly
            if key not in result:
                result[key] = [word]
            else:
                result[key].append(word)
        
        return list(result.values())


def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    from collections import defaultdict, Counter
    result = defaultdict(list)
    
    for word in strs:
        # Counter creates a frequency map
        freq = Counter(word)
        # create key from sorted character counts
        key = ''.join(f"{c}{n}" for c, n in sorted(freq.items()))
        result[key].append(word)
    
    return list(result.values())