 let firstCard =10
 let secondCard=4
 let cards= [firstCard, secondCard]
 let sum=firstCard+secondCard
 let hasBlackJack=false;
let isAlive =true
 let message =""

 let cardsEl=document.getElementById("cards-el")

function startGame() {
  renderGame()
}

 let messageEl=document.getElementById("message-el");


// // // // //let sumEl=document.getElementById("sum-el")
 let sumEl=document.querySelector(".sum-el")


function renderGame(){

   cardsEl.textContent = "Cards: " + cards[0]+ "  " +cards[1]
        sumEl.textContent = "Sum: " +sum 
      if(sum<=20){
    message="Do You want to draw a new card!"
     isAlive=false

     }
     else if(sum===21){
    message="Wohoo! You've got Blackjack!"
    hasBlackJack=true
     }
    else{
    message ="you're out of the game!"
    }
    messageEl.textContent=message;
   
}
function newCard()
{
  console.log("Drawing a new card from the deck!")
}
 function newCard(){
      let card=8;
      sum+= card;
       startGame();

}

 

