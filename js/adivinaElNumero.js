let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinar() {
  const input = document.getElementById("inputNumero");
  const numeroUsuario = parseInt(input.value);
  const mensaje = document.getElementById("mensaje");

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    return;
  }

  intentos++;
  if (numeroUsuario === numeroAleatorio) {
    mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    deshabilitarJuego();
  } else if (numeroUsuario < numeroAleatorio) {
    mensaje.textContent = "El número es mayor. Intenta de nuevo.";
  } else {
    mensaje.textContent = "El número es menor. Intenta de nuevo.";
  }
}

function reiniciar() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  document.getElementById("mensaje").textContent = "";
  document.getElementById("inputNumero").value = "";
  document.getElementById("inputNumero").disabled = false;
}

function deshabilitarJuego() {
  document.getElementById("inputNumero").disabled = true;
}