function solve(num){
    let numText = num.toString();
    let currentDigit = numText[0];
    let isSame = true;
    let sum = Number(currentDigit)

    for (let i = 1; i < numText.length; i++){
        if (currentDigit !== numText[i]){
            isSame = false;
        }
        currentDigit = numText[i]
        sum += Number(currentDigit)
    }
    console.log(isSame);
    console.log(sum);
}


solve(2222222);
solve(1234);