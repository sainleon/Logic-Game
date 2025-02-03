let tablero = Array(9).fill(null);
let jugadorActual = "X";
let juegoActivo = true;

const combinacionesGanadoras = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
  [0, 4, 8], [2, 4, 6]             // Diagonales
];

function iniciarJuego() {
  const contenedorTablero = document.getElementById("tablero");
  contenedorTablero.innerHTML = "";
  tablero.forEach((valor, indice) => {
    const celda = document.createElement("div");
    celda.classList.add("celda");
    celda.textContent = valor;
    celda.addEventListener("click", () => hacerMovimiento(indice));
    contenedorTablero.appendChild(celda);
  });
  actualizarEstado(`Jugador ${jugadorActual}, es tu turno.`);
}

function hacerMovimiento(indice) {
  if (!juegoActivo || tablero[indice]) return;
  tablero[indice] = jugadorActual;
  iniciarJuego();
  if (verificarGanador()) {
    actualizarEstado(`¡Jugador ${jugadorActual} ha ganado!`);
    juegoActivo = false;
  } else if (tablero.every(celda => celda)) {
    actualizarEstado("¡Empate!");
    juegoActivo = false;
  } else {
    jugadorActual = jugadorActual === "X" ? "O" : "X";
    actualizarEstado(`Jugador ${jugadorActual}, es tu turno.`);
  }
}

function verificarGanador() {
  return combinacionesGanadoras.some(combinacion => {
    const [a, b, c] = combinacion;
    return tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c];
  });
}

function reiniciar() {
  tablero = Array(9).fill(null);
  jugadorActual = "X";
  juegoActivo = true;
  iniciarJuego();
}

function actualizarEstado(mensaje) {
  document.getElementById("estado").textContent = mensaje;
}

// Iniciar el juego al cargar la página
iniciarJuego();