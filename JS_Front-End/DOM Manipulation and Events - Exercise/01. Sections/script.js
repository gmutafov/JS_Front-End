function create(words) {
   const contentEl = document.getElementById('content')
   const divElements = words
       .map(word => {
          const divEl = document.createElement('div')
          const pEl = document.createElement('p')
          pEl.style.display = 'none'
          pEl.textContent = word
          divEl.appendChild(pEl)
          divEl.addEventListener('click', () =>{
             pEl.style.display = 'block'
          })
          return divEl
       });

   divElements.forEach(divEl => contentEl.appendChild(divEl))
}