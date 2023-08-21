const tree = {val: 1, left: {val: 2, left: {val: 4}, right: {val: 5}}, right: {val: 3, left: {val: 6}, right: {val: 7}}}

const bfs = (tree) => {
    const nodes = [tree];
    const result = [];
    while (nodes.length > 0) {
        result.push(nodes[0].val);
        if (nodes[0].left) nodes.push(nodes[0].left);
        if (nodes[0].right) nodes.push(nodes[0].right)
        nodes.shift();
    }

    return result;
}

console.log(bfs(tree));



