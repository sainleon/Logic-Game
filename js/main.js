function cargarAdivinaElNumero() {
    const contenedor = document.getElementById("contenedor-juego");
    contenedor.innerHTML = `
      <h2>Adivina el Número</h2>
      <p>Adivina un número entre 1 y 100:</p>
      <input type="number" id="inputNumero" min="1" max="100">
      <button onclick="adivinar()">Adivinar</button>
      <p id="mensaje"></p>
    `;
    iniciarAdivinaElNumero();
  }
  
  function cargarTresEnRaya() {
    const contenedor = document.getElementById("contenedor-juego");
    contenedor.innerHTML = `
      <h2>Tres en Raya</h2>
      <div class="tablero" id="tablero"></div>
      <p id="estado"></p>
    `;
    iniciarTresEnRaya();
  }