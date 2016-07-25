//VARS
var numQuadrados = 9;
var cores = gerarCoresAleatorias(numQuadrados);

var quadrados = document.querySelectorAll(".quadrado");
var corEscolhida = escolherCor();
var h1 = document.querySelector("h1");
var rgbCor = document.querySelector("#rgbCor");
var mensagem = document.querySelector("#mensagem");
var btnResetar = document.querySelector("#resetar");
var dificuldades = document.querySelectorAll(".dificuldade");
var btnFacil = dificuldades[0];
var btnDificil = dificuldades[1];

//INICIAR
iniciar();

//EVENTOS
btnFacil.addEventListener("click", function() {
    btnFacil.classList.add("ativo");
    btnDificil.classList.remove("ativo");
    numQuadrados = 3;
    resetar();
});

btnDificil.addEventListener("click", function() {
    btnFacil.classList.remove("ativo");
    btnDificil.classList.add("ativo");
    numQuadrados = 9;
    resetar();
});

btnResetar.addEventListener("click", function() {
    resetar();
});

//FUNÇÕES
function iniciar() {
    rgbCor.textContent = corEscolhida;

    for(var i = 0; i < quadrados.length; i++) {
        quadrados[i].style.background = cores[i];

        quadrados[i].addEventListener("click", function() {
            var corClicada = this.style.backgroundColor;
            console.log(corClicada);
            if(corClicada === corEscolhida) {
                btnResetar.textContent = "Jogar Novamente";
                mensagem.textContent = "Acertou!";
                mudarCores(corClicada);
            } else {
                this.style.background = "#232323";
                mensagem.textContent = "Tente Novamente"
            }
        });
    }
}

function resetar() {
    cores = gerarCoresAleatorias(numQuadrados);
    corEscolhida = escolherCor();
    rgbCor.textContent = corEscolhida;
    mensagem.textContent = "";

    for(var i = 0; i < quadrados.length; i++) {
        if(cores[i]) {
            quadrados[i].style.display = "block";
            quadrados[i].style.background = cores[i];
        } else {
            quadrados[i].style.display = "none";
        }
    }

    h1.style.background = "#3c7cb4";
    rgbCor.style.background = "steelblue";
}

function mudarCores(cor) {
    for(var i = 0; i < cores.length; i++) {
        quadrados[i].style.background = cor;
    }
    h1.style.background = cor;
    rgbCor.style.background = cor;
}

function escolherCor() {
    var aleatorio = Math.floor(Math.random() * cores.length);
    return cores[aleatorio];
}

function gerarCoresAleatorias(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(corAleatoria());
    }

    return arr;
}

function corAleatoria() {
    var r =Math.floor(Math.random() * 256);
    var g =Math.floor(Math.random() * 256);
    var b =Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
