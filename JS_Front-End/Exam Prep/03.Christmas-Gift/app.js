const baseUrl = 'http://localhost:3030/jsonstore/gifts';

const loadPresentsButton = document.getElementById('load-presents');
const addPresentButton = document.getElementById('add-present');
const editPresentButton = document.getElementById('edit-present');
const giftListElement = document.getElementById('gift-list');
const giftInputElement = document.getElementById('gift');
const forInputElement = document.getElementById('for');
const priceInputElement = document.getElementById('price');
const formContainerElement = document.getElementById('form');

loadPresentsButton.addEventListener('click', loadPresents);

addPresentButton.addEventListener('click', addPresent);

editPresentButton.addEventListener('click', editGift);

giftListElement.addEventListener('click', deleteGift);

function addPresent() {
    const present = getInputData();

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(present)
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            clearInputFields();

            return loadPresents();
        });
}

async function loadPresents() {
    const response = await fetch(baseUrl);
    const presentsResult = await response.json();

    giftListElement.innerHTML = '';

    const giftListFragment = document.createDocumentFragment();

    Object
        .values(presentsResult)
        .forEach(present => {
            giftListFragment.appendChild(createGiftSockElement(present));
        })

    giftListElement.appendChild(giftListFragment);
}

function createGiftSockElement(present) {
    const changeButtonElement = document.createElement('button');
    changeButtonElement.classList.add('change-btn');
    changeButtonElement.textContent = 'Change';
    changeButtonElement.addEventListener('click', (e) => changeGift(e, present));

    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.classList.add('delete-btn');
    deleteButtonElement.textContent = 'Delete';

    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.classList.add('buttons-container');
    buttonsDivElement.appendChild(changeButtonElement);
    buttonsDivElement.appendChild(deleteButtonElement);

    const giftPElement = document.createElement('p');
    giftPElement.textContent = present.gift;

    const forPElement = document.createElement('p');
    forPElement.textContent = present.for;

    const pricePElement = document.createElement('p');
    pricePElement.textContent = present.price;

    const contentDivElement = document.createElement('div');
    contentDivElement.classList.add('content');
    contentDivElement.appendChild(giftPElement);
    contentDivElement.appendChild(forPElement);
    contentDivElement.appendChild(pricePElement);

    const giftSockDivElement = document.createElement('div');
    giftSockDivElement.classList.add('gift-sock');
    giftSockDivElement.appendChild(contentDivElement);
    giftSockDivElement.appendChild(buttonsDivElement);

    giftSockDivElement.setAttribute('data-id', present._id);

    return giftSockDivElement;
}

function changeGift(e, present) {
    const giftElement = e.currentTarget.parentElement.parentElement; // Don't do this unless judge :)
    giftElement.remove();

    giftInputElement.value = present.gift;
    forInputElement.value = present.for;
    priceInputElement.value = present.price;

    formContainerElement.setAttribute('data-id', present._id);

    editPresentButton.removeAttribute('disabled');

    addPresentButton.setAttribute('disabled', 'disabled');
}

function editGift() {
    const present = getInputData();

    const giftId = formContainerElement.getAttribute('data-id');

    formContainerElement.removeAttribute('data-id');

    fetch(`${baseUrl}/${giftId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ _id: giftId, ...present }),
        // body: JSON.stringify(Object.assign({}, present, { _id: giftId })),
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

        // fetch presents
        loadPresents();

        // deactivate edit button
        editPresentButton.setAttribute('disabled', 'disabled');

        // activate add button
        addPresentButton.removeAttribute('disabled');

        // clear inputs
        clearInputFields();
        });
}

function deleteGift(e) {
    if (e.target.tagName !== 'BUTTON' || !e.target.classList.contains('delete-btn'))  {
        return;
    }

    const giftElement = e.target.parentElement.parentElement;

    const giftId = giftElement.getAttribute('data-id');

    fetch(`${baseUrl}/${giftId}`, {
        method: 'DELETE',
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            giftElement.remove();
        });
}

function clearInputFields() {
    giftInputElement.value = '';
    forInputElement.value = '';
    priceInputElement.value = '';
}

function getInputData() {
    return {
        gift: giftInputElement.value,
        for: forInputElement.value,
        price: priceInputElement.value
    }
};
