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
        .catch(error => console.error('Error: ' + error))
}