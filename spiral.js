const spiral = (size) => {
    let counter = 1;
    let row = 0; column = 0;
    const spiral = []
    for (let i = 0; i < size; ++i) {
        const row = []
        for (let j = 0; j < size; ++j) {
            row.push(0);
        }
        spiral.push(row);
    }

    let turn = 0;
    while (counter <= size * size) {
        while (row < (size - turn)) {
            spiral[column][row] = counter;
            counter += 1;
            row += 1; 
        }

        column += 1
        row -= 1

        while (column < (size - turn)) {
            spiral[column][row] = counter;
            counter += 1
            column += 1
        }

        column -= 1
        row -= 1

        while (row >= turn) {
            spiral[column][row] = counter;
            counter += 1
            row -= 1
        }

        row += 1
        column -= 1;
        turn += 1

        while (column >= turn) {
            spiral[column][row] = counter;
            counter += 1
            column -= 1
        }

        column += 1
        row += 1
    }

    return spiral
}

console.log(spiral(5))