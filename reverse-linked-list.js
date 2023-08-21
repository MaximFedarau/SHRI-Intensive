const reverseLinkedList = (linkedList) => {
    let result = null;
    function solution(node) {
        if (!node) return;
        const t = {val: node.val, next: result}
        result = t;
        solution(node.next);
    }
    solution(linkedList)
    return result;
}

const data = {val: 1, next: {val: 2, next: {val: 3, next: {val: 4}}}}

console.log(reverseLinkedList(data));