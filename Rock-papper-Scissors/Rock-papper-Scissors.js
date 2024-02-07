
let score = JSON.parse(localStorage.getItem('score'))

if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
};

updateScore();
let isautoPlaying = false
let setIntervalId;

function autoPlay() {
    if (!isautoPlaying) {
        setIntervalId = setInterval(function () {
            const playerMove = pickComputermove()
            playGame(playerMove)
        }, 1000)

        isautoPlaying = true

    } else {
        clearInterval(setIntervalId)
        isautoPlaying = false
        
    }

}


function playGame(playerMove) {
    const computermove = pickComputermove()
    let result = ''

    if (playerMove === 'Rock') {

        if (computermove === 'Rock') {
            result = 'You Tie.'
        } else if (computermove === 'Papper') {
            result = 'You Lose.'

        } else if (computermove === 'Scissors') {
            result = 'You win.'

        }

    } else if (playerMove === 'Papper') {
        if (computermove === 'Rock') {
            result = 'You Win'
        } else if (computermove === 'Papper') {
            result = 'You Tie.'

        } else if (computermove === 'Scissors') {
            result = 'You Lose.'

        }

    } else if (playerMove === 'Scissors') {
        if (computermove === 'Rock') {
            result = 'You Lose.'
        } else if (computermove === 'Papper') {
            result = 'You Win.'

        } else if (computermove === 'Scissors') {
            result = 'You Tie.'

        }

    }

    if (result === 'You Win.') {
        score.wins += 1
    } else if (result === 'You Lose.') {
        score.losses += 1

    } else if (result === 'You Tie.') {
        score.ties += 1

    }
    updateScore()

    document.querySelector('.game-result').innerHTML = result
    document.querySelector('.game-score').innerHTML = `
            You 
        <img src="images/${playerMove}-emoji.png" class="emoji" alt="">
        <img src="images/${computermove}-emoji.png" class="emoji" alt ="">
        Coumputer`

    localStorage.setItem('score', (JSON.stringify(score)))



}

function updateScore() {
    document.querySelector('.score-display')
        .innerHTML = `wins: ${score.wins} Losses: ${score.losses} Tie: ${score.ties}`;
}



function pickComputermove() {
    let randomNumber = Math.random()
    let computermove = ''

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
        computermove = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
        computermove = 'Papper'

    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computermove = 'Scissors'

    }
    return computermove;


}

