
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  })

  const URL ="http://localhost:3000/toys"
  fetch(URL)
  // this converts json to a javascript object
  .then(response=>response.json())
  .then(toys=>{
    toys.forEach(toy=>createToy(toy))
  })
})
// function to create the toy card
function createToy(toy) {
// this grabs the div id toy collection
  const toyList=document.querySelector('#toy-collection')
  // get toy name
  const name = document.createElement('h2')
  name.textContent=toy.name
  // get toy image
  const image = document.createElement('img')
  image.src=toy.image
  image.classList.add('toy-avatar')
  // p tag with likes look in db.json for key name which is likes
  const likes =document.createElement('p')
  likes.textContent=`${toy.likes} like`
  // or alternatively likes.textContent=toy.likes+' likes'
  likes.classList.add('like-btn')
  // add a like button
  const button = document.createElement('button')
  button.textContent='like'
  button.id=toy.id
  button.classList.add('like-btn')
  // add toy card 'div' all above elements will be added
  // always do the appended element last
  const card=document.createElement('div')
  card.append(name, image, likes, button)
  card.classList.add('card')
  // add toy card to toyList or collection
  toyList.append(card)
}
