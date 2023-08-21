const binarySearch = (arr, item) => {
    let low = 0, high = arr.length;
    while (low != high) {
        const middle = (low + high) / 2, middleElement = arr[middle];
        if (middleElement === item) return middle;
        else if (middleElement < item) low = middle + 1;
        else high = middle
    }
    return low
}

console.log(binarySearch([1,5,6,7,9,10], 10))