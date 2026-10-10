# Registro de decisiones

Este documento conservará las decisiones importantes y sus motivos para evitar cambios de dirección sin contexto.

## D-001 — Tipo de proyecto

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** desarrollar un videojuego web educativo de parejas semánticas, admitiendo relaciones variadas como concepto y definición, personaje y acontecimiento, palabra y traducción o dos imágenes relacionadas.
- **Decisión actual:** mantener el videojuego de parejas semánticas, pero utilizar en todo el MVP una mecánica uniforme: una carta mostrará la imagen y el nombre del concepto y su pareja contendrá una definición o pista breve.
- **Motivo del cambio:** conserva la idea educativa original, combina memoria visual y aprendizaje y simplifica el diseño y la explicación del juego.

## D-002 — Progresión narrativa

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** organizar la partida en capítulos y utilizar provisionalmente seis parejas en el primer tablero, sin cerrar todavía la progresión completa.
- **Decisión actual:** utilizar tres capítulos con tableros progresivos de **4, 6 y 8 parejas**. Completar cada tablero desbloqueará una parte de la historia.
- **Motivo del cambio:** mantiene la progresión narrativa, introduce una dificultad gradual y establece un alcance concreto y asumible.

## D-003 — Primera aventura

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** utilizar una expedición espacial como primera aventura de referencia, permitiendo que el jugador eligiera o escribiera otros temas y que el sistema construyera aventuras relacionadas.
- **Decisión actual:** limitar el MVP a una única aventura fija de astronomía en la que debe repararse una nave espacial.
- **Motivo del cambio:** evita crear y validar múltiples temáticas y permite concentrar el trabajo en una experiencia completa y coherente.

## D-004 — Imágenes controladas

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** utilizar una biblioteca controlada de imágenes y conceptos, permitiendo que la IA construyera o adaptara durante la partida las relaciones, explicaciones y partes narrativas.
- **Decisión actual:** preparar y revisar previamente todas las imágenes, parejas, pistas, explicaciones y textos narrativos del MVP.
- **Motivo del cambio:** mantiene el control de imágenes y licencias, prioriza la corrección educativa y evita contenido ambiguo, incorrecto o inesperado.

## D-005 — Público objetivo

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** orientar el juego a preadolescentes de 10 a 13 años.
- **Decisión actual:** ampliar la franja de referencia del público a **10 a 14 años**.
- **Motivo del cambio:** mantiene el enfoque preadolescente y permite diseñar la experiencia para un rango ligeramente más amplio sin cambiar la naturaleza del juego.

## D-006 — Protagonista

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Decisión:** el jugador será un joven cadete sin género definido y podrá introducir su nombre al comenzar la aventura.
- **Motivo:** facilita la identificación con el personaje sin aumentar innecesariamente el alcance.

## D-007 — Inteligencia artificial de la nave

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Decisión:** la IA acompañante se llamará **COSMO** y tendrá una personalidad fija, cercana, inteligente y con algo de humor.
- **Motivo:** permite construir una relación narrativa consistente y simplifica la primera versión. El nombre resulta espacial, cercano y apropiado para el público joven.

## D-008 — Nave y misión

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** la nave se llamará **ATLAS** y la expedición científica será la **misión ORIOS**.
- **Motivo:** los tres nombres crean una identidad narrativa clara: COSMO como compañero, ATLAS como escenario principal y ORIOS como misión que debe completarse.

## D-009 — Carga de la misión ORIOS

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** ATLAS transportará una cápsula que conserva semillas de numerosas especies, en lugar de una única planta experimental.
- **Motivo:** aumenta el valor científico de la misión y permite crear futuras aventuras relacionadas con diferentes plantas, ecosistemas, biología y sostenibilidad.
- **Nombre elegido:** **Cápsula LUR**. `Lur` significa “tierra” en euskera y se ha escogido por ser breve, fácil de pronunciar y estar conectado con el propósito de la misión.

## D-010 — Edad y situación inicial del cadete

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** la edad exacta del protagonista no se mencionará en la historia. La franja de 10 a 13 años se mantendrá como referencia para diseñar el lenguaje, la dificultad y la experiencia del público objetivo, no como edad explícita del cadete.
- **Situación inicial:** ATLAS viajaba en modo automático bajo el control de COSMO. El cadete realizaba una práctica de observación supervisada y no era responsable de vigilar o pilotar la nave en solitario.
- **Motivo:** evita que resulte poco creíble que un menor tenga la responsabilidad de la nave y permite que jugadores de distintas edades se identifiquen con el personaje.

## D-011 — Origen de la emergencia

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** durante la práctica del cadete, ATLAS atraviesa inesperadamente una tormenta de partículas cargadas. El escudo evita la destrucción de la nave, pero una sobrecarga desconecta y bloquea varios sistemas.
- **Consecuencias:** fallan las comunicaciones, las cápsulas de hibernación quedan bloqueadas, el laboratorio de la Cápsula LUR pierde energía, se daña el mapa de navegación, la propulsión entra en modo de seguridad y COSMO pierde parte de sus funciones.
- **Elemento de misterio:** después de la tormenta, los sensores detectan una señal débil de origen desconocido.

## D-012 — Uso de inteligencia artificial

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Idea original:** integrar un proveedor de IA en la aplicación para interpretar el tema elegido y generar durante la partida el título, la ambientación, los capítulos y las explicaciones educativas.
- **Decisión actual:** no integrar un proveedor de IA durante la ejecución del MVP. La narrativa, las parejas, las pistas y las explicaciones estarán preparadas y revisadas previamente. La IA se utilizará únicamente como apoyo durante el desarrollo y su uso se documentará.
- **Motivo del cambio:** la integración añadía costes, gestión de secretos, dependencia de red, validación de respuestas y más trabajo de pruebas. Con el tiempo disponible se prioriza entregar un juego completo, estable y educativo.

## D-013 — Persistencia del progreso

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Idea original:** mantener abierta la posibilidad de utilizar una base de datos y perfiles de usuario si el guardado de partidas o la generación de contenido lo requerían.
- **Decisión actual:** no incorporar usuarios ni base de datos. El progreso se guardará en el navegador mediante `localStorage` y podrá reiniciarse desde el juego.
- **Motivo del cambio:** permite continuar la partida en el mismo navegador con una implementación pequeña, sin backend y sin almacenar datos personales.

## Decisiones pendientes

- Nombre definitivo.
- Stack tecnológico.
- Sistema visual y fuentes de imágenes.
- Plataforma de despliegue.
