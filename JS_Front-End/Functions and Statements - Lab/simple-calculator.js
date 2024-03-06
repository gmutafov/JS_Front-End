function solve(numOne, numTwo, operator){
    let result;
    switch (operator){
        case 'multiply':
            result = multiply(numOne, numTwo)
            break
        case 'divide':
            result = divide(numOne, numTwo)
            break
        case 'add':
            result = add(numOne, numTwo)
            break
        case 'subtract':
            result = subtract(numOne, numTwo)
            break
        }
        function multiply(a, b){return a * b}
        function divide(a, b){return a / b}
        function add(a, b){return a + b}
        function subtract(a, b){return a - b}
    return result
    }


console.log(solve(5 ,5, "multiply"))