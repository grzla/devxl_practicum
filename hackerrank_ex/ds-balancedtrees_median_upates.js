/* https://www.hackerrank.com/challenges/median/problem?isFullScreen=true */

function processData(input) {
    // store all numbers in a sorted array
    let numbers = []
    
    // process input lines
    let lines = input.trim().split('\n')
    let n = parseInt(lines[0])
    
    for (let i = 1; i <= n; i++) {
        // op - operation (a=add, r=remove)
        // num - the number to add or remove
        let [op, num] = lines[i].split(' ')
        num = parseInt(num)
        
        if (op === 'a') {
            // add number and sort array
            numbers.push(num)
            numbers.sort((a, b) => a - b)
            
            // calculate median
            let mid = Math.floor(numbers.length / 2)
            if (numbers.length % 2 === 0) {
                // even length - average of two middle numbers
                console.log((numbers[mid - 1] + numbers[mid]) / 2)
            } else {
                // odd length - middle number
                console.log(numbers[mid])
            }
        } else if (op === 'r') {
            // find index of number to remove
            let index = numbers.indexOf(num)
            
            if (index === -1) {
                console.log("Wrong!")
                continue
            }
            
            // remove number
            numbers.splice(index, 1)
            
            if (numbers.length === 0) {
                console.log("Wrong!")
                continue
            }
            
            // calculate median
            let mid = Math.floor(numbers.length / 2)
            if (numbers.length % 2 === 0) {
                console.log((numbers[mid - 1] + numbers[mid]) / 2)
            } else {
                console.log(numbers[mid])
            }
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
