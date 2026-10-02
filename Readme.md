# Readme de Javi
El trabajo ha consistido en diseñar una web acorde a lo que el pdf de la tarea pedía, implementando html, bootstrap, y javascript. Este Readme intenta sintetizar
todo el proceso llevado a cabo hasta el resultado final, dividido en diferentes archivos y detallando el proceso que he seguido para cada una de sus partes.

 Bloque A:Index.html

 Tanto el index como interacción parte de la plantilla base de html que se encontraba en el repositorio de mi profesor.El proyecto consta de una aplicación web dividida en dos páginas principales conectadas entre sí mediante una barra de navegación navbar navbar-expand-lg bg-body-tertiary: Se encarga de crear una barra de navegación horizontal, mientras que el expand-lg indica que en pantallas más grandes se mostrarán los enlaces desplegados, mientras que en pantallas pequeñas se contrae automáticamente.

El container centra el contenido de la barra y proporciona un  ancho fijo adaptable y el container fluid proporciona un contenedor de ancho completo que abarca toda la anchura de la ventana de visualización.

div class="container mt-4 crea un contenedor centrado con un margen superior(mt-4) para que la tabla no colapse con la barra de navegación.container: Es la clase contenedora por excelencia de Bootstrap. Define un ancho máximo responsivo que se adapta automáticamente a los diferentes tamaños de pantalla (centrando el contenido y dejando márgenes laterales simétricos).

container-fluid: Se utiliza dentro de la barra de navegación para ocupar el 100% del ancho disponible de la pantalla.

row y col-md-6: Sistema de rejilla (grid). row crea una fila flexible, y col-md-6 indica que el bloque ocupará la mitad del ancho disponible (6 de las 12 columnas totales de Bootstrap) en pantallas medianas y grandes, apilándose de forma automática en dispositivos móviles.

A partir de aquí me he ayudado de la IA para completar el Readme.md!!!

B. Barra de Navegación (Navbar)

navbar: Clase base que convierte un elemento HTML en una barra de navegación flexible.

navbar-expand-lg: Hace que la barra sea responsiva, expandiendo los elementos horizontales en pantallas grandes (large) y ocultándolos bajo un menú desplegable tipo hamburguesa en pantallas pequeñas.

navbar-dark y bg-dark: Configuran la combinación de colores oscura, adaptando el color del texto y los enlaces para que contrasten perfectamente sobre un fondo negro/gris oscuro.

container-fluid: Contiene los elementos internos de la barra alineándolos a ambos extremos.

navbar-brand: Se aplica al logotipo o título principal (en este caso, el nombre del alumno) para destacarlo tipográficamente.

navbar-toggler: El botón interactivo del menú desplegable para móviles.

collapse y navbar-collapse: Agrupan los enlaces de navegación permitiendo que se oculten o desplieguen de forma automática al pulsar el botón en dispositivos móviles.

navbar-nav y ms-auto: navbar-nav organiza los enlaces en forma de lista horizontal, y ms-auto (margin-start: auto) empuja dichos enlaces hacia la parte derecha de la barra de navegación.

nav-link active: Estiliza cada enlace del menú, marcando con active la página en la que se encuentra el usuario actualmente.

C. Tablas Avanzadas (index.html)

table-responsive: Envuelve la tabla HTML. Si la pantalla del dispositivo es demasiado pequeña para mostrar todas las columnas, genera una barra de desplazamiento horizontal fluida evitando que el diseño de la página se rompa.

table: Aplica el estilo base minimalista y limpio de Bootstrap a la tabla (espaciados, líneas divisorias suaves y tipografía clara).

table-striped: Colorea las filas de la tabla de forma alterna (una clara y otra ligeramente más oscura) para mejorar drásticamente la legibilidad de los datos.

table-hover: Añade un efecto visual interactivo que ilumina o cambia sutilmente el color de la fila sobre la que el usuario posiciona el ratón.

table-bordered: Dibuja bordes limpios en todas las celdas de la tabla.

align-middle: Centra verticalmente el contenido de todas las celdas de la tabla para mantener la armonía visual.

table-dark (en el <thead>): Invierte los colores de la cabecera de la tabla, otorgándole un fondo oscuro con texto blanco para que funcione como elemento principal de jerarquía.

D. Tarjetas de Contenido (card)

Se han utilizado para agrupar visualmente la información de incompatibilidades y los paneles de botones:

card: Crea un contenedor con bordes sutiles, esquinas redondeadas y fondo blanco que simula una tarjeta física flotante.

shadow-sm: Aplica una sombra sutil (small shadow) alrededor de la tarjeta para darle profundidad y separación visual respecto al fondo de la página.

card-header: Define la franja superior de la tarjeta (en este caso combinada con bg-warning text-dark para destacar una advertencia).

card-body: El cuerpo interior de la tarjeta donde se aloja el contenido principal (títulos, textos y botones).

card-title y card-text: Clases tipográficas específicas que ajustan de forma automática los tamaños de fuente, grosores y márgenes inferiores de los textos y títulos dentro de una tarjeta.

Bloque B interacción.html:

btn: Clase base obligatoria para transformar cualquier elemento en un botón estilizado de Bootstrap.

btn-primary: Aplica el color azul corporativo estándar para acciones principales (como el botón "Saludar").

btn-danger: Cambia el color del botón a rojo intenso, ideal visualmente para acciones de advertencia o simulación de errores ("Simular un error").

btn-success: Utiliza el color verde para denotar éxito o consultas informativas ("¿Qué navegador soy?").

d-grid gap-3: Convierte el contenedor de los botones en una rejilla flexible de bloque (display grid) donde los botones ocupan el 100% del ancho disponible, separándose de manera uniforme entre sí gracias a la propiedad de espaciado gap-3.

alert: Componente diseñado para destacar mensajes importantes en un bloque rectangular con bordes redondeados.

alert-secondary: Aplica una tonalidad grisácea neutral y elegante, ideal para bloques de reflexión o notas informativas secundarias.


BLOQUE C apps.js:

La function saludarUsuario con alert Sirve para interrumpir brevemente la ejecución de la página y mostrar una ventana emergente nativa del sistema operativo/navegador con un mensaje personalizado. Es ideal para avisos directos o confirmaciones sencillas al usuario.

La function simularError Utiliza el objeto console del navegador para enviar un mensaje tipificado específicamente como error. o muestra nada visualmente en la pantalla para el usuario común, pero imprime un mensaje resaltado en color rojo intenso dentro de la Consola de desarrollo F12.

La function mostrarNavegador lee el navigator.userAgent, que es una cadena de texto interna que el navegador envía automáticamente a los servidores informando de qué software, versión y sistema operativo se están utilizando.Permite inspeccionar los metadatos del cliente. Los desarrolladores web utilizan el objeto navigator para detectar qué navegador visita la web y aplicar soluciones específicas o adaptaciones (polyfills) en caso de que una característica no sea compatible.
    
El atributo onclick actúa como un escuchador de eventos nativo: le dice al navegador que, en el preciso instante en que el usuario haga clic sobre ese botón de Bootstrap, busque en la memoria del navegador la función correspondiente que está guardada en app.js y la ejecute de inmediato.

Por último, el archivo se vincula al final del documento. Esto garantiza que la estructura visual cargue primero y que el código de JavaScript esté listo para responder a las interacciones del usuario de forma eficiente y sin bloqueos.
    


