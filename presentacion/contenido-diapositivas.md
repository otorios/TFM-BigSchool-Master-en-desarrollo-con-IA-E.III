# Contenido de la presentación final

Este documento describe la versión final de la presentación incluida en:

- [`memory-quest-defensa-tfm-olalla-sanchez.pptx`](memory-quest-defensa-tfm-olalla-sanchez.pptx).
- [`memory-quest-defensa-tfm-olalla-sanchez.pdf`](memory-quest-defensa-tfm-olalla-sanchez.pdf).

La presentación contiene **11 diapositivas** y está planteada para una exposición de aproximadamente **10–12 minutos**. El PowerPoint no incorpora notas del orador, por lo que este archivo sirve como guion de apoyo.

## Diapositiva 1 — Portada

### Contenido visible

- **Memory Quest: Señal estelar**.
- «Una prueba de concepto para aprender astronomía mediante memoria semántica, narrativa e IA como copiloto de desarrollo».
- Olalla Sánchez.
- Máster en Desarrollo con Inteligencia Artificial.

### Guion oral

Presentar Memory Quest como una prueba de concepto funcional: un juego web educativo que combina memoria visual, comprensión semántica y narrativa espacial. Adelantar que la IA se utilizó para acelerar el desarrollo, pero no interviene durante la partida.

### Tiempo orientativo

30–40 segundos.

## Diapositiva 2 — El punto de partida

### Contenido visible

- Problema: conceptos científicos estudiados de forma aislada.
- Público: jóvenes de 10 a 14 años.
- Objetivo: aprender astronomía mediante juego, narrativa y asociación.

### Guion oral

Explicar que memorizar términos aislados dificulta relacionarlos y recordarlos. La oportunidad consiste en convertir esas relaciones en una mecánica de juego dirigida a un público preadolescente.

### Tiempo orientativo

45–55 segundos.

## Diapositiva 3 — Valor educativo

### Contenido visible

- Relacionar un concepto astronómico con una definición.
- Interpretar la pista y distinguir conceptos cercanos.
- Construir significado uniendo vocabulario, imagen y narrativa.

### Guion oral

Subrayar que la propuesta no pretende demostrar todavía una mejora pedagógica cuantificada. El valor educativo reside en el diseño de la actividad: obliga a leer, interpretar y establecer una relación, no solo a reconocer dos dibujos iguales.

### Tiempo orientativo

45–55 segundos.

## Diapositiva 4 — La propuesta

### Contenido visible

- Paso del emparejamiento visual a la memoria semántica.
- Ejemplo de `Nebulosa`: imagen y nombre frente a «Nube de gas y polvo entre las estrellas».
- Memoria visual, lectura y comprensión semántica.

### Guion oral

Comparar brevemente un juego de memoria tradicional con Memory Quest. En el proyecto solo son pareja una carta de concepto y su pista correcta. Utilizar el ejemplo de la nebulosa para hacer tangible la diferencia.

### Tiempo orientativo

45–55 segundos.

## Diapositiva 5 — Progresión

### Contenido visible

1. `Una voz entre las estrellas`: 4 parejas y comunicaciones.
2. `Las semillas de la Tierra`: 6 parejas y protección de LURRA.
3. `El camino a casa`: 8 parejas y navegación y propulsión.

### Guion oral

Explicar que la dificultad aumenta por el número de cartas y por la complejidad conceptual. Los tres capítulos comparten el mismo motor, pero cada uno repara un sistema de ATLAS y hace avanzar la historia.

### Tiempo orientativo

50–60 segundos.

## Diapositiva 6 — Experiencia de juego

### Contenido visible

- Observar.
- Relacionar.
- Gestionar energía.
- Reparar.
- Continuar.
- Enlace a la aplicación desplegada.

### Guion oral

Recorrer el flujo: las cartas se muestran durante una cuenta atrás, el jugador relaciona concepto y pista, cada error resta 2 puntos y el sexto provoca el reinicio del capítulo. Cada acierto aumenta la reparación y cada capítulo completado guarda un punto de control.

### Demostración recomendada

Realizar aquí una demostración breve de **90–120 segundos**:

1. Mostrar la portada y el acceso a `Cómo jugar`.
2. Iniciar el capítulo 1.
3. Aprovechar la observación para señalar las cartas, la energía y el objetivo.
4. Resolver una pareja correcta.
5. Provocar un error para enseñar la penalización.
6. Utilizar un estado previamente preparado o una captura para mostrar el resultado de capítulo y el desenlace.

### Tiempo orientativo

2 minutos, incluida la demostración.

## Diapositiva 7 — Prueba de concepto y arquitectura

### Contenido visible

- Flujo modular: `ui.js → main.js → game.js + state.js → chapters.js → storage.js`.
- Aplicación web estática ejecutada en el navegador.
- Sin backend, base de datos remota ni API de IA durante la partida.
- HTML5, CSS, JavaScript, Vite, `localStorage`, GitHub Actions y GitHub Pages.

### Guion oral

Aclarar que `main.js` coordina las pantallas y la partida; `game.js` contiene las reglas; `state.js`, el estado temporal; `chapters.js`, los contenidos; `storage.js`, el progreso; y `ui.js`, la construcción del DOM. Justificar la arquitectura pequeña como una decisión consciente para completar un MVP mantenible.

### Tiempo orientativo

65–75 segundos.

## Diapositiva 8 — La IA como copiloto

### Contenido visible

- Planificación humana.
- Aceleración con IA.
- Supervisión humana.
- Resultado: prueba de concepto funcional en menos tiempo.

### Guion oral

Distinguir claramente tres fases. La persona define problema, público, mecánica, narrativa y alcance. La IA ayuda a explorar alternativas, programar, documentar, revisar y crear recursos iniciales. Finalmente, la persona evalúa, descarta, prueba y decide. COSMO es un personaje narrativo; el juego no consulta un modelo de IA en ejecución.

### Tiempo orientativo

55–65 segundos.

## Diapositiva 9 — Criterio de producto

### Contenido visible

- Una temática completa antes que varias incompletas.
- Dificultad mediante 4, 6 y 8 parejas.
- Pistas breves y legibles.
- Un motor reutilizable para los tres capítulos.

### Guion oral

Presentar estas decisiones como ejemplos de control del alcance. Señalar que el planteamiento inicial era más amplio y podía incorporar generación dinámica, pero se priorizó una experiencia terminada, estable y revisada.

### Tiempo orientativo

50–60 segundos.

## Diapositiva 10 — Resultados

### Contenido visible

- 3 capítulos.
- 18 parejas educativas.
- 36 cartas.
- 12 de 12 tests superados.
- 0 vulnerabilidades conocidas.
- Pruebas automatizadas e integración y despliegue continuos.

### Guion oral

Presentar las cifras como evidencias verificables. El workflow de GitHub Actions instala dependencias, ejecuta las pruebas, construye la aplicación y la publica en GitHub Pages. Aclarar que las pruebas cubren reglas, puntuación, nombres y validación del progreso; no sustituyen una evaluación educativa con usuarios.

### Tiempo orientativo

55–65 segundos.

## Diapositiva 11 — Conclusión

### Contenido visible

- Mecánica semántica funcional.
- Tres capítulos completos.
- Aplicación probada y desplegada.
- Ejemplo de uno de los tres desenlaces.
- Próximo paso: pruebas con usuarios y medición de comprensión, retención y dificultad.

### Guion oral

Cerrar con la idea principal: se ha validado técnicamente una propuesta educativa completa, no todavía su eficacia pedagógica. La IA aceleró la ejecución, pero las decisiones y la validación permanecieron bajo criterio humano. El siguiente paso lógico es probar con el público objetivo y medir resultados.

### Tiempo orientativo

50–60 segundos.

## Distribución total del tiempo

| Bloque | Tiempo aproximado |
| --- | ---: |
| Introducción, problema y valor educativo | 2:15 |
| Propuesta y progresión | 1:40 |
| Experiencia y demostración | 2:00 |
| Arquitectura e IA | 2:10 |
| Criterio de producto, resultados y cierre | 2:30 |
| **Total estimado** | **10:35** |

## Enlaces de la presentación

- **Aplicación:** <https://otorios.github.io/TFM-BigSchool-Master-en-desarrollo-con-IA-E.III/>.
- **Repositorio:** <https://github.com/otorios/TFM-BigSchool-Master-en-desarrollo-con-IA-E.III>.

## Revisión final recomendada

- Confirmar que el enlace de la diapositiva 6 funciona en el equipo de la defensa.
- Exportar de nuevo el PDF si se modifica el PowerPoint.
- Preparar la aplicación en una pestaña antes de comenzar.
- Llevar las capturas de `capturas/` como alternativa si falla la red.
- Ensayar con cronómetro y mantener la demo por debajo de dos minutos.
- No afirmar que se ha validado la eficacia educativa con usuarios; presentarlo como siguiente fase.
