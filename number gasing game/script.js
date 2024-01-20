let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
};


function validateGuess(guess){
    if(isNaN(guess)){
        alert(`please enter a valid number`);
    } else if ( guess < 1 ){
        alert(`Please enter a number more than 1`);
    } else if ( guess > 100 ){
        alert(`Please enter a number less than 100`);
    } else {
        prevGuess.push(guess);
        if(numGuess === 10){
            displayguess(guess);
            displayMessage(`Game Over. Random number ${randomNumber}`);
            endGame();
            } else{
                displayguess(guess);
                checkGuess(guess);
            }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber){
        displayMessage(`Number is Tooo HIGH`);
    }
}

function displayguess(guess){
    userInput.value = '';
    guessslot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = ``;
    userInput.setAttribute(`disabled`,``);
    submit.setAttribute(`disabled`,``);
    p.classList.add(`button`);
    p.innerHTML = `<h2 id="newGame"> Start new Game </h2>`;
    p.style.cursor = 'pointer'
    
    startOver.appendChild(p);
    playGame = false; 
    newGame();
}

function newGame(){
    const newGamebutton = document.querySelector('#newGame');
    newGamebutton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessslot.innerHTML = ``;
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}



