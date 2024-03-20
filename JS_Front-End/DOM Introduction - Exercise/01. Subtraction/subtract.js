function subtract() {
    const firstNumberEl = document.getElementById('firstNumber')
    const secondNumberEl = document.getElementById('secondNumber')
    const resultEl = document.getElementById("result")
    const firstNumber = Number(firstNumberEl.value)
    const secondNumber = Number(secondNumberEl.value)
    resultEl.textContent = firstNumber - secondNumber;
}