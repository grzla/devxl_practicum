/* 
https://www.hackerrank.com/challenges/funny-string/problem?isFullScreen=true
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    // convert string to array of ascii values
    // e.g., 'abc' becomes [97, 98, 99]
    let ascii = s.split('').map(char => char.charCodeAt(0))
    
    // create reversed copy of ascii array
    // using spread operator to create new array, then reverse it
    // e.g., [97, 98, 99] becomes [99, 98, 97]
    let reversed = [...ascii].reverse()
    
    // iterate through arrays starting from index 1
    // we need index 1 to length-1 to compare with previous values
    for (let i = 1; i < ascii.length; i++) {
        // calculate absolute difference between current and previous ascii values
        // e.g., for 'abc': |98-97| = 1, |99-98| = 1
        let forwardDiff = Math.abs(ascii[i] - ascii[i-1])
        
        // do the same for reversed array
        // e.g., for 'cba': |98-99| = 1, |97-98| = 1
        let reverseDiff = Math.abs(reversed[i] - reversed[i-1])
        
        // if differences don't match at any point, string is not funny
        // both arrays must have identical absolute differences to be funny
        if (forwardDiff !== reverseDiff) {
            return "Not Funny"
        }
    }
    
    // if we made it through the loop, all differences matched
    // therefore the string is funny
    return "Funny"

    // walkthrough:
    
    // for s = "acxz":
    // ascii = [97, 99, 120, 122]
    // reversed = [122, 120, 99, 97]

    // first iteration (i=1):
    // forwardDiff = |99-97| = 2
    // reverseDiff = |120-122| = 2
    // match ✓

    // second iteration (i=2):
    // forwardDiff = |120-99| = 21
    // reverseDiff = |99-120| = 21
    // match ✓

    // third iteration (i=3):
    // forwardDiff = |122-120| = 2
    // reverseDiff = |97-99| = 2
    // match ✓

    // all differences match, return "Funny"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
