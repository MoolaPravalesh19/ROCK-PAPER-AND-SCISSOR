let userScore=0;
let computerScore=0;
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genComputerChoice=()=>{
    const options=["ROCK","PAPER","SCISSORS"];
    const randIdx=Math.floor(Math.random() *3);//here we get a range of 0 to 3
    return options[randIdx];
}

//showing the winner
const showwinner=(userWin , userChoice , computerchoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`YOU WIN! ${userChoice} BEATS ${computerchoice}`;
        msg.style.backgroundColor="blue";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
       console.log("you lose");
       msg.innerText=`YOU LOSE! ${computerchoice} BEATS  ${userChoice}`;
       msg.style.backgroundColor="red";
    }
}

//drawgame choices
const drawGame=(userChoice,computerchoice)=>{
    console.log("game is draw");
    msg.innerText=`GAME IS DRAW! PLAY AGAIN`;
    msg.style.backgroundColor="black";
};

//
const playGame=(userChoice)=>{
    console.log("user choice is:",userChoice);//userchoice
    const computerchoice=genComputerChoice();//computer choice
    console.log("computer choice is:",computerchoice);

    //conditions for user-score and computer-score
    if(userChoice === computerchoice){
        //draw condition
        drawGame(userChoice,computerchoice);
    }
    else{
        let userWin=true;
        if(userChoice==="ROCK"){
            //computer choices are scissors or paper
            userWin=computerchoice==="PAPER"?false:true;
        }
        else if(userChoice==="PAPER")
        {
            //computerchoices are scissors or rock
           userWin=computerchoice==="SCISSORS"?false:true;
        }
        else{
           //rock , paper
           userWin=computerchoice==="ROCK"?false:true 
        }
        showwinner(userWin , userChoice , computerchoice);
    }
};

//
choice.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
         console.log("choice was clicked",userChoice);
         playGame(userChoice);

    });
});