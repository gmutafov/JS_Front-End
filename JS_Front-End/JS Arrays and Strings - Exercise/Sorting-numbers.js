function solve(numbers){
    sortedNums = numbers.sort((a, b) => a - b);
    const result = [];
    while (sortedNums.length > 0){
        let firstNum = sortedNums.shift();
        let lastNum = sortedNums.pop();
        result.push(firstNum)
        if (lastNum){
            result.push(lastNum);
        }
    }   

    return result

}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);