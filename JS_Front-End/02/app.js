window.addEventListener("load", solve);

function solve() {

    const checkListElement = document.getElementById('check-list')
    const addButtonElement = document.getElementById('add-btn')
    const nameInputElement = document.getElementById('name')
    const phoneInputElement = document.getElementById('phone')
    const categoryInputElement = document.getElementById('category')
    const contactListElement = document.getElementById('contact-list')
    addButtonElement.addEventListener('click', () => {
        const name = nameInputElement.value
        const phone = phoneInputElement.value
        const category = categoryInputElement.value
        const taskLiElement = createTaskLiElement(name, phone, category)
        checkListElement.appendChild(taskLiElement)
        clearInput()
    })

    function createTaskLiElement(name, phone, category){
        const editButtonElement = document.createElement('button')
            editButtonElement.classList.add('edit-btn')
            const saveButtonElement = document.createElement('button')
            saveButtonElement.classList.add('save-btn')

            const buttonDivElement = document.createElement('div')
            buttonDivElement.classList.add('buttons')
            buttonDivElement.appendChild(editButtonElement)
            buttonDivElement.appendChild(saveButtonElement)

            const namePElement = document.createElement('p')
            namePElement.textContent = `name:${name}`
            const phonePElement = document.createElement('p')
            phonePElement.textContent = `phone:${phone}`
            const categoryPElement = document.createElement('p')
            categoryPElement.textContent = `category:${category}`

            const articleElement = document.createElement('article')
            articleElement.appendChild(namePElement)
            articleElement.appendChild(phonePElement)
            articleElement.appendChild(categoryPElement)


            const taskLiElement = document.createElement('li')
            taskLiElement.appendChild(articleElement)
            taskLiElement.appendChild(buttonDivElement)
        editButtonElement.addEventListener('click', () =>{
                nameInputElement.value = name
                phoneInputElement.value = phone
                categoryInputElement.value = category

                taskLiElement.remove()
            })
        saveButtonElement.addEventListener('click', () =>{
            buttonDivElement.remove();

            const deleteButtonElement = document.createElement('button')
            deleteButtonElement.classList.add('del-btn');
            taskLiElement.appendChild(deleteButtonElement)
            contactListElement.appendChild(taskLiElement)
            deleteButtonElement.addEventListener('click', () => {
                taskLiElement.remove()
            })
        })

        return taskLiElement

  }


    function clearInput(){
        nameInputElement.value = ''
        phoneInputElement.value = ''
        categoryInputElement.value = ''
    }

}
  