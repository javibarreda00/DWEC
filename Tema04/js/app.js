/*
  Tarea 4 · DWEC · [Tu nombre y apellidos]
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1= leerNumero("numero1");
  const n2= leerNumero("numero2");

if (Number.isNaN(n1) || Number.isNaN(n2)) {
mostrar("Escribe los dos números antes de operar.", "danger");
console.warn("Restar: falta algún número");
}  else {
  const resultado = n1 - n2;
  mostrar(`${n1} - ${n2} = ${resultado}`);
  console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
}
}

function multiplicar() {

  const n1= leerNumero("numero1");
  const n2= leerNumero("numero2");

if(Number.isNaN(n1) || Number.isNaN(n2)){
  mostrar("Escribe los dos números antes de operar.", "danger");
  console.warn("Multiplicar: falta algún número");
}  else {

  const resultado= n1 * n2;
  mostrar(`${n1} * ${n2} = ${resultado}`);
  console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);

}
}

function dividir() {

  const n1= leerNumero("numero1");
  const n2= leerNumero("numero2");

  if(Number.isNaN(n1) || Number.isNaN(n2)){
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir:falta algún número");
  } else if (n1 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: el dividendo es 0");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: el divisor es 0");
  } else {

    const resultado= n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1= leerNumero("numero1");
  const n2= leerNumero("numero2");

if (Number.isNaN(n1) || Number.isNaN(n2)) {
mostrar("Escribe los dos números antes de operar.", "danger");
console.warn("Potencia: falta algún número");
}  else {
  const resultado = n1 ** n2;
  mostrar(`${n1} ** ${n2} = ${resultado}`);
  console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
}
  
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Modulo: falta algún número");
  } else if (n1 === 0) {
    mostrar("El número 1 no puede ser 0.", "danger");
    console.warn("Modulo: el número 1 es 0");
  } else if (n2 === 0) {
    mostrar("No se puede calcular el módulo con divisor 0.", "danger");
    console.warn("Modulo: el divisor es 0");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Modulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1= leerNumero("numero1");
  const n2= leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de comparar.", "danger");
    console.warn("Comparar:falta algñun número");
  }else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
    console.log(`Comparar: ${n1} es mayor que ${n2}`);
  } else if (n2 > n1) {
    mostrar(`${n2} es mayor que ${n1}.`);
    console.log(`Comparar: ${n2} es mayor que ${n1}`);

  } else{
    mostrar(`${n1} y ${n2} son iguales.`);
    console.log(`Comparar: ${n1} y ${n2} son iguales`);
  }    
}

function parOImpar() {

  const n1= leerNumero("numero1");

  if (Number.isNaN(n1)){
    mostrar("Escribe un número antes de comprobar", "danger");
    console.warn("Saber si es PAR|IMPAR: falta un número");
  } else if (!Number.isInteger(n1)) {
  mostrar(`${n1} no es par ni impar`);
  } else {

    const resultado= n1 % 2 === 0 ? "par" : "impar";
    mostrar(`${n1} es un numero ${resultado}.`);
    console.log(`ParImpar: ${n1} es ${resultado}`);

  }

}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (
    Number.isNaN(veces) ||
    !Number.isInteger(veces) ||
    veces > MAXIMO_REPETICIONES
  ) {
    mostrar(`Introduce un número entero que no supere ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("Bucle For:número no válido");

  } else {
    let contador = 0;

    for(let i = 1; i <= veces; i++) {
      anadirLinea(`for · repetición ${i} de ${veces}`);
      contador++;
    }
     const palabra = contador === 1 ? "repetición" : "repeticiones";
     anadirLinea(`Total: ${contador} ${palabra}`);
  }
}

function bucleWhile() {

  const veces = leerNumero("numero1");
  limpiarSalida();

  if (
    Number.isNaN(veces) ||
    !Number.isInteger(veces) ||
    veces > MAXIMO_REPETICIONES
  ) {
    mostrar(`Introduce un número entero que no supere ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("Bucle For:número no válido");

  } else {
    let contador = 0;

    while (contador < veces) {
      contador++;
     anadirLinea(`while . repeticion ${contador} de  ${veces}`);
  }

  const palabra = contador === 1 ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${palabra}`);

  
}

}

function bucleDoWhile() {

   const veces = leerNumero("numero1");
  limpiarSalida();

  if (
    Number.isNaN(veces) ||
    !Number.isInteger(veces) ||
    veces > MAXIMO_REPETICIONES
  ) {
    mostrar(`Introduce un número entero que no supere ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("Bucle For:número no válido");

  } else {
    let contador = 0;

    do {
      contador++;
      anadirLinea(`do  while . repeticion ${contador} de ${veces}`);
  } while (contador < veces);

  const palabra = contador === 1 ? "repetición" : "repeticiones";
  anadirLinea(`Total: ${contador} ${palabra}`); 
}
  
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {

  const veces = leerNumero("numero1");
  limpiarSalida();

  if (
    Number.isNaN(veces) ||
    !Number.isInteger(veces) ||
    veces > MAXIMO_REPETICIONES
  ) {
    mostrar(`Introduce un número entero que no supere ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("Bucle For:número no válido");

  } else {
    let contador = 0;

    for(let i = 1; i <= veces; i++) {
      const color= i % 2 === 0 ? "primary" : "danger";
      anadirBadge(i,color);
      contador++;
    }
     const palabra = contador === 1 ? "repetición" : "repeticiones";
     anadirLinea(`Total: ${contador} ${palabra}`);
  }
 
}

function badgesWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if (
    Number.isNaN(veces) ||
    !Number.isInteger(veces) ||
    veces > MAXIMO_REPETICIONES
  ) {
    mostrar(`Introduce un número entero que no supere ${MAXIMO_REPETICIONES}.`, "danger");
    console.warn("Bucle For:número no válido");

  } else {
    let contador = 0;

    while(contador < veces) {
      contador++;
      const color = contador % 2 === 0 ? "primary" : "danger";
      anadirBadge(contador, color);
  
    }
     const palabra = contador === 1 ? "repetición" : "repeticiones";
     anadirLinea(`Total: ${contador} ${palabra}`);
  }
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
}
