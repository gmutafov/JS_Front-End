function solve() {
    const textareaInputEl = document.querySelector('#exercise textarea:first-of-type')
    const textareaOutputEl = document.querySelector('#exercise textarea:last-of-type')
    const generateButtonEl = document.querySelector('#exercise button:first-of-type')
    const buyButtonEl = document.querySelector('#exercise button:last-of-type')
    const furnitureTbodyEl = document.querySelector('.table tbody')

    generateButtonEl.addEventListener('click', (e) =>{
        const inputData = JSON.parse(textareaInputEl.value);
        for (const furniture of inputData) {
            const imgEl = document.createElement('img')
            imgEl.src = furniture.img
            const imageTdEl = document.createElement('td')
            imageTdEl.appendChild(imgEl)

            const pEl = document.createElement('p')
            pEl.textContent = furniture.name;
            const nameTdEl = document.createElement('td')
            nameTdEl.appendChild(pEl)

            const priceEl = document.createElement('p')
            priceEl.textContent = furniture.price;
            const priceTdEl = document.createElement('td')
            priceTdEl.appendChild(priceEl)

            const decorEl = document.createElement('p')
            decorEl.textContent = furniture.decFactor;
            const decorTdEl = document.createElement('td')
            decorTdEl.appendChild(decorEl);

            const checkboxEl = document.createElement('input')
            checkboxEl.setAttribute('type', 'checkbox')
            const checkTdEl = document.createElement('td')
            checkTdEl.appendChild(checkboxEl)

            const furnitureTrEl = document.createElement('tr')
            furnitureTrEl.appendChild(imageTdEl)
            furnitureTrEl.appendChild(nameTdEl)
            furnitureTrEl.appendChild(priceTdEl)
            furnitureTrEl.appendChild(decorTdEl)
            furnitureTrEl.appendChild(checkTdEl)

            furnitureTbodyEl.appendChild(furnitureTrEl)
        }
    })

}