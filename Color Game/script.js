var cores = gerarCoresAleatorias(6);
var numQuadrados = 6;

var quadrados = document.querySelectorAll(".quadrado");
var corEscolhida = escolherCor();
var rgbCor = document.querySelector("#rgbCor");
var mensagem = document.querySelector("#mensagem");
var btnReset = document.querySelector("#resetar");
var btnFacil = document.querySelector("#btnFacil");
var btnDificil = document.querySelector("#btnDificil");

btnFacil.addEventListener("click", function() {
    btnFacil.classList.add("ativo");
    btnDificil.classList.remove("ativo");
    cores = gerarCoresAleatorias(numQuadrados);
    corEscolhida = escolherCor();
    rgbCor.textContent = corEscolhida;
    for(var i = 0; i < quadrados.length; i++) {
        if(cores[i]) {
            quadrados[i].style.background = cores[i];
            quadrados[i].style.display = "none";
        }
    }
});

btnDificil.addEventListener("click", function() {
    btnFacil.classList.remove("ativo");
    btnDificil.classList.add("ativo");
    numQuadrados = 6;
    cores = gerarCoresAleatorias(numQuadrados);
    corEscolhida = escolherCor();
    rgbCor.textContent = corEscolhida;
    for(var i = 0; i < quadrados.length; i++) {
        quadrados[i].style.background = cores[i];
        quadrados[i].style.display = "none";
    }
});

btnReset.addEventListener("click", function() {
    cores = gerarCoresAleatorias(numQuadrados);
    corEscolhida = escolherCor();
    rgbCor.textContent = corEscolhida;

    for(var i = 0; i < quadrados.length; i++) {
        quadrados[i].style.background = cores[i];
    }
});

rgbCor.textContent = corEscolhida;

for(var i = 0; i < quadrados.length; i++) {
    quadrados[i].style.background = cores[i];

    quadrados[i].addEventListener("click", function() {
        var corClicada = this.style.backgroundColor;
        console.log(corClicada);
        if(corClicada === corEscolhida) {
            btnReset.textContent = "Jogar Novamente";
            mensagem.textContent = "Acertou!";
            mudarCores(corClicada);
        } else {
            this.style.background = "#232323";
            mensagem.textContent = "Tente Novamente"
        }
    });
}

function mudarCores(cor) {
    for(var i = 0; i < cores.length; i++) {
        quadrados[i].style.background = cor;
    }
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
