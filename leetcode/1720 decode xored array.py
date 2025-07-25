""" 
https://leetcode.com/problems/decode-xored-array/description/

There is a hidden integer array arr that consists of n non-negative integers.

It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

Return the original array arr. It can be proved that the answer exists and is unique.

 

Example 1:

Input: encoded = [1,2,3], first = 1
Output: [1,0,2,1]
Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

Example 2:

Input: encoded = [6,2,7,3], first = 4
Output: [4,2,0,7,4]

 

Constraints:

    2 <= n <= 104
    encoded.length == n - 1
    0 <= encoded[i] <= 105
    0 <= first <= 105


"""

class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        # start with the first element
        result = [first]
        
        # for each encoded value, compute the next element using XOR
        # if encoded[i] = arr[i] XOR arr[i+1], then arr[i+1] = encoded[i] XOR arr[i]
        for encoded_val in encoded:
            next_element = encoded_val ^ result[-1]
            result.append(next_element)
        
        return result 