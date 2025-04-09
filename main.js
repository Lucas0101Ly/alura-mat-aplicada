// Seleciona os botões e os conteúdos das abas
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Adiciona o comportamento de alternância de abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        // Remove a classe 'ativo' de todos os botões e textos
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        // Adiciona a classe 'ativo' ao botão e ao texto correspondente
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Define os tempos de objetivo para os cronômetros
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-12-25T00:00:00");
const tempoObjetivo2 = new Date("2025-12-25T00:00:00");
const tempoObjetivo3 = new Date("2025-09-25T00:00:00");
const tempoObjetivo4 = new Date("2025-11-25T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

// Função que calcula o tempo restante
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) {
        return [0, 0, 0, 0]; // Se o tempo acabou, retorna zero
    }

    let dias = Math.floor(tempoFinal / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tempoFinal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tempoFinal % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tempoFinal % (1000 * 60)) / 1000);

    return [dias, horas, minutos, segundos];
}

// Atualiza o cronômetro a cada segundo
function atualizaCronometro() {
    for (let i = 0; i < contadores.length; i++) {
        // Atualiza o conteúdo dos cronômetros
        document.getElementById("dias" + i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas" + i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min" + i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg" + i).textContent = calculaTempo(tempos[i])[3];
    }
}

// Inicia o cronômetro
let intervalo;
function comecaCronometro() {
    if (!intervalo) { // Só inicia o intervalo se não estiver ativo
        intervalo = setInterval(atualizaCronometro, 1000);
    }
    atualizaCronometro(); // Atualiza imediatamente
}

// Inicia o cronômetro
comecaCronometro();
