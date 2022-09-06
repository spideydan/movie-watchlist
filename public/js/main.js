const deleteBtn = document.querySelectorAll('.del')
const movieItem = document.querySelectorAll('span.not')
const movieComplete = document.querySelectorAll('span.completed')
const addBtn = document.querySelectorAll('.add')

Array.from(addBtn).forEach((el) => {
    el.addEventListener('click', addToList)
})

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteMovie)
})

Array.from(movieItem).forEach((el) => {
    el.addEventListener('click', watched)
})

Array.from(movieComplete).forEach((el) => {
    el.addEventListener('click', unwatched)
})

async function addToList() {
    const movieId = this.parentNode.dataset.id
    const movieTitle = this.parentNode.dataset.title
    const moviePoster = this.parentNode.dataset.poster_path
    try {
        // const movieData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4d982ce8da366d91dc35465cb660e981`)
        // const movie = await movieData.json()
        // console.log(movie)
        const response = await fetch('movies/addMovie/addToList', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'movieIdFromJSFile': movieId,
                'title': movieTitle,
                'poster': moviePoster
            })
        })
        const data = await response.json()
        console.log(data)
        // window.location = '/movies'
    } catch (err) {
        console.log(err)
    }
}

async function deleteMovie() {
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('movies/deleteMovie', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function watched() {
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('movies/watched', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

async function unwatched() {
    const movieId = this.parentNode.dataset.id
    try {
        const response = await fetch('movies/unwatched', {
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}