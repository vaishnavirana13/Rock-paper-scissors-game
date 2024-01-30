let userscore = 0 ;
let compscore = 0 ;

const choices =  document.querySelectorAll(".choice");
 let msg = document.querySelector("#msg");
 const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#comp-score");
const gencompchoice = () => {
const options = ["rock" ,"paper","scissors"]
   const randoms  = Math.floor(Math.random() * 3);
   return options[randoms];
}


//reset button logic
let resetButton = document.querySelector("#reset")
function resetThis() {
	if (resetButton) {
	   return msg.classList.value = ''
	}
}










// when game is a draw
const drawGame = () =>{

	// @ts-ignore
	msg.innerText = "It's a DRAW. Play again";
	// @ts-ignore
	msg.style.backgroundColor = "yellow"

}
   


// declartion of the winner
const showWinner = (userWin,userchoice,compChoice) =>{
	if (userWin) {
		userscore++
		// @ts-ignore
		userScorePara.innerText =userscore ;
		console.log("You Win");
		// @ts-ignore
		msg.innerText = `Yayy..You Win..! Your ${userchoice} beats ${compChoice}`;
		// @ts-ignore
		msg.style.backgroundColor = "green"
	}else {
	
		compscore++
		// @ts-ignore
		compScorePara.innerText = compscore ;
		// @ts-ignore
		msg.innerText = `:( You lost ${compChoice} beats Your ${userchoice}...`;
		// @ts-ignore
		msg.style.backgroundColor = "red";

	}
}

const playGame = (userchoice) =>{
	console.log("User Choice = " ,userchoice );
	//Generate computer choice
	const compChoice =gencompchoice();
	console.log("Computer Choice = " ,compChoice );

	if (userchoice == compChoice ) {
		drawGame() ;
	}else{
		let userwin = true ;
		if(userchoice == "rock"){
			compChoice === 'paper' ?false : true ;

		}else if(userchoice === "paper"){
			userwin = compChoice === "scissors" ? false :true ;

		}else {
			compChoice === "rock" ? false :true ;
		}
		showWinner(userwin,userchoice,compChoice);
	}
}

choices.forEach((choice) => {
	console.log(choice);
	 choice.addEventListener("click",()=>{
		
  const userChoice =choice.getAttribute("id");
  playGame(userChoice)
	 })
})