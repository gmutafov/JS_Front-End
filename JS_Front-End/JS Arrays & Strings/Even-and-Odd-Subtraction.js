function solve(array){
    let evenSum=0;
    let oddSum=0
    let result=0
    for(let i=0; i<array.length; i++){
        array[i] = Number=(array[i])
        if (array[i] % 2 !== 0){
            oddSum += array[i]
        } else if (array[i] % 2 === 0){
            evenSum += array[i]
        }
    }
    result = evenSum - oddSum
    console.log(result);
}   

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);