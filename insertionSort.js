function insertionSort(arr) {
    const n = arr.length;

    if (n === 1) return arr;
    for (let i = 1; i < n; ++i) {
        for (let j = i; j > 0; --j) {
            if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            else break;
        }
    }

    return arr;
}

console.log(insertionSort([4,3,1,5,42]))