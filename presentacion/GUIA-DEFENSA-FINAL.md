# Guía estructurada para la defensa final del TFM

> Documento preparado a partir del análisis del código fuente, la documentación, las pruebas, la configuración de despliegue y el historial Git del repositorio. Estado verificado el 21/10/2026. Cuando una afirmación procede de una inferencia y no de un requisito oficial, se indica expresamente.

## 1. Datos generales

### Título exacto

**Memory Quest: Señal estelar**.

El repositorio identifica el proyecto como Trabajo Final del **Máster en Desarrollo con Inteligencia Artificial**.

### Objetivo principal

Desarrollar y publicar un videojuego web educativo completo, dirigido principalmente a jóvenes de 10 a 14 años, que combine memoria visual, asociación semántica y aprendizaje de astronomía dentro de una aventura narrativa.

### Problema que pretende resolver

Los conceptos científicos pueden resultar difíciles de comprender y recordar cuando se estudian de forma aislada. Los juegos de memoria tradicionales, por otra parte, suelen limitarse a encontrar dos imágenes idénticas y no exigen comprender la relación entre los elementos.

Memory Quest transforma esa mecánica: el jugador debe relacionar una imagen acompañada del nombre de un concepto con su definición o pista. De este modo se trabaja simultáneamente la memoria visual, la lectura, la comprensión del significado y la motivación mediante una historia con objetivos y recompensas.

## 2. Resumen ejecutivo

### Explicación no técnica

El jugador se convierte en cadete de la misión espacial ORIOS. Una tormenta de partículas ha dañado la nave ATLAS y ha puesto en peligro la Cápsula LURRA, que transporta semillas destinadas a recuperar ecosistemas terrestres. Con la ayuda de COSMO, la inteligencia artificial ficticia de la nave, el jugador debe completar tres tableros de parejas para reparar las comunicaciones, proteger la cápsula y reconstruir el camino de regreso.

Las parejas no son dos cartas iguales. Una carta muestra, por ejemplo, la imagen y el nombre de una nebulosa; la otra contiene la definición «Nube de gas y polvo entre las estrellas». Al completar cada tablero se recupera un módulo de la nave y avanza la historia.

### Aportación respecto a otras soluciones

- Sustituye el emparejamiento por identidad visual por una **relación semántica** entre concepto y definición.
- Integra el ejercicio educativo dentro de una narración completa, en vez de presentar preguntas desconectadas.
- Aumenta progresivamente el reto con 4, 6 y 8 parejas y conceptos de complejidad creciente.
- Funciona sin registro, backend, conexión a una API de IA ni tratamiento remoto de datos personales.
- Utiliza un catálogo educativo fijo y revisado, evitando contenido generado de forma imprevisible durante la partida.
- Documenta el origen de las imágenes y el uso de la IA durante el desarrollo.

No se ha realizado en el repositorio un estudio comparativo formal ni una evaluación con grupo de control. Por ello, estas diferencias deben presentarse como características de diseño y no como una superioridad pedagógica demostrada experimentalmente.

### Valor educativo

- Refuerza vocabulario y conceptos básicos de astronomía.
- Obliga a comprender el significado de una pista, no solo a reconocer una imagen repetida.
- Combina memoria visual y verbal.
- Reduce la frustración al no imponer límite de tiempo; el cronómetro es informativo.
- Proporciona dificultad gradual y respuesta inmediata ante aciertos y errores.
- Presenta el aprendizaje como medio para conseguir un objetivo narrativo.

## 3. Arquitectura

### Tecnologías, frameworks y librerías

| Elemento | Uso en el proyecto |
| --- | --- |
| HTML5 semántico | Punto de entrada y estructura base de la aplicación. |
| CSS | Diseño responsive, paneles, estados visuales, animaciones y giro 3D de cartas. |
| JavaScript moderno | Lógica del juego mediante módulos ES. |
| Vite 8 | Servidor de desarrollo y construcción de producción. Es la única dependencia de desarrollo declarada. |
| Node.js Test Runner | Ejecución de las pruebas automáticas sin framework adicional de testing. |
| Web Storage API | Persistencia del progreso mediante `localStorage`. |
| Git y GitHub | Control de versiones y repositorio público. |
| GitHub Actions | Integración, pruebas, build y despliegue automático. |
| GitHub Pages | Alojamiento público de la aplicación estática. |

No se utiliza React ni otro framework de interfaz en el MVP.

### Servicios de IA utilizados

No existe ningún servicio de IA conectado durante la ejecución del juego. La IA se ha empleado como asistencia durante el desarrollo para:

- ideación y evolución de la narrativa;
- apoyo en la documentación, arquitectura y programación;
- creación inicial del fondo espacial y del reverso de las cartas;
- apoyo en revisión de calidad, seguridad y pruebas.

Los resultados se revisan antes de incorporarse. El personaje COSMO es una IA dentro de la ficción, no un modelo generativo real.

### Base de datos y persistencia

No existe base de datos. El nombre del cadete y el progreso se almacenan en el navegador mediante `localStorage`. Se guardan el capítulo desbloqueado, la puntuación acumulada, los módulos reparados y la finalización. No se guardan el orden del tablero, las cartas volteadas ni un capítulo a medias.

### Arquitectura general

```text
Jugador
   │
   ▼
index.html + src/main.js ─────► src/ui.js
          │                       │
          ├──► src/game.js        └── DOM, cartas, estadísticas y avisos
          ├──► src/state.js
          ├──► src/data/chapters.js
          └──► src/storage.js ───► localStorage

GitHub ─► GitHub Actions ─► pruebas + build de Vite ─► GitHub Pages
```

### Comunicación entre componentes, explicada de forma simple

`main.js` actúa como coordinador. Lee el capítulo y sus parejas desde `chapters.js`, crea el estado temporal con `state.js`, utiliza las reglas puras de `game.js` para construir y comprobar el tablero y pide a `ui.js` que muestre cada pantalla. Cuando se alcanza un punto de control, `storage.js` valida y guarda el progreso en el navegador. Todo sucede en el cliente; no hay comunicación con un servidor de aplicación.

## 4. Funcionalidades

### Funcionalidades principales

- Aventura completa de tres capítulos.
- Tableros progresivos de 4, 6 y 8 parejas semánticas.
- Parejas de imagen y nombre frente a definición o pista.
- Observación inicial de todas las cartas durante 14, 21 y 28 segundos.
- Mezcla aleatoria de cartas en cada intento.
- Selección de dos cartas y comprobación de relación correcta o incorrecta.
- Permanencia visible de los aciertos y ocultación posterior de los errores.
- 12 puntos de energía por capítulo y penalización de 2 puntos por error.
- Derrota al sexto error y reintento exclusivo del capítulo actual.
- Barra de reparación vinculada a las parejas encontradas.
- Desbloqueo narrativo y recuperación de un módulo al completar cada capítulo.
- Puntuación acumulada según la energía conservada.
- Tres desenlaces: regreso rápido, seguro o de ahorro.

### Funcionalidades secundarias

- Introducción del nombre del cadete, normalizado y limitado a 30 caracteres.
- Pantalla de instrucciones accesible desde el inicio.
- Cronómetro informativo sin límite de tiempo.
- Resumen por capítulo con energía, intentos, errores y tiempo.
- Guardado del progreso entre capítulos.
- Continuación de una aventura y creación de una nueva partida.
- Conservación de capítulos superados tras perder o cerrar un tablero activo.
- Interfaz responsive, orientada principalmente a ordenador y portátil.
- Navegación básica mediante teclado, foco devuelto tras cerrar las instrucciones y textos alternativos para las imágenes.
- Recursos astronómicos locales y acreditados.
- Política de seguridad de contenidos, construcción segura del DOM y validación de datos almacenados.
- Despliegue automático tras actualizar la rama `main`.

## 5. Juego

### Mecánica general

1. El jugador introduce su nombre y comienza o continúa una misión.
2. Antes de cada tablero se presenta el objetivo narrativo y las reglas del capítulo.
3. Todas las cartas permanecen visibles durante un periodo de observación. El tablero está bloqueado en esta fase.
4. Las cartas se ocultan y comienza el cronómetro.
5. El jugador selecciona dos cartas.
6. Solo forman pareja dos cartas del mismo identificador y de tipos diferentes: concepto y pista.
7. Si acierta, ambas cartas quedan resueltas, avanza la reparación y aparece una confirmación breve.
8. Si falla, pierde 2 puntos de energía y las cartas vuelven a ocultarse.
9. Si la energía llega a cero, se reinicia el capítulo actual; los anteriores se conservan.
10. Al resolver todas las parejas se guarda un punto de control, se recupera un módulo y continúa la historia.
11. La energía restante de los tres capítulos se suma para determinar el desenlace final.

### Flujo del usuario

```text
Inicio → Cómo jugar / Nombre → Introducción del capítulo → Observación
      → Tablero → Acierto o error → Victoria o derrota
      → Recompensa y estadísticas → Capítulo siguiente
      → Desenlace final → Jugar de nuevo
```

### Objetivos de aprendizaje

- Identificar 18 conceptos de astronomía.
- Relacionar cada término con una definición breve.
- Diferenciar conceptos próximos, especialmente en los capítulos segundo y tercero.
- Ejercitar atención y memoria espacial durante la observación.
- Integrar vocabulario científico en un contexto narrativo.

### Papel de la IA

Conviene distinguir dos papeles:

- **En la historia:** COSMO guía al cadete y comunica los objetivos y resultados.
- **En el desarrollo:** herramientas de IA ayudaron a idear, documentar, programar, revisar y crear dos recursos visuales, siempre con revisión humana.

La IA no genera preguntas, imágenes ni historias mientras se juega. Esta decisión reduce costes, dependencia de red, gestión de secretos y riesgo de contenido educativo incorrecto.

## 6. Niveles

### Comparativa

| Nivel | Objetivo y recompensa | Mecánicas y dificultad | Aprendizaje | Diferencia principal |
| --- | --- | --- | --- | --- |
| **1. Una voz entre las estrellas** | Restablecer las comunicaciones; recupera el Módulo de comunicaciones. | 4 parejas, 8 cartas, 14 s de observación, 12 de energía y 6 fallos posibles. Dificultad inicial. | Sol, Tierra, Luna y Vía Láctea; elementos cercanos y fundamentales. | Tablero más pequeño, conceptos más familiares e introducción del misterio de la señal. |
| **2. Las semillas de la Tierra** | Recuperar la protección de la Cápsula LURRA; obtiene su módulo de protección. | 6 parejas, 12 cartas, 21 s de observación, 12 de energía y 6 fallos. Dificultad intermedia. | Atmósfera, magnetosfera, zona habitable, exoplaneta, cometa y asteroide. | Añade conceptos sobre protección planetaria, habitabilidad y cuerpos menores; aumenta la carga de memoria. |
| **3. El camino a casa** | Reconstruir navegación y propulsión; completa el mapa y permite el regreso. | 8 parejas, 16 cartas, 28 s de observación, 12 de energía y 6 fallos. Dificultad alta. | Órbita, gravedad, año luz, constelación, nebulosa, supernova, púlsar y agujero negro. | Mayor tablero y conceptos más abstractos; resuelve el misterio y determina el desenlace. |

La penalización y el número máximo de fallos son iguales en los tres niveles. La progresión se consigue mediante el número de parejas, la cantidad de cartas y la complejidad conceptual, no mediante una penalización creciente.

## 7. Desarrollo

### Metodología utilizada

El repositorio no declara una metodología formal como Scrum. La evidencia muestra un desarrollo **iterativo e incremental**, organizado en seis fases documentadas:

1. definición del producto y alcance;
2. diseño técnico;
3. implementación del núcleo;
4. documentación del uso de IA;
5. calidad y despliegue;
6. preparación de la entrega.

Se aplicó una estrategia de MVP: congelar ampliaciones, construir primero una aventura completa de principio a fin y refinar después reglas, interfaz, seguridad y despliegue. El historial contiene 96 commits entre el 7 y el 12 de octubre de 2026, lo que aporta trazabilidad del trabajo incremental.

### Principales decisiones técnicas

- JavaScript modular sin framework para reducir complejidad y aprovechar conocimientos previos.
- Un único motor compartido y capítulos definidos como datos, evitando duplicación por nivel.
- Catálogo local fijo para controlar corrección educativa y coherencia narrativa.
- `localStorage` en lugar de cuentas, backend y base de datos.
- IA solo durante el desarrollo, no en tiempo de ejecución.
- Recursos locales y GitHub Pages para conseguir un despliegue gratuito y reproducible.
- Funciones puras para reglas comprobables y módulos con una responsabilidad principal.
- Contenido dinámico mediante APIs del DOM y `textContent` para reducir riesgo de XSS.

### Problemas encontrados y soluciones

| Problema | Solución aplicada |
| --- | --- |
| El alcance inicial contemplaba generación dinámica y más temas. | Se limitó el MVP a una aventura fija y revisada de astronomía. |
| Una API de IA habría añadido coste, secretos, red y validación de respuestas. | Se eliminó la dependencia en ejecución y se documentó la IA como apoyo de desarrollo. |
| El juego anterior duplicaba HTML y JavaScript por nivel. | Se creó un único `index.html` y un motor alimentado por datos de capítulo. |
| Las definiciones largas no cabían bien en las cartas. | Se redujeron a pistas directas de una idea y se añadieron pruebas que limitan su longitud a 70 caracteres. |
| Los tiempos iniciales de observación eran demasiado cortos y una ampliación posterior, demasiado lenta. | Se fijó un término medio progresivo de 14, 21 y 28 segundos. |
| El primer sistema de penalización hacía el nivel inicial demasiado permisivo y el tercero demasiado exigente. | Se unificó la pérdida en 2 puntos: seis fallos en cualquier capítulo; la dificultad depende del tablero. |
| La estética inicial resultaba demasiado tecnológica. | Se adoptó una identidad más ilustrada y artesanal, con paleta espacial plana y recursos propios generados con apoyo de IA. |
| El tablero provocaba desplazamiento en portátiles. | Se compactaron cartas, espacios y paneles según nivel y altura, tomando 1366×768 como referencia. |
| La CSP bloqueaba los estilos inyectados por Vite durante el desarrollo. | Se ajustó la carga de estilos y se mantuvo una CSP compatible, sin `unsafe-inline` en `style-src`. |
| Los datos de `localStorage` pueden manipularse. | Se valida su estructura, tipos, límites y coherencia antes de usarlos; si fallan, se descartan. |

## 8. Resultados

### Qué se ha conseguido

- MVP jugable de principio a fin.
- Tres capítulos, 18 parejas educativas y 36 cartas en total.
- Narrativa completa con tres módulos reparados y tres desenlaces.
- Arquitectura modular sin backend ni dependencia externa en ejecución.
- Persistencia local validada.
- Identidad visual propia del MVP y 18 imágenes astronómicas acreditadas.
- Repositorio público y aplicación desplegada.
- Pipeline automático de pruebas, construcción y publicación.
- Documentación de arquitectura, decisiones, seguimiento, seguridad, créditos y entrega.

### Evidencias del repositorio

- `README.md`: descripción, instalación, stack, funciones, seguridad y enlaces.
- `src/`: implementación completa del juego.
- `src/data/chapters.js`: narrativa y las 18 relaciones educativas.
- `tests/`: pruebas de reglas, contenido y almacenamiento.
- `.github/workflows/deploy-pages.yml`: pipeline de despliegue.
- `docs/DECISIONES.md`: 34 decisiones con motivos y cambios.
- `docs/SEGUIMIENTO.md`: fases, riesgos e hitos.
- `docs/REVISION-CODIGO.md`: controles y resultados técnicos.
- `docs/CREDITOS-IMAGENES.md`: fuentes y condiciones de los recursos.
- Historial de 96 commits: evolución trazable del proyecto.

### Pruebas realizadas y métricas verificadas

Verificación ejecutada el 21/10/2026:

- **12/12 pruebas automáticas superadas**, 0 fallos.
- **Build de producción correcto** con Vite 8.3.4.
- **10 módulos transformados** durante el build.
- JavaScript generado: **17,72 kB** (6,74 kB comprimido con gzip).
- CSS generado: **10,69 kB** (3,16 kB con gzip).
- **0 vulnerabilidades conocidas** notificadas por `npm audit`.
- 47 archivos de proyecto contabilizados al excluir `node_modules`, `dist` y `.git`.
- 825 líneas de JavaScript en `src/` y 273 líneas de CSS, como medida descriptiva, no como indicador de calidad.

Las pruebas cubren creación y emparejamiento de cartas, energía, desenlaces, cronómetro, fallos disponibles, longitud de pistas, normalización del nombre y rechazo o aceptación del progreso persistido.

La documentación registra además comprobación sintáctica con `node --check`, carga del servidor de desarrollo y CSS, `git diff --check` y revisión de seguridad. Sigue pendiente documentar una prueba manual integral de los tres capítulos y una instalación desde cero.

## 9. Limitaciones

### Aspectos no implementados

- No hay selección de temática ni aventuras adicionales.
- No hay dificultad seleccionable, tiempo límite ni modo de intentos ilimitados.
- No existen perfiles, autenticación, rankings, logros ni sincronización entre dispositivos.
- No hay backend, API ni base de datos.
- No se integra IA generativa durante la partida.
- No hay sonido, voz o narración.
- No existen partidas específicas de refuerzo con los conceptos fallados.
- No se guarda un tablero a medias.
- La aplicación no incluye una explicación pedagógica ampliada tras cada acierto: muestra la pareja correcta y una confirmación breve.
- No consta una evaluación con usuarios de 10 a 14 años ni métricas pedagógicas de aprendizaje.
- No constan pruebas end-to-end automatizadas ni una matriz formal de navegadores/dispositivos.

### Restricciones actuales

- El progreso solo existe en el navegador y puede perderse al borrar sus datos.
- La dificultad depende sobre todo del tamaño del tablero y de los conceptos; todos los niveles permiten seis fallos.
- El diseño está priorizado para ordenador/portátil; en móvil se acepta desplazamiento para conservar la legibilidad.
- La CSP se aplica mediante una etiqueta `meta`, ya que GitHub Pages no permite configurar desde el repositorio todas las cabeceras HTTP deseadas.
- Los dos recursos visuales generados con IA son provisionales para el MVP.
- El tamaño de esos recursos es elevado: aproximadamente 1,76 MB para el fondo y 2,46 MB para el reverso en el build actual.
- La presentación final ya está disponible en PowerPoint y PDF; continúan pendientes el vídeo y su enlace definitivo.

## 10. Trabajo futuro

- Añadir nuevas aventuras, historias y temáticas educativas.
- Incorporar selección de dificultad, tiempo máximo y reglas especiales.
- Crear sesiones de refuerzo a partir de los conceptos fallados.
- Añadir perfiles opcionales y sincronización del progreso.
- Incorporar logros y rankings si existe una necesidad educativa clara.
- Añadir sonido, voz y narración accesible.
- Ampliar o sustituir las ilustraciones provisionales con obra propia y colaboraciones artísticas.
- Valorar React si el crecimiento de pantallas y componentes lo justifica.
- Migrar el catálogo a JSON, API o base de datos si aumenta el contenido.
- Explorar generación narrativa opcional con IA, siempre con control de costes, seguridad, privacidad y validación educativa.
- Realizar pruebas con el público objetivo y medir comprensión, retención, dificultad y satisfacción.
- Añadir pruebas end-to-end y validación sistemática en navegadores y dispositivos.
- Optimizar el peso de los recursos visuales.

## 11. Evaluación y requisitos del TFM

### Qué exige literalmente la documentación oficial

El PDF oficial no incluye una rúbrica de tribunal ni criterios de puntuación detallados. Exige entregar:

1. Un `README.md` completo con descripción, stack, instalación, ejecución, estructura, funciones y credenciales si hay login.
2. El código fuente en un repositorio público de GitHub. Un repositorio privado solo se acepta con justificación y acceso concedido a la dirección indicada.
3. El despliegue del proyecto funcionando, recomendado siempre que sea posible, y su URL.
4. Slides con la presentación, mediante enlace público o documento incluido con el código.
5. Un vídeo con explicación propia y captura obligatoria de la pantalla; mostrar el rostro es opcional.
6. El formulario de entrega con nombre, correo de inscripción, repositorio, despliegue, slides, vídeo y credenciales si proceden.

La documentación oficial fija el **26/10/2026** como fecha de entrega. El proyecto utiliza el **23/10/2026** como objetivo interno de seguridad.

### Aspectos previsiblemente evaluables

Los siguientes puntos son una inferencia razonable a partir del objetivo y los entregables oficiales, no una rúbrica publicada:

- que sea una aplicación real, funcional y adaptada al nivel de la alumna;
- originalidad y carácter diferenciador;
- demostración de conocimientos adquiridos en el máster;
- claridad del problema, objetivo y propuesta;
- calidad y mantenibilidad de la implementación;
- justificación de decisiones y control del alcance;
- uso razonado y responsable de la IA;
- documentación, reproducibilidad y facilidad de ejecución;
- pruebas, seguridad básica y despliegue;
- capacidad para explicar el resultado, sus límites y su evolución.

### Elementos que deben aparecer en presentación y defensa

El documento oficial solo ordena presentar el proyecto en slides y explicarlo personalmente en vídeo con captura de pantalla. Para cubrir bien los entregables y demostrar el aprendizaje, la defensa debería mostrar:

- problema, público y objetivo;
- propuesta diferencial y valor educativo;
- flujo del jugador y progresión de niveles;
- demostración breve del juego real;
- arquitectura, stack y persistencia;
- papel real de la IA y validación humana;
- decisiones técnicas relevantes;
- calidad, pruebas, seguridad y despliegue;
- resultados, limitaciones y trabajo futuro;
- enlaces al proyecto y al repositorio.

## 12. Presentación oral final de 10–12 minutos

La presentación definitiva contiene **11 diapositivas**. Su enfoque prioriza la prueba de concepto, el valor educativo, el criterio de producto y el uso de la IA como copiloto bajo supervisión humana. Se estima una duración de **10 minutos y 35 segundos**, incluida una demostración de aproximadamente 2 minutos.

| Tiempo | Diapositiva | Explicación oral / demostración |
| ---: | --- | --- |
| 0:00–0:35 | **1. Memory Quest: Señal estelar** | Presentar la prueba de concepto y anticipar que la IA ayudó en el desarrollo, pero no se utiliza durante la partida. |
| 0:35–1:25 | **2. El punto de partida** | Explicar el problema de estudiar conceptos aislados, el público de 10–14 años y el objetivo educativo. |
| 1:25–2:15 | **3. Valor educativo** | Describir las acciones de relacionar, interpretar y construir significado. No afirmar una eficacia pedagógica que todavía no se ha medido. |
| 2:15–3:05 | **4. La propuesta** | Comparar el emparejamiento idéntico tradicional con la relación semántica. Utilizar el ejemplo de la nebulosa. |
| 3:05–4:00 | **5. Progresión** | Explicar los tres capítulos, el crecimiento 4/6/8 y la reparación progresiva de ATLAS. |
| 4:00–6:00 | **6. Experiencia** | Realizar la demo: portada, instrucciones, observación, un acierto, un error y, mediante estado preparado o captura, el resultado final. |
| 6:00–7:10 | **7. Prueba de concepto** | Explicar los módulos, `localStorage`, GitHub Pages y la ausencia de backend, base de datos remota y API de IA. |
| 7:10–8:10 | **8. IA como copiloto** | Diferenciar planificación humana, aceleración con IA y supervisión humana. Distinguir al personaje COSMO de una IA real. |
| 8:10–9:05 | **9. Criterio de producto** | Justificar alcance, dificultad progresiva, pistas breves y motor reutilizable. |
| 9:05–10:00 | **10. Resultados** | Presentar 3 capítulos, 18 parejas, 36 cartas, 12/12 tests y 0 vulnerabilidades. Relacionarlo con GitHub Actions y el despliegue. |
| 10:00–10:35 | **11. Conclusión** | Cerrar con lo validado y señalar como siguiente paso las pruebas con usuarios y las métricas educativas. |

El guion oral detallado de cada diapositiva se mantiene en `presentacion/CONTENIDO-SLIDES.md`.

### Guion mínimo de la demostración

1. Abrir la portada desplegada y pulsar `Cómo jugar`.
2. Introducir un nombre breve e iniciar el capítulo 1.
3. Explicar la observación sin esperar los 14 segundos en silencio; aprovecharla para señalar cartas y cuenta atrás.
4. Realizar un acierto preparado y señalar la barra de reparación.
5. Realizar un error preparado y señalar energía y fallos restantes.
6. Pasar a una pestaña o perfil con progreso preparado para mostrar una recompensa y el desenlace.

Debe existir un plan B con capturas o un vídeo corto por si falla la red. También conviene desactivar notificaciones, aumentar el zoom del navegador y comprobar previamente que no haya progreso inesperado en `localStorage`.

## 13. Capturas necesarias

### Capturas imprescindibles para las slides

1. **Portada limpia del juego**: título, ilustración, campo de nombre y acciones; resolución recomendada 16:9, sin barra de favoritos ni datos personales.
2. **Cuadro “Cómo jugar” abierto**: que se lean objetivo, observación, penalización y guardado.
3. **Una pareja semántica aislada**: carta de concepto con imagen y nombre junto a su pista correcta; preferiblemente `Nebulosa` o `Tierra`.
4. **Introducción del capítulo 1**: título, objetivo y reglas de 4 parejas, 14 segundos y energía.
5. **Tablero del capítulo 1 durante la observación**: ocho cartas visibles y cuenta atrás.
6. **Tablero del capítulo 1 en juego**: cartas ocultas, panel de misión, energía, fallos, tiempo y progreso.
7. **Acierto visible**: dos cartas emparejadas y barra de reparación avanzada.
8. **Error o estado con energía reducida**: sirve para explicar riesgo y derrota sin provocar una derrota en directo.
9. **Tablero del capítulo 2**: 12 cartas y conceptos de habitabilidad/protección.
10. **Tablero del capítulo 3**: 16 cartas; debe mostrar claramente el incremento de dificultad.
11. **Resultado de capítulo**: módulo recuperado y resumen de energía, intentos, errores y tiempo.
12. **Pantalla de derrota**: energía agotada y opción de reintentar conservando lo anterior.
13. **Pantalla final**: uno de los tres desenlaces, puntuación total y lista de módulos reparados.
14. **Vista responsive**: una captura en móvil o emulación del navegador para demostrar adaptación, aclarando que el diseño prioriza escritorio.
15. **GitHub Actions correcto**: ejecución del workflow con instalación, pruebas, build y despliegue en verde.
16. **Repositorio público**: portada del GitHub con README y estructura principal visibles.
17. **Aplicación publicada**: navegador mostrando la URL de GitHub Pages y el juego cargado.
18. **Pruebas en terminal**: salida `12 tests`, `12 pass`, `0 fail`.
19. **Diagrama de arquitectura**: conviene crearlo como gráfico limpio a partir del esquema de este documento, no usar una captura del código.
20. **Evidencia del uso de IA**: una composición simple “asistencia IA → revisión humana → resultado”; si se usa una captura de conversación, eliminar información privada y mostrar solo un ejemplo corto y relevante.

### Capturas opcionales de apoyo o reserva

- Los tres finales posibles, para responder preguntas sobre puntuación.
- Registro de créditos de imágenes, si preguntan por licencias.
- Fragmento de `chapters.js` con un objeto de capítulo, si preguntan cómo se amplía el contenido.
- Fragmento de las pruebas de reglas o almacenamiento, si preguntan por calidad o seguridad.
- Comparación entre escritorio y móvil.
- Historial Git o registro de decisiones, si se pide trazabilidad del desarrollo.

### Preparación práctica

- Guardar las capturas en PNG y con una nomenclatura ordenada: `01-portada.png`, `02-como-jugar.png`, etc.
- Mantener el mismo tamaño o relación de aspecto para evitar saltos visuales en las slides.
- Recortar navegador, escritorio y elementos irrelevantes, salvo cuando la URL sea la evidencia.
- No incluir claves, correos, notificaciones, pestañas privadas ni historial del navegador.
- Preparar tres estados del juego antes de grabar: partida nueva, capítulo avanzado y misión completada.
- Comprobar que textos y estadísticas se leen al proyectar; una captura completa puede necesitar un recorte ampliado adicional.

## Fuentes internas consultadas

- `README.md`.
- `docs/ARQUITECTURA.md`.
- `docs/CONTINUIDAD.md`.
- `docs/DECISIONES.md`.
- `docs/SEGUIMIENTO.md`.
- `docs/REVISION-CODIGO.md`.
- `docs/REQUISITOS-ENTREGA.md`.
- `docs/ESPECIFICACIONES-OFICIALES-ENTREGA-TFM.pdf`.
- `docs/CREDITOS-IMAGENES.md`.
- `presentacion/CONTENIDO-SLIDES.md` y `presentacion/VIDEO.md`.
- Código de `src/`, pruebas de `tests/`, configuración de Vite y workflow de GitHub Actions.
- Historial Git completo disponible en el repositorio.

## Estado de entrega a 21/10/2026

- Repositorio público: completado.
- Aplicación desplegada: completado.
- README y documentación: completados, sujetos a actualización final de enlaces.
- Pruebas automáticas y build: verificados.
- Prueba manual completa documentada: pendiente.
- Instalación desde cero documentada: pendiente.
- Slides definitivas en PowerPoint y PDF: completadas.
- Vídeo con captura de pantalla: pendiente.
- Presentación enlazada desde el README: completada.
- Enlace del vídeo en el README y formulario: pendiente.

