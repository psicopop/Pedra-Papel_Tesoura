
  const escolhas = document.querySelectorAll('.escolha')
  
  
  
  

// jogada computador
function computerPlay() {
  const rad = Math.random()
if(rad < 0.34) {
  return  player2 ='pedra'
}else if(rad <= 0.67 ){
  return player2 = 'papel'
}else{
return player2 = 'tesoura'
}
};

//jogada player


   function playRound(e) {
   const player2 = computerPlay()
   const player1 = e.target.id
   console.log(player1, player2)
   resultado(player1, player2)
   }

   
   



   function resultado(player1, player2){
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

   

   
   

   //event listener
   escolhas.forEach(escolha => escolha.addEventListener('click', playRound ));