function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3) + 1;


    if (choice === 1) {
        return ("Rock");
    } else if (choice === 2) {
        return ("Paper");
    } else {
        return ("Scissors")
    }
}


function getHumanChoice() {
  let answer = prompt("Rock, Paper, Scissors?");
  return answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
}

let humanScore = 0
let computerScore = 0


function playGround(humanSelection, computerSelection) {
    if (computerSelection === "Rock") {
        if (humanSelection === "Paper") {
            alert ("You Win, Paper Beats Rock");
            humanScore = (humanScore + 1);
        } else if (humanSelection === "Scissors") {
            alert ("You Lose, Rock Beats Scissors");
            computerScore = (computerScore +1);
        } else alert ("You draw, you both picked rock")
    }
    else if (computerSelection === "Paper") {
        if (humanSelection === "Scissors") {
            alert ("You Win, Scissors Beats Paper");
            humanScore = (humanScore + 1);   
        }   else if (humanSelection === "Rock") {
            alert ("You lose, Paper Beats Rock");
            computerScore = (computerScore +1);
        }  else alert ("You draw, you both picked Paper")
    }
    else if (computerSelection === "Scissors") {
        if (humanSelection === "Rock") {
            alert ("You Win, Rock Beats Scissors");
            humanScore = (humanScore + 1)
        }  else if (humanSelection === "Paper") {
            alert ("You lose, Scissors Beats Paper");
            computerScore = (computerScore +1);
        }  else alert ("You draw, you both picked Scissors")
    }
}
        


function playGame() {
for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playGround(humanSelection, computerSelection);
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}
}


playGame();

if (humanScore > computerScore) {
    alert ("You win!");
    } else if (humanScore < computerScore) {
        alert ("You lose!")
    } else {
        alert ("You draw!")
    }