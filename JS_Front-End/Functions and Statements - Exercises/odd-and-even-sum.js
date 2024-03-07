function solve(nums){
    let evenSum;
    let oddSum;
    for (let num of nums){
        if (num % 2 === 0){
            evenSum += num
        } else{
            oddSum += num
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(3495892137259234)