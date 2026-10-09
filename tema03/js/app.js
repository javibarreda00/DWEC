/*
  Tarea 3 · DWEC · Javier Barreda Zurera
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");

// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  const edad = 20;
  console.log("edad =", edad, "→", typeof edad);

  const nombre = "Javi";
  console.log("nombre =", nombre, "→", typeof nombre);

  const estudiante = true;
  console.log("estudiante =", estudiante, "→", typeof estudiante);

  const sorpresa = null;
  console.log("sorpresa =", sorpresa, "→", typeof sorpresa);

  const numeroEnorme = 20n;
  console.log("numeroEnorme =", numeroEnorme, "→", typeof numeroEnorme);

  let asignaturasAprobadas;
  console.log("asignaturasAprobadas =", asignaturasAprobadas, "→", typeof asignaturasAprobadas);

  asignaturasAprobadas = 8;
  console.log("asignaturasAprobadas =", asignaturasAprobadas, "→", typeof asignaturasAprobadas);
}

// Ejercicio 2 · Conversiones explícitas
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  const a = String(123); // Espero que salga "123"
  console.log("String(123) →", a, typeof a);

  const b = Number("123"); // Espero que salga 123
  console.log('Number("123") →', b, typeof b);

  const c = Number("12abc"); // Espero que salga NaN
  console.log('Number("12abc") →', c, typeof c);

  const d = Number(""); // Espero que me de 0
  console.log('Number("") →', d, typeof d);

  const e = Number(true); // Espero que salga 1
  console.log("Number(true) →", e, typeof e);

  const f = Boolean(0); // Espero que salga false
  console.log("Boolean(0) →", f, typeof f);

  const g = Boolean("texto"); // Espero que salga true
  console.log('Boolean("texto") →', g, typeof g);

  const h = Boolean(""); // Espero que salga false
  console.log('Boolean("") →', h, typeof h);
}

// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  console.log('"5" - 2 →', "5" - 2); // Espero que salga 3
  console.log('"5" + 2 →', "5" + 2); // Espero que salga "52"
  console.log("true + 1 →", true + 1); // Espero que salga 2
  console.log('"1" + 3 + 5 →', "1" + 3 + 5); // Espero que salga "135"
  console.log('2 + 6 + "5" →', 2 + 6 + "5"); // Espero que salga "85"
  console.log('"chao" - 1 →', "chao" - 1); // Espero que salga NaN

  console.log('5 == "5" →', 5 == "5"); // Espero true
  console.log('5 === "5" →', 5 === "5"); // Espero false
  console.log("0 == false →", 0 == false); // Espero true
  console.log("0 === false →", 0 === false); // Espero false
  console.log("null == undefined →", null == undefined); // Espero true
  console.log("null === undefined →", null === undefined); // Espero false
}

function ejercicio4() {
  console.log("--- Ejercicio 4 · Mi Ficha con Plantillas de Cadena ---");

  const nombre = "Javier";
  const apellidos = "Barreda";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2º";
  const aficion = "Videojuegos";

  let horasEstudiadas = 3;
  horasEstudiadas += 3;

  const ficha = `Mi nombre es ${nombre} ${apellidos}, estudio ${ciclo}, en el curso ${curso} y mi afición son los ${aficion}. Esta semana he estudiado ${horasEstudiadas} horas.`;
  alert(ficha);
  console.log(ficha);

  const fichaConMas = "Mi nombre es " + nombre + " " + apellidos + ", estudio " + ciclo + ", en el curso " + curso + " y mi afición son los " + aficion + ". Esta semana he estudiado " + horasEstudiadas + " horas.";
  console.log("Ficha concatenada:", fichaConMas);
  console.log("Son iguales las dos fichas →", ficha === fichaConMas);
}