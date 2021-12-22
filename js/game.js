class Jogador {
    constructor(){
        this.nome;
        this.simbolo;
    }
    adcNome(name){
        this.nome = name;
    }
    adcSimbolo(simbolo){
        this.simbolo = simbolo;
    }
}

let player1 = new Jogador()
let player2 = new Jogador()

let playeTime;
let gameOver = false;

const btn = document.querySelector('#btnStart')
const painelDados = document.querySelector('.pegarDados')
const nomeDoJogadorVez = document.querySelector('#nomeAtual')
const nick1Tabela = document.querySelector('#nick1')
const nick2Tabela = document.querySelector('#nick2')

function getDados(){
    player1.adcNome(document.querySelector('#jogador1').value)
    player1.adcSimbolo("x")

    player2.adcNome(document.querySelector('#jogador2').value) 
    player2.adcSimbolo("o")

    nomeDoJogadorVez.textContent = player1.nome
    playeTime = player1.nome
    nick1Tabela.textContent = player1.nome
    nick2Tabela.textContent = player2.nome
    painelDados.remove();

}

window.addEventListener("click", function(atual){
    let alvo = atual.target;
    if(gameOver) {return console.log('Game Over - identificado pelo Click')}

    if(alvo.getAttribute('jogada') == "f"){
        if(playeTime === player1.nome){
            criarElementos("x", alvo)
            alvo.setAttribute('jogada', player1.nome)
            playeTime = player2.nome
            nomeDoJogadorVez.textContent = player2.nome
        } else{
            criarElementos("o", alvo)
            alvo.setAttribute('jogada', player2.nome)
            playeTime = player1.nome
            nomeDoJogadorVez.textContent = player1.nome
        }
        refresh()
    } else
        return

})

function criarElementos(simbolo,alvo){
    var imgNova = document.createElement("img");
    
    if(simbolo == "x"){
        imgNova.src="/img/x.png"
        imgNova.alt="X"
        alvo.appendChild(imgNova)
    } else {
        imgNova.src="/img/circulo.png"
        imgNova.alt="X"
        alvo.appendChild(imgNova)
    }
}

function refresh(){
    if(gameOver){return}

    if(playeTime == player1.nome) {
        let imagemDaJogadaAtual = document.querySelector('#imgDaVez')
        imagemDaJogadaAtual.setAttribute('src', "/img/x.png")
    }
    
    if(playeTime == player2.nome){
        let imagemDaJogadaAtual = document.querySelector('#imgDaVez')
        imagemDaJogadaAtual.setAttribute('src', "/img/circulo.png")  
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



