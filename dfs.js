console.log((function () {
    const tree = {val: 1, left: {val: 2, left: {val: 4}, right: {val: 5}}, right: {val: 3, left: {val: 6}, right: {val: 7}}}

    const result = [];
    function dfs(node) {
        result.push(node.val);
        if (node.left) dfs(node.left);
        if (node.right) dfs(node.right);
    }

    dfs(tree)
    return result;
})());