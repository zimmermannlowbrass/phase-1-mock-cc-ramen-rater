// write your code here
const menu = document.querySelector('#ramen-menu')
const details = document.querySelector('#ramen-detail')
const newRamenForm = document.querySelector('#new-ramen')
let detailImage = document.querySelector('.detail-image')
let detailName = document.querySelector('.name')
let detailRestaurant = document.querySelector('.restaurant')
let detailRating = document.querySelector('#rating-display')
let detailComment = document.querySelector('#comment-display')

document.addEventListener('DOMContentLoaded', () => {
    grabRamens()
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault()
        grabNewRamenInfo(e)
    })
})

function grabRamens() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(ramen => populateRamen(ramen))
    })
}

function populateRamen(ramen) {
    let image = document.createElement('img')
    image.src = ramen.image
    image.alt = ramen.name
    image.addEventListener('click', () => {showDetails(ramen)})
    menu.append(image)
}

function showDetails(ramen) {
    detailImage.src = ramen.image
    detailName.innerText = ramen.name
    detailRestaurant.innerText = ramen.restaurant    
    detailRating.innerText = ramen.rating
    detailComment.innerText = ramen.comment
}

function grabNewRamenInfo(e) {
    let newName = e.target[0].value
    let newRest = e.target[1].value
    let newImage = e.target[2].value
    let newRating = e.target[3].value
    let newComment = e.target[4].value
    let newRamen = {name: newName, image: newImage, restaurant: newRest, rating: newRating, comment: newComment}
    populateRamen(newRamen)
}