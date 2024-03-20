function toggle() {
    const toggleButtonEl = document.querySelector('.head span.button')
    const extraInfoEl = document.getElementById('extra')

    const currButtonTest = toggleButtonEl.textContent;
    if (currButtonTest === 'More'){
         extraInfoEl.style.display = 'block';
         toggleButtonEl.textContent = 'Less'
    }else{
        extraInfoEl.style.display = 'none';
        toggleButtonEl.textContent = 'More'
    }


}