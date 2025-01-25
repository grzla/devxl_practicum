/* https://www.hackerrank.com/challenges/qheap1/problem?isFullScreen=true */
function processData(input) {
    // initialize heap as array
    const heap = []
    
    // helper functions for getting indices
    const getParentIndex = (i) => Math.floor((i - 1) / 2)
    const getLeftChildIndex = (i) => 2 * i + 1
    const getRightChildIndex = (i) => 2 * i + 2
    
    // helper to swap elements
    const swap = (i1, i2) => {
        const temp = heap[i1]
        heap[i1] = heap[i2]
        heap[i2] = temp
    }
    
    // move element up to maintain heap property
    const heapifyUp = (index) => {
        while (index > 0) {
            const parentIndex = getParentIndex(index)
            if (heap[parentIndex] > heap[index]) {
                swap(index, parentIndex)
                index = parentIndex
            } else {
                break
            }
        }
    }
    
    // move element down to maintain heap property
    const heapifyDown = (index) => {
        while (true) {
            let smallest = index
            const left = getLeftChildIndex(index)
            const right = getRightChildIndex(index)
            
            if (left < heap.length && heap[left] < heap[smallest]) {
                smallest = left
            }
            if (right < heap.length && heap[right] < heap[smallest]) {
                smallest = right
            }
            
            if (smallest === index) break
            
            swap(index, smallest)
            index = smallest
        }
    }
    
    // parse input and process queries
    const lines = input.trim().split('\n')
    const queries = parseInt(lines[0])
    
    for (let i = 1; i <= queries; i++) {
        const [type, value] = lines[i].split(' ').map(Number)
        
        if (type === 1) {
            // insert
            heap.push(value)
            heapifyUp(heap.length - 1)
        } 
        else if (type === 2) {
            // delete
            const index = heap.indexOf(value)
            if (index !== -1) {
                heap[index] = heap[heap.length - 1]
                heap.pop()
                if (heap.length > 0 && index < heap.length) {
                    heapifyDown(index)
                    heapifyUp(index)
                }
            }
        }
        else if (type === 3) {
            // print minimum
            console.log(heap[0])
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
