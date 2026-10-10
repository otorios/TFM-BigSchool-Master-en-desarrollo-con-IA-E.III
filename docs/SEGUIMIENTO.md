# Seguimiento del proyecto

## 1. Estado actual

El proyecto se encuentra en fase de definición. La idea elegida es crear **Memory Quest**, un videojuego educativo de parejas semánticas con una aventura fija de astronomía desbloqueada por capítulos.

Ya se han cerrado el público objetivo, el alcance básico del MVP, el formato de las parejas, el uso de contenido revisado, la persistencia local y el stack. Todavía están pendientes la arquitectura mínima, la definición visual y la planificación detallada de implementación.

## 2. Visión del producto

El jugador recorrerá una aventura espacial de astronomía. Para avanzar tendrá que completar tableros de memoria cuyas cartas están unidas por una relación semántica, no por una imagen idéntica. Cada pareja combinará una carta con imagen y nombre y otra con una definición o pista breve.

Al encontrar una pareja:

1. Se muestra una explicación breve de la relación.
2. El jugador obtiene una pieza o recurso.
3. Su progreso queda reflejado en el objetivo narrativo.
4. Al completar el tablero se desbloquea el siguiente capítulo.

El primer escenario de referencia estará ambientado en una nave averiada. Cada nivel permitirá reparar un sistema diferente hasta conseguir regresar a la Tierra.

## 3. Producto Mínimo Viable (MVP)

El MVP es la versión más pequeña que funciona de principio a fin y demuestra la propuesta principal. Debe estar terminado y estable antes de trabajar en ampliaciones.

### 3.1 Flujo principal

1. El jugador accede al juego.
2. Inicia una aventura de astronomía compuesta por tres capítulos.
3. El juego carga el catálogo educativo revisado correspondiente al capítulo.
4. Cada capítulo contiene un tablero de parejas semánticas.
5. El jugador voltea cartas y encuentra relaciones correctas.
6. Cada acierto concede una pieza necesaria para reparar la nave.
7. Al terminar el tablero se desbloquea un fragmento de la historia.
8. Al completar los tres capítulos se presenta el desenlace.

### 3.2 Funcionalidades obligatorias

- Pantalla inicial para comenzar o continuar la aventura.
- Una aventura completa de tres capítulos.
- Tableros progresivos de 4, 6 y 8 parejas semánticas.
- Catálogo fijo y revisado de conceptos, imágenes, pistas y explicaciones.
- Tablero funcional con cartas ocultas.
- Validación de parejas correctas e incorrectas.
- Explicación de la relación al descubrir una pareja.
- Sistema de intentos, tiempo o puntuación.
- Recompensas vinculadas a la reparación de la nave.
- Desbloqueo progresivo de capítulos.
- Pantalla final con resolución de la historia.
- Diseño responsive y navegación básica mediante teclado.
- Guardado y recuperación del progreso mediante `localStorage`.
- Opción para borrar el progreso y comenzar una nueva partida.
- Aplicación desplegada mediante una URL pública.
- Pruebas de las reglas principales del juego.
- README con instalación, ejecución, stack y estructura.

### 3.3 Biblioteca de imágenes y contenidos

En la primera versión utilizaré una biblioteca propia de recursos revisados previamente. No generaré imágenes ni contenido educativo durante la partida.

Cada recurso podrá almacenar metadatos como:

```text
Archivo: marte.webp
Categoría: astronomía
Conceptos: Marte, planeta, planeta rojo
Dificultad: fácil
Edad recomendada: 8+
Fuente o licencia: pendiente
```

El sistema utilizará estos metadatos para cargar las parejas fiables de cada capítulo. Las pistas, explicaciones y referencias a imágenes estarán definidas en el catálogo.

### 3.4 Contenidos y datos previstos

La estructura de datos deberá poder representar:

- Temas.
- Conceptos.
- Relaciones semánticas.
- Imágenes y etiquetas.
- Aventuras.
- Capítulos.
- Tableros y parejas.
- Recompensas.
- Puntuaciones y progreso de una partida.

Los contenidos se almacenarán como datos locales estructurados. El progreso se conservará en `localStorage`; el MVP no tendrá usuarios ni base de datos.

## 4. Papel de la inteligencia artificial

No integraré un proveedor de IA durante la ejecución de la aplicación. Utilizaré la IA como herramienta de apoyo durante el desarrollo para ideación, documentación, arquitectura, programación, creación inicial de contenidos y pruebas. Revisaré todo resultado antes de incorporarlo al catálogo o al código.

Documentaré este uso en la memoria del TFM mediante decisiones, ejemplos de asistencia y una explicación de las revisiones realizadas. Dejaré una posible generación dinámica de aventuras como ampliación posterior al MVP.

## 5. Fases de trabajo

### Fase 1 — Definición

- Cerrar nombre y descripción corta.
- Documentaré el público objetivo y el alcance acordados.
- Escribir requisitos y criterios de aceptación.
- Elegir el stack tecnológico.
- Diseñar las pantallas y el flujo del jugador.
- Concretar cómo se obtienen y licencian las imágenes.

### Fase 2 — Diseño técnico

- Definir arquitectura.
- Diseñar el modelo de datos.
- Preparar la primera colección de astronomía.
- Definir el formato local del catálogo y del progreso.
- Preparar estrategia de pruebas y seguridad.

### Fase 3 — Implementación del núcleo

- Crear navegación y pantallas principales.
- Implementar el motor de cartas y parejas.
- Implementar puntuación y progreso.
- Incorporar la primera aventura completa.
- Implementar capítulos, recompensas y desenlace.

### Fase 4 — Documentación del desarrollo asistido por IA

- Registrar los usos relevantes de IA durante el proyecto.
- Revisar y validar el contenido y el código asistidos.
- Seleccionar ejemplos representativos para la memoria.
- Explicar las decisiones humanas y las limitaciones encontradas.

### Fase 5 — Calidad y despliegue

- Añadir pruebas unitarias y end-to-end esenciales.
- Revisar accesibilidad, responsive y usabilidad.
- Revisar secretos, validación de entradas y dependencias.
- Configurar integración continua.
- Desplegar la aplicación.
- Verificar el funcionamiento desde un entorno limpio.

### Fase 6 — Entrega

- Completar el README final.
- Preparar slides.
- Grabar el vídeo con captura de pantalla.
- Añadir URLs públicas al repositorio.
- Revisar el formulario de entrega.
- Realizar una prueba completa de la demostración.

## 6. Ampliaciones posteriores al MVP

Estas funcionalidades no deben retrasar la entrega principal:

- Dificultad adaptativa según los errores del jugador.
- Partidas de refuerzo con los conceptos fallados.
- Más aventuras y escenarios narrativos.
- Generación opcional de portadas o imágenes de capítulo.
- Historias ramificadas con decisiones.
- Importación de PDF o apuntes para crear una aventura educativa.
- Perfiles de usuario y progreso persistente.
- Aventuras compartibles mediante un enlace.
- Narración y efectos de voz.
- Elección de características de la IA acompañante, como personalidad, tono o forma de comunicarse.
- Logros y rankings.
- Modo infantil y modo adulto.
- Panel para gestionar imágenes, conceptos y relaciones.
- Generación completa de imágenes bajo demanda.

## 7. Conexión con el temario del máster

- **Ingeniería de software:** requisitos, alcance, historias de usuario, criterios de aceptación y SDD.
- **Arquitectura:** separación entre motor del juego, contenido local y persistencia en el navegador.
- **Fundamentos de IA:** prompting, generación estructurada y uso responsable.
- **Flujo de desarrollo con IA:** documentación, contexto, reglas y desarrollo asistido.
- **Calidad:** pruebas, accesibilidad, usabilidad, métricas y observabilidad.
- **Seguridad:** validación de entradas, gestión de secretos y control del contenido.
- **Infraestructura:** CI/CD, despliegue, contenedores y persistencia.
- **LLMOps:** latencia, coste, evaluación y trazabilidad de las generaciones.

## 8. Riesgos iniciales

| Riesgo | Medida de control |
| --- | --- |
| Relaciones educativas incorrectas | Catálogo fijo revisado antes de incorporarlo al juego. |
| Alcance excesivo | Terminar primero una aventura de tres capítulos. |
| Inconsistencia narrativa | Conservar un estado estructurado de la aventura. |
| Problemas de licencia de imágenes | Registrar fuente y licencia de cada recurso. |
| Falta de tiempo para la entrega | Congelar ampliaciones hasta que el MVP esté desplegado. |

## 9. Registro de progreso

| Fecha | Estado | Decisión o avance |
| --- | --- | --- |
| 07/10/2026 | Completado | Seleccioné la idea de un juego de parejas semánticas con narrativa por capítulos. |
| 07/10/2026 | Completado | Elegí una nave averiada como primera aventura de referencia. |
| 07/10/2026 | Completado | Acordé utilizar una biblioteca de imágenes en lugar de generarlas todas durante la partida. |
| 07/10/2026 | Revisado | Definí inicialmente el público de 10 a 13 años y lo amplié a 10–14 años el 10/10/2026. |
| 07/10/2026 | Completado | Definí COSMO, ATLAS, la misión ORIOS y la Cápsula LUR. |
| 07/10/2026 | Completado | Establecí el origen de la emergencia y la premisa narrativa fusionada. |
| 07/10/2026 | En curso | Inicié el diseño narrativo; me queda concretar las parejas y algunos detalles visuales de los capítulos. |
| 07/10/2026 | Pendiente | Me quedaba definir reglas, stack, arquitectura, planificación e implementación. |
| 10/10/2026 | Completado | Ajusté el público objetivo a 10–14 años y limité el MVP al tema de astronomía. |
| 10/10/2026 | Completado | Acordé tres capítulos con 4, 6 y 8 parejas y el formato imagen y nombre frente a definición o pista. |
| 10/10/2026 | Completado | Decidí usar un catálogo y una narrativa fijos y revisados, sin proveedor de IA durante la ejecución. |
| 10/10/2026 | Completado | Decidí guardar el progreso en `localStorage`, sin usuarios ni base de datos. |
| 10/10/2026 | Completado | Elegí HTML, CSS y JavaScript sin framework con Vite para el MVP; dejo React con Vite como evolución futura. |
| 10/10/2026 | Completado | Elegí un único `index.html` con varias vistas y un motor de parejas compartido por los tres capítulos. |
| 10/10/2026 | Completado | Elegí objetos JavaScript en un módulo local para definir capítulos, parejas, pistas, explicaciones y narrativa. |
| 10/10/2026 | Completado | Decidí centralizar el estado temporal de la partida en un único objeto JavaScript `gameState`. |

## 10. Próxima decisión

El siguiente paso antes de programar es decidir qué progreso guardaré en `localStorage` y cuándo lo actualizaré. Después se concretarán la estructura inicial, el sistema visual, las fuentes y licencias de las imágenes y la plataforma de despliegue. El punto detallado de reanudación se conserva en `docs/CONTINUIDAD.md`.
