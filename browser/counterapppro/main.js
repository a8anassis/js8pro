const DEFAULT = 0
let counter = DEFAULT   // State - Data
const MAX = 10
const MIN = -10

window.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#btnDecr").addEventListener('click', () => onDecreaseClicked())
    document.querySelector("#btnReset").addEventListener('click', () => onResetClicked())
    document.querySelector("#btnIncr").addEventListener('click', () => onIncreaseClicked())
    render()
})


// Controllers
function onDecreaseClicked() {
    decreaseCounter()
    if (counter === MIN) {
        console.log('Error. Counter must be greater equal than MIN')
        document.querySelector('#message').textContent = 'Counter has reached its minimum value'
    }
}

function onResetClicked() {
    if (counter === DEFAULT) {
        console.log('Counter is already reset')
        document.querySelector('#message').textContent = 'Counter already reset'
        return
    }
    resetCounter()
    
}

function onIncreaseClicked() {
    increaseCounter()
    if (counter === MAX) {
        console.log('Error. Counter must be lower equal than MAX')
        document.querySelector('#message').textContent = 'Counter has reached its maximum value'
        // return
    }
    
}


// Model
function decreaseCounter() {
    counter--;
    render()
}

function resetCounter() {
    counter = DEFAULT
    render()
}

function increaseCounter() {
    counter++
    render()
}

// View
function render() {
    document.querySelector('#message').textContent = ''
    const counterDOM = document.querySelector('#counter')
    counterDOM.textContent = counter
    document.querySelector('#btnDecr').disabled = counter === MIN
    document.querySelector('#btnIncr').disabled = counter === MAX
    styleCounter(counterDOM)
}


// function styleCounter(counterDOM) {
//     counterDOM.classList.toggle('color-green', counter > 0)
//     counterDOM.classList.toggle('color-red', counter < 0)
//     counterDOM.classList.toggle('color-black', counter === 0)
// }

function styleCounter(counterDOM) {
    counterDOM.classList.remove('color-green', 'color-red', 'color-black')
    counterDOM.classList.add(counter > 0 ? 'color-green' : counter < 0 ? 'color-red' : 'color-black')
}






