# Continuidad del proyecto

Este documento permite retomar Memory Quest aunque no esté disponible el historial de conversación. Debe actualizarse al cerrar cada sesión de trabajo relevante.

## Estado al cerrar la sesión del 07/10/2026

El proyecto se encuentra en la fase de definición narrativa y funcional. Todavía no se ha seleccionado el stack ni se ha comenzado la implementación.

## Concepto aprobado

Memory Quest será un videojuego web educativo dirigido principalmente a preadolescentes de 10 a 13 años. El jugador avanzará por una aventura dividida en capítulos resolviendo tableros de parejas semánticas.

Las cartas no tienen que ser idénticas. Pueden relacionar un concepto con su definición, un planeta con una característica, una palabra con su traducción o dos elementos vinculados por el tema de la partida.

Cada pareja correcta proporcionará recursos relacionados con la historia. Completar un tablero reparará una parte de la nave y desbloqueará el siguiente capítulo.

## Historia actual

- **Nave:** ATLAS.
- **Misión científica:** ORIOS.
- **IA acompañante:** COSMO.
- **Carga:** Cápsula LUR, que conserva semillas de numerosas especies destinadas a recuperar ecosistemas terrestres.
- **Protagonista:** cadete en formación, sin género ni edad explícitos. El jugador podrá introducir su nombre.
- **Público de referencia:** 10 a 13 años, aunque esa edad no se atribuye directamente al protagonista.

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

- La IA tendrá personalidad fija durante el MVP: cercana, inteligente y con algo de humor.
- Elegir la personalidad de COSMO queda como ampliación futura.
- Se utilizará una biblioteca controlada de imágenes y metadatos.
- No se generarán todas las imágenes durante cada partida.
- La IA podrá crear ambientación, capítulos y explicaciones, pero las reglas del juego serán deterministas.
- La historia espacial será la primera aventura completa.
- La mitología vasca queda registrada como posible temática futura.

## Punto exacto para retomar

Continuar con el diseño detallado del **capítulo 1: Una voz entre las estrellas**.

La propuesta pendiente de revisar es:

- Seis parejas semánticas sencillas sobre astronomía.
- Cada pareja concede energía o una pieza del transmisor.
- Completar el tablero repara el módulo de comunicaciones.
- La señal recibida menciona ORIOS y LUR a pesar de ser anterior a la misión.
- COSMO cierra el capítulo preguntando cómo puede la señal conocer la cápsula.

La siguiente conversación debe decidir:

1. Si esta estructura del capítulo 1 se aprueba.
2. Cuántas parejas tendrá realmente el primer tablero.
3. Qué relaciones semánticas concretas aparecerán.
4. Cómo se representa visualmente la reparación de las comunicaciones.
5. Qué fragmento exacto de la señal se revela.

## Orden de los siguientes bloques

1. Definir los tres capítulos: objetivo, parejas, recompensa y avance narrativo.
2. Diseñar las reglas del juego: turnos, aciertos, errores, tiempo y puntuación.
3. Decidir cómo se seleccionan los temas y se generan las parejas.
4. Diseñar las pantallas y el recorrido del jugador.
5. Definir la biblioteca de imágenes y el modelo de datos.
6. Elegir el stack tecnológico.
7. Diseñar la arquitectura y la integración de IA.
8. Planificar tareas y calendario hasta el 23/10/2026.
9. Implementar el MVP.
10. Probar, desplegar y preparar README, slides y vídeo.

## Prompt de reanudación

Si fuera necesario comenzar en una conversación sin contexto, utilizar:

```text
Estamos diseñando Memory Quest, el TFM documentado en este repositorio. Lee primero README.md, docs/CONTINUIDAD.md, docs/DECISIONES.md, docs/SEGUIMIENTO.md y docs/IDEAS-HISTORIAS.md. No cambies decisiones ya aceptadas sin indicarlo. Retoma desde el punto exacto marcado en CONTINUIDAD.md. En este momento debemos revisar y concretar el capítulo 1, “Una voz entre las estrellas”. Trabaja por decisiones pequeñas, actualiza la documentación aprobada y no comiences la implementación hasta cerrar el alcance del MVP.
```

## Documentos de referencia

- `README.md`: presentación general.
- `docs/SEGUIMIENTO.md`: alcance, fases y progreso.
- `docs/DECISIONES.md`: decisiones aceptadas y pendientes.
- `docs/IDEAS-HISTORIAS.md`: banco de ideas narrativas.
- `docs/REQUISITOS-ENTREGA.md`: requisitos administrativos del TFM.
- `docs/ARQUITECTURA.md`: futura documentación técnica.

