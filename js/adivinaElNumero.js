let numeroAleatorio;
let intentos = 0;

function iniciarAdivinaElNumero() {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  document.getElementById("mensaje").textContent = "";
}

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
    iniciarAdivinaElNumero(); // Reiniciar el juego
  } else if (numeroUsuario < numeroAleatorio) {
    mensaje.textContent = "El número es mayor. Intenta de nuevo.";
  } else {
    mensaje.textContent = "El número es menor. Intenta de nuevo.";
  }
}