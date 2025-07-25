let color = undefined

window.addEventListener("DOMContentLoaded", function() {

    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked()
    })

})


// Controllers
function onClickMeClicked() {
    updateBg()
}


// Model
function updateBg() {
    color = getBgColor()    // color = '#9AFB12'
    renderBg()
}

function getBgColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const hex = [...letters, ...digits]

    let randomColor = "#"
    let randomDigit = undefined

    for (let i = 1; i <= 6; i++) {
        randomDigit = Math.floor(Math.random() * hex.length)
        randomColor += hex[randomDigit]
    }
    return randomColor
}


// View
function renderBg() {
    document.getElementById('hex').innerHTML = color
    document.body.style.backgroundColor = color
}




