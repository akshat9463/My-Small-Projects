let userScore = 0;
let comScore = 0;

let msg = document.querySelector("#msg");
let choices = document.querySelectorAll(".choice");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#com-score");

let genComChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let comChoice = Math.floor(Math.random()*3);
    return options[comChoice];
}

const drawGame = ()=>{
    console.log("game was draw.");
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "gray";
}
const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        comScore++;
        compScorePara.innerText = comScore;
        console.log("you loose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}

let playGame = (userChoice) =>{
    console.log("user choice =",userChoice);
    // generate comChoice.....
    let compChoice = genComChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // computer has paper , scissors choice...
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice === "paper"){
            // computer has scissors , rock choice...
            userWin = compChoice === "scissors" ? false : true;
        }else if(userChoice === "scissors"){
            // computer has rock , paper choice...
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click",() => {
        // console.log('choice was clicked');
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});