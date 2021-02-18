# Pedra-Papel_Tesoura
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Function library example</title>
  <style>
    input {
      font-size: 2em;
      margin: 10px 1px 0;
    }
  </style>
</head>
<body>

  <input class="numberInput" type="text">
  <p></p>

  <script>
    const input = document.querySelector('.numberInput');
    const para = document.querySelector('p');

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
}

  </script>
</body>
</html>
     
