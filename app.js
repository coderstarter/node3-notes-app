// const showTimeout = () => {
//     setTimeout(() => {
//         alert('I only show after 5 secs');
//     },5000);
// };

// showTimeout();

// const showInterval = () => {
//     setInterval(() => {
//         alert('It will display after every 5 sec');
//     },2000);
// };

// showInterval();

// function withConstructor(num){
//     return new Promise((resolve, reject) => {
//       if (num === 0){
//         resolve('zero');
//       } else {
//         resolve('not zero');
//       }
//     });
//   }
  
//   withConstructor(0);r
//     .then((resolveValue) => {
//     console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
//   });
  
//   // Write your code below:
//   async function withAsync(num){
//     if (num === 0){
//         return 'zero';
//       } else {
//         return 'not zero';
//       }
//   }
  
//   withAsync(100)
//     .then((resolveValue) => {
//     console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
//   });
// re  
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } // closing if tie clause!!!
      
    else if (userChoice === 'rock' || 'paper' || 'scissors') {
      if (computerChoice === 'paper') {
         return 'You won!';
      } else {
         return 'Computer Won!';
      } 
     }
    }
    
    const playGame = () => {
        let userChoice = getUserChoice('scissors');
        const computerChoice = getComputerChoice();
      console.log('You threw: ' + userChoice);
        console.log('The computer threw: ' + computerChoice);
              console.log(determineWinner(userChoice,computerChoice));
    }
    playGame();