let color = undefined
const colors = ['black', 'red', 'green', 'blue', 'yellow']

window.addEventListener("DOMContentLoaded", function() {

    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked()
    })

})

// Controllers
function onClickMeClicked() {
    updateBg()
    renderBg()
}


// Model
function updateBg() {
    color = getBgColor()    // color = 'green'
    // renderBg()
}

function getBgColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function renderBg() {
    document.getElementById('color').textContent = color
    document.body.style.backgroundColor = color
}




