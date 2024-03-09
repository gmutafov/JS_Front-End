function solve(numbers) {
    function isPalindrome(number) {
        const forwardNumber = number.toString()
        const reversedDigits = number.toString().split('').reverse().join('')
        return forwardNumber === reversedDigits
    }

    numbers.forEach(number => console.log(isPalindrome(number)))
}
solve([123,323,421,121])

