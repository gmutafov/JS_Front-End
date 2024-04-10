const baseUrl = 'http://localhost:3030/jsonstore/gifts/'

const loadPresentsButton = document.getElementById('load-presents')
const giftListElement = document.getElementById('gift-list')
const addPresentButton = document.getElementById('add-present');
const editPresentButton = document.getElementById('edit-present')
const giftInputElement = document.getElementById('gift')
const forInputElement = document.getElementById('for')
const priceInputElement = document.getElementById('price')

loadPresentsButton.addEventListener('click', loadPresents)

async function loadPresents(){
    const response = await fetch(baseUrl)
    const presentsResult = await response.json()
    giftListElement.innerHTML = ''

    const giftListFragment = document.createDocumentFragment()
    Object
        .values(presentsResult)
        .forEach(present => {
            giftListFragment.appendChild(createGiftSockElement(present))
        });
    giftListElement.appendChild(giftListFragment)
}


addPresentButton.addEventListener('click', () =>{
    const gift = giftInputElement.value;
    const giftFor = forInputElement.value;
    const price = priceInputElement.value;

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            gift,
            for: giftFor,
            price
        })
    })
        .then(res => {
            if (!res.ok){
                return;
            }
            clearInputFields()
            return loadPresentsButton
        })
})
function createGiftSockElement({gift, for: giftFor, price}){
    const changeButtonElement = document.createElement('button')
    changeButtonElement.classList.add('change-btn')
    changeButtonElement.textContent = 'Change'
    const deleteButtonElement = document.createElement('button')
    deleteButtonElement.classList.add('delete-btn')
    deleteButtonElement.textContent = 'Delete'
    const buttonsDivElement = document.createElement('div')
    buttonsDivElement.classList.add('buttons-container')
    buttonsDivElement.appendChild(changeButtonElement)
    buttonsDivElement.appendChild(deleteButtonElement)
    const giftPElement = document.createElement('p')
    giftPElement.textContent = gift
    const forPElement = document.createElement('p')
    forPElement.textContent = giftFor
    const pricePElement = document.createElement('p')
    pricePElement.textContent = price

    const contentDivElement = document.createElement('div')
    contentDivElement.classList.add('content')
    contentDivElement.appendChild(giftPElement)
    contentDivElement.appendChild(forPElement)
    contentDivElement.appendChild(pricePElement)
    const giftSockDiv = document.createElement('div')
    giftSockDiv.classList.add('gift-sock')
    giftSockDiv.appendChild(contentDivElement)
    giftSockDiv.appendChild(buttonsDivElement)
    return giftSockDiv
}

function clearInputFields(){
    giftInputElement.value = ''
    forInputElement.value = ''
    priceInputElement.value = ''
}