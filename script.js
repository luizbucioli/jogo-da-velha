var jogador = null;
var joagadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var jogoEncerrado = false;
// var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');


function escolherQuadrado(id){
    if(jogoEncerrado) return;
    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML !== '-'){
        return ;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if(jogador === 'X'){
        jogador = 'O';
    } else{
        jogador = 'X';
    };
    mudarJogador(jogador);
    checaVencedor();
};

function mudarJogador(valor){
    jogador = valor
    joagadorSelecionado.innerHTML = jogador;
};

function checaVencedor(){
    let quadrado1 = document.getElementById(1);
    let quadrado2 = document.getElementById(2);
    let quadrado3 = document.getElementById(3);
    let quadrado4 = document.getElementById(4);
    let quadrado5 = document.getElementById(5);
    let quadrado6 = document.getElementById(6);
    let quadrado7 = document.getElementById(7);
    let quadrado8 = document.getElementById(8);
    let quadrado9 = document.getElementById(9);

    if(chacaSequecia(quadrado1, quadrado2, quadrado3)){
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3)
        mudarVencedor(quadrado1)
        return;
    }
    if(chacaSequecia(quadrado4, quadrado5, quadrado6)){
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6)
        mudarVencedor(quadrado4)
        return;
    }
    if(chacaSequecia(quadrado7, quadrado8, quadrado9)){
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9)
        mudarVencedor(quadrado7)
        return;
    }
    if(chacaSequecia(quadrado1, quadrado4, quadrado7)){
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7)
        mudarVencedor(quadrado1)
        return;
    }
    if(chacaSequecia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8)
        mudarVencedor(quadrado2)
        return;
    }
    if(chacaSequecia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9)
        mudarVencedor(quadrado3)
        return;
    }
    if(chacaSequecia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9)
        mudarVencedor(quadrado1)
        return;
    }
    if(chacaSequecia(quadrado3, quadrado5, quadrado7)){
        mudaCorQuadrado(quadrado3, quadrado5, quadrado7)
        mudarVencedor(quadrado3)
        return;
    }
    if(chacaSequeciaEmpate(quadrado1, quadrado2, quadrado3, quadrado4, quadrado5, quadrado6, quadrado7, quadrado8, quadrado9)){
        jogoEmpatado();
        return;
    }
}

function mudarVencedor(quadrado){
    jogoEncerrado = true;
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function chacaSequecia(quadrado1, quadrado2, quadrado3){
    let eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }

    return eigual; 
}

function reiniciar(){
    jogoEncerrado = false;
    vencedorSelecionado.innerHTML = '';
    for(let i = 1; i <= 9; i++){
        const quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X');
}


function chacaSequeciaEmpate(quadrado1, quadrado2, quadrado3, quadrado4, quadrado5, quadrado6, quadrado7, quadrado8, quadrado9){
    let eigual = false;

    if(quadrado1.innerHTML !== '-' && quadrado2.innerHTML !== '-' && quadrado3.innerHTML !=='-' && quadrado4.innerHTML !== '-' && quadrado5.innerHTML !== '-' && quadrado6.innerHTML !== '-' && quadrado7.innerHTML !== '-' && quadrado8.innerHTML !== '-' && quadrado9.innerHTML !== '-'){
        eigual = true;
    }

    return eigual; 
}
function jogoEmpatado(){
    jogoEncerrado = true;
    vencedorSelecionado.innerHTML = 'Jogo Empatado!!';
}