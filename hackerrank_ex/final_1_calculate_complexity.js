// implementation of quicksort with last element as pivot
function quickSortLast(arr) {
    if (arr.length <= 1) return arr
    
    const pivot = arr[arr.length - 1]
    const left = []
    const right = []
    
    // partition around last element
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    
    return [...quickSortLast(left), pivot, ...quickSortLast(right)]
}

// implementation of quicksort with random pivot
function quickSortRandom(arr) {
    if (arr.length <= 1) return arr
    
    const pivotIndex = Math.floor(Math.random() * arr.length)
    const pivot = arr[pivotIndex]
    const left = []
    const right = []
    
    // partition around random element
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    
    return [...quickSortRandom(left), pivot, ...quickSortRandom(right)]
}

// implementation of insertion sort
function insertionSort(arr) {
    const n = arr.length
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
