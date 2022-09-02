const deleteBtn = document.querySelectorAll('.del')
const movieItem = document.querySelectorAll('span.not')
const movieComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteMovie)
})

Array.from(movieItem).forEach((el) => {
    el.addEventListener('click', watched)
})

Array.from(watched).forEach((el) => {
    el.addEventListener('click', unwatched)
})

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