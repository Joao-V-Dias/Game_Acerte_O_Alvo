const menu = document.querySelector(".menu");
const tela_inicial = document.querySelector(".tela_inicial");
const alvo = document.querySelector(".alvo1");
const alvo2 = document.querySelector(".alvo2");
const game = document.querySelector(".game");
let tempo = 29;
let score = 0;
let best_score = 0;

function placar(){
  document.getElementById("pontuacao").innerText = score;
  document.getElementById("pontuacao_total").innerText = score;
}

function spawn() {
  score++;

  alvo.style.animation = ""
  setTimeout(function(){
    alvo.style.animation = "aumentar_tamanho 2s linear"
  },5)

  let eixo_X = Math.random() * 100;
  eixo_X = eixo_X + "%";

  alvo.style.left = eixo_X;

  let eixo_Y = Math.random() * 100;
  eixo_Y = eixo_Y + "%";

  alvo.style.top = eixo_Y;

  placar()
}


function spawn_alvo2 (){
  score++

  alvo2.style.animation = ""
  setTimeout(function(){
    alvo2.style.animation = "aumentar_tamanho 1s linear"
  },5)

  let eixo_X2 = Math.random() * 100;
  eixo_X2 = eixo_X2 + "%";

  alvo2.style.left = eixo_X2;

  let eixo_Y2 = Math.random() * 100;
  eixo_Y2 = eixo_Y2 + "%";

  alvo2.style.top = eixo_Y2;

  placar()
}

function start(){
  tela_inicial.classList.toggle("active");
  retry()
}

function retry() {
  menu.classList.toggle("active");
  game.classList.toggle("active");

  let temporizador = setInterval(function () {
    if (tempo == 5) {
      document.getElementById("tempo").style.color = "#F50701";
    }

    document.getElementById("tempo").innerHTML = tempo + 's';
    tempo--;

    if (tempo < 0) {
      clearInterval(temporizador);

      if (best_score < score) {
        best_score = score;
        document.getElementById("melhor_pontuacao").innerText = best_score;
      }

      tempo = 30;
      score = 0;

      menu.classList.toggle("active");
      game.classList.toggle("active");

      document.getElementById("pontuacao").innerText = score;
      document.getElementById("tempo").style.color = "#ffff";
      document.getElementById("tempo").style.color = tempo;
    }
  }, 1000);
}
