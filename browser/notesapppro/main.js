const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μσρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']

let notes = []
let count = 0

window.addEventListener('DOMContentLoaded', function() {
    const inputNote = document.querySelector('#inputNote');
    const getNoteValue = () => inputNote.value.trim();

    // getNewNote works inside the listener since it has access to getNoteValue via closure
    const getNewNote = () => ({
        key: count + 1,
        note: getNoteValue(),
        softDeleted: false,
    });

    setInterval(() => printGrDate(), 1000)

    document.querySelector('#addNoteBtn').addEventListener('click', () => {
        onInsertHandler(getNewNote())
        inputNote.value = ''
    })

    inputNote.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            onInsertHandler(getNewNote()) 
            inputNote.value = ''   
        }
    })

    renderNotes()
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
    renderNotes()
}


// Model
function insertNote(obj) {
    notes = [...notes, obj]
    count++
    // renderNotes()
}

function renderNotes() {
    const container = document.querySelector('#notesWrapper')
    container.textContent = ''
    notes.forEach(note => container.appendChild(createNoteElement(note)))
}

// Model
function strikeThrough(key) {
    notes = notes.map(note => note.key === key ? {...note, softDeleted: !note.softDeleted} : note)
    renderNotes()
}

function deleteNote(key) {
    notes = notes.filter(note => note.key !== key)
    renderNotes()
}

function createNoteElement(note) {
    const div = document.createElement('div')
    div.id = 'noteTemplate' + note.key
    div.className = 'flex justify-between items-center px-[2px] border-b border-black'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = note.softDeleted
    checkbox.addEventListener('click', () => strikeThrough(note.key))

    const label = document.createElement('label')
    label.textContent = note.note // safe, no XSS
    label.className = `w-[200px] max-h-[100px] overflow-hidden break-words whitespace-normal text-base ${note.softDeleted ? 'line-through text-gray-500' : ''}`

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.className = 'w-[35px] h-[35px] border border-black rounded-full'
    deleteBtn.addEventListener('click', () => deleteNote(note.key))

    div.appendChild(checkbox)
    div.appendChild(label)
    div.appendChild(deleteBtn)

    return div
}







