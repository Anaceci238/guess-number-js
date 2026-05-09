/*let nombre = "Ana";
let edad = 32
let estoyAprendiendo ="programación"
console.log(nombre)
console.log(edad)
console.log(estoyAprendiendo)

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estoyAprendiendo)

const curso = "Code 101";
const maxIntentos = 20;
console.log(curso);
console.log(maxIntentos);

let nombreUsuario = prompt('¿Cómo te llamas?');
console.log(nombreUsuario);

let edadUsuario = prompt("¿Cuántos años tienes?");
console.log(edadUsuario);

let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 27
console.log('Resta:', a - b);       // 13
console.log(a * b);
console.log(a / b);
console.log(a % b);

let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

let saludo2= `Hola ${nombreUsuario} tienes ${edadUsuario} años`;
console.log(saludo2);

// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

// Completa el mensaje usando template literals:
// Debe decir: "Hola [nombre], naciste aproximadamente en [año]"
let mensaje= `Hola ${nombreUsuario}, naciste aproximadamente en ${anioNacimiento}`;
console.log(mensaje);

*/

let total = parseFloat(prompt("Ingresa el precio total:"));

let precioFinal;

if (total > 100) {
  precioFinal = total * 0.80; // 20% de descuento
} else if (total >= 50 && total <= 100) {
  precioFinal = total * 0.90; // 10% de descuento
} else {
  precioFinal = total; // Sin descuento
}

// Mostrar resultado
alert("Tu precio final es: $" + precioFinal);

