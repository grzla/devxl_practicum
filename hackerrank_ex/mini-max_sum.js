'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // sort array to make it easier to find min and max sums
    arr.sort((a, b) => a - b)
    
    // calculate min sum (first 4 numbers)
    let minSum = arr.slice(0, 4).reduce((sum, num) => sum + num, 0)
    
    // calculate max sum (last 4 numbers)
    let maxSum = arr.slice(-4).reduce((sum, num) => sum + num, 0)
    
    // print result with space between numbers
    console.log(minSum + ' ' + maxSum)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
