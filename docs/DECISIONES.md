# Registro de decisiones

Este documento conservará las decisiones importantes y sus motivos para evitar cambios de dirección sin contexto.

## D-001 — Tipo de proyecto

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** desarrollar un videojuego web educativo de parejas semánticas.
- **Motivo:** permite recuperar una idea desarrollada anteriormente y ampliarla con narrativa, IA, calidad, arquitectura y despliegue.

## D-002 — Progresión narrativa

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** las partidas se organizarán en capítulos. Completar un tablero desbloqueará una parte de la historia.
- **Motivo:** proporciona objetivo, progresión y recompensa más allá de la puntuación.

## D-003 — Primera aventura

- **Estado:** aceptada como referencia inicial.
- **Fecha:** 07/10/2026.
- **Decisión:** utilizar una expedición espacial cuya nave necesita ser reparada.
- **Motivo:** conecta naturalmente los aciertos con piezas, sistemas de la nave y progresión por niveles.

## D-004 — Imágenes controladas

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Decisión:** usar una biblioteca de imágenes y metadatos en lugar de generar todas las imágenes durante la partida.
- **Motivo:** reduce coste y latencia, mantiene coherencia visual y permite revisar contenido y licencias.

## D-005 — Público objetivo

- **Estado:** revisada posteriormente por D-012.
- **Fecha:** 07/10/2026.
- **Decisión:** orientar el juego a preadolescentes de 10 a 13 años.
- **Motivo:** permite crear una aventura emocionante y educativa con lenguaje claro, partidas breves y dificultad progresiva.

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

- **Estado:** aceptada, con la franja de edad actualizada posteriormente por D-012.
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

## D-012 — Ajuste del público objetivo

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** ampliar la franja de referencia del público de 10 a 13 años a **10 a 14 años**.
- **Motivo:** mantiene el enfoque preadolescente y permite diseñar la experiencia para un rango ligeramente más amplio sin cambiar la naturaleza del juego.

## D-013 — Tema y progresión del MVP

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** limitar el MVP a la aventura de astronomía y utilizar tres capítulos con tableros progresivos de **4, 6 y 8 parejas**.
- **Motivo:** ofrece una progresión clara y un alcance asumible para la fecha de entrega.

## D-014 — Formato de las parejas

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** formar cada pareja con una carta que muestre la imagen y el nombre del concepto y otra que muestre una definición o pista breve.
- **Motivo:** combina memoria visual y aprendizaje sin recurrir a cartas idénticas.

## D-015 — Catálogo educativo fijo

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** preparar y revisar antes de la partida todas las parejas, imágenes, pistas, explicaciones y textos narrativos del MVP.
- **Motivo:** prioriza la corrección educativa, simplifica la implementación y evita contenido ambiguo o inesperado.

## D-016 — Uso de inteligencia artificial

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** no integrar un proveedor de IA durante la ejecución del MVP. La IA se utilizará únicamente como apoyo durante el desarrollo y su uso se documentará.
- **Motivo:** evita costes, secretos, dependencia de red y validaciones adicionales, y permite concentrar el tiempo disponible en un producto completo y estable.

## D-017 — Persistencia del progreso

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** no incorporar usuarios ni base de datos. El progreso se guardará en el navegador mediante `localStorage` y podrá reiniciarse desde el juego.
- **Motivo:** permite continuar la partida en el mismo navegador con una implementación pequeña y sin almacenar datos personales.

## Decisiones pendientes

- Nombre definitivo.
- Stack tecnológico.
- Sistema visual y fuentes de imágenes.
- Plataforma de despliegue.
