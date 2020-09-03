let jogador = 1;
let casaEl = document.querySelectorAll('.casa');
let jogadorVez = document.querySelector('p#jogador-vez');
let buttonEl = document.querySelector('button');
let jogadas = 0;
let pontuacao = document.querySelectorAll('span.pontuacao');
let pontuacaoJog1 = 0;
let pontuacaoJog2 = 0;
let vitoria = false;

for (let casa of casaEl){
    casa.addEventListener('click', (e) =>{
        if(vitoria!=true){
            if(casa.innerHTML == ''){
                if(jogador%2==0){
                    casa.innerHTML = 'O';
                }
                else{
                    casa.innerHTML = "X";
                }
                jogadas++;
                atualizaJogador();
            }
            
            verificaVencedor();
        }
    });
}

function verificaVencedor(){
    if(casaEl[0].innerHTML == "X" && casaEl[1].innerHTML == "X" && casaEl[2].innerHTML == "X" ||
        casaEl[3].innerHTML == "X" && casaEl[4].innerHTML == "X" && casaEl[5].innerHTML == "X" ||
        casaEl[6].innerHTML == "X" && casaEl[7].innerHTML == "X" && casaEl[8].innerHTML == "X"){
            
            pontuacaoJog1++;
            pontuacao[0].innerHTML = pontuacaoJog1;
            jogadorVez.innerHTML = "Jogador 1 venceu";
            // alert("Jogador 1 venceu");
            vitoria=true;
            jogador = 1;
    }
    else if(casaEl[0].innerHTML == "X" && casaEl[3].innerHTML == "X" && casaEl[6].innerHTML == "X" ||
        casaEl[1].innerHTML == "X" && casaEl[4].innerHTML == "X" && casaEl[7].innerHTML == "X" ||
        casaEl[3].innerHTML == "X" && casaEl[5].innerHTML == "X" && casaEl[8].innerHTML == "X"){

            pontuacaoJog1++;
            jogadorVez.innerHTML = "Jogador 1 venceu";
            // alert("Jogador 1 venceu");
            pontuacao[0].innerHTML = pontuacaoJog1++;
            vitoria=true;
            jogador = 1;

    }
    else if(casaEl[0].innerHTML == "X" && casaEl[4].innerHTML == "X" && casaEl[8].innerHTML == "X" ||
        casaEl[2].innerHTML == "X" && casaEl[4].innerHTML == "X" && casaEl[6].innerHTML == "X"){

            pontuacaoJog1++;
            jogadorVez.innerHTML = "Jogador 1 venceu";
            // alert("Jogador 1 venceu");
            pontuacao[0].innerHTML = pontuacaoJog1++;
            vitoria=true;
            jogador = 1;

    }
    else if(casaEl[0].innerHTML == "O" && casaEl[1].innerHTML == "O" && casaEl[2].innerHTML == "O" ||
            casaEl[3].innerHTML == "O" && casaEl[4].innerHTML == "O" && casaEl[5].innerHTML == "O" ||
            casaEl[6].innerHTML == "O" && casaEl[7].innerHTML == "O" && casaEl[8].innerHTML == "O"){

                pontuacaoJog2++;
                jogadorVez.innerHTML = "Jogador 2 venceu";
                // alert("Jogador 2 venceu");
                pontuacao[1].innerHTML = pontuacaoJog2++;
                vitoria=true;
                jogador = 2;

    }
    else if(casaEl[0].innerHTML == "O" && casaEl[3].innerHTML == "O" && casaEl[6].innerHTML == "O" ||
            casaEl[1].innerHTML == "O" && casaEl[4].innerHTML == "O" && casaEl[7].innerHTML == "O" ||
            casaEl[3].innerHTML == "O" && casaEl[5].innerHTML == "O" && casaEl[8].innerHTML == "O"){

                pontuacaoJog2++;
                jogadorVez.innerHTML = "Jogador 2 venceu";
                // alert("Jogador 2 venceu");
                pontuacao[1].innerHTML = pontuacaoJog2++;
                vitoria=true;
                jogador = 2;

    }
    else if(casaEl[0].innerHTML == "O" && casaEl[4].innerHTML == "O" && casaEl[8].innerHTML == "O" ||
            casaEl[2].innerHTML == "O" && casaEl[4].innerHTML == "O" && casaEl[6].innerHTML == "O"){
                pontuacaoJog2++;
                jogadorVez.innerHTML = "Jogador 2 venceu";
                // alert("Jogador 2 venceu");
                pontuacao[1].innerHTML = pontuacaoJog2++;
                vitoria=true;
                jogador = 2;

    }
    else if(jogadas>=8){
        jogadorVez.innerHTML = "Deu velha";
        // alert("Deu velha");
        vitoria=true;
        jogador = 1;

    }
}

function atualizaJogador(){
    jogador++;
    if(jogador%2==1){
        jogadorVez.innerHTML = `Vez de jogador 1`;
    }
    else{
        jogador = 0;
        jogadorVez.innerHTML = `Vez de jogador 2`;
    }
}

buttonEl.addEventListener('click', () => {
    for(let casa of casaEl){
        casa.innerHTML = '';
        jogadas = 0;
        //jogador = 1;
        vitoria=false;
        jogadorVez.innerHTML = "Vez de jogador "+jogador;
    }
});