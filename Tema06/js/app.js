/*
  Tarea 6 · DWEC · [Tu nombre y apellidos]
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {

  nombre:"Javi",
  apellidos:"Barreda Zurera",
  edad:25,
  curso:"2ºDAW",
  presentarse: function() {
   return "Soy " + this.nombre + " " + this.apellidos +
   ", tengo " + this.edad + " años y estudio " + this.curso + ".";

  }

}; 

function verFicha() {

  const salida = document.querySelector("#salida1");
  salida.textContent= "";

  const ul =  document.createElement("ul");
  ul.classList.add("list-group");

  const claves = ["nombre", "apellidos", "edad", "curso"];
  claves.forEach(function (clave) {
  const li = document.createElement("li");  
  li.classList.add("list-group-item");
  li.textContent = clave + ": " + estudiante[clave];

  ul.append(li);


  });

  const frase = document.createElement("p");
  frase.classList.add("mt-2" , "fst-italic");
  frase.textContent = estudiante.presentarse();

  salida.append(ul, frase);
  console.log("Ejercicio 1: ficha ->", estudiante);



}

function cumplirAnios() {
  estudiante.edad = estudiante.edad + 1;
  verFicha();
}

function quitarCurso() {
 delete estudiante.curso;
 verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No quedan colores por quitar.");
    return;
  }

  const salido = colores.pop();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2:pop -> ha salido" + salido + ". Quedan " + comoTexto(colores));
}

function quitarPrimero() {
   if (colores.length === 0) {
    avisar2("No quedan colores por quitar.");
    return;
  }

   const salido = colores.shift();
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2:pop -> ha salido" + salido + ". Quedan " + comoTexto(colores));
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================


const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function(producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
pintarProductos(productos);
document.querySelector("#mensaje3").textContent = "Hay " + productos.length + " productos.";
console.log("Ejercicio 3:todos ->", productos.length, "productos");
}

function ordenarPorPrecio() {
  const copia = [...productos];
  copia.sort(function (a,b) {
    return a.precio - b.precio;


  });

  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Ordenados de más baratos a más caro.";
  console.log("Ejercicio 3: ordenados por precio ->", copia);
}

function filtrarCaros() {
  const caros = productos.filter(function (producto) {
  return producto.precio > 50;

  });

  pintarProductos(caros);
  document.querySelector("#mensaje3").textContent = "Hay " + caros.length + " productos de más de 50 euros.";
  console.log("Ejercicio 3: filtro (>50) ->", caros);



}

function buscarProducto() {

  const mensaje = document.querySelector("#mensaje3");
  const texto = document.querySelector("#buscarProducto").value.trim().toLowerCase();


  if(texto === "") {
   mensaje.textContent = "Escribe el nombre de un producto para encontrarlo.";
   return;


  }

  const encontrado = productos.find(function(producto) {
    return producto.nombre.toLowerCase().includes(texto);


});
 
if (encontrado === undefined) {
  mensaje.textContent = "No se ha encontrado ningún producto con «" + texto + "».";
  pintarProductos([]);
  console.log("Ejercicio 3: find -> undefined");
  return;


}

pintarProductos([encontrado]);
mensaje.textContent = "Primer producto encontrado: " + encontrado.nombre + ".";
console.log("Ejercicio 3: find ->", encontrado);

}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Javier Barreda Zurera",
  notas: [],

  anadirNota: function (nota) {
  if (Number.isNaN(nota) || nota < 0 || nota > 10) {
    return false;




  }

this.notas.push(nota);
return true;

  },

  media: function () {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce(function (total, nota) {
      return total + nota;
    }, 0);
    return suma / this.notas.length;
  }
  
};

function mostrarNotas() {
  const contenedor = document.querySelector("#notas");
  contenedor.textContent = "";

  alumno.notas.forEach(function (nota) {
  const badge = document.createElement("span");
  badge.classList.add("badge", "me-1");
  if (nota >= 5) {
    badge.classList.add("text-bg-success");
  } else {
    badge.classList.add("text-bg-danger");
  }
  badge.textContent = nota;
  contenedor.append(badge);



 });

 const media = document.querySelector("#media");
 if (alumno.notas.lenght === 0) {
  media.textContent = "Aún no hay notas puestas";
 } else{
  media.textContent = "Media de " + alumno.notas.length + "notas: " + alumno.media().toFixed(2);
 }
 console.log("Ejercicio 4: notas ->", comoTexto(alumno.notas));
}

function anadirNota() {
  const casilla = document.querySelector("#nota");
  const error = document.querySelector("#error4");
  const texto = casilla.value.trim();

  if (texto === "") {
    error.textContent = "Escribe una nota antes de pulsar <<Añadir nota>>.";
    error.classList.remove("d-none");
    return;


  }

  const valida = alumno.anadirNota(Number(texto));
  if (valida === false) {
    error.textContent = "La nota tiene que ser un número entre 0 y 10";
    error.classList.remove("d-none");
    return;
  }
  
  error.classList.add("d-none");
  casilla.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  document.querySelector("#error4").classList.add("d-none");
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function escribir5(lineas) {
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  lineas.forEach(function (linea) {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);

  });
}

function verDobles() {
  const dobles = numeros.map(function (n) {
    return n * 2;
  });

  escribir5([
    "map ->" + comoTexto(dobles),
    "numeros ->" + comoTexto(numeros)

  ]);

  console.log("Ejercicio 5: dobles ->", comoTexto(dobles));
  
}

function verPares() {
 const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });

  escribir5([
    "filter ->" + comoTexto(pares),
    "numeros ->" + comoTexto(numeros)

  ]);

  console.log("Ejercicio 5: pares ->", comoTexto(pares));
}

function verSuma() {

  const suma = numeros.reduce(function (total, n) {
    return total + n;
  }, 0);

  escribir5([
    "redice ->" + suma,
    "numeros ->" + comoTexto(numeros)

  ]);

  console.log("Ejercicio 5: suma ->", suma);
  
}

function verCadena() {
  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });

  const dobles = pares.map(function (n) {
    return n * 2;

  });

  const suma = dobles.reduce(function (total, n) {
    return total + n;
  }, 0);

  escribir5([
    "1.filter ->" + comoTexto(pares),
    "2.map ->" + comoTexto(dobles),
    "3.reduce ->" + suma

  ]);

  console.log("Ejercicio 5: cadena ->", comoTexto(pares), comoTexto(dobles), suma);
  
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];  // una copia: splice cambia ciudades y así podemos restaurarla

function escribir6(lineas){
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  lineas.forEach(function (linea) {
    const p = document.createElement("P");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);




  });
}



function mostrarCiudades() {
  const contenedor = document.querySelector("#ciudades");
  contenedor.textContent = "";

  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.classList.add("badge", "text-bg-light", "border", "me-1");
    badge.textContent = posicion + " . " + ciudad;
    contenedor.append(badge);



  });
}

function verSlice() {
  const trozo = ciudades.slice(2, 5);

  escribir6([
    "slice(2, 5) devuelve " + comoTexto(trozo),
    "ciudades sigue teniendo " + ciudades.length + " elementos : nada ha cambiado."
  ]);
  console.log("Ejercicio 6: slice ->", comoTexto(trozo), "ciudades:", ciudades.length);
}

function hacerSplice() {
  if (ciudades.length < 3) {
    escribir6(["Quedan pocas ciudades: pulsa <<Restaurar>> para recuperarlas."]);
    return;
  }

  const quitadas = ciudades.splice(2, 2);

  escribir6([
    "splice(2, 2) devuelve" + comoTexto(quitadas),
    "ciudades ahora tiene " + ciudades.length + " elementos: sí ha cambiado."
  ]);
  mostrarCiudades();
  console.log("Ejercicio 6: splice ->", comoTexto(quitadas), "ciudades:", comoTexto(ciudades));
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  escribir6(["Ciudades restauradas: vuelven a un total de " + ciudades.length + "."]);
  console.log("Ejercicio 6: restaurar ->", comoTexto(ciudades));
  
}

function buscarCiudad() {
   const nombre = document.querySelector("#buscarCiudad").value.trim();
 
  if (nombre === "") {
    escribir6(["Escribe el nombre de una ciudad para buscarla."]);
    return;
  }
 
  const esta = ciudades.includes(nombre);
  const posicion = ciudades.indexOf(nombre);   // -1 si no está
 
  escribir6([
    "includes(\"" + nombre + "\") → " + esta,
    "indexOf(\"" + nombre + "\") → " + posicion
  ]);
  console.log("Ejercicio 6: buscar " + nombre + " → includes:", esta, "| indexOf:", posicion);

}

mostrarCiudades();
