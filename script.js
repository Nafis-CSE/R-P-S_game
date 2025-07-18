let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#player-score");
const compScorePara = document.querySelector("#comp-score")

const genComputerChoice = () =>{
    const options = ["rock","scissors","paper"];
    const ranIdx = Math.floor(Math.random() *3);
    return options[ranIdx];
}

const drawGame = ()=>{
    msg.innerText = "It's a Draw";
    msg.style.backgroundColor = "black";

}

const showWinner = (userWin,userChoice,compChoice) =>{

    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your's ${userChoice} defeats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} defeats Your's ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const compChoice = genComputerChoice();
    
    if (userChoice=== compChoice){
        //draw game
        drawGame();

    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false:true;
        }
        else if(userChoice==="scissors"){
            userWin = compChoice==="rock" ? false:true;
        }
        else{
            userWin = compChoice==="scissors"? false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
     })
})