let tablero;
let jugadorActual = "X";
let estado;

function iniciarTresEnRaya() {
  tablero = Array(9).fill(null);
  jugadorActual = "X";
  estado = "Jugador X, es tu turno.";
  renderizarTablero();
  actualizarEstado();
}

function renderizarTablero() {
  const contenedorTablero = document.getElementById("tablero");
  contenedorTablero.innerHTML = "";
  tablero.forEach((valor, indice) => {
    const celda = document.createElement("div");
    celda.classList.add("celda");
    celda.textContent = valor;
    celda.addEventListener("click", () => hacerMovimiento(indice));
    contenedorTablero.appendChild(celda);
  });
}

function hacerMovimiento(indice) {
  if (tablero[indice] || verificarGanador()) return;
  tablero[indice] = jugadorActual;
  renderizarTablero();
  if (verificarGanador()) {
    estado = `¡Jugador ${jugadorActual} ha ganado!`;
  } else if (tablero.every(celda => celda)) {
    estado = "¡Empate!";
  } else {
    jugadorActual = jugadorActual === "X" ? "O" : "X";
    estado = `Jugador ${jugadorActual}, es tu turno.`;
  }
  actualizarEstado();
}

function verificarGanador() {
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
  ];

  return combinacionesGanadoras.some(combinacion => {
    const [a, b, c] = combinacion;
    return tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c];
  });
}

function actualizarEstado() {
  document.getElementById("estado").textContent = estado;
}