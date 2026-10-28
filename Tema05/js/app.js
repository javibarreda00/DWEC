/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";


  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const tercero = document.querySelectorAll("#contenido p");
  tercero[2].classList.add("text-danger");

  console.log("Cambios en las tres líneas, la segunda con background warning y la tercera con text danger.");

  // TODO: el segundo párrafo, con querySelector y su clase (.segundo): resáltalo con la clase "bg-warning-subtle".
  // TODO: el tercero, con querySelectorAll("#contenido p") y su posición en la lista: ponlo en rojo con "text-danger".
  // TODO: un console.log() que diga que se han aplicado los cambios.
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const parrafo = document.querySelector("#contenido");
  const nuevo = document.createElement("p");

  nuevo.textContent = `Párrafo añadido ${parrafo.children.length + 1}`;

  parrafo.append(nuevo);
  console.log(`Párrafo añadido. Se ha añadido ${parrafo.children.length}`);
  // TODO: crea un <p> con document.createElement().
  // TODO: dale el texto «Párrafo nuevo N», donde N es el número de párrafos que habrá en #contenido
  //       (pista: document.querySelector("#contenido").children.length).
  // TODO: cuélgalo al final de #contenido con append().
}

function eliminarUltimo() {

  const ultimo = document.querySelector("#contenido").lastElementChild;

   if(ultimo === null) {
    //Cuando no queda ninguna para eliminar se muestra un aviso de error
    document.querySelector("#aviso2").classList.remove("d-none");
    console.log("Ya se han eliminado los párrafos que se podían");
   } else {
    ultimo.remove();
    console.log("Último párrafo eliminado");
   }

  // TODO: busca el último párrafo de #contenido (lastElementChild).
  // TODO: si es null (ya no queda ninguno), muestra el aviso #aviso2 quitándole la clase "d-none".
  //       Si no, bórralo con remove().
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });

  }

  console.log(`Resaltado activado en  ${parrafos.length} párrafos`);
   
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {

  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido").firstElementChild;

  if (texto === "") {
 error.classList.remove("d-none");
 console.log("Error:el campo esta vacío");
 } else if (primero === null) {
  console.log("No se encuentran párrafos en #contenido");
 } else {
  primero.textContent = texto;
  error.classList.add("d-none");
  console.log(`Primer parrafo cambiado usando textContent: ${texto}`);
 }
  
}

function cambiarConHtml() {

  const texto = document.querySelector("#nuevoTexto").value.trim();
  const error = document.querySelector("#error4");
  const primero = document.querySelector("#contenido").firstElementChild;

  if (texto === "") {
 error.classList.remove("d-none");
 console.log("Error:el campo esta vacío");
 } else if (primero === null) {
  console.log("No se encuentran párrafos en #contenido");
 } else {
  primero.innerHTML = texto;
  error.classList.add("d-none");
  console.log(`Primer parrafo cambiado usando innerHTML: ${texto}`);
 }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function actualizarTareas() {

  const total = document.querySelectorAll("#listaTareas li").length;
  document.querySelector("#totalTareas").textContent = total;

}


function anadirTarea() {

  const input =  document.querySelector("#tareaInput");
  const error = document.querySelector("#error5");
  const texto = input.value.trim();

  if (texto === "") {
    error.textContent = "Escribe una tarea antes de añadirla";
    error.classList.remove("d-none");
    console.log("Error: tarea vacía");
  }else {

    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const casilla = document.createElement("input");
    casilla.type = "checkbox";
    casilla.classList.add("form-check-input", "me-2");

    const span = document.createElement("span");
    span.textContent = texto;

    li.append(casilla, span);
    document.querySelector("#listaTareas").append(li);

    input.value = "";
    error.classList.add("d-none");
    actualizarTareas();
    console.log(`Tarea añadida: ${texto}`);
  }

}

function borrarCompletadas() {

  const completadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.querySelector("#error5");

  if (completadas.length === 0) {
    error.textContent = "No hay ninguna tarea marcada";
    error.classList.remove("d-none");
    console.log("No hay tareas que borrar");
} else {

  for (const casilla of completadas) {
    casilla.parentElement.remove();
  }
  error.classList.add("d-none");
  actualizarTareas();
  console.log(`${completadas.length} tareas completadas eliminadas`);


}
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let tipodato;

  if (ancho >= 1400) {
    tipodato ="xxl";
  } else if (ancho >= 1200) {
    tipodato ="xl";
  } else if (ancho >= 992) {
    tipodato ="lg";
  } else if (ancho >= 768) {
    tipodato ="md";
  } else if (ancho >= 576) {
    tipodato ="sm";
  } else {
    tipodato ="xs";
  }

  document.querySelector("#datoPunto").textContent = tipodato;

  document.querySelector("#datoPantalla").textContent = `${screen.width} x ${screen.height} px`;
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;  

  console.log(`Ventana ${ancho} x ${alto}, punto de corte ${tipodato}`);

}
