function solve(string, a, b){
    let result = string
        .substring(a, a + b);
    
    console.log(result);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);