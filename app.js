const cardArray = [
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },
    {
        name: "fries",
        img: 'images/fries.png'
    },
    {
        name: "cheeseburger",
        img: 'images/cheeseburger.png'
    },
    {
        name: "hotdog",
        img: 'images/hotdog.png'
    },
    {
        name: "ice-cream",
        img: 'images/ice-cream.png'
    },
    {
        name: "pizza",
        img: 'images/pizza.png'
    },
    {
        name: "milkshake",
        img: 'images/milkshake.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

let gridDisplay = document.querySelector('#grid')
let resultId = document.querySelector('#result')
const startAgainBtn = document.querySelector('#reset-cards')
startAgainBtn.addEventListener('click', startAgain)
let cardChosen = []
let cardChosenIds = []
let cardsWon = []

function createBoard() {
    for( let i =0 ; i< cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const firstCardId = cardChosenIds[0]
    const secondCardId = cardChosenIds[1]

    console.log("check for match")
    if(firstCardId === secondCardId){
        cards[firstCardId].setAttribute('src', 'images/blank.png')
        cards[secondCardId].setAttribute('src', 'images/blank.png')
        alert('you have clicked on the same image.')

    }
    if(cardChosen[0] === cardChosen[1]){
        alert('you found a match')
        cards[firstCardId].setAttribute('src', 'images/white.png')
        cards[secondCardId].setAttribute('src', 'images/white.png')
        cards[firstCardId].removeEventListener('click', flipCard)
        cards[secondCardId].removeEventListener('click', flipCard)
        cardsWon.push(cardChosen)
    } else {
        cards[firstCardId].setAttribute('src', 'images/blank.png')
        cards[secondCardId].setAttribute('src', 'images/blank.png')
        
    }
   
    cardChosen = []
    cardChosenIds = []
    
    resultId.textContent = cardsWon.length
    if (cardsWon.length === (cardArray.length/2)){
        resultId.innerHTML = "Congratulation, you have won!"
    }
}
function flipCard() {
    let cardId = this.getAttribute('data-id')
    let chosenCard = cardArray[cardId]
    cardChosen.push(chosenCard.name)
    cardChosenIds.push(cardId)
    console.log(cardChosenIds)
    console.log(cardChosen)
    this.setAttribute('src', chosenCard.img)
    if (cardChosen.length === 2){
        setTimeout(checkMatch, 900)
    }
}
function sortCards(){
    cardArray.sort(() => 0.5 - Math.random())
}
function clearBoard() {
    console.log("Clearing the board...")
    all_images = document.querySelectorAll('img')
    for (let index = 0; index < all_images.length; index++) {
        gridDisplay.removeChild(all_images[index])
    }
    cardChosen = []
    cardChosenIds = []
    cardsWon = []
}

function startAgain(){
    clearBoard()
    console.log("Creating the grid again..")
    createBoard()

}
createBoard()