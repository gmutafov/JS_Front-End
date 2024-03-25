function addItem() {
    const inputEl = document.getElementById('newItemText')
    const itemsListEl = document.getElementById('items')
    const newInputEl = document.createElement('li');
    newInputEl.textContent = inputEl.value
    const deleteLinkEl = document.createElement('a')
    deleteLinkEl.textContent = '[Delete]'
    deleteLinkEl.href = '#'

    deleteLinkEl.addEventListener('click', () => {
        newInputEl.remove();
    })

    newInputEl.appendChild(deleteLinkEl)


    itemsListEl.appendChild(newInputEl)
    inputEl.value = ''


}