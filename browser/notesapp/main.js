const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μσρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {

    this.setInterval(() => printGrDate(), 1000)

    this.document.querySelector('#addNoteBtn').addEventListener('click', function() {
        onInsertHandler({ key: count + 1, note: document.querySelector('#inputNote').value.trim(), softDeleted: false})
    })

    this.document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            onInsertHandler({ key: count + 1, note: e.target.value.trim(), softDeleted: false})    
        }
    })
})

function printGrDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dayStr = daysGR[day]
    const monthStr = monthsGR[month]

    const dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
    const timeStr = `${(hours < 10) ? '0': ''}${hours}:${(minutes < 10) ? '0': ''}${minutes}:${(seconds < 10) ? '0': ''}${seconds}`

    document.querySelector('#dateTxt').innerHTML = `${dateStr}<br>${timeStr}`
}




