/*
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


*/

var WordDictionary = function() {
    // initialize root node of trie
    this.root = {
        children: {},
        isEndOfWord: false
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let current = this.root
    for (let letter of word) {
        if (!current.children[letter]) {
            current.children[letter] = {
                children: {},
                isEndOfWord: false
            }
        }
        current = current.children[letter]
    }
    current.isEndOfWord = true 
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
    const searchFrom = (node, substring) => {
        if (substring.length === 0) {
            return node.isEndOfWord 
        }
        
        let firstChar = substring[0]
        let remainingChars = substring.slice(1)

        // handle wildcard
        if (firstChar === '.') {
            for (let char in node.children) {
                if (searchFrom(node.children[char], remainingChars)) {
                    return true
                }
            }
            return false 
        }

        // regular (non-wildcard) character 
        if (!node.children[firstChar]) {
            return false 
        }
        
        return searchFrom(node.children[firstChar], remainingChars)
    }
    return searchFrom(this.root, word) 
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */