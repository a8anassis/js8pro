// document.getElementById('helloTxt').innerHTML = "<strong>Hello Coding!</strong>"

// Get a reference to DOM
const h1DOM = document.getElementById('helloTxt')

// Aplly properties
h1DOM.innerHTML = h1DOM.innerHTML +  'Hello Coding!'
h1DOM.style.backgroundColor = "#ff0000"

// Create a Paragraph element
const pDOM = document.createElement('p')
pDOM.innerHTML = "I am a paragraph"
pDOM.classList.add('borderBlack')

document.body.appendChild(pDOM)