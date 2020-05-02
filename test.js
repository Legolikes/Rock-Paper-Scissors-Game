

const CHOICES = ["Rock", "Paper", "Scissors"];
var wins = 0;
var losses = 0;
var gamesplayed = 0;
var ties = 0;
function pickRandomChoice(possibleChoices) {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[randomNumber];
}

function displayResults() {
  document.getElementById("winResults").innerHTML = "Wins:"+ wins;
  document.getElementById("lossResults").innerHTML = "Losses:"+ losses;
  document.getElementById("tiesResults").innerHTML = "Ties:"+ ties;
  document.getElementById("gamesPlayedResults").innerHTML = "Gamesplayed:"+ gamesplayed;
}
displayResults()

function PlayChoice(){
  var e = document.getElementById("choosebutton");
  var userChoice = e.options[e.selectedIndex].text;
  let opponentAnswer = (pickRandomChoice(CHOICES));
  
  document.getElementById("matchup").innerHTML = "You chose " + userChoice + " and the master chose " + opponentAnswer + ".";
  
  gamesplayed = gamesplayed +1;
  
  if (userChoice == opponentAnswer){
    console.log("Tie!")
    ties = ties + 1
  }
  else if (userChoice === "Paper" && opponentAnswer === "Rock"){
    console.log("You win!")
    wins = wins +1
  }
  else if (userChoice === "Scissors" && opponentAnswer === "Paper"){
    console.log("You win!")
    wins = wins +1
  }
  else if (userChoice === "Rock" && opponentAnswer === "Scissors"){
    console.log("You win!")
    wins = wins +1
  }
  // lose conditions
  else if (userChoice === "Paper" && opponentAnswer === "Scissors"){
    console.log("You lose!")
    losses = losses +1
  }
  else if (userChoice === "Scissors" && opponentAnswer === "Rock"){
    console.log("You lose!")
    losses = losses +1
  }
  else if (userChoice === "Rock" && opponentAnswer === "Paper"){
    console.log("You lose!")
    losses = losses +1
  }
  console.log(userChoice);
  console.log(opponentAnswer);
  console.log("You have " + wins + " wins.")
  console.log("You have " + losses + " losses.")
  
  displayResults()
  
}

