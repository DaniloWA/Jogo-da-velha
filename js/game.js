class Jogador {
    constructor(){
        this.nome = "default";
        this.simbolo;
        this.placar = 0;
    }
    adcNome(name){
        this.nome = name;
    }
    adcSimbolo(simbolo){
        this.simbolo = simbolo;
    }
    addPlacar(){
        this.placar++
    }
}

let player1 = new Jogador()
let player2 = new Jogador()

let playeTime;
let vencedor = '';

const btn = document.querySelector('#btnStart')
const painelDados = document.querySelector('.pegarDados')
const nomeDoJogadorVez = document.querySelector('#nomeAtual')
const nick1Tabela = document.querySelector('#nick1')
const nick2Tabela = document.querySelector('#nick2')
const placarP1 = document.querySelectorAll('.pontos1')
const placarP2 = document.querySelectorAll('.pontos2')
const tabuleiro = document.querySelectorAll('.espaco')

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
        if(playeTime === player1.nome && player1.nome != "default"){
            criarElementos("x", alvo)
            alvo.setAttribute('jogada', player1.nome)
            playeTime = player2.nome
            nomeDoJogadorVez.textContent = player2.nome
        } else if(playeTime === player2.nome && player2.nome != "default"){
            criarElementos("o", alvo)
            alvo.setAttribute('jogada', player2.nome)
            playeTime = player1.nome
            nomeDoJogadorVez.textContent = player1.nome
        }
        refresh()
        verificarVencedor();
    } else
        return

})

function criarElementos(simbolo,alvo){
    let imgNova = document.createElement("img");
    imgNova.className = "tabuleiroClean"
    if(simbolo == "x"){
        imgNova.src="/img/x.png"
        imgNova.alt="X"
        alvo.appendChild(imgNova)
    } else {
        imgNova.src="/img/circulo.png"
        imgNova.alt="O"
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

function cleanTabuleiro(){
    document.querySelectorAll(".tabuleiroClean").forEach(el => el.remove());
    document.querySelectorAll(".espaco").forEach(el => el.setAttribute('jogada', 'f'));
    vencedor = '';
}

function resetGame(win){
    document.querySelectorAll(".tabuleiroClean").forEach(el => el.remove());
    document.querySelectorAll(".umPonto").forEach(el => el.remove());
    document.querySelectorAll(".espaco").forEach(el => el.setAttribute('jogada', 'f'));
    alert('Jogador ' + win + ' Ganhou o jogo! Parabéns!')
}

function adicionarPlacar(jogador){

    let imgNova = document.createElement("img"); 
    imgNova.src="/img/winner.png"
    imgNova.className ="umPonto"

    if(jogador == player1.nome){
        for(let i = 0; i < placarP1.length;i++){
            if(placarP1[i].getElementsByTagName('img').length == 0){
              console.log('Dentro Do if FOR :' + placarP1[i].getElementsByTagName('img').length)
              return  placarP1[i].appendChild(imgNova)
            }
        }
    } else if (jogador == player2.nome) {
        for(let i = 0; i < placarP2.length;i++){
            if(placarP2[i].getElementsByTagName('img').length == 0){
              console.log('Dentro Do if FOR :' + placarP2[i].getElementsByTagName('img').length)
              return  placarP2[i].appendChild(imgNova)
            }
        }
    }
}

function verificarVencedor(){
    let a1 = document.getElementById('a1').getAttribute('jogada');
    let a2 = document.getElementById('a2').getAttribute('jogada');
    let a3 = document.getElementById('a3').getAttribute('jogada');

    let b1 = document.getElementById('b1').getAttribute('jogada');
    let b2 = document.getElementById('b2').getAttribute('jogada');
    let b3 = document.getElementById('b3').getAttribute('jogada');

    let c1 = document.getElementById('c1').getAttribute('jogada');
    let c2 = document.getElementById('c2').getAttribute('jogada');
    let c3 = document.getElementById('c3').getAttribute('jogada');

    if((a1 == b1 && a1 == c1) || (a1 == a2 && a1 == a3) || (a1 == b2 && a1 == c3) && (a1 != 'f')){
        vencedor = a1;
        if(vencedor == player1.nome) {
            if(player1.placar == 4){
                return resetGame(player1.nome)
            }
            console.log('Jogador ' + player1.nome + ' Ganhou!')
            player1.addPlacar()
            adicionarPlacar(vencedor)
            cleanTabuleiro()
            console.log('Vitorias do ' + player1.nome + ' : ' + player1.placar)
        }

        if(vencedor == player2.nome) {
            if(player2.placar == 4){
                return resetGame(player2.nome)
            }
            console.log('Jogador ' + player2.nome + ' Ganhou!')
            player2.addPlacar()
            adicionarPlacar(vencedor)
            cleanTabuleiro()
            console.log('Vitorias do ' + player2.nome + ' : ' + player2.placar)
        }
    }
    if ((b2 == b1 && b2 == b3) || (b2 == a2 && b2 == c2) || (b2 == a3 && b2 == c1) && (b2 != 'f')){
         vencedor = b2;
         if(vencedor == player1.nome) {
            if(player1.placar == 4){
                return resetGame(player1.nome)
            }
            console.log('Jogador ' + player1.nome + ' Ganhou!')
            player1.addPlacar()
            adicionarPlacar(vencedor)
            cleanTabuleiro()
            console.log('Vitorias do ' + player1.nome + ' : ' + player1.placar)
        }

        if(vencedor == player2.nome) {
            if(player2.placar == 4){
                return resetGame(player2.nome)
            }
            console.log('Jogador ' + player2.nome + ' Ganhou!')
            player2.addPlacar()
            adicionarPlacar(vencedor)
            cleanTabuleiro()
            console.log('Vitorias do ' + player2.nome + ' : ' + player2.placar)
        }
    }
    if((c3 == b3 && c3 == a3) || (c3 == c2 && c3 == c1) && (c3 != 'f')){
        vencedor = c3;
        if(vencedor == player1.nome) {
            if(player1.placar == 4){
                return resetGame(player1.nome)
            }
            console.log('Jogador ' + player1.nome + ' Ganhou!')
            player1.addPlacar()
            adicionarPlacar(vencedor)
            cleanTabuleiro()
            console.log('Vitorias do ' + player1.nome + ' : ' + player1.placar)
        }

        if(vencedor == player2.nome) {
            if(player2.placar == 4){
                return resetGame(player2.nome)
            }
            console.log('Jogador ' + player2.nome + ' Ganhou!')
            player2.addPlacar()
            adicionarPlacar(vencedor)
            cleanTabuleiro()
            console.log('Vitorias do ' + player2.nome + ' : ' + player2.placar)
        }
    }
}
