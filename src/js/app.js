document.addEventListener('DOMContentLoaded', function () {
    const board = document.querySelector('.board');
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const pauseButton = document.querySelector('.pause');
    let score = 0;


    function startGame() {
        moveBlock();
        turnBlock();
        fallBlock();
    }

    let square = function () {
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    };

    function fallBlock() {
        let squares = document.querySelector('.square');
        let position = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (position == 746) {
                clearInterval(id);
            } else {
                position++;
                squares.style.top = position + 'px';
                squares.style.bottom = position + 'px';
            }
        }
    }

    // zatrzymanie gry
    function stopGame() {
        console.log('stop')
    }

    function pauseGame() {
        console.log('pause')
    }

    function moveBlock() {
        if (square.direction === 'right') {
            square.x = square.y + 1;
        } else if (square.direction === 'left') {
            square.x = square.y - 1
        } else if (square.direction === 'down') {
            square.x = square.y + 1
        }
    }

    function turnBlock(e) {
        switch (e.which) {
            case 37:
                square.direction = 'left';
                break;
            case 39:
                square.direction = 'right';
                break;
            case 40:
                square.direction = 'down';
                break;

        }
    };

    function updateScore() {}

    startButton.addEventListener('click', startGame);
    stopButton.addEventListener('click', stopGame);
    pauseButton.addEventListener('click', pauseGame);
});