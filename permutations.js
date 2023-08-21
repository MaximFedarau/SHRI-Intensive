const permutations = (length) => {
    const result = [];
    function solution(currentPermutation) {
        if (currentPermutation.length === length) {
            result.push(currentPermutation);
            return;
        }
        for (let i = 1; i <= length; ++i) {
            if (currentPermutation.indexOf(String(i)) === -1) solution(currentPermutation + String(i))

        }
    }
    solution("");
    return result;
}

console.log(permutations(3))