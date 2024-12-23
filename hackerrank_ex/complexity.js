// bubble sort - O(n²)
function bubbleSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

// selection sort - O(n²)
function selectionSort(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let minIdx = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
        }
    }
    return arr
}

// insertion sort - O(n²)
function insertionSort(arr) {
    let n = arr.length
    for (let i = 1; i < n; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}

// merge sort - O(n log n)
function mergeSort(arr) {
    if (arr.length <= 1) return arr
    
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    
    return merge(left, right)
}

function merge(left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// quick sort - O(n log n) average, O(n²) worst case
function quickSort(arr) {
    if (arr.length <= 1) return arr
    
    const pivot = arr[Math.floor(arr.length / 2)]
    const left = arr.filter((x, idx) => x < pivot)
    const middle = arr.filter(x => x === pivot)
    const right = arr.filter((x, idx) => x > pivot)
    
    return [...quickSort(left), ...middle, ...quickSort(right)]
}

// heap sort - O(n log n)
function heapSort(arr) {
    let n = arr.length

    // build heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }
    
    // extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }
    
    return arr
}

function heapify(arr, n, i) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }
    
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest)
    }
}

// usage example:
const arr = [64, 34, 25, 12, 22, 11, 90]
console.log(bubbleSort([...arr]))     // creates a copy to sort
console.log(selectionSort([...arr]))
console.log(insertionSort([...arr]))
console.log(mergeSort([...arr]))
console.log(quickSort([...arr]))
console.log(heapSort([...arr]))
