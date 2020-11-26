let player1 = []
let player2 = []
let turnCount = 0
let play = true

const winningCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]

document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll('.cell');
    const newgame = document.querySelector('.newgame');
    console.log("value of play", play)
    cells.forEach(el => el.addEventListener('click', event => {
            if(play) {
            let id = event.target.id.split('')[1]
            if(!player1.includes(parseInt(id)) && !player2.includes(parseInt(id))) {
                // turnCount % 2 === 0 ? player1.push(parseInt(id)) : player2.push(parseInt(id))
                if(turnCount % 2 === 0){
                    player1.push(parseInt(id))
                    let selected = document.getElementById("a" + id)
                    selected.innerHTML = "X"
                } else {
                    player2.push(parseInt(id))
                    let selected = document.getElementById("a" + id)
                    selected.innerHTML = "O"
                }
                turnCount++
                checkWin()
            }
        }
    }));

    newgame.addEventListener('click', () => {
        player1 = []
        player2 = []
        turnCount = 0
        play = true
        cells.forEach(el => el.innerHTML = "")
    })
})



function checkWin() {
    for(let i = 0; i < winningCombos.length; i++) {
        if (player1.indexOf(winningCombos[i][0]) > -1
            && player1.indexOf(winningCombos[i][1]) > -1
            && player1.indexOf(winningCombos[i][2]) > -1) {
                console.log("Player 1 wins")
                play = false
                break;
        } else if (player2.indexOf(winningCombos[i][0]) > -1
            && player2.indexOf(winningCombos[i][1]) > -1
            && player2.indexOf(winningCombos[i][2]) > -1) {
                console.log("Player 2 wins")
                play = false
                break;
        }
    }
}