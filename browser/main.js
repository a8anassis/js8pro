// const h1DOM = document.getElementById('helloTxt').innerHTML = '<strong>Hello Coding</strong>'

const h1DOM = document.getElementById('helloTxt')
h1DOM.innerHTML += '<strong>Hello Coding</strong>'

// Styling
h1DOM.style.backgroundColor = '#ff0000'

const pDOM = document.createElement('p')
pDOM.innerHTML = "I am a paragraph"
pDOM.classList.add('borderBlack')

document.body.appendChild(pDOM)

