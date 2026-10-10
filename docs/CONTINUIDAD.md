# Continuidad del proyecto

Este documento permite retomar Memory Quest aunque no esté disponible el historial de conversación. Debe actualizarse al cerrar cada sesión de trabajo relevante.

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

El proyecto se encuentra en la fase de definición técnica previa a la implementación. Ya están cerrados el alcance funcional, la persistencia y el stack: HTML, CSS y JavaScript sin framework, con Vite. React con Vite queda como evolución futura. Todavía no se ha comenzado la implementación.

También he decidido utilizar un único `index.html` con varias vistas y un solo motor de parejas compartido por los tres capítulos, en lugar de una página y un JavaScript distintos para cada nivel.

Definiré los capítulos, parejas, pistas, explicaciones y narrativa como objetos JavaScript exportados desde `src/data/chapters.js`.

Centralizaré el estado temporal de la partida en un único objeto JavaScript `gameState`. Mantendré separados los datos momentáneos del tablero y el progreso que deba persistir en `localStorage`.

Guardaré en `localStorage` el nombre, el capítulo desbloqueado, la puntuación acumulada, los sistemas reparados y la finalización. Utilizaré puntos de control al comenzar y completar capítulos; no guardaré tableros a medias.

La estructura inicial separará inicio, motor, estado, persistencia, interfaz, contenidos y estilos en módulos pequeños dentro de `src/`; las imágenes estarán en `public/images/` y las pruebas en `tests/`.

Aplicaré controles mínimos de seguridad para evitar XSS en el DOM y errores por datos manipulados: `textContent`, validación de entradas y `localStorage`, ausencia de secretos, dependencias mínimas, recursos locales y una CSP básica.

La dirección visual será un panel de control de misión juvenil: fondo espacial azul oscuro, paneles redondeados, cian para acciones, ámbar para recompensas y energía, rojo para avisos y textos claros. La interfaz mostrará el tablero junto a la puntuación, los intentos, los mensajes de COSMO y el progreso de reparación, y se adaptará colocando los paneles en vertical en pantallas pequeñas.

Para el MVP utilizaré principalmente imágenes astronómicas oficiales de la NASA, descargadas dentro del proyecto y con su procedencia, enlace, crédito y condiciones de uso registrados. Por falta de tiempo no crearé ahora todo el apartado artístico: como evolución futura quiero incorporar ilustraciones propias y de artistas reconocidos, recuperando el enfoque educativo de mi juego de parejas anterior.

Publicaré el juego gratuitamente mediante GitHub Pages desde el repositorio público del TFG. Una acción de GitHub construirá el proyecto con Vite y desplegará la versión generada, manteniendo código, historial y publicación en el mismo servicio.

Conservaré la mecánica base de mi juego anterior: las cartas se mostrarán al comenzar durante unos segundos y después se ocultarán. En cada intento se voltearán dos; las relaciones correctas permanecerán visibles y las incorrectas volverán a ocultarse. La diferencia es que ahora cada pareja relacionará una imagen y su concepto con una definición o pista.

La observación inicial durará provisionalmente 8 segundos en el primer capítulo, 12 en el segundo y 16 en el tercero. Durante la cuenta atrás no se podrán seleccionar cartas. Ampliaré estos tiempos si las pruebas muestran que no permiten leer y observar con comodidad.

## Concepto aprobado

Memory Quest será un videojuego web educativo dirigido principalmente a preadolescentes de 10 a 14 años. El jugador avanzará por una aventura fija de astronomía dividida en tres capítulos, con tableros de 4, 6 y 8 parejas semánticas.

Las cartas no serán idénticas. Cada pareja relacionará una carta con la imagen y el nombre de un concepto con otra que contenga una definición o pista breve.

Cada pareja correcta proporcionará recursos relacionados con la historia. Completar un tablero reparará una parte de la nave y desbloqueará el siguiente capítulo.

## Historia actual

- **Nave:** ATLAS.
- **Misión científica:** ORIOS.
- **IA acompañante:** COSMO.
- **Carga:** Cápsula LUR, que conserva semillas de numerosas especies destinadas a recuperar ecosistemas terrestres.
- **Protagonista:** cadete en formación, sin género ni edad explícitos. El jugador podrá introducir su nombre.
- **Público de referencia:** 10 a 14 años, aunque esa edad no se atribuye directamente al protagonista.

ATLAS viajaba en modo automático bajo el control de COSMO. El cadete realizaba una práctica de observación supervisada y no era responsable de pilotar o vigilar la nave en solitario.

Una tormenta de partículas cargadas provoca una sobrecarga. Las comunicaciones dejan de funcionar, las cápsulas de hibernación quedan bloqueadas, el laboratorio pierde energía, el mapa de navegación queda dañado, la propulsión entra en modo de seguridad y COSMO pierde parte de sus funciones.

Después de la tormenta, los sensores reciben una señal débil de origen desconocido que parece conocer la misión ORIOS y la existencia de la Cápsula LUR.

## Estructura narrativa provisional

### Capítulo 1 — Una voz entre las estrellas

- Reparar las comunicaciones.
- Recuperar piezas de la antena mediante un tablero de parejas semánticas.
- Recibir una señal antigua que menciona la misión ORIOS y la Cápsula LUR.

### Capítulo 2 — Las semillas de la Tierra

- Restablecer la energía del laboratorio.
- Proteger la Cápsula LUR.
- Contenido narrativo y jugable todavía pendiente de concretar.

### Capítulo 3 — El camino a casa

- Reconstruir el mapa estelar.
- Reactivar la propulsión.
- Descubrir el origen de la señal y regresar a la Tierra.
- Contenido narrativo y jugable todavía pendiente de concretar.

### Desenlace provisional

La señal pertenecía a una antigua expedición científica. Sus datos permiten completar la reparación y ATLAS regresa a la Tierra con la Cápsula LUR a salvo. El resto de la tripulación puede despertar.

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

El próximo paso es decidir las **reglas de intentos, tiempo y puntuación**.

El primer tablero aprobado es:

- `Sol` y su definición como estrella situada en el centro del sistema solar.
- `Tierra` y su definición como planeta en el que vivimos y con agua líquida en su superficie.
- `Luna` y su definición como satélite natural que orbita la Tierra.
- `Vía Láctea` y su definición como galaxia que contiene el sistema solar.
- Cada pareja concede una pieza del transmisor.
- Completar el tablero repara el módulo de comunicaciones.
- La señal recibida menciona ORIOS y LUR a pesar de ser anterior a la misión.
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
Estamos diseñando Memory Quest, el TFM documentado en este repositorio. Lee primero README.md, docs/CONTINUIDAD.md, docs/DECISIONES.md, docs/SEGUIMIENTO.md y docs/IDEAS-HISTORIAS.md. No cambies decisiones ya aceptadas sin indicarlo. Retoma desde el punto exacto marcado en CONTINUIDAD.md. El alcance técnico, la dirección visual, el despliegue, la mecánica de volteo, el primer tablero y la duración inicial de observación ya están cerrados; el siguiente paso es decidir las reglas de intentos, tiempo y puntuación. Trabaja por decisiones pequeñas y actualiza la documentación aprobada.
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
