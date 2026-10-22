# Guion por puntos para el vídeo

Este documento funciona como recordatorio breve durante la grabación. Sigue el orden de la presentación, pero utiliza únicamente puntos clave para facilitar una explicación natural sin leer un texto completo.

## Antes de las diapositivas

- Presentación:
  - Olalla Sánchez.
  - Máster en Desarrollo con Inteligencia Artificial.
  - Proyecto: **Memory Quest: Señal estelar**.
- Origen del proyecto:
  - Parte de un juego desarrollado anteriormente en el FP de Desarrollo de Aplicaciones Web.
  - Se recupera aquella idea para ampliarla con un enfoque educativo y narrativo.
- Decisión de desarrollar un MVP:
  - El plazo de la formación de FUNDAE era limitado.
  - No era posible desarrollar toda la idea original dentro de ese plazo.
  - Se priorizó entregar una versión sencilla, completa, funcional y jugable.
  - La IA permitió acelerar el desarrollo y conseguir un resultado más elaborado en el tiempo disponible.
- Visión futura:
  - El MVP es un punto de partida.
  - Retomar y ampliar el juego con más calma.
  - Profundizar en la programación y desarrollar más partes del código manualmente.
  - Colaborar con artistas, escritores y músicos.
  - Crear nuevas historias, estilos visuales, música y expansiones.
- Dar paso a las diapositivas para explicar el proyecto con más detalle.

## Diapositiva 1 — Memory Quest: Señal estelar

- Juego web educativo.
- Combina memoria visual, relaciones semánticas, astronomía y narrativa espacial.
- Prueba de concepto funcional.
- La IA ayudó durante el desarrollo, pero no interviene durante las partidas.

## Diapositiva 2 — El punto de partida

- Problema: los conceptos científicos estudiados de forma aislada son más difíciles de relacionar y recordar.
- Público principal: jóvenes de 10 a 14 años.
- Objetivo: aprender astronomía mediante imágenes, definiciones, juego y narrativa.

## Diapositiva 3 — Valor educativo

- No consiste en encontrar dos imágenes iguales.
- El jugador debe leer, interpretar y relacionar cada pista con el concepto correcto.
- Combina memoria visual, lectura, comprensión y vocabulario científico.
- No se ha medido todavía la eficacia pedagógica con usuarios.
- En esta fase se ha validado la propuesta técnica.

## Diapositiva 4 — La propuesta

- Evolución del juego de memoria tradicional hacia la memoria semántica.
- Una carta contiene una imagen y un nombre; la otra, su definición.
- Ejemplo: `Nebulosa` y «Nube de gas y polvo entre las estrellas».
- Es necesario comprender la relación, no solo recordar posiciones.

## Diapositiva 5 — Progresión

- Tres capítulos con dificultad progresiva:
  - Capítulo 1: 4 parejas y reparación de las comunicaciones.
  - Capítulo 2: 6 parejas y protección de la cápsula LURRA.
  - Capítulo 3: 8 parejas y recuperación de la navegación y la propulsión.
- Cada capítulo introduce nuevos conceptos, repara una parte de ATLAS y hace avanzar la historia.

## Diapositiva 6 — Experiencia de juego y demostración

- Mostrar la pantalla inicial.
- Abrir brevemente `Cómo jugar`.
- Introducir el nombre e iniciar el primer capítulo.
- Durante la cuenta atrás:
  - Las cartas permanecen visibles.
  - El jugador observa y memoriza sus posiciones.
- Mostrar una pareja correcta:
  - Las cartas permanecen visibles.
  - Avanza la barra de reparación.
- Mostrar una pareja incorrecta:
  - Se pierden 2 puntos de energía.
  - Las cartas vuelven a ocultarse.
- Reglas principales:
  - 12 puntos de energía por capítulo.
  - Seis errores provocan el reinicio del capítulo.
  - El cronómetro es informativo; no hay límite de tiempo.
  - El progreso se guarda al terminar cada capítulo.
- Mostrar rápidamente el resultado de un capítulo y uno de los desenlaces finales.

## Diapositiva 7 — Prueba de concepto y arquitectura

- Aplicación web estática creada con HTML, CSS, JavaScript y Vite.
- Organización modular:
  - `main.js`: coordinación de la aplicación.
  - `game.js`: reglas del juego.
  - `state.js`: estado de la partida.
  - `chapters.js`: historias y parejas.
  - `storage.js`: progreso guardado.
  - `ui.js`: pantallas e interfaz.
- El progreso se almacena en `localStorage`.
- No utiliza backend, base de datos remota ni una API de IA durante la partida.
- Aplicación publicada mediante GitHub Pages.

## Diapositiva 8 — La IA como copiloto

- Planificación humana:
  - Problema, público, mecánica, narrativa y alcance.
- Ayuda de la IA:
  - Explorar alternativas, programar, documentar, revisar y crear recursos visuales iniciales.
- Supervisión humana:
  - Probar, corregir, descartar propuestas y tomar las decisiones finales.
- COSMO es un personaje ficticio, no una IA real conectada al juego.

## Diapositiva 9 — Criterio de producto

- Controlar el alcance para poder terminar el MVP.
- Priorizar una temática completa, tres capítulos terminados y una experiencia estable.
- Evitar varias temáticas incompletas o funciones que no pudieran probarse correctamente.
- Decisiones principales:
  - Dificultad progresiva de 4, 6 y 8 parejas.
  - Pistas breves y legibles.
  - Un único motor reutilizable para los tres capítulos.

## Diapositiva 10 — Resultados

- 3 capítulos completos.
- 18 parejas educativas.
- 36 cartas.
- 12 de 12 pruebas automáticas superadas.
- 0 vulnerabilidades conocidas detectadas.
- GitHub Actions instala las dependencias, ejecuta las pruebas, construye la aplicación y la publica.
- Proyecto disponible en un repositorio público y en GitHub Pages.
- Las pruebas validan el funcionamiento técnico, pero no sustituyen una evaluación educativa con usuarios.

## Diapositiva 11 — Conclusión

- Resultado conseguido:
  - MVP completo y jugable.
  - Mecánica de memoria semántica funcional.
  - Tres capítulos con narrativa.
  - Aplicación probada y desplegada.
- La IA aceleró el desarrollo.
- Las decisiones y la validación permanecieron bajo supervisión humana.
- Próximos pasos:
  - Probar el juego con jóvenes de 10 a 14 años.
  - Medir comprensión, retención y dificultad.
  - Incorporar nuevas historias y temáticas.
  - Añadir sonido, música y narración.
  - Ampliar o sustituir las ilustraciones provisionales.
  - Colaborar con artistas, escritores y músicos.
  - Retomar el desarrollo con más calma y profundizar manualmente en el código.
- Enseñar los enlaces del juego y del repositorio.
- Agradecer la atención.
