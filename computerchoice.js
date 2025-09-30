function getComputerChoice(rps) {
    return Math.floor(Math.random() * 3) + 1;
}

let choice = getComputerChoice()

    if (choice === 1) {
        alert ("Rock");
    } else if (choice === 2) {
        alert ("Paper");
    } else {
        alert ("Scissors")
    }


function getHumanChoice() {
  let answer = prompt("Rock, Paper, Scissors?");
    alert(`your answer is ${answer}!`);
}

getHumanChoice()