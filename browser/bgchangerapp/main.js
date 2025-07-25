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
    color = getBgColor()    // color = 'green'
    renderBg()
}

function getBgColor() {
    const colors = ['black', 'red', 'green', 'blue', 'yellow']
    return colors[Math.floor(Math.random() * colors.length)]
}

function renderBg() {
    document.getElementById('color').innerHTML = color
    document.body.style.backgroundColor = color
}




