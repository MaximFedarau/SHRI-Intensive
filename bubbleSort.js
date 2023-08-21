function bubbleSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length; ++j) {
            let currentItem = arr[j], nextItem = arr[j + 1];
            if (currentItem > nextItem) {
                arr[j + 1] = currentItem;
                arr[j] = nextItem;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4,3,1,5,42]))
