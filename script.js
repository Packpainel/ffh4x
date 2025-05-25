// script.js

// --------------------------
// ⏱️ CONTAGEM REGRESSIVA DE TEMPO (ex: 5 minutos)
// --------------------------
let tempoRestante = 5 * 60; // 5 minutos em segundos

function atualizarContagem() {
  const minutos = Math.floor(tempoRestante / 60);
  const segundos = tempoRestante % 60;

  const formatado = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
  const contadorTempo = document.getElementById('countdown');

  if (contadorTempo) {
    contadorTempo.textContent = formatado;
  }

  if (tempoRestante > 0) {
    tempoRestante--;
  } else {
    clearInterval(intervaloTempo);
    if (contadorTempo) {
      contadorTempo.textContent = "00:00";
    }
  }
}

// Inicia a contagem quando a página carrega
const intervaloTempo = setInterval(atualizarContagem, 1000);
atualizarContagem(); // Atualiza imediatamente no carregamento

// --------------------------
// 🔢 CONTADOR DE UNIDADES DISPONÍVEIS (ex: 50 → 49 → ...)
// --------------------------
document.addEventListener("DOMContentLoaded", () => {
  let contador = 100;
  const contadorEl = document.getElementById('contador');

  if (contadorEl) {
    contadorEl.textContent = contador;

    const intervaloUnidades = setInterval(() => {
      contador--;
      if (contador >= 0) {
        contadorEl.textContent = contador;
      } else {
        clearInterval(intervaloUnidades);
        contadorEl.textContent = "0";
      }
    }, 1000);
  }
});
