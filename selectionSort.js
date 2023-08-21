function selectionSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let minimumIndex = i;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[minimumIndex]) minimumIndex = j;
        }
        [arr[i], arr[minimumIndex]] = [arr[minimumIndex], arr[i]]
    }
    return arr;
}

console.log(selectionSort([4,3,1,5,42]))