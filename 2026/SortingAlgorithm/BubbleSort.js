/*
Write a function bubbleSort(arr) that sorts an array in ascending order using Bubble Sort.
Optimize it so that if the array is already sorted, it stops early.
*/
function bubbleSort(arr) {
    let n = arr.length;
    let i = 0;

    while (i < n - 1) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // 🚀 stop early if already sorted edge-case
        if (!swapped) break;
        i++;
    }

    return arr;
}

// Test
console.log(bubbleSort([1, 2, 3, 4])); // sorted
console.log(bubbleSort([5, 3, 8, 4, 2])); // unsorted




//USING BOTH FOR LOOPS
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // track swaps
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // 🚀 stop if already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}