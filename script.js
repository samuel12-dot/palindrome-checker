//Select relevant DOM element
const button = document.querySelector('#btn')
const inputText = document.querySelector('#input-text')
const result = document.querySelector('#result')

//Add event listener to the button
button.addEventListener('click', () => {
    //Get the input value and trim any whitespacess
    const text = inputText.value.trim()

    //Check if the input is empty
    if(text.length === 0) {
        alert('Input cannot be empty')
        return
    }

    //Remove any non-alphanumeric characters and convert to lowercase
    const cleanText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    const isPalindrome = cleanText === cleanText.split('').reverse().join('')

    const message = isPalindrome ? `<span>Yes, it is a palindrome</span>` :     `<span>No, it is not a palindrome</span>`


    result.innerHTML = message

    result.classList.remove('error', 'success')
    setTimeout(() => {
        result.classList.add(isPalindrome ? 'success' : 'error')
    }, 10)
})