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
 * Complete the 'compressedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING message as parameter.
 */

function compressedString(message) {
    let compressed = '';
    let count = 1;
    for (let i = 1; i <= message.length; i++) {
        // if the current character is the same as the previous one, increment the count
        if (message[i] === message[i-1]) {
            count++;
        // if the current character is different from the previous one, append the current character and the count to the compressed string
        } else {
            compressed += (count > 1) ? message[i-1] + count : message[i-1];
            count = 1;
        }
    }
    
    return compressed;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const message = readLine();

    const result = compressedString(message);

    ws.write(result + '\n');

    ws.end();
}
