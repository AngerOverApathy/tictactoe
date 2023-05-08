let button = document.getElementById('restartBtn')
let player = document.getElementById('player')
let boxes = Array.from(document.getElementsByClassName('box'))

const X_SYMBOL = 'X'
const O_SYMBOL = 'O'

let spaces = Array(9).fill(null)
let currentPlayer = X_SYMBOL

const startGame = () => boxes.forEach(box => box.addEventListener('click', playGame)) 
button.addEventListener('click', restartGame)    

function playGame(el){
    const id = el.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        el.target.innerText = currentPlayer

        currentPlayer = currentPlayer == X_SYMBOL ? O_SYMBOL : X_SYMBOL
    }
}

function restartGame(){
   spaces.fill(null) 

   boxes.forEach( box => {
    box.innerText = ''
   })

   currentPlayer = X_SYMBOL
}

startGame()
