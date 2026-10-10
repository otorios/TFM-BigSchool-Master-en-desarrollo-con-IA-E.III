# Continuidad del proyecto

Este documento permite retomar **Memory Quest: Señal estelar** aunque no esté disponible el historial de conversación. Debe actualizarse al cerrar cada sesión de trabajo relevante.

## Repositorio correcto

- **Repositorio local:** `C:\Users\Usuario\Documents\TFG-BigSchool-Master-en-desarrollo-con-IA-E.III`.
- **Repositorio remoto:** `git@github.com:otorios/TFG-BigSchool-Master-en-desarrollo-con-IA-E.III.git`.
- **Rama de trabajo:** `main`.
- No confundirlo con `C:\Users\Usuario\Documents\BigSchool`, que contiene los materiales generales del máster y no debe utilizarse para desarrollar el TFG.

## Proyecto anterior de referencia

- **Repositorio:** `git@github.com:otorios/Juego_parejas_JS.git`.
- Es un juego de parejas anterior que puedo consultar para recordar mi planteamiento original con JavaScript, niveles, mezcla de cartas y navegación.
- Debo tratarlo como **solo lectura** y no modificar archivos, ramas, configuración ni historial.
- Si necesito reutilizar o adaptar código, primero crearé una copia dentro del repositorio del TFG y trabajaré únicamente sobre esa copia.

## Estado actualizado el 10/10/2026

El proyecto cuenta con una primera versión jugable implementada con HTML, CSS y JavaScript sin framework, construida mediante Vite. React con Vite queda como evolución futura.

La aplicación ya incluye inicio y continuación, tres capítulos, observación inicial, parejas semánticas, energía y penalizaciones progresivas, cronómetro, derrota y reintento del capítulo, guardado validado en `localStorage`, reparación de módulos, desenlace según la puntuación y diseño responsive. Tras la primera prueba manual se reforzaron el formulario, el acabado visual y el giro 3D de las cartas, y se unificó el tiempo como `mm:ss`. También se corrigió la CSP que impedía a Vite aplicar los estilos durante el desarrollo local. Las ocho pruebas automáticas y la construcción de producción pasan correctamente.

Las 18 cartas de concepto utilizan imágenes locales seleccionadas en la biblioteca oficial de la NASA. Su ficha original y sus créditos están registrados en `docs/CREDITOS-IMAGENES.md`. El tablero ya presenta una cuadrícula responsive, separación visual, reversos identificables y giro 3D.

También he decidido utilizar un único `index.html` con varias vistas y un solo motor de parejas compartido por los tres capítulos, en lugar de una página y un JavaScript distintos para cada nivel.

Definiré los capítulos, parejas, pistas, explicaciones y narrativa como objetos JavaScript exportados desde `src/data/chapters.js`.

Centralizaré el estado temporal de la partida en un único objeto JavaScript `gameState`. Mantendré separados los datos momentáneos del tablero y el progreso que deba persistir en `localStorage`.

Guardaré en `localStorage` el nombre, el capítulo desbloqueado, la puntuación acumulada, los sistemas reparados y la finalización. Utilizaré puntos de control al comenzar y completar capítulos; no guardaré tableros a medias.

La estructura inicial separará inicio, motor, estado, persistencia, interfaz, contenidos y estilos en módulos pequeños dentro de `src/`; las imágenes estarán en `public/images/` y las pruebas en `tests/`.

Aplicaré controles mínimos de seguridad para evitar XSS en el DOM y errores por datos manipulados: `textContent`, validación de entradas y `localStorage`, ausencia de secretos, dependencias mínimas, recursos locales y una CSP básica.

La dirección visual será un panel de control de misión juvenil: fondo espacial azul oscuro, paneles redondeados, cian para acciones, ámbar para recompensas y energía, rojo para avisos y textos claros. La interfaz mostrará el tablero junto a la puntuación, los intentos, los mensajes de COSMO y el progreso de reparación. En ordenador adaptará automáticamente el tamaño de las cartas y los espacios al número de parejas y a la altura disponible para intentar mantener todo el tablero visible, tomando como referencia mínima un portátil de 1366 × 768. En móvil priorizará la legibilidad aunque sea necesario desplazarse.

Para el MVP utilizaré principalmente imágenes astronómicas oficiales de la NASA, descargadas dentro del proyecto y con su procedencia, enlace, crédito y condiciones de uso registrados. Por falta de tiempo no crearé ahora todo el apartado artístico: como evolución futura quiero incorporar ilustraciones propias y de artistas reconocidos, recuperando el enfoque educativo de mi juego de parejas anterior.

Publicaré el juego gratuitamente mediante GitHub Pages desde el repositorio público del TFG. Una acción de GitHub construirá el proyecto con Vite y desplegará la versión generada, manteniendo código, historial y publicación en el mismo servicio.

Conservaré la mecánica base de mi juego anterior: las cartas se mostrarán al comenzar durante unos segundos y después se ocultarán. En cada intento se voltearán dos; las relaciones correctas permanecerán visibles y las incorrectas volverán a ocultarse. La diferencia es que ahora cada pareja relacionará una imagen y su concepto con una definición o pista.

La observación inicial iba a durar 8, 12 y 16 segundos, pero la primera prueba mostró que no era suficiente para leer y observar con comodidad. Una primera ampliación a 20, 30 y 40 segundos resultó demasiado larga. La duración actual utiliza el punto medio: 14 segundos en el primer capítulo, 21 en el segundo y 28 en el tercero. Durante la cuenta atrás no se podrán seleccionar cartas y volveré a ajustar los tiempos si las pruebas lo requieren.

Cada selección de dos cartas aumentará internamente el contador de intentos, que se mostrará en el resumen. Durante el tablero veré en su lugar una cuenta atrás de fallos restantes, más útil para saber cuánto margen queda antes de perder. Cada capítulo comenzará con 12 puntos de energía. Los errores restarán 1 punto en el primer capítulo y 2 en el segundo y el tercero, por lo que la cuenta comenzará en 12, 6 y 6 fallos respectivamente. La penalización original del último capítulo era de 3 puntos, pero la reduje porque sus ocho parejas ya aportan suficiente dificultad y cuatro errores resultaban demasiado pocos. Si la energía llega a cero, se reiniciará solamente el capítulo actual y se conservarán los anteriores. Como ampliación quiero añadir selección de dificultad, con posibles intentos ilimitados, otros límites, tiempo máximo y parejas o condiciones que deban evitarse, recuperando ideas de mi juego original.

La partida no tendrá límite de tiempo. Un cronómetro comenzará cuando se oculten las cartas y se detendrá al completar el tablero; el resultado mostrará el tiempo empleado como información y apoyo para las pruebas, sin provocar derrotas.

Cada acierto hará avanzar una barra de reparación y completar un tablero entregará un único módulo de la nave. Al terminar cada capítulo aparecerá una transición que destacará el módulo recuperado, el progreso de reparación de ATLAS, el informe de COSMO, lo que ocurre a continuación y las estadísticas de la partida. La puntuación final será la suma de la energía restante de los tres capítulos, con un máximo de 36 puntos. ATLAS siempre regresará al completar la aventura, pero lo hará más rápido o más despacio según la energía conservada.

## Concepto aprobado

**Memory Quest: Señal estelar** será un videojuego web educativo dirigido principalmente a preadolescentes de 10 a 14 años. El jugador avanzará por una aventura fija de astronomía dividida en tres capítulos, con tableros de 4, 6 y 8 parejas semánticas.

Las cartas no serán idénticas. Cada pareja relacionará una carta con la imagen y el nombre de un concepto con otra que contenga una definición o pista breve. Las pistas utilizarán una sola idea principal, frases directas y un máximo técnico de 70 caracteres para mantener su legibilidad en todos los niveles.

Cada pareja correcta proporcionará recursos relacionados con la historia. Completar un tablero reparará una parte de la nave y desbloqueará el siguiente capítulo.

## Historia actual

- **Nave:** ATLAS.
- **Misión científica:** ORIOS.
- **IA acompañante:** COSMO.
- **Carga:** Cápsula LURRA, que conserva semillas de numerosas especies destinadas a recuperar ecosistemas terrestres.
- **Protagonista:** cadete en formación, sin género ni edad explícitos. El jugador podrá introducir su nombre.
- **Público de referencia:** 10 a 14 años, aunque esa edad no se atribuye directamente al protagonista.

ATLAS viajaba en modo automático bajo el control de COSMO. El cadete realizaba una práctica de observación supervisada y no era responsable de pilotar o vigilar la nave en solitario.

Una tormenta de partículas cargadas provoca una sobrecarga. Las comunicaciones dejan de funcionar, las cápsulas de hibernación quedan bloqueadas, el laboratorio de la Cápsula LURRA pierde energía, el mapa de navegación queda dañado, la propulsión entra en modo de seguridad y COSMO pierde parte de sus funciones.

Después de la tormenta, los sensores reciben una señal débil de origen desconocido que parece conocer la misión ORIOS y la existencia de la Cápsula LURRA.

## Estructura narrativa provisional

### Capítulo 1 — Una voz entre las estrellas

- Reparar las comunicaciones.
- Restablecer la antena mediante un tablero de parejas semánticas.
- Recibir una señal antigua que menciona la misión ORIOS y la Cápsula LURRA.

### Capítulo 2 — Las semillas de la Tierra

- Restablecer la energía del laboratorio.
- Proteger la Cápsula LURRA.
- Relacionar atmósfera, magnetosfera, zona habitable, exoplaneta, cometa y asteroide con sus definiciones.
- Completar las seis parejas entrega el módulo de protección de LURRA y recupera la energía necesaria para conservar las semillas.
- COSMO descubre que la señal contiene un protocolo de conservación casi idéntico al de LURRA y un fragmento de mapa hacia una antigua baliza situada en la ruta de regreso.
- La baliza está relacionada con una expedición anterior a ORIOS, pero todavía no se sabe cómo conoce los datos actuales de la misión.
- El capítulo termina planteando la necesidad de reconstruir el mapa para descubrir el origen de la señal y encontrar el camino a casa.

### Capítulo 3 — El camino a casa

- Reconstruir el mapa estelar.
- Reactivar la propulsión.
- Relacionar órbita, gravedad, año luz, constelación, nebulosa, supernova, púlsar y agujero negro con sus definiciones.
- Completar las ocho parejas entrega el módulo de navegación y propulsión, permite reconstruir el mapa de la baliza y emprender el regreso.
- Descubrir el origen de la señal y regresar a la Tierra.
- La resolución exacta de la baliza y el desenlace todavía están pendientes de concretar.

### Desenlace aprobado

La señal procede de una baliza automática dejada por una expedición científica anterior, responsable del protocolo de conservación del que posteriormente nació LURRA. Durante la tormenta, un sistema de emergencia independiente de ATLAS alcanzó a enviar los identificadores de ORIOS y LURRA. La baliza reconoció una evolución de su protocolo y respondió utilizando esos nombres; no conocía el futuro.

Sus archivos completan el mapa y permiten establecer una ruta segura. Con los tres módulos reparados, COSMO despierta a la capitana y ATLAS regresa a la Tierra con LURRA a salvo. El viaje será rápido, normal o lento según la energía restante, pero la misión terminará con éxito en los tres casos.

## Decisiones de alcance

- COSMO tendrá personalidad fija durante el MVP: cercana, inteligente y con algo de humor.
- Elegir la personalidad de COSMO queda como ampliación futura.
- Utilizaré una biblioteca controlada de imágenes y metadatos.
- No generaré imágenes durante cada partida.
- Prepararé y revisaré previamente la narrativa, las parejas, las pistas y las explicaciones.
- No integraré un proveedor de IA durante la ejecución; utilizaré la IA únicamente como apoyo documentado al desarrollo.
- No incorporaré usuarios ni base de datos; guardaré el progreso en `localStorage`.
- La historia espacial será mi primera aventura completa.
- Dejo registrada la mitología vasca como posible temática futura.

## Punto exacto para retomar

El próximo paso es realizar una prueba manual completa de los tres capítulos con el nuevo diseño, revisar la legibilidad de cada imagen y pista y anotar cualquier ajuste necesario antes del despliegue.

El primer tablero aprobado es:

- `Sol` y su definición como estrella situada en el centro del sistema solar.
- `Tierra` y su definición como planeta en el que vivimos y con agua líquida en su superficie.
- `Luna` y su definición como satélite natural que orbita la Tierra.
- `Vía Láctea` y su definición como galaxia que contiene el sistema solar.
- Cada pareja hace avanzar la barra de reparación.
- Completar el tablero entrega el módulo de comunicaciones.
- La señal recibida menciona ORIOS y LURRA a pesar de ser anterior a la misión.
- COSMO cierra el capítulo preguntando cómo puede la señal conocer la cápsula.

Todavía deberán concretarse la representación visual de la reparación y el fragmento exacto de señal que cierra el capítulo.

## Orden de los siguientes bloques

1. Diseñar la arquitectura, el formato de los datos locales y el guardado mediante `localStorage`.
2. Completar los tres capítulos: objetivo, parejas, recompensa y avance narrativo.
3. Diseñar las reglas del juego: turnos, aciertos, errores, tiempo y puntuación.
4. Preparar el catálogo fijo y revisado de astronomía.
5. Detallar las pantallas y el recorrido del jugador a partir de la dirección visual aprobada.
6. Definir la biblioteca de imágenes, sus fuentes y licencias.
7. Planificar tareas y calendario hasta el 23/10/2026.
8. Implementar el MVP.
9. Probar, desplegar y preparar README, slides y vídeo.

## Prompt de reanudación

Si fuera necesario comenzar en una conversación sin contexto, utilizar:

```text
Estamos desarrollando Memory Quest: Señal estelar, el TFM documentado en este repositorio. Lee primero README.md, docs/CONTINUIDAD.md, docs/DECISIONES.md, docs/SEGUIMIENTO.md, docs/ARQUITECTURA.md y docs/CREDITOS-IMAGENES.md. No cambies decisiones ya aceptadas sin indicarlo. La primera versión jugable, el catálogo, las pruebas y las 18 imágenes acreditadas ya existen; el siguiente paso es probar la experiencia completa, ajustar la legibilidad y preparar el despliegue. Trabaja por cambios pequeños y actualiza la documentación aprobada.
```

## Normas para documentar el trabajo

- Cada cambio o commit debe tener un nombre descriptivo y una breve descripción de lo modificado.
- Si cambia una decisión ya registrada, se actualizará su mismo apartado; no se creará otro punto duplicado.
- Una decisión modificada debe distinguir entre `Idea original`, `Decisión actual` y `Motivo del cambio`.
- La fecha de actualización solo se añadirá a los puntos realmente modificados. Los demás conservarán su contenido y formato.
- Cuando se trabaje por decisiones, se explicará una cada vez y no se avanzará a la siguiente hasta que la anterior esté comprendida y confirmada.
- Al cerrar una sesión relevante se actualizarán este documento, el seguimiento y el registro de decisiones cuando corresponda.

## Documentos de referencia

- `README.md`: presentación general.
- `docs/SEGUIMIENTO.md`: alcance, fases y progreso.
- `docs/DECISIONES.md`: decisiones aceptadas y pendientes.
- `docs/IDEAS-HISTORIAS.md`: banco de ideas narrativas.
- `docs/REQUISITOS-ENTREGA.md`: requisitos administrativos del TFM.
- `docs/ARQUITECTURA.md`: futura documentación técnica.
