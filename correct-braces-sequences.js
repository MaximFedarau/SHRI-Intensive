const correctBracesSequences = (sequence) => {
    const stack = [];
    for (let i = 0; i < sequence.length; ++i) {
        const brace = sequence[i];
        if (brace === "(" || brace === "[" || brace === "{") stack.push(brace);
        else {
            if (stack.length === 0) return false;
            const openBrace = stack.pop();
            if (openBrace === "(" && brace !== ")") return false;
            if (openBrace === "[" && brace !== "]") return false;
            if (openBrace === "{" && brace !== "}") return false;
        }
    }    
    return stack.length === 0;
}

console.log(correctBracesSequences("(){}[]"))
console.log(correctBracesSequences("(){}[}"))
console.log(correctBracesSequences(")"))
console.log(correctBracesSequences("("))
console.log(correctBracesSequences("()()()"))
console.log(correctBracesSequences(""))