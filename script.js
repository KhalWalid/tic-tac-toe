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

    let round = 1;
    let gameOver = false;

    const playRound = (index) => {
        gameBoard.changeSquare(getSign(), index);
        if (checkGame(index)) {
            gameOver = true;
            return;
        };
        if (round === 9) {
            gameOver = true;
            return;
        }
        round++
    };

    const getSign = () => {
        return round % 2 == 0 ? 'O' : 'X';
    };

    const isGameOver = () => {
        return gameOver;
    };

    const checkGame = (index) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
      
        return winConditions
            .filter((combination) => combination.includes(index))
            .some((possibleCombination) =>
              possibleCombination.every(
                (index) => gameBoard.gameBoardArray[index] === getSign()
            )
        );
    };

    return {
        isGameOver,
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
            if (gameController.isGameOver()) return;
            square.addEventListener('click', () => {
                gameController.playRound(index)
                displayArray()
            });
        });
    }

    displayArray()

    return {};

})();