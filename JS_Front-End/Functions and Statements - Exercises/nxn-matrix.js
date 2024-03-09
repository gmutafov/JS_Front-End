function solve(n){
    const createRow = (num) => new Array(num).fill(num).join(' ')

    for (let i = 0; i < n; i++){
        console.log(createRow(n))
    }
}

solve(2)