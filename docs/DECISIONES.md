# Registro de decisiones

Este documento conserva las decisiones importantes y sus motivos para evitar cambios de dirección sin contexto.

## D-001 — Tipo de proyecto

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** se planteó desarrollar un videojuego web educativo de parejas semánticas, admitiendo relaciones variadas como concepto y definición, personaje y acontecimiento, palabra y traducción o dos imágenes relacionadas.
- **Decisión actual:** se mantiene el videojuego de parejas semánticas con una mecánica uniforme: una carta muestra la imagen y el nombre del concepto y su pareja contiene una definición o pista breve.
- **Motivo del cambio:** se conserva la idea educativa original, se combinan memoria visual y aprendizaje y se simplifican el diseño y la explicación del juego.

## D-002 — Progresión narrativa

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** se planteó organizar la partida en capítulos y utilizar provisionalmente seis parejas en el primer tablero, sin cerrar todavía la progresión completa.
- **Decisión actual:** se utilizan tres capítulos con tableros progresivos de **4, 6 y 8 parejas**. Completar cada tablero desbloquea una parte de la historia.
- **Motivo del cambio:** se mantiene la progresión narrativa, se introduce una dificultad gradual y se establece un alcance concreto y asumible.

## D-003 — Primera aventura

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** se planteó utilizar una expedición espacial como primera aventura de referencia, permitiendo que el jugador eligiera o escribiera otros temas y que el sistema construyera aventuras relacionadas.
- **Decisión actual:** el MVP se limita a una única aventura fija de astronomía en la que debe repararse una nave espacial.
- **Motivo del cambio:** se evita crear y validar múltiples temáticas y se concentra el trabajo en una experiencia completa y coherente.

## D-004 — Imágenes controladas y procedencia

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** se planteó utilizar una biblioteca controlada de imágenes y conceptos y permitir que la IA construyera o adaptara durante la partida las relaciones, explicaciones y partes narrativas. La idea partía también de un juego de parejas anterior que utilizaba obras de ilustradores con finalidad educativa y algunos fondos propios.
- **Decisión actual:** todas las imágenes, parejas, pistas, explicaciones y textos narrativos del MVP se preparan y revisan previamente. Las cartas utilizan imágenes astronómicas oficiales de la NASA con su procedencia y crédito. Para poder presentar una versión funcional dentro del plazo del TFM, el fondo y el reverso se han generado específicamente para el MVP con apoyo de IA y se incluyen en `src/assets/`.
- **Motivo del cambio:** se mantiene el control de imágenes y licencias, se prioriza la corrección educativa y se evita contenido ambiguo o inesperado durante la partida.
- **Carácter provisional:** los recursos visuales generados con IA se utilizan únicamente para completar y demostrar la propuesta del MVP. No representan la dirección definitiva de una futura versión comercial o ampliada.
- **Evolución futura:** después de la entrega se prevé sustituir progresivamente estos recursos por ilustraciones realizadas por la autora del proyecto o mediante colaboraciones con artistas. Las nuevas historias, expansiones y recursos visuales también se desarrollarán de forma original, documentando siempre su autoría y sus condiciones de uso.

## D-005 — Público objetivo

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** se planteó orientar el juego a preadolescentes de 10 a 13 años.
- **Decisión actual:** la franja de referencia se amplía a **10 a 14 años**.
- **Motivo del cambio:** se mantiene el enfoque preadolescente y se cubre un rango ligeramente más amplio sin cambiar la naturaleza del juego.

## D-006 — Protagonista

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Decisión:** el jugador representa a un joven cadete sin género definido y puede introducir su nombre al comenzar la aventura.
- **Motivo:** se facilita la identificación con el personaje sin aumentar innecesariamente el alcance.

## D-007 — Inteligencia artificial de la nave

- **Estado:** aceptada para el MVP.
- **Fecha:** 07/10/2026.
- **Decisión:** la IA acompañante se llama **COSMO** y tiene una personalidad fija, cercana, inteligente y con algo de humor.
- **Motivo:** se construye una relación narrativa consistente y se simplifica la primera versión. El nombre resulta espacial, cercano y apropiado para el público joven.

## D-008 — Nave y misión

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** la nave se llama **ATLAS** y la expedición científica, **misión ORIOS**.
- **Motivo:** con estos tres nombres se crea una identidad narrativa clara: COSMO como compañero, ATLAS como escenario principal y ORIOS como misión que debe completarse.

## D-009 — Carga de la misión ORIOS

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Decisión:** ATLAS transporta una cápsula que conserva semillas de numerosas especies, en lugar de una única planta experimental.
- **Motivo:** se aumenta el valor científico de la misión y se posibilitan futuras aventuras sobre plantas, ecosistemas, biología y sostenibilidad.
- **Idea original del nombre:** se había elegido **Cápsula LUR** por su relación con la tierra en euskera y con el propósito de la misión.
- **Decisión actual del nombre:** se denomina **Cápsula LURRA**.
- **Motivo del cambio de nombre:** `LURRA` mantiene la referencia a la tierra y resulta un nombre más completo y natural para la cápsula.

## D-010 — Edad y situación inicial del cadete

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** no se menciona la edad exacta del protagonista. La franja del público objetivo se utiliza para diseñar el lenguaje, la dificultad y la experiencia, no como edad explícita del cadete.
- **Situación inicial:** ATLAS viajaba en modo automático bajo el control de COSMO. El cadete realizaba una práctica de observación supervisada y no era responsable de vigilar o pilotar la nave en solitario.
- **Motivo:** se evita que resulte poco creíble que un menor tenga la responsabilidad de la nave y se facilita que jugadores de distintas edades se identifiquen con el personaje.

## D-011 — Origen de la emergencia

- **Estado:** aceptada.
- **Fecha:** 07/10/2026.
- **Decisión:** durante la práctica del cadete, ATLAS atraviesa inesperadamente una tormenta de partículas cargadas. El escudo evita la destrucción de la nave, pero una sobrecarga desconecta y bloquea varios sistemas.
- **Consecuencias:** fallan las comunicaciones, las cápsulas de hibernación quedan bloqueadas, el laboratorio de la Cápsula LURRA pierde energía, se daña el mapa de navegación, la propulsión entra en modo de seguridad y COSMO pierde parte de sus funciones.
- **Elemento de misterio:** después de la tormenta, los sensores detectan una señal débil de origen desconocido.

## D-012 — Uso de inteligencia artificial

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Idea original:** se planteó integrar un proveedor de IA en la aplicación para interpretar el tema elegido y generar durante la partida el título, la ambientación, los capítulos y las explicaciones educativas.
- **Decisión actual:** no se integra un proveedor de IA durante la ejecución del MVP. La narrativa, las parejas, las pistas y las explicaciones se preparan y revisan previamente. La IA se utiliza únicamente como apoyo documentado durante el desarrollo.
- **Motivo del cambio:** la integración añadía costes, gestión de secretos, dependencia de red, validación de respuestas y más trabajo de pruebas. Con el tiempo disponible, se prioriza la entrega de un juego completo, estable y educativo.

## D-013 — Persistencia del progreso

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Idea original:** se planteó mantener abierta la posibilidad de utilizar una base de datos y perfiles de usuario si el guardado de partidas o la generación de contenido lo requerían.
- **Decisión actual:** no se incorporan usuarios ni base de datos. El progreso se guarda en el navegador mediante `localStorage` y puede reiniciarse desde el juego.
- **Motivo del cambio:** la partida se conserva en el mismo navegador con una implementación pequeña, sin backend ni datos personales remotos.

## D-014 — Stack tecnológico del MVP

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión actual:** el MVP se desarrolla con HTML, CSS y JavaScript sin framework, usando Vite como herramienta gratuita de desarrollo y construcción.
- **Motivo:** se parte de tecnología conocida, se reduce el aprendizaje necesario y se favorece una entrega completa dentro del tiempo disponible.
- **Evolución futura:** queda registrada una posible versión basada en React y Vite para ampliar o reorganizar la aplicación mediante componentes.

## D-015 — Organización de las pantallas y niveles

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Idea anterior de referencia:** el juego anterior utilizaba una página HTML y un archivo JavaScript diferentes para cada nivel. El sistema funcionaba, pero repetía la estructura y buena parte de la lógica.
- **Decisión actual:** se utiliza un único `index.html` con varias vistas controladas por JavaScript y un solo motor de parejas compartido por los tres capítulos.
- **Motivo del cambio:** los capítulos se cargan como datos, la lógica se corrige una sola vez y se evita duplicar el tablero, la comprobación de parejas y la navegación.

## D-016 — Formato de los contenidos locales

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** los capítulos, parejas, pistas, explicaciones y textos narrativos se definen como objetos JavaScript exportados desde un módulo local.
- **Motivo:** el formato permite añadir comentarios e importar los datos directamente en el motor sin procesar archivos externos.
- **Evolución futura:** si el proyecto crece, los datos podrán migrarse a JSON, una API o una base de datos sin cambiar las reglas principales.

## D-017 — Estado temporal de la partida

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** el estado actual de la partida se agrupa en un único objeto JavaScript llamado `gameState`.
- **Contenido previsto:** capítulo actual, puntuación, intentos, cartas seleccionadas, parejas encontradas, reparaciones y bloqueo temporal del tablero.
- **Motivo:** la situación de la partida puede consultarse y modificarse desde un único lugar, sin repartir variables relacionadas.
- **Límite:** no se guardan en `localStorage` estados momentáneos como las cartas volteadas durante una comparación.

## D-018 — Puntos de guardado

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** el progreso se guarda en `localStorage` al introducir el nombre, completar cada capítulo y terminar la aventura.
- **Datos persistentes:** nombre del jugador, capítulo desbloqueado, puntuación acumulada, sistemas reparados y estado de finalización de la aventura.
- **Comportamiento al continuar:** si el juego se cierra durante un tablero, se conservan los capítulos completados y el capítulo activo comienza de nuevo.
- **Nueva partida:** el progreso anterior se borra antes de comenzar.
- **Motivo:** los puntos de control permiten continuar la aventura sin tener que guardar posiciones de cartas ni reconstruir una partida incompleta.

## D-019 — Estructura inicial del proyecto

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** se utiliza una estructura pequeña basada en `index.html`, módulos JavaScript y recursos propios dentro de `src/`, imágenes astronómicas en `public/images/` y pruebas en `tests/`.
- **Módulos principales:** `main.js`, `game.js`, `state.js`, `storage.js` y `ui.js`.
- **Motivo:** se separan las responsabilidades del juego sin crear una arquitectura excesiva para el tamaño y el plazo del MVP.

## D-020 — Controles mínimos de seguridad

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** se aplican controles de seguridad proporcionados a una aplicación web estática sin backend, base de datos ni API.
- **Controles:** las entradas se muestran con `textContent`, el nombre se limita, se evitan `innerHTML`, `eval()` y `document.write()`, se validan los datos de `localStorage`, no se incluyen secretos, se reducen dependencias, se usan recursos locales y se aplica una CSP básica.
- **Comprobaciones:** se prueban nombres con caracteres especiales y datos manipulados o dañados en `localStorage`.
- **Motivo:** se previenen XSS en el navegador, errores por datos alterados y la exposición accidental de información sin introducir una infraestructura innecesaria.

## D-021 — Dirección visual del MVP

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Idea original:** se planteó una estética de panel de control juvenil con cian, ámbar y rojo, cercana al interior tecnológico de ATLAS.
- **Decisión actual (11/10/2026):** se adopta una estética espacial más ilustrada y artesanal, con paneles redondeados, colores planos y ausencia de degradados. La paleta combina `#171A3D`, `#192D50`, `#284B69`, `#34576B`, `#E3C06E` y `#DFDBDD`.
- **Motivo del cambio:** la propuesta inicial resultaba demasiado tecnológica. La nueva dirección conserva el ambiente espacial y aporta una identidad más personal y coherente con las referencias visuales seleccionadas.
- **Aplicación:** se mantiene una tipografía grande y legible. El dorado destaca acciones, energía, fallos, tiempo, progreso y resultados.
- **Cartas y fondo:** el reverso muestra únicamente la ilustración original `src/assets/reverso-carta-atlas.png`, que ya integra las estrellas, las perseidas y la identificación `MQ · ATLAS`, sin añadir emblemas ni textos superpuestos desde la interfaz. El fondo `src/assets/fondo-cenefa-estelar.png` incorpora una cenefa inferior de símbolos estelares.
- **Carácter provisional:** estas ilustraciones permiten mostrar la identidad visual propuesta en el MVP. En futuras versiones se prevé sustituirlas o ampliarlas con ilustraciones propias y posibles colaboraciones artísticas.
- **Adaptación:** en pantallas amplias el tablero y la información de misión podrán aparecer en columnas; en móvil los paneles se colocarán uno debajo de otro y el tablero aprovechará el ancho disponible.
- **Motivo:** esta dirección integra la historia y el juego educativo, mantiene una apariencia atractiva para el público de 10 a 14 años y puede realizarse principalmente con HTML y CSS dentro del tiempo disponible.

## D-022 — Plataforma de despliegue

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** el MVP se publicará mediante GitHub Pages desde el mismo repositorio del TFG, utilizando GitHub Actions para construir el proyecto con Vite y desplegar el contenido generado.
- **Visibilidad:** el repositorio será público, de acuerdo con los requisitos de entrega y con el uso gratuito previsto de GitHub Pages.
- **Motivo:** no supone ningún gasto, evita abrir y mantener otro servicio y conserva en GitHub el código, el historial y la versión publicada.
- **Alternativa valorada:** Notion Sites permite publicar páginas informativas, pero no sustituye el alojamiento de una aplicación JavaScript construida con Vite. Podría utilizarse en el futuro como presentación enlazada, pero no es necesario para el MVP.

## D-023 — Mecánica de descubrimiento de parejas

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Referencia:** se conserva la base del juego de parejas anterior: al comenzar el tablero, todas las cartas permanecen visibles durante unos segundos y después se ocultan.
- **Decisión:** se seleccionan dos cartas en cada intento. Si forman la relación semántica correcta, permanecen visibles; si no corresponden, se muestran brevemente y vuelven a ocultarse.
- **Diferencia educativa:** las cartas no son imágenes idénticas. Se relaciona una imagen acompañada del nombre del concepto con su definición o pista.
- **Motivo:** se mantiene una mecánica conocida y funcional, adaptada como actividad de asociación y aprendizaje.

## D-024 — Primer tablero y reparación

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Capítulo:** `Una voz entre las estrellas`.
- **Idea original de las pistas:** utilizaría definiciones completas redactadas en primera persona, pero ocupaban demasiado espacio en las cartas.
- **Parejas actuales:** `Sol` ↔ `Estrella central del sistema solar`; `Tierra` ↔ `Planeta donde vivimos, con agua líquida en su superficie`; `Luna` ↔ `Satélite natural de la Tierra`; `Vía Láctea` ↔ `Galaxia que contiene el sistema solar`.
- **Motivo de la simplificación:** se mantiene una sola idea educativa por carta y se facilita su lectura durante la observación.
- **Idea original de la recompensa:** cada pareja correcta recuperaría una pieza distinta del transmisor y las cuatro piezas repararían las comunicaciones.
- **Decisión actual de la recompensa:** cada acierto hace avanzar una barra de reparación. Al completar el tablero se obtiene un único módulo de comunicaciones y se recibe la señal misteriosa.
- **Motivo del cambio:** se evita diseñar, nombrar y explicar una pieza distinta por pareja, se mantiene una respuesta visible para cada acierto y se simplifican los recursos.
- **Progresión general:** el segundo capítulo entregará el módulo de protección de la Cápsula LURRA y el tercero el módulo de navegación y propulsión. Los tres módulos permitirán completar la reparación de ATLAS.

## D-025 — Duración de la observación inicial

- **Estado:** aceptada para pruebas.
- **Fecha:** 10/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** se mostrarían todas las cartas durante 8, 12 y 16 segundos. En la primera revisión los tiempos se ampliaron a 20, 30 y 40 segundos.
- **Decisión actual:** las cartas se muestran durante 14, 21 y 28 segundos antes de ocultarse y permitir la interacción.
- **Motivo del cambio:** los tiempos originales no permitían leer y observar con comodidad, pero la primera ampliación hacía demasiado larga la espera. Se utiliza un punto medio que permite revisar las pistas sin frenar el ritmo.
- **Comportamiento:** durante esta fase aparecerá una cuenta atrás y no se podrán seleccionar cartas.
- **Criterio:** se mantiene una progresión proporcional de tres segundos y medio por pareja.
- **Validación:** durante las pruebas se volverá a comprobar si estos tiempos permiten leer y observar las cartas con comodidad.

## D-026 — Intentos del MVP

- **Estado:** aceptada para el MVP.
- **Fecha:** 10/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** iba a permitir intentos ilimitados; los errores aumentarían el contador, pero no harían perder ni reiniciar el capítulo.
- **Decisión actual:** cada selección de dos cartas contará como un intento. Los errores consumirán la energía del capítulo y, si llega a cero antes de completar el tablero, se perderá y reiniciará solamente ese capítulo. Se conservarán los anteriores.
- **Motivo del cambio:** se busca un riesgo real y una dificultad progresiva sin obligar a repetir toda la aventura.
- **Evolución futura:** se contempla permitir la elección de dificultad. Según el modo, podrán existir intentos ilimitados, límites de intentos, tiempo máximo o condiciones especiales. Las reglas exactas se decidirán después del MVP.

## D-027 — Tiempo de partida

- **Estado:** aceptada para el MVP.
- **Fecha:** 10/10/2026.
- **Decisión:** no se impone un límite de tiempo ni se provoca una derrota por tardar. Se muestra un cronómetro informativo desde que se ocultan las cartas hasta la última pareja.
- **Resultado:** el tiempo empleado se muestra al finalizar el capítulo para aportar información y facilitar las pruebas.
- **Motivo:** se obtiene una medida útil sin añadir presión ni impedir que el jugador complete la actividad educativa.
- **Evolución futura:** el cronómetro permitirá añadir más adelante modos de dificultad con tiempo máximo.

## D-028 — Energía, puntuación y resultado

- **Estado:** aceptada para pruebas.
- **Fecha:** 10/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Idea original:** cada capítulo comenzaría con 12 puntos de energía y los errores restarían 1, 2 y 3 puntos respectivamente. Después se redujo el tercer capítulo a 2 puntos por error, pero el primero todavía permitía 12 fallos.
- **Decisión actual:** cada capítulo comenzará con 12 puntos de energía y cada error restará 2 puntos. Los tres tableros permitirán seis fallos y los aciertos avanzarán la reparación sin consumir energía.
- **Motivo del cambio:** 12 fallos resultaban excesivos para un tablero de cuatro parejas. La regla se unifica y la dificultad aumenta mediante el número de parejas y la complejidad de los conceptos.

| Regla | Capítulo 1 | Capítulo 2 | Capítulo 3 |
| --- | ---: | ---: | ---: |
| Parejas | 4 | 6 | 8 |
| Observación inicial | 14 segundos | 21 segundos | 28 segundos |
| Energía inicial | 12 puntos | 12 puntos | 12 puntos |
| Energía perdida por error | 2 puntos | 2 puntos | 2 puntos |
| Derrota al llegar a 0 | 6.º error | 6.º error | 6.º error |
| Módulo obtenido | Comunicaciones | Protección de LURRA | Navegación y propulsión |

- **Derrota:** si la energía llega a cero, se reinicia únicamente el capítulo actual con 12 puntos y se conservan los capítulos completados.
- **Puntuación final:** se suma la energía restante de los tres capítulos. El máximo es 36 puntos y el mínimo posible al completar la aventura es 6.
- **Regreso:** con 30–36 puntos ATLAS regresará rápidamente y con reserva; con 18–29 realizará un regreso normal y seguro; con 6–17 viajará más despacio para ahorrar energía. En los tres casos la misión se completará.
- **Validación:** la energía o las penalizaciones se ajustarán si las pruebas muestran un capítulo demasiado fácil o exigente.

## D-029 — Segundo tablero y reparación

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Capítulo:** `Las semillas de la Tierra`.
- **Idea original de las pistas:** utilizaría definiciones completas redactadas en primera persona, pero algunas quedaban cortadas en las cartas compactas.
- **Parejas actuales:** `Atmósfera` ↔ `Capa de gases que rodea un planeta`; `Magnetosfera` ↔ `Campo magnético que protege un planeta`; `Zona habitable` ↔ `Región donde un planeta podría tener agua líquida`; `Exoplaneta` ↔ `Planeta que orbita una estrella distinta del Sol`; `Cometa` ↔ `Cuerpo de hielo, roca y polvo que puede formar una cola`; `Asteroide` ↔ `Cuerpo rocoso o metálico que orbita el Sol`.
- **Motivo de la simplificación:** se conservan los términos científicos esenciales en frases directas y legibles.
- **Recompensa:** cada acierto hace avanzar la barra de reparación. Al completar las seis parejas se obtiene el módulo de protección de LURRA y el laboratorio recupera la energía necesaria para conservar las semillas.
- **Motivo:** se aumenta la dificultad con conceptos relacionados con la protección planetaria, los cuerpos menores y la búsqueda de lugares adecuados para la vida, manteniendo definiciones breves y diferenciables.
- **Validación educativa:** se utilizan como referencias las páginas de NASA Science sobre exoplanetas y zona habitable, magnetosferas, cometas y asteroides.

## D-030 — Avance narrativo del segundo capítulo

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** al recuperar el módulo de protección, LURRA quedará estable y sus semillas estarán fuera de peligro. COSMO utilizará la energía del laboratorio para analizar mejor la señal.
- **Descubrimiento:** la señal contendrá un protocolo de conservación biológica casi idéntico al de LURRA y un fragmento de mapa con las coordenadas de una antigua baliza situada en la ruta de regreso.
- **Misterio:** los registros relacionarán la baliza con una expedición científica anterior a ORIOS. Esto explicará parte de la conexión tecnológica, pero todavía no cómo conoce los datos actuales de la misión.
- **Transición:** COSMO indicará que deberán reconstruir el mapa de navegación para descubrir quién envió la señal y encontrar el camino a casa.
- **Motivo:** se conecta la protección de las semillas con el misterio principal y se prepara de forma directa la reparación de navegación y propulsión del último capítulo.

## D-031 — Tercer tablero y reparación final

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Fecha de actualización:** 10/10/2026.
- **Capítulo:** `El camino a casa`.
- **Idea original de las pistas:** utilizaría definiciones completas redactadas en primera persona, pero el tablero final necesita textos especialmente compactos.
- **Parejas actuales:** `Órbita` ↔ `Trayectoria de un objeto alrededor de otro`; `Gravedad` ↔ `Fuerza que atrae a los cuerpos con masa`; `Año luz` ↔ `Distancia que recorre la luz en un año`; `Constelación` ↔ `Región del cielo con un patrón reconocible de estrellas`; `Nebulosa` ↔ `Nube de gas y polvo entre las estrellas`; `Supernova` ↔ `Gran explosión al final de la vida de una estrella`; `Púlsar` ↔ `Estrella de neutrones que gira y emite pulsos`; `Agujero negro` ↔ `Objeto cuya gravedad impide escapar incluso a la luz`.
- **Motivo de la simplificación:** se evitan cortes de texto y se reduce el esfuerzo de lectura sin eliminar los conceptos avanzados.
- **Recompensa:** cada acierto hace avanzar la barra de reparación. Al completar las ocho parejas se obtiene el módulo de navegación y propulsión, se reconstruye el mapa de la baliza y comienza el regreso.
- **Motivo:** la progresión se cierra con conceptos más avanzados sobre distancias, movimiento, orientación y objetos del universo, manteniendo definiciones breves y diferenciables.
- **Validación educativa:** se utiliza como referencia principal el glosario de NASA Science sobre el universo.

## D-032 — Resolución de la señal y desenlace

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Origen:** la baliza será un transmisor automático dejado en el espacio por una expedición científica anterior que desarrolló el protocolo de conservación del que posteriormente nació LURRA.
- **Explicación del misterio:** durante la tormenta, un sistema de emergencia independiente de ATLAS alcanzó a emitir brevemente los identificadores de ORIOS y LURRA antes de que fallaran las comunicaciones. La baliza recibió el mensaje, reconoció una evolución de su propio protocolo y respondió utilizando esos nombres; no conocía el futuro.
- **Resolución:** sus archivos permitirán completar el mapa y establecer una ruta segura. Con los tres módulos reparados, COSMO podrá despertar a la capitana y preparar el regreso de ATLAS con LURRA a salvo.
- **Resultado variable:** el mensaje final describirá un regreso rápido, normal o lento según la energía conservada, pero la misión terminará con éxito en los tres casos.
- **Continuidad futura:** la expedición anterior podrá investigarse en otra aventura sin dejar preguntas necesarias para comprender el final del MVP.
- **Motivo:** se explica de manera coherente por qué una tecnología antigua conoce los nombres actuales, se cierra el viaje principal y se mantiene una posibilidad narrativa futura.

## D-033 — Nombre del juego y de la aventura

- **Estado:** aceptada.
- **Fecha:** 10/10/2026.
- **Decisión:** se utiliza **Memory Quest** como nombre general y **Señal estelar** como subtítulo de la primera aventura. El título completo del MVP es **Memory Quest: Señal estelar**.
- **Motivo:** el nombre general es adecuado para un videojuego que podrá incorporar historias distintas, mientras que el subtítulo aporta identidad a esta aventura sin revelar desde el principio que la señal procede de una baliza.
- **Evolución futura:** se mantendrá `Memory Quest: [subtítulo de la aventura]` como sistema de nombres para nuevas expansiones, temáticas o historias.
