window.addEventListener("load", solve);

function solve(){
    const addButtonEl = document.getElementById("add-btn")
    const expenseInputEl = document.getElementById("expense")
    const amountInputEl = document.getElementById("amount")
    const dateInputEl = document.getElementById("date")
    const previewListEl = document.getElementById('preview-list')
    const expenseListEl = document.getElementById("expenses-list")
    addButtonEl.addEventListener('click', () => {
        const expense = expenseInputEl.value
        const amount = amountInputEl.value
        const date = dateInputEl.value
        if (!expense || !amount || !date){
            return;
        }
        const expenseLiEl = createArticleEl(expense, amount, date)
        previewListEl.appendChild(expenseLiEl)
        addButtonEl.setAttribute("disabled", "disabled")


        expenseInputEl.value = ''
        amountInputEl.value = ''
        dateInputEl.value = ''

        const editButtonEl = expenseLiEl.querySelector('.btn.edit')
        const okButtonEl = expenseLiEl.querySelector('.btn.ok')
        editButtonEl.addEventListener('click', () => {
            const pElementsNodeList = expenseLiEl.querySelectorAll('article p')
            const pElements = Array.from(pElementsNodeList)
            const expenseType = pElements[0].textContent.substring(6)
            const amount = pElements[1].textContent.substring(8, pElements[1].textContent.length - 1)
            const date = pElements[2].textContent.substring(6);

            expenseInputEl.value = expenseType
            amountInputEl.value = amount
            dateInputEl.value = date

            expenseLiEl.remove()
            addButtonEl.removeAttribute("disabled")


            })
        okButtonEl.addEventListener('click', () => {
            const expenseButtonsElement = expenseLiEl.querySelector(".buttons")
            expenseButtonsElement.remove()
            expenseListEl.appendChild(expenseLiEl)

        })
    });
    function  createArticleEl(expense, amount, date){
        const pTypeElement = document.createElement("p")
        pTypeElement.textContent = `Type: ${expense}`;
        const pAmountElement = document.createElement("p")
        pAmountElement.textContent = `Type: ${amount}$`;
        const pDateElement = document.createElement("p")
        pDateElement.textContent = `Type: ${date}`;
        const articleEl = document.createElement("article")
        articleEl.appendChild(pTypeElement)
        articleEl.appendChild(pAmountElement)
        articleEl.appendChild(pDateElement)
        const editBtnEl = document.createElement("button")
        editBtnEl.classList.add("btn", "edit")
        editBtnEl.textContent = "edit";
        const okBtnEl = document.createElement("button")
        okBtnEl.classList.add("btn", "ok")
        okBtnEl.textContent = "ok";
        const buttonsDivEl = document.createElement("div")
        buttonsDivEl.classList.add("button");
        buttonsDivEl.appendChild(editBtnEl)
        buttonsDivEl.appendChild(okBtnEl)
        const liExpenseEl = document.createElement("li")
        liExpenseEl.classList.add("expense-itme")
        liExpenseEl.appendChild(articleEl)
        liExpenseEl.appendChild(buttonsDivEl)
        return liExpenseEl
    }
}