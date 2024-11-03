

let score = 3;
let computerScore = 3;

// Creating an array of values/options
const answers = ['rock', 'paper', 'scissors'];




document.querySelector('.check').addEventListener('click', function() {
    // Generating random choice from the array
    const computerAnswer = answers[Math.floor(Math.random() * answers.length)];

    // Printing the computer's choice to the HTML DOM
    document.querySelector('.compAnswer').textContent = computerAnswer;

    // Grabbing the value from the input box and storing it as a variable
    const userInput = document.querySelector('.guess').value.trim(); 
    console.log(userInput);

    // Making if statements comparing computerAnswer & userInput
    let message = '';
    if (userInput === computerAnswer) {
        message = 'It\'s a tie!🤯';
    } else if (userInput === 'rock' && computerAnswer === 'paper') {
        message = 'The computer won!😳';
        // score --;
        // document.querySelector('.score').textContent = score; 
    } else if (userInput === 'paper' && computerAnswer === 'scissors') {
        message = 'The computer won!😳';
        // score --;
        // document.querySelector('.score').textContent = score; 
    } else if (userInput === 'scissors' && computerAnswer === 'rock') {
        message = 'The computer won!😳';
        // score --;
        // document.querySelector('.score').textContent = score; 
    } else if (userInput === 'rock' && computerAnswer === 'scissors') {
        message = 'You won!🥳';
    } else if (userInput === 'paper' && computerAnswer === 'rock') {
        message = 'You won!🥳';
    } else if (userInput === 'scissors' && computerAnswer === 'paper') {
        message = 'You won!🥳';
    } else {
        message = '';
    }
   
 
    if (message === 'The computer won!😳'){
        score --;
        document.querySelector('.score').textContent = score; 
     }    else if (message === 'You won!🥳' ){
       computerScore --;
        document.querySelector('.computerscore').textContent = score; 
    }
    
    if(score === 0){
        message = 'You lost the game, try again!🫠'
    }else if (computerScore === 0){
        message = 'You won the game, play again!🎉' 
    }
    // Displaying the message
    document.querySelector('.message').textContent = message;
}) ;