let humanScore = 0
let computerScore = 0


const scoreBoard = document.createElement("div")
    scoreBoard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    document.body.appendChild(scoreBoard);

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



function playGround(humanSelection, computerSelection) {
    if (computerSelection === "Rock") {
        if (humanSelection === "Paper") {
            alert ("You: Paper | Computer: Rock. You Win, Paper Beats Rock!");
            humanScore++;
        } else if (humanSelection === "Scissors") {
            alert ("You: Scissors | Computer: Rock. You Lose, Rock Beats Scissors");
            computerScore++;
        } else alert ("You: Rock | Computer: Rock. You draw, you both picked rock")
        }
    else if (computerSelection === "Paper") {
        if (humanSelection === "Scissors") {
            alert ("You: Scissors | Computer: Paper. You Win, Scissors Beats Paper");
            humanScore++;
        }  else if (humanSelection === "Rock") {
            alert ("You: Rock | Computer: Paper. You lose, Paper Beats Rock");
            computerScore++;
        }  else alert ("You: Paper | Computer: Paper. You draw, you both picked Paper")
        }
    else if (computerSelection === "Scissors") {
        if (humanSelection === "Rock") {
            alert ("You: Rock | Computer: Scissors. You Win, Rock Beats Scissors");
            humanScore++;
        }  else if (humanSelection === "Paper") {
            alert ("You: Paper | Computer: Scissors. You lose, Scissors Beats Paper");
            computerScore++;
        }  else alert ("You: Scissors | Computer: Scissors. You draw, you both picked Scissors")
        }

scoreBoard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`
    
if (humanScore === 5) {
    alert ("You won the game!");
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
} else if (computerScore === 5) {
    alert ("Computer won the game!");
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

}
        

const rockButton = document.createElement('button');
    rockButton.textContent = "Rock";
    rockButton.addEventListener ("click", function(){
        const humanSelection = "Rock";
        const computerSelection = getComputerChoice()
        playGround(humanSelection, computerSelection);
    });
    document.body.appendChild(rockButton);

const paperButton = document.createElement('button');
    paperButton.textContent = "Paper";
    paperButton.addEventListener ("click", function(){
        const humanSelection = "Paper";
        const computerSelection = getComputerChoice()
        playGround(humanSelection, computerSelection);
    });
    document.body.appendChild(paperButton);

const scissorsButton = document.createElement('button');
    scissorsButton.textContent = "Scissors";
    scissorsButton.addEventListener ("click", function(){
        const humanSelection = "Scissors";
        const computerSelection = getComputerChoice()
        playGround(humanSelection, computerSelection);
    });
    document.body.appendChild(scissorsButton);

