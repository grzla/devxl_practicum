/* https://www.hackerrank.com/challenges/simple-text-editor/problem?isFullScreen=true */
function processData(input) {
    // split input into lines
    const lines = input.trim().split('\n')
    // get number of operations from first line
    const numOps = parseInt(lines[0])
    
    // initialize empty string for editor content
    let content = ''
    // stack to keep track of previous states
    const undoStack = []
    
    // process each operation starting from line 1
    for (let i = 1; i <= numOps; i++) {
        const [op, str] = lines[i].split(' ')
        
        switch (op) {
            case '1': // append operation
                // save current state before modification
                undoStack.push(content)
                // append the string parameter to current content
                content += str
                break
                
            case '2': // delete operation
                // save current state before modification
                undoStack.push(content)
                // delete last k characters where k is the parameter
                const k = parseInt(str)
                content = content.slice(0, -k)
                break
                
            case '3': // print operation
                // print character at 1-based index position
                const pos = parseInt(str) - 1
                console.log(content[pos])
                break
                
            case '4': // undo operation
                // restore the last saved state
                content = undoStack.pop()
                break
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
