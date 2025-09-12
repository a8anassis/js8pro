$(function() {
    let debounceTimeout = null
    $('#searchInput').on('input', function() {  // fires κάθε φορά που αλλάζει το value του <input>
        clearTimeout(debounceTimeout)
        debounceTimeout = setTimeout(() => getMovie(this.value.trim()), 1500)
    })   

    $('#showMore').on('click', function(e) {
        e.preventDefault()
        onShowMoreClicked()
    })
})


function getMovie(title) {
    if (!title) {
        return
    }

    onBeforeSend()
    fetchMovieFromApi(title)
}

function fetchMovieFromApi(title) {
    axios.get(`https://www.omdbapi.com/?t=${title}&apikey=c79ee41a`)
        .then(response => {
            handleResults(response.data)
        })
        .catch(error => { 
            console.error('Error: ' + error)
            onApiError()    
        })
}

function handleResults(data) {
    if (data.Response === 'True') {
        render(data)
        hideComponent('#waiting')
    } else if (data.Response === 'False') {
        hideComponent('#waiting')
        showComponent('#notFound')
    }
}

function onBeforeSend() {
    showComponent('#waiting')
    hideComponent('#movie')
    hideComponent('#notFound')
    hideComponent('#error')
}

function onApiError() {
    hideComponent('#waiting')
    showComponent('#error')
}

function onShowMoreClicked() {
    $('.extended').slideToggle(1000)
}

function showComponent(component) {
    return $(component).removeClass('hidden')
}

function hideComponent(component) {
    return $(component).addClass('hidden')
}

function render(data) {
    const imdbURL = `https://www.imdb.com/title/${data.imdbID}`
    const imdbLink = document.getElementById('imdbId')
    imdbLink.href = imdbURL

    document.getElementById('title').textContent = data.Title
    document.getElementById('year').textContent = `Έτος Παραγωγής: ${data.Year}`
    document.getElementById('runtime').textContent = `Διάρκεια: ${data.Runtime}`
    document.getElementById('genre').textContent = `Είδος: ${data.Genre}`
    document.getElementById('imdbRating').textContent = data.imdbRating
    document.getElementById('plot').textContent = data.Plot
    document.getElementById('director').querySelector('span').textContent = data.Director
    document.getElementById('actors').querySelector('span').textContent = data.Actors
    document.getElementById('production').querySelector('span').textContent = data.Production
    document.getElementById('boxOffice').querySelector('span').textContent = data.BoxOffice
    document.getElementById('language').querySelector('span').textContent = data.Language
    document.getElementById('rated').querySelector('span').textContent = data.Rated

    const poster = document.getElementById('image')
    poster.src = data.Poster
    poster.alt = data.Title

    document.querySelector('#movie').classList.remove('hidden')
}

