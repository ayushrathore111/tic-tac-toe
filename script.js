console.log("Welcome to Tic Tac Toe")
let music = new Audio("hey-oh-young-pop-113294.mp3")
let audioTurn = new Audio("hifi.wav")
let gameOver = new Audio("gameover.wav")
let Turn = "X"
let over = false;
//function to change turn
const changeTurn = () => {

        return Turn === "X" ? "0" : "X"
    }
    //function to check for a win
const checkWin = () => {
        let boxtext = document.getElementsByClassName('boxtext');
        let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 1, 2],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== '') {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON"
                over = true;
                gameOver.play();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "800px"
            }
        })
    }
    //game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtest = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtest.innerText === '') {
            boxtest.innerText = Turn;
            Turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!over) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    })
})