// script.js

// Duração de 10 minutos
let tempoRestante = 5 * 60;

function atualizarContagem() {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  const formatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  const contador = document.getElementById('countdown');

  if (contador) {
    contador.textContent = formatado;
  }

  if (tempoRestante > 0) {
    tempoRestante--;
  } else {
    clearInterval(intervalo);
    contador.textContent = "00:00";
  }
}

// Executa imediatamente e atualiza a cada segundo
atualizarContagem();
const intervalo = setInterval(atualizarContagem, 1000);
