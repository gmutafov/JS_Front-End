window.addEventListener("load", solve);

function solve(){
    const placeInputElement = document.getElementById('place')
    const actionInputElement = document.getElementById('action')
    const personInputElement = document.getElementById('person')
    const addButtonElement = document.getElementById('add-btn')
    const taskListElement = document.getElementById('task-list')
    const doneListElement = document.getElementById('done-list')
    addButtonElement.addEventListener('click', () => {
        const place = placeInputElement.value
        const action = actionInputElement.value
        const person = personInputElement.value
        const taskLiElement = createTaskElement(place, action, person)
        taskListElement.appendChild(taskLiElement)
        clearInputs()
    })
    function createTaskElement(place, action, person){
        const editButtonElement = document.createElement('button')
        editButtonElement.classList.add('edit')
        editButtonElement.textContent = 'Edit'
        const doneButtonElement = document.createElement('button')
        doneButtonElement.classList.add('done')
        doneButtonElement.textContent = "Done"

        const buttonDivElement = document.createElement('div')
        buttonDivElement.classList.add('buttons')
        buttonDivElement.appendChild(editButtonElement)
        buttonDivElement.appendChild(doneButtonElement)

        const placePElement = document.createElement('p')
        placePElement.textContent = `Place:${place}`
        const actionPElement = document.createElement('p')
        actionPElement.textContent = `Action:${action}`
        const personPElement = document.createElement('p')
        personPElement.textContent = `Person:${person}`

        const articleElement = document.createElement('article')
        articleElement.appendChild(placePElement)
        articleElement.appendChild(actionPElement)
        articleElement.appendChild(personPElement)


        const taskLiElement = document.createElement('li')
        taskLiElement.classList.add('clean-task')
        taskLiElement.appendChild(articleElement)
        taskLiElement.appendChild(buttonDivElement)

        editButtonElement.addEventListener('click', () =>{
            placeInputElement.value = place
            actionInputElement.value = action
            personInputElement.value = person

            taskLiElement.remove()
        })

        doneButtonElement.addEventListener('click', () =>{
            buttonDivElement.remove();

            const deleteButtonElement = document.createElement('button')
            deleteButtonElement.classList.add('delete');
            deleteButtonElement.textContent = 'Delete';
            taskLiElement.appendChild(deleteButtonElement)
            doneListElement.appendChild(taskLiElement)
            deleteButtonElement.addEventListener('click', () => {
                taskLiElement.remove()
            })
        })


        return taskLiElement



    }
    function clearInputs(){
        placeInputElement.value = ''
        actionInputElement.value = ''
        personInputElement.value = ''
    }

}