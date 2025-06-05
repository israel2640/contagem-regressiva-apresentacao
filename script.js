// Altere a data da apresentação aqui:
const dataApresentacao = new Date("2025-06-20T19:00:00").getTime();

function atualizarContagem() {
  const agora = new Date().getTime();
  const tempoRestante = dataApresentacao - agora;

  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias
    .toString()
    .padStart(2, "0");
  document.getElementById("horas").textContent = horas
    .toString()
    .padStart(2, "0");
  document.getElementById("minutos").textContent = minutos
    .toString()
    .padStart(2, "0");
  document.getElementById("segundos").textContent = segundos
    .toString()
    .padStart(2, "0");

  if (tempoRestante < 0) {
    clearInterval(intervalo);
    document.querySelector(".countdown").innerHTML =
      "<h2>É hora da apresentação!</h2>";
  }
}

const intervalo = setInterval(atualizarContagem, 1000);
