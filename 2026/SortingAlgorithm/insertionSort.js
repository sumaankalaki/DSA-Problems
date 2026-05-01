function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;

        // shift elements greater than key
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }

        // place key at correct position
        arr[j + 1] = temp;
    }

    return arr;
}

// Test
console.log(insertionSort([5, 3, 8, 4, 2]));
console.log(insertionSort([1, 2, 3, 4])); // already sorted