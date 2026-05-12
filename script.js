
// === ADIVINA EL NÚMERO - Versión DOM ===

// --- Seleccionar elementos del HTML ---
const inputIntento = document.getElementById('inputIntento');
const btnAdivinar = document.getElementById('btnAdivinar');
const mensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador');
const historial = document.getElementById('historial');
const btnReiniciar = document.getElementById('btnReiniciar');
const tarjeta = document.getElementById('game-card');

console.log('Elementos conectados:', inputIntento, btnAdivinar, mensaje, contador, historial, btnReiniciar, tarjeta);


// --- Tu primera función ---
function mostrarMensaje(texto, color) {
  mensaje.textContent = texto;
  mensaje.style.color = color;
}

// Prueba la función
mostrarMensaje('¡Que comience el desafío!', '#3ed3f8');

// --- Variables del juego ---
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let maxIntentos = 10;
let historialIntentos = [];

console.log('(DEBUG) Número secreto:', numeroSecreto);

// --- Función principal ---
function verificarIntento() {
  let valor = Number(inputIntento.value);

  // Validar entrada
  if (isNaN(valor) || valor < 1 || valor > 100) {
    mostrarMensaje('⚠️ Ingresa un número del 1 al 100', 'orange');
    return;
  }

  // Incrementar contador
  intentos++;
  contador.textContent = 'Intentos: ' + intentos + ' / ' + maxIntentos;

  // Agregar al historial
  historialIntentos.push(valor);
  if (intentos >= maxIntentos && valor !== numeroSecreto) {

  mostrarMensaje(
    '💀 Game Over. El número era ' + numeroSecreto,
    '#ff4d4d'
  );

  btnAdivinar.disabled = true;

  btnReiniciar.style.display = 'inline-block';

  tarjeta.style.borderColor = '#ff4d4d';

  tarjeta.style.boxShadow =
    '0 0 35px rgba(255, 77, 77, 0.7)';

  return;
}
  historial.innerHTML = '';

historialIntentos.forEach(function(numero) {
  let clase = '';

  if (numero === numeroSecreto) {
    clase = 'correcto';
  } else if (numero > numeroSecreto) {
    clase = 'alto';
  } else {
    clase = 'bajo';
  }

  historial.innerHTML += `<span class="intento ${clase}">${numero}</span>`;
});

  // Comparar con el número secreto
  if (valor === numeroSecreto) {
    mostrarMensaje('🏆 ¡Ganaste! El número secreto era ' + numeroSecreto, '#00ff88');
    btnAdivinar.disabled = true;
    btnReiniciar.style.display = 'inline-block';
    // Celebración visual: la tarjeta brilla verde
    tarjeta.style.borderColor = '#00e1ff';
    tarjeta.style.boxShadow = '0 0 40px rgba(46, 238, 206, 0.77)';
  } else if (valor > numeroSecreto) {
    mostrarMensaje('🔥 Muy arriba... intenta un número menor.', '#eb782c');
  } else {
    mostrarMensaje('🥶 Muy bajo... acércate más al objetivo.', '#b766e6');
  }

  // Limpiar input y enfocar
  inputIntento.value = '';
  inputIntento.focus();
}

// --- Conectar eventos ---
btnAdivinar.addEventListener('click', verificarIntento);

// --- Enter también funciona ---
inputIntento.addEventListener('keypress', function(evento) {
  if (evento.key === 'Enter') {
    verificarIntento();
  }
});
// --- Reiniciar juego ---
function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  historialIntentos = [];

  contador.textContent = 'Intentos: 0';
  historial.textContent = 'Historial: ';
  mostrarMensaje('🎯 ¡Nuevo juego! Adivina el número...', '#e9a745');

  btnAdivinar.disabled = false;
  btnReiniciar.style.display = 'none';
  inputIntento.value = '';
  inputIntento.focus();

  // Resetear celebración visual
  tarjeta.style.borderColor = 'rgba(233, 69, 96, 0.3)';
  tarjeta.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.4)';

  console.log('(DEBUG) Nuevo número secreto:', numeroSecreto);
}

// --- Conectar botón reiniciar ---
btnReiniciar.addEventListener('click', reiniciarJuego);

// --- Pista de cercanía ---
function obtenerPista(intento, secreto) {
  let diferencia = Math.abs(intento - secreto);

  if (diferencia <= 5) {
    return '🔥 ¡Muy cerca!';
  } else if (diferencia <= 15) {
    return '♨️ Caliente';
  } else if (diferencia <= 30) {
    return '🌤️ Tibio';
  } else {
    return '❄️ Frío';
  }
}
  