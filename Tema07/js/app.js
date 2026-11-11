/*
  Tarea 7 · DWEC · [Tu nombre y apellidos]
  Funciones, flechas y clases.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · La regla de este tema:
      - declaración, function nombre() { ... }, para las funciones con nombre, como las de los botones;
      - FLECHA para todos los callbacks: forEach, map, filter, sort, reduce, find, some...;
      - nunca una flecha como método: en las clases, la forma corta media() { ... }.
  · Los resultados se pintan en la página como en los temas 5 y 6: createElement, textContent, classList y append.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================


//Calcula el precio final y lo devuelve con return (no lee ni pinta nada).
//iva vale 21 y descuento vale 0, son sus parámetros por defecto.
function calcularPrecio(base, iva = 21, descuento = 0) {
  //Primero se resta el descuento, que es un % del precio de base.
  const Descuento = base - base * descuento / 100;
  //Luego se le suma el IVA y se devuelve el resultado.
  return Descuento * (1 + iva /100);

}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}
//Función del botón de Calcular: lee el formulario, valida y pinta el resultado.
function mostrarPrecio() {
  //Se leen los tre campos (value siempre es texto).
 const precioBase = document.querySelector("#base").value;
 const iva = Number(document.querySelector("#iva").value);
 const precioDescuento = document.querySelector("#descuento").value;
 const error = document.querySelector("#error1");

 //Convertimos la base a número para poder compararla.
 const base = Number(precioBase);
 //Si la base está vacía o es negativa mostramos el error y salimos con return.
 if (precioBase === "" || base < 0) {
  error.classList.remove("d-none"); //quitar d-none have visible el error
  return;
 }

 let precio; //se guarda el precio final
 let descuento = 0; //vale 0 si no hay descuento, ya que es opcional.

 if (precioDescuento === "") {
  //Descuento vacío, pero se usa el 0 por defecto.
  precio = calcularPrecio(base, iva);
 } else {
  descuento = Number (precioDescuento);
  //El descuento tiene que estar entre 0 y 100.
  if (descuento < 0 || descuento > 100) {
    error.classList.remove("d-none");
    return;
  }
  precio = calcularPrecio(base, iva, descuento);
 }

 error.classList.add("d-none"); //ocultamos el error añadiendo el d-none.
 pintarLista("#salida1", [
 `Precio sin Iva: ${formatearEuros(base)}`,
 `Descuento: ${descuento} %`,
 `Iva: ${iva} %`,
 `Precio final: ${formatearEuros(precio)}`

 ]);
//Dejamos el rastro en la consola.
 console.log("Ejercicio 1: precio final: ", precio);

}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}



function verTitulos() {
  //map crea un array nuevo con el título de cada peli.
  //usamos callback con flecha
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
    pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  //filter se queda solo con las películas que el callback devuelva true
  const largas = peliculas.filter ((pelicula) => pelicula.duracion > 120); 
  //comoTexto ya es una función, se pasa sin parentésis
    pintarLista("#salida2", largas.map(comoTexto));
    document.querySelector("#mensaje2").textContent = `${largas.length} películas que duran más de 120 minutos.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  //[...peliculas] hace una copia, y sort cambia el array original.
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio); // una copia: sort cambia el original
    pintarLista("#salida2", ordenadas.map(comoTexto));
    document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente";
    console.log("Ejercicio 2: sort →", ordenadas);
  }

function verDuracionTotal() {
  //reduce va acumulando: total empieza en 0 y suma cada duración.
  const minutos = peliculas.reduce((total, pelicula) =>total + pelicula.duracion, 0);
  pintarLista("#salida2" ,[`${minutos} minutos de películas`]);
    document.querySelector("#mensaje2").textContent = "La suma total de las sesis duraciones.";
   console.log("Ejercicio 2: reduce →", minutos);
  }
 
  


function buscarAntigua() {
  //find devuelve la primera película que cumple la condición, o undefined si no hay ninguna.
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);

  if (antigua === undefined) {
    document.querySelector("#mensaje2").textContent = "No hay ninguna película anterior a 1990";
    pintarLista("#salida2", []); //con una lista vacía, pintarLista deja el <ul> sin elementos.
    console.log("Ejercicio 2: find → no hay ninguna");
    return;
  }
    //se pinta si la ha encontrado.
    pintarLista("#salida2", [comoTexto(antigua)]);
    document.querySelector("#mensaje2").textContent = " Película/s anterior/es a 1990.";
    console.log("Ejercicio 2: find →", antigua);
}

// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

//Hace a mano lo que hace map pero sin usarlo
//lista es el array a recorrer, operación es la función(callback).
function transformar(lista, operacion) {
  const resultado = []; //array nuevo: la lista original no cambia.

  for (const elemento of lista) { //recorremos cada elemento de la lista.
    resultado.push(operacion(elemento)); //llamamos al callback y guardamos lo que devuelve.
  }

  return resultado;

}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

//Botón Doble
function verDobles() {
  //el callback es con una flecha: (n) => n * 2.
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

//Botón Cuadrado: igual que en la función verDobles, pero con el cuadrado de cada número.
function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados → ", resultado);
}
//Botón absoluto, igual pero math.abs ya es una función.
//Se pasa sin paréntesis.
function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos → ", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

//Crear un contador. paso vale 1 por defecto
function crearContador(paso = 1) {
  let cuenta = 0; //vivde dentro de crearContador

  //Devolvemos una función (closure con return). Recurda paso y ceunta.
  
  return function () {
    cuenta += paso;
    return cuenta;
  };

}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

//Igual que el modelo, pero con #cuenta5 y contadordeCinco
function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("#Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

//Clase madre: un alumno con nombre, curso y una lista de notas.
class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = []; //el alumno empieza sin notas.
  }
 // Guarda la nota si es válida y devuelve true, si no devuelve false sin guardarla.
  anadirNota(nota) {
    if (!Number.isFinite(nota) || nota < 0 || nota > 10) {
      return false;  //false si el número no está entre 0 y 10.
    }
    this.notas.push(nota);
    return true;
  }
  //Devuelve la nota media (0 si no hay notas).
  media() {
    if(this.notas.length === 0) {
      return 0;
    }
    //reduce suma todas las notas que hay y se divide entre cuantas hay.
    return this.notas.reduce((total, nota) => total + nota, 0) /this.notas.length;
  }
  //Devuelve una frase por defecto.
  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}
//Clase hija: alumno en prácticas (FCT) y hereda todo lo de alumno.
class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso); //el constructor de clase padre alumno.
    this.empresa = empresa; //constructor propio de esta clase.
  }
  //Sustituye al de Alumno, pero aprovecha su frase con super.presentarse()
  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}
//Lista donde se guardasn los alumnos
const alumnos = [];
//Dos alumnos de partida, uno de cada clase, con al menos dos notas cada uno.
const alumno1 = new Alumno("Javier Barreda Zurera", "2.º DAW");
alumno1.anadirNota(7);
alumno1.anadirNota(8);
const alumno2 = new AlumnoFCT("Giulshen Hueso Cruz", "2.º DAW", "Cash Alhambra");
alumno2.anadirNota(6);
alumno2.anadirNota(9);

alumnos.push(alumno1, alumno2);


// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}
//Botón Crear: lee el formulario, valida y añade un alumno nuevo.
function crearAlumno() {
  //quitamos los espacios en blanco de los extremos con trim.
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value.trim();
  const empresa = document.querySelector("#empresa5").value.trim();
  const notasTexto = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");
  //Sin nombre no se puede crear, asi que mostramos el error y salimos.
  if (nombre === "") {
    error.textContent = "Escribe el nombre del alumno.";
    error.classList.remove("d-none");
    return;
  }
//Las notas se escriben separadas por comas
  let notas = [];
  if (notasTexto !== "") {
    //split las separa en textos y map convierte cada uno a número.
    notas = notasTexto.split(",").map((texto) => {
      const notaTexto = texto.trim();
      return notaTexto === "" ? Number.NaN : Number(notaTexto);
    });
    //some pregunta si alguna no es válida (si no es número o no entra en el parámetro entre 0 y 10).
    if (notas.some((nota) => !Number.isFinite(nota) || nota < 0 || nota > 10)) {
      error.textContent = "Las notas deben ser números entre 0 y 10, separados por comas.";
      error.classList.remove("d-none");
      return;
    }
  }
  //Sin empresa es Alumno, con empresa es AlumnoFCT.
  let alumno;
  if (empresa === "") {
    alumno = new Alumno(nombre, curso);
  } else {
    alumno = new AlumnoFCT(nombre, curso, empresa);
  }
  //Todas las notas son válidas, añadidas con anadirNota.
  notas.forEach((nota) => alumno.anadirNota(nota));

  alumnos.push(alumno); //lo guardamos en la lista.
  error.textContent = "";
  error.classList.add("d-none"); //ocultamos el error.
  //vaciamos las casillas.
  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";
  pintarAlumnos(); //repintamos las tarjetas.
  console.log("Ejercicio 5: alumno y datos creados →", alumno);
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================


function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0,0,0,0);
  const milisegundosDia = 1000 * 60 * 60 * 24;
  return Math.round((fecha - hoy) / milisegundosDia);

}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);
  const dias = diasHasta(fecha);
  
  const nombreFecha = fecha.toLocaleDateString("es-ES" , {
    weekday : "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  
  });

  if (dias > 0) {
    salida.textContent = `Faltan ${dias} días: será ${nombreFecha}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${nombreFecha}.`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} días: fue el ${nombreFecha}.`;
  }
  console.log("Ejercicio 6: días hasta la fecha →", dias);
}

// TODO: iniciales(nombreCompleto) devuelve las iniciales en mayúsculas: «lucía martín ortega» → «LMO».
//       Encadena trim, split(" "), filter (para quitar las palabras vacías si hay espacios dobles),
//       map (la primera letra de cada palabra, en mayúscula) y join("").
function iniciales(nombreCompleto) {

}

// TODO: crearUsuario(nombreCompleto) devuelve las iniciales en minúsculas y tres cifras al azar, de 000 a 999:
//       «lmo042». Pista: Math.random, Math.floor y padStart(3, "0").
function crearUsuario(nombreCompleto) {

}

function mostrarIniciales() {
  // TODO: lee #nombre6. Si está vacío, avisa en #salida6b.
  // TODO: si no, escribe en #salida6b «Iniciales: LMO · usuario: lmo042».
}
