function addItem() {
    const inputEl = document.getElementById("newItemText")
    const itemListEl = document.getElementById('items')

    const newItemEl = document.createElement('li');
    newItemEl.textContent = inputEl.value;

    itemListEl.appendChild(newItemEl)

    inputEl.value = ''
}