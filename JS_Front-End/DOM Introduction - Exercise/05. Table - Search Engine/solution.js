function solve(){
    document.querySelector('#searchBtn').addEventListener('click', onClick)
    function onClick() {
        const trEls = document.querySelectorAll('table.container tbody tr');
        const searchFieldEl = document.getElementById('searchField');
        const searchText = searchFieldEl.value;
        searchFieldEl.value = ''
        for (const trElement of trEls) {
            const tdElements = trElement.querySelectorAll('td');
            let isSelected = false
            trElement.classList.remove('select');
            for (const tdElement of tdElements) {
                if (tdElement.textContent.includes(searchText)){
                    isSelected = true;
                    break;
                }
            }
            if (isSelected){
                trElement.classList.add('select');
            }
        }
    }
}