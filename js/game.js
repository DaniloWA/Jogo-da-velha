let p1 = "x"
let p2 = "o"
let player1 
let player2

let playeTime = player1;
let gameOver = false;

const btn = document.querySelector('#btnStart')
const painelDados = document.querySelector('.pegarDados')
const nomeDoJogadorVez = document.querySelector('#nomeAtual')
const nick1Tabela = document.querySelector('#nick1')
const nick2Tabela = document.querySelector('#nick2')

function getDados(){
    player1 = document.querySelector('#jogador1').value
    player2 = document.querySelector('#jogador2').value
    
    nomeDoJogadorVez.textContent = player1
    nick1Tabela.textContent = player1
    nick2Tabela.textContent = player2
    painelDados.remove();
}

window.addEventListener("click", function(atual){
    let alvo = atual.target;
    console.log(alvo)
    if(gameOver) {return}
    
    console.log(player1, player2)
    console.log(alvo.getElementsByTagName('img').length)
    if(alvo.getElementsByTagName('img').length == 0){
        console.log(playeTime)
        if(playeTime == player1){
            console.log("Player 01 IF")
            alvo.innerHtml = "<img src='/img/x.png'>"
            alvo.setAttribute('jogada', player1)
            playeTime = player2
        } 

        if(playeTime == player2){
            console.log("Player 02 IF")
            alvo.innerHtml = "<img src='/img/circulo.png'>"
            alvo.setAttribute('jogada', player2)
            playeTime = player1
        }
        refresh()
    }

})
tabuleiro()



function refresh(){
    if(gameOver){return}

    if(playeTime == player1) {
        let imagemDaJogadaAtual = document.querySelector('#imgDaVez')
        imagemDaJogadaAtual.setAttribute('src', "/img/x.png")
    }
    
    if(playeTime == player2){
        let imagemDaJogadaAtual = document.querySelector('#imgDaVez')
        imagemDaJogadaAtual.setAttribute('src', "/img/circulo.png")  
    }
}   

function tabuleiro(){
    let espacos = document.querySelectorAll("espaco")
    console.log(espacos)

    for(let i = 0; i < espacos.length; i++){

        espacos[i].addEventListener('click', function(){

            
            })
        }
    }

    /*
    for(let i = 0; 0 < espacos.length; i++){

        espacos.addEventListener('click', function(){
            if(gameOver) {return}

            if(this.getElementsByTagName('img').length == 0){
                if(playeTime == player1){

                    this.innerHtml = "<img src='/img/x.png'>"
                    this.setAttribute('jogada', player1)
                    playeTime = player2
                } 
                
                if(playeTime == player2){

                    this.innerHtml = "<img src='/img/circulo.png'>"
                    this.setAttribute('jogada', player2)
                    playeTime = player1
                }
             
            }   refresh()
        }
    }
     */



