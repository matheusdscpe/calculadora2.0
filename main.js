const numeros = document.querySelectorAll('[id*=btn__num]');
const sinais = document.querySelectorAll('[id*=btn__sing]');

const resposta = document.querySelector("#btn__result");
const visor = document.querySelector(".viewfinder");
const limpar = document.querySelector("#btn__clear");

let numeroNovo = true;
let numeroAnterior;
let numeroAtual;
let sinalSelecionado;

const inserir = (evento) => {
    if(numeroNovo){
        visor.innerHTML = evento.target.textContent;
        numeroNovo = false;
    }else{
        visor.innerHTML += evento.target.textContent;
    };
};

const inserirSinal = (evento) => {
    if(!numeroNovo){
        calcular();
        sinalSelecionado = evento.target.textContent;
        console.log(sinalSelecionado)
        numeroAnterior = visor.textContent
        numeroNovo = true;
    };
};

const calcular = () => {
    numeroAtual = visor.textContent;
    if(sinalSelecionado=='+'){
        visor.textContent = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
    }else if(sinalSelecionado=='-'){
        visor.textContent = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
    }else if(sinalSelecionado=='*'){
        visor.textContent = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
    }else if(sinalSelecionado=='/'){
        visor.textContent = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
    };
};

const resultado = () => { 
    calcular();
    sinalSelecionado = undefined;
}

const clear = () => {
    numeroAnterior = 0;
    numeroAtual = 0;
    numeroNovo = true;
    visor.textContent = ''
}



limpar.addEventListener('click', clear)
resposta.addEventListener('click', resultado)
numeros.forEach(numero => numero.addEventListener('click', inserir));
sinais.forEach(sinal => sinal.addEventListener('click', inserirSinal));