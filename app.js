let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.4});
}

function mensagemIncial(){
exibirTextoNaTela('h1', 'Jogo Do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

mensagemIncial();

function verificarClick() {
    let chute = document.querySelector('input').value;
    if (chute == numSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        
        let pluralTentar = tentativas > 1 ? 'tentativas' : 'tentativa';
        
        let numTentivas = `Você descobriu o número secreto com ${tentativas} ${pluralTentar}`;
        
        exibirTextoNaTela('p', numTentivas);
        
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++ ;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * numeroLimite + 1);
    let quatidadeDeElementos = listaDeNumerosSorteados.length;
    
    if(quatidadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroGerado);
        console.log(listaDeNumerosSorteados);
        return numeroGerado;
    };
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}