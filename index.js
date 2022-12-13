choices = ["rock", "paper", "scissors"];

let computerChoice = () => {
    value = Math.floor(Math.random() * (2 - 0 + 1) + 0); // (max - min + 1) + min
    return choices[value];
};

let playRound = (player, computer) => {
    let result;
    let value;
    if(player == computer){
        result = "Tie game!";
    }
    else if((player == "rock") && (computer == "paper")){
        result = "Paper beats rock! You lose!";
    }
    else if((player == "paper") && (computer == "rock")){
        result = "Paper beats rock! You win!";
    }
    else if((player == "paper") && (computer == "scissors")){
        result = "Scissors beats paper! You lose!";
        value = 1;
    }
    else if((player == "scissors") && (computer == "paper")){
        result = "Scissors beats paper! You win!";
    }
    else if((player == "scissors") && (computer == "rock")){
        result = "Rock beats scissors! You lose!";
    }
    else if((player == "rock") && (computer == "scissors")){
        result = "Rock beats scissors! You win!";
    }
    return result;
}

let game = () => {
    let playerCnt = 0;
    let computerCnt = 0;
    while(true){
        let playerPick = prompt("Choose rock, paper or scissors");
        playerPick = playerPick.toLowerCase();
        let computerPick = computerChoice();
        let outcome = playRound(playerPick, computerPick);
        console.log(outcome);
        if((outcome == "Rock beats scissors! You win!") || (outcome == "Scissors beats paper! You win!") || (outcome == "Paper beats rock! You win!")){
            playerCnt++;
            if(playerCnt == 3){
                alert("You have won! Congratulations!");
                break;
            }
        }
        else if((outcome == "Rock beats scissors! You lose!") || (outcome == "Scissors beats paper! You lose!") || (outcome == "Paper beats rock! You lose!")){
            computerCnt++;
            if(computerCnt == 3){
                alert("You have lost!")
                break;
            }
        }
    };
};

game();