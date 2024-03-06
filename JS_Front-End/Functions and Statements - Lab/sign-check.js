function solve(a,b,c) {
    let result = '';
    if (a < 0 && b > 0 && c > 0){
        result = 'Negative'
    } else if (a > 0 && b < 0 && c > 0){
        result = 'Negative'
    } else if (a > 0 && b > 0 && c < 0){
        result = 'Negative'
    } else if (a < 0 && b < 0 && c > 0){
        result = 'Positive'
    } else if (a > 0 && b < 0 && c < 0){
        result = 'Positive'
    } else if (a < 0 && b < 0 && c < 0){
        result = 'Negative'
    } else if (a > 0 && b > 0 && c > 0){
        result = 'Positive'
    }
    return result
}

console.log(solve(5, 12, -15))
console.log(solve(-6, -12, 14))
console.log(solve(-1, -2, -3))
console.log(solve(-5, 1, 1))