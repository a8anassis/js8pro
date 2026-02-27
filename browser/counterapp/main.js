const DEFAULT = 0
let counter = DEFAULT   // State - Data

window.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#btnDecr").addEventListener('click', () => onDecreaseClicked())
    document.querySelector("#btnReset").addEventListener('click', () => onResetClicked())
    document.querySelector("#btnIncr").addEventListener('click', () => onIncreaseClicked())
})


// Controllers
function onDecreaseClicked() {
    decreaseCounter()
}

function onResetClicked() {
    resetCounter()
}

function onIncreaseClicked() {
    increaseCounter()
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
    const counterDOM = document.querySelector('#counter')
    counterDOM.textContent = counter
    styleCounter(counterDOM)
}


function styleCounter(counterDOM) {
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    counterDOM.classList.toggle('color-black', counter === 0)
}






