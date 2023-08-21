const primeNumber = (limit) => {
    const result = new Set();
    for (let i = 2; i <= limit; ++i) {
        result.add(i);
    }

    let i = 2;
    while (1) {
        if (i * i > limit) break;

        if (!result.has(i)) {
            i += 1;
            continue;
        }

        let current = i;
        while (current <= limit) {
            if (current !== i)result.delete(current);
            current += i;
        }

        i += 1
    }

    return Array.from(result);
}

console.log(primeNumber(30))