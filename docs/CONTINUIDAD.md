# Continuidad del proyecto

Este documento permite retomar Memory Quest aunque no esté disponible el historial de conversación. Debe actualizarse al cerrar cada sesión de trabajo relevante.

## Repositorio correcto

- **Repositorio local:** `C:\Users\Usuario\Documents\TFG-BigSchool-Master-en-desarrollo-con-IA-E.III`.
- **Repositorio remoto:** `git@github.com:otorios/TFG-BigSchool-Master-en-desarrollo-con-IA-E.III.git`.
- **Rama de trabajo:** `main`.
- No confundirlo con `C:\Users\Usuario\Documents\BigSchool`, que contiene los materiales generales del máster y no debe utilizarse para desarrollar el TFG.

## Estado actualizado el 10/10/2026

El proyecto se encuentra en la fase de definición técnica previa a la implementación. Ya están cerrados el alcance funcional, la persistencia y el stack: HTML, CSS y JavaScript sin framework, con Vite. React con Vite queda como evolución futura. Todavía no se ha comenzado la implementación.

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
- Se utilizará una biblioteca controlada de imágenes y metadatos.
- No se generarán todas las imágenes durante cada partida.
- La narrativa, las parejas, las pistas y las explicaciones estarán preparadas y revisadas previamente.
- No habrá proveedor de IA durante la ejecución; la IA se utilizará únicamente como apoyo documentado al desarrollo.
- No habrá usuarios ni base de datos; el progreso se guardará en `localStorage`.
- La historia espacial será la primera aventura completa.
- La mitología vasca queda registrada como posible temática futura.

## Punto exacto para retomar

El próximo paso es concretar la **arquitectura mínima, el formato de los datos locales y la estructura inicial del proyecto** antes de comenzar la implementación.

La propuesta pendiente de revisar es:

- Cuatro parejas semánticas sencillas sobre astronomía.
- Cada pareja concede energía o una pieza del transmisor.
- Completar el tablero repara el módulo de comunicaciones.
- La señal recibida menciona ORIOS y LUR a pesar de ser anterior a la misión.
- COSMO cierra el capítulo preguntando cómo puede la señal conocer la cápsula.

Después del stack deberán concretarse las relaciones semánticas del primer tablero, la representación visual de la reparación y el fragmento de señal que cierra el capítulo.

## Orden de los siguientes bloques

1. Diseñar la arquitectura, el formato de los datos locales y el guardado mediante `localStorage`.
2. Completar los tres capítulos: objetivo, parejas, recompensa y avance narrativo.
3. Diseñar las reglas del juego: turnos, aciertos, errores, tiempo y puntuación.
4. Preparar el catálogo fijo y revisado de astronomía.
5. Diseñar las pantallas y el recorrido del jugador.
6. Definir la biblioteca de imágenes, sus fuentes y licencias.
7. Planificar tareas y calendario hasta el 23/10/2026.
8. Implementar el MVP.
9. Probar, desplegar y preparar README, slides y vídeo.

## Prompt de reanudación

Si fuera necesario comenzar en una conversación sin contexto, utilizar:

```text
Estamos diseñando Memory Quest, el TFM documentado en este repositorio. Lee primero README.md, docs/CONTINUIDAD.md, docs/DECISIONES.md, docs/SEGUIMIENTO.md y docs/IDEAS-HISTORIAS.md. No cambies decisiones ya aceptadas sin indicarlo. Retoma desde el punto exacto marcado en CONTINUIDAD.md. El alcance funcional y el stack del MVP ya están cerrados; el siguiente paso es definir la arquitectura mínima y la estructura inicial del proyecto. Trabaja por decisiones pequeñas y actualiza la documentación aprobada.
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
