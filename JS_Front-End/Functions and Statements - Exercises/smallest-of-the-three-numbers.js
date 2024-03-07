function smallestNum(a, b, c){
    if (a < b && a < c){
        return a
    } else if (b < a && b < c){
        return b
    } else if (c < a && c < b){
        return c
    } else if (a === b && b === c){
        return a
    }
}

console.log(smallestNum(2, 5, 3))
console.log(smallestNum(600, 342, 123))
console.log(smallestNum(25, 21, 4))
console.log(smallestNum(2, 2, 2))