function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            let currentItem = arr[i], nextItem = arr[j];
            if (currentItem > nextItem) {
                arr[i] = nextItem;
                arr[j] = currentItem;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,3,1,5,42]))
