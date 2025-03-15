/* https://leetcode.com/problems/longest-palindromic-substring/ 

Given a string s, return the longest

in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

 

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.

*/

char* longestPalindrome(char* s) {
    // get string length
    int len = strlen(s);
    
    // track start and maxLen to return the actual substring
    int start = 0;
    int maxLen = 1;  // initialize to 1 since single chars are palindromes
    
    // check each position as potential center
    for (int i = 0; i < len; i++) {
        // check even length palindromes (bb)
        int left = i;
        int right = i + 1;
        while (left >= 0 && right < len && s[left] == s[right]) {
            int currLen = right - left + 1;
            if (currLen > maxLen) {
                start = left;
                maxLen = currLen;
            }
            left--;
            right++;
        }
        
        // check odd length palindromes (aba)
        left = i - 1;
        right = i + 1;
        while (left >= 0 && right < len && s[left] == s[right]) {
            int currLen = right - left + 1;
            if (currLen > maxLen) {
                start = left;
                maxLen = currLen;
            }
            left--;
            right++;
        }
    }
    
    // allocate memory for result
    char* result = (char*)malloc((maxLen + 1) * sizeof(char));
    strncpy(result, s + start, maxLen);
    result[maxLen] = '\0';
    
    return result;
}