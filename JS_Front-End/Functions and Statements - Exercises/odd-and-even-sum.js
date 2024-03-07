function solve(nums){
    let evenSum = 0;
    let oddSum = 0;

    let numString = Math.abs(nums).toString();

    for (let i = 0; i < numString.length; i++) {
        let digit = parseInt(numString[i]);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

solve(3495892137259234)