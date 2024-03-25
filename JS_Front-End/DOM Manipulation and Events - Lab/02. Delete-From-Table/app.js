function deleteByEmail() {
    const inputEmailEl = document.querySelector('input[name=email]')
    const resultEl = document.getElementById('result')
    const rowDataEls = document.querySelectorAll('table#customers tbody tr')

    const trEl = Array
        .from(rowDataEls)
        .find(rowElement => rowElement.children[1].textContent.includes(inputEmailEl.value))



    if (trEl) {
        trEl.remove();
        resultEl.textContent = 'Deleted.';
    } else{
        resultEl.textContent = 'Not found.';
    }

    inputEmailEl.value = ''
}
