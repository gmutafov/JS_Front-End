function solve(a, b, c){
    const sum = (a, b) => a + b
    const subtract = (a, c) => a - c
    const result = subtract(sum(a, b), c)
    return result
}

console.log(solve(23, 6, 10))