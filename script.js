const menu = document.querySelector(".menu");
const alvo = document.querySelector(".alvo");
let tempo = 30;
let score = 0;
let best_score = 0;

function spawn() {
  score++;

  let eixo_X = Math.random() * 100;
  eixo_X = eixo_X + "%";

  alvo.style.left = eixo_X;

  let eixo_Y = Math.random() * 100;
  eixo_Y = eixo_Y + "%";

  alvo.style.top = eixo_Y;

  document.getElementById("pontuacao").innerText = score;
  document.getElementById("pontuacao_total").innerText = score;
}

function play() {
  menu.classList.toggle("active");
  alvo.classList.toggle("active");

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
      alvo.classList.toggle("active");

      document.getElementById("pontuacao").innerText = score;
      document.getElementById("tempo").style.color = "#ffff";
    }
  }, 1000);
}
