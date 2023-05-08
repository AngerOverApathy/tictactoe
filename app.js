let button = document.getElementById('restartBtn')
let player = document.getElementById('player')
let boxes = Array.from(document.getElementsByClassName('box'))

const X_SYMBOL = 'X'
const O_SYMBOL = 'O'

let spaces = Array(9).fill(null)

const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


let currentPlayer = X_SYMBOL

let winnerStyle = getComputedStyle(document.body).getPropertyValue('--winner') //use css style in javascript


const startGame = () => boxes.forEach(box => box.addEventListener('click', playGame)) 
button.addEventListener('click', restartGame)    

function playGame(el){
    console.log(currentPlayer)
    const id = el.target.id

    if(!spaces[id]){
        spaces[id] = currentPlayer
        el.target.innerText = currentPlayer

        currentPlayer = currentPlayer == X_SYMBOL ? O_SYMBOL : X_SYMBOL

        if(playerHasWon() !== false){
            if (currentPlayer == O_SYMBOL){
                player.innerHTML = "X Player has won!";
                    }else{
                player.innerHTML = "O Player has won!";
            } 

            let winner = playerHasWon()

            winner.map(box => boxes[box].style.backgroundColor=winnerStyle)
            return
        }

    }
}

function playerHasWon() { 
    for (const condition of winningCombo){
        let [a, b, c] = condition

        if (spaces[a] && (spaces[a] == spaces[b]) && (spaces[a] == spaces[c])){ //if array spaces equal each other, the combo is a winner
            return [a,b,c]
        } 
    }
    return false
}

function restartGame(){
   spaces.fill(null) 

   boxes.forEach( box => {
    box.innerText = ''
    box.style.backgroundColor = ''

    currentPlayer = X_SYMBOL
    })

    player.innerText = 'Tic Tac Toe'
}

startGame()
