function solve(arr, n){
    for (let i = 0; i < n; i++){
        let rotatedNums = [];
        let firstNum = arr[0];
        for (let j = 1; j < arr.length; j++){
            rotatedNums[j - 1] = arr[j];
        }
        rotatedNums[rotatedNums.length] = firstNum;
        arr = rotatedNums
    }
    console.log(`${arr.join(' ')}`);
}


solve([32, 21, 61, 1], 4);