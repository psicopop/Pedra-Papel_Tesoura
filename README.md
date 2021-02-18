# Pedra-Papel_Tesoura

function playerSelection() {
   let player = ( prompt ("pedra, papel ou tesoura?").toLowerCase() );
   return player
}


function computerPlay() {
  let escolhas = ["pedra", "papel", "tesoura"];
  return escolhas[Math.floor(Math.random() * escolhas.length)];
  
  }
  



   function playRound() {
   let player1 = playerSelection()
   let player2 = computerPlay()
   console.log(player1)
   console.log(player2)


   
    
   if (player1 == 'pedra' && player2 == 'tesoura') {
     alert("Você ganhou!!!! pedra quebra a tesoura.")
   } 
    else if (player1 == 'papel' && player2 == 'pedra') {
      alert('Você ganhou!!!! papel engole a pedra.')
    }
    else if (player1 == 'tesoura' && player2 == 'papel') {
      alert('Você ganhou!!!! tesoura corta o papel.')
    }
    else if (player1 == player2) {
      alert('Empatou')
    }
    else{
    alert('Você perdeu, tente novamente.')
    }
   }
     
