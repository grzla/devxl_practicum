"""
https://leetcode.com/problems/design-add-and-search-words-data-structure/description/?envType=problem-list-v2&envId=oizxjoit

Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

    WordDictionary() Initializes the object.
    void addWord(word) Adds word to the data structure, it can be matched later.
    bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

 

Constraints:

    1 <= word.length <= 25
    word in addWord consists of lowercase English letters.
    word in search consist of '.' or lowercase English letters.
    There will be at most 2 dots in word for search queries.
    At most 104 calls will be made to addWord and search.


"""

class WordDictionary:

    def __init__(self):
        # initialize root of trie as empty dictionary
        self.root = {}

    def addWord(self, word: str) -> None:
        node = self.root
        # build trie path for word
        for char in word:
            node = node.setdefault(char, {})
        # mark end of word with special key
        node['$'] = True
        
    def search(self, word: str) -> bool:
        def searchFrom(node, substring):
            # base case - reached end of word
            if not substring:
                return '$' in node
            
            char, remaining = substring[0], substring[1:]
            
            # handle wildcard
            if char == '.':
                # try all possible paths
                return any(searchFrom(child, remaining) 
                         for child in node.values() 
                         if isinstance(child, dict))
            
            # handle regular character
            if char not in node:
                return False
            return searchFrom(node[char], remaining)
            
        return searchFrom(self.root, word)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)