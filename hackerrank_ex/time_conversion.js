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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // get hours and period (AM/PM)
    let hours = s.slice(0, 2)
    const period = s.slice(8)
    
    // keep everything between hours and AM/PM the same
    const rest = s.slice(2, 8)
    
    if (period === 'PM' && hours !== '12') {
        // convert hours to number, add 12, convert back to string
        hours = (parseInt(hours) + 12).toString()
    } else if (period === 'AM' && hours === '12') {
        // 12AM edge case
        hours = '00'
    }
    
    return hours + rest
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
