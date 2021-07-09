const checkButton = document.getElementById('form-label')
const activeButton = document.getElementById('active-button')

checkButton.addEventListener('click', () => {
    activeButton.classList.toggle('section-2__header-form-label-active-button_right')
})