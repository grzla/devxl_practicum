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
 * Complete the 'decodeString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER numberOfRows
 *  2. STRING encodedString
 */

function decodeString(numberOfRows, encodedString) {
    let decoded = ''
    const rowLen = encodedString.length / numberOfRows
    
    for (let x=0; x<rowLen; x++) {
        decoded += encodedString[x] 
        for (let y=1; y<numberOfRows; y++) {
            decoded += encodedString[x + y*rowLen + y] ? encodedString[x + y*rowLen + y] : ''
        }
    }
    
    return decoded.replace(/_/g, ' ').trim()
}

/* 
//alternate implementation (ai)
function decodeString(numberOfRows, encodedString) {
    const numCols = Math.ceil(encodedString.length / numberOfRows);
    const matrix = Array(numberOfRows).fill().map(() => Array(numCols).fill(''));
    
    let row = 0, col = 0, index = 0;
    while (index < encodedString.length) {
        matrix[row][col] = encodedString[index];
        index++;
        
        row++;
        if (row === numberOfRows) {
            row = 0;
            col++;
        }
    }
    
    let decodedString = '';
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (matrix[i][j] !== '') {
                decodedString += matrix[i][j];
            }
        }
    }
    
    return decodedString;
} 
*/

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numberOfRows = parseInt(readLine().trim(), 10);

    const encodedString = readLine();

    const result = decodeString(numberOfRows, encodedString);

    ws.write(result + '\n');

    ws.end();
}
