function search() {
   const townListEl = document.getElementById('towns');
   const searchText = document.getElementById('searchText').value;
   const resultEl = document.getElementById('result')
   let matchCount = 0
    const townElements = Array.from(townListEl.children)
    for (const townEl of townElements) {
        if (townEl.textContent.toLowerCase().includes(searchText.toLowerCase())){
            townEl.style.textDecoration = 'underline';
            townEl.style.fontWeight = 'bold';
            matchCount++;
        }
    }
    resultEl.textContent = `${matchCount} matches found`
}
