// 11 

function hashFunction(str) {
    // initialize hash value to 0
    let hash = 0
    
    // iterate through each character in string
    for(let i=0; i<str.length; i++) {
        // for each char, multiply its position+1 by its relative position in alphabet+1
        // example: for 'c' at position 0:
        // (0+1) * ('c'-'a'+1) = 1 * (3) = 3

/* this is cool. s is a string, so normally s[i] would be the character at i. but since hash is a numeric type, s[i] is the character code at i. furthermore, 'a' is 97. */
        hash += (i+1)*(str[i]-'a'+1)
    }
    
    // return final hash value
    return hash
}