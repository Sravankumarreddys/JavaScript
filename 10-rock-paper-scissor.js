let score = JSON.parse(localStorage.getItem('score')) ||{
  wins:0,
  looses: 0,
  ties: 0
} ;

updateScore();

function updateScore(){
  document.querySelector('.js-score').innerHTML=`WINS = ${score.wins}, LOOSES = ${score.looses}, TIES = ${score.ties}`;
}

function rPS(myMoveid){
  let myMove = myMoveid;
  const randomNumber = Math.random();
  let result = '';
let computerMove = '';
console.log(`this is id :${myMove}`)
if(randomNumber>=0 && randomNumber <= 1/3){
  computerMove = 'rock';
  console.log('rock');
}
else if(randomNumber > 1/3 && randomNumber <= 2/3){
  computerMove = 'paper';
  console.log('paper');
}
else if(randomNumber > 2/3 && randomNumber < 1){
  computerMove = 'scissors';
  console.log('scissors');
}
if(myMove === computerMove){
  result = 'TIE'
}
else if(myMove === 'rock' && computerMove === 'scissors'){
  result = 'YOU WON';
}
else if(myMove === 'rock' && computerMove === 'paper'){
  result = 'YOU LOOSE';
}
else if(myMove === 'paper' && computerMove === 'rock'){
  result = 'YOU WON';
}
else if(myMove === 'paper' && computerMove === 'scissors'){
  result = 'YOU LOOSE';
}
else if(myMove === 'scissors' && computerMove === 'rock'){
  result = 'YOU LOOSE';
}
else if(myMove === 'scissors' && computerMove === 'paper'){
  result = 'YOU WON';
}

if(result === 'YOU WON'){
  score.wins += 1;
}
else if(result === 'YOU LOOSE'){
  score.looses += 1;
}
else if( result === 'TIE'){
  score.ties += 1;
}


localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.js-moves').innerHTML = `YOU<img src="images/${myMove}-emoji.png" class="move-icon"><nbsp></nbsp><img src="images/${computerMove}-emoji.png" class="move-icon"> COMPUTER`;
document.querySelector('.js-result').innerHTML = `${result}`;
updateScore();

}