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

// Controller
function onInsertHandler(obj) {
    if (!obj?.note) return

    insertNote(obj)
    reset()
}


// Model
function insertNote(obj) {
    notes = [...notes, obj]
    count++
    renderNotes()
}

// View
function renderNotes() {
    const container = document.querySelector('#notesWrapper')

    container.innerHTML = notes.map(note => `<div id="${'noteTemplate' + note.key}" class="flex justify-between items-center px-[2px] border-b border-black">
            <div id="${'noteInfo' + note.key}"  class="flex items-center">
                <input type="checkbox" id="${'noteCheck' + note.key}" onclick="strikeThrough(${note.key})" class="w-[25px] h-[25px] mr-[5px]" ${note.softDeleted ? 'checked' : ''}>
                <label id="${'noteTxt + note.key'}" for="${'noteCheck' + note.key}" class="w-[200px] max-h-[150px] overflow-hidden break-words whitespace-normal text-base ${note.softDeleted ? 'line-through text-gray-500' : ''}">${note.note}</label>
            </div>
            <button type="button" id="${'noteDelBtn' + note.key}" class="w-[35px] h-[35px] border border-black rounded-full" onclick="deleteNote(${note.key})">X</button>
        </div>`).join("")
}

// Model
function strikeThrough(key) {
    notes = notes.map(note => note.key === key ? {...note, softDeleted: !note.softDeleted} : {...note})
    renderNotes()
}

function deleteNote(key) {
    notes = notes.filter(note => note.key !== key)
    renderNotes()
}


// View
function reset() {
    document.querySelector('#inputNote').value = ''
}







