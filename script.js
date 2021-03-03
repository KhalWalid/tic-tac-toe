const gameBoard = (() => {
    const gameBoardContainer = document.querySelector('#gameBoard');
    const squareDiv = document.createElement('div');
    squareDiv.id = 'squareDiv';

    const gameBoardArray = ['', '', '', '', '', '', '', '', ''];

    const changeSquare = (sign, index) => {
        if (gameBoardArray[index] !== '') return;
        gameBoardArray[index] = sign;
    };

    return {
        gameBoardArray,
        squareDiv,
        gameBoardContainer,
        changeSquare
    };
})();

const gameController = (() => {
    let round = 1

    const playRound = (index) => {
        gameBoard.changeSquare(getSign(), index);
        round++
    };

    const getSign = () => {
        return round % 2 == 0 ? 'O' : 'X';
    };

    return {
        playRound
    };
})();

const displayController = (() => {
    const displayArray = () => {
        gameBoard.gameBoardContainer.innerHTML = ''
        gameBoard.gameBoardArray.forEach(element => {
            switch (element) {
                case 'X':
                    gameBoard.squareDiv.innerHTML = '<p>X</p>';
                    break;
                case 'O':
                    gameBoard.squareDiv.innerHTML = '<p>O</p>';
                    break;
                case '':
                    gameBoard.squareDiv.innerHTML = '<p></p>';
                    break;
            }
            gameBoard.gameBoardContainer.appendChild(gameBoard.squareDiv.cloneNode(true))
        });

        const squareDivs = document.querySelectorAll('#squareDiv')

        squareDivs.forEach((square, index) => {
            square.addEventListener('click', () => {
                gameController.playRound(index)
                displayArray()
            });
        });
    }

    displayArray()

    return {
    };

})();

const Player = name => {

    return {};
};