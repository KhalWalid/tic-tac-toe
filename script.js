gameBoardContainer = document.querySelector('#gameBoard');
squareDiv = document.createElement('div')
let array = ['X', 'O', ' ']


const gameBoard = (() => {
    const gameBoardArray = []
    return {

    };
});

const displayController = (() => {

    return {

    };
});

const Player = name => {

    return {};
};

function displayGrid() {
    array.forEach(element => {
        switch (element) {
            case 'X':
                squareDiv.innerHTML = '<p>X</p>';
                break;
            case 'O':
                squareDiv.innerHTML = '<p>O</p>';
                break;
            case ' ':
                squareDiv.innerHTML = '<p> </p>';
                break;
        }
        console.log(squareDiv.innerHTML)
        console.log(squareDiv.cloneNode().innerHTML)
        gameBoardContainer.appendChild(squareDiv.cloneNode(true))
    });
};

displayGrid()