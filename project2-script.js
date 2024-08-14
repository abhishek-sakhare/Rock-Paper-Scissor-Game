let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userChoice2 = document.querySelector("#user-choice2");
const compChoice2 = document.querySelector("#comp-choice2");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = (userChoice, compChoice) => {
    console.log("Game was draw.");
    userChoice2.innerText = `Your Choice : ${userChoice}`;
    compChoice2.innerText = `Computer Choice : ${compChoice}`;
    msg.innerText = "it's a Draw !";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        console.log("you win!");
        userScore++;
        userScorePara.innerText = userScore;
        userChoice2.innerText = `Your Choice : ${userChoice}`;
        compChoice2.innerText = `Computer Choice : ${compChoice}`;
        msg.innerText = `You Win!`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        userChoice2.innerText = `Your Choice : ${userChoice}`;
        compChoice2.innerText = `Computer Choice : ${compChoice}`;
        msg.innerText = `You lost!`;
        msg.style.backgroundColor = "red";
    }
} 



const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame(userChoice, compChoice);
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    })
});