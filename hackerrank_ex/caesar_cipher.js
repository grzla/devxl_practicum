/* 
https://www.hackerrank.com/challenges/caesar-cipher-1/problem?isFullScreen=true
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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    k = k % 26
    
    return s.split('').map(char => {
        // handle uppercase letters
        if (/[A-Z]/.test(char)) {
            // char.charCodeAt(0) - 65    -> convert 'A'(65) to 0, 'B'(66) to 1, etc
            // + k                        -> shift by k positions
            // % 26                       -> wrap around if we go past 'Z'
            // + 65                       -> convert back to ASCII ('A' is 65)
            return String.fromCharCode(((char.charCodeAt(0) - 65 + k) % 26) + 65)
        }
        // handle lowercase letters
        if (/[a-z]/.test(char)) {
            // char.charCodeAt(0) - 97    -> convert 'a'(97) to 0, 'b'(98) to 1, etc
            // + k                        -> shift by k positions
            // % 26                       -> wrap around if we go past 'z'
            // + 97                       -> convert back to ASCII ('a' is 97)
            return String.fromCharCode(((char.charCodeAt(0) - 97 + k) % 26) + 97)
        }
        // leave non-alphabetic characters unchanged
        return char
    }).join('')
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
