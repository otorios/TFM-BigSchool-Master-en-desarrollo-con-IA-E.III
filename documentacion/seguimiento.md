# Seguimiento del proyecto

## 1. Estado actual

El proyecto cuenta con una versión jugable y desplegada públicamente de **Memory Quest: Señal estelar**. Están implementados los tres capítulos, el motor compartido, la energía, el cronómetro, el guardado local, el desenlace, el diseño responsive, las 18 imágenes acreditadas, el fondo y el reverso ilustrados y 12 pruebas automáticas. La presentación final está disponible en PowerPoint y PDF. Quedan pendientes la prueba manual completa y el vídeo de entrega.

Se han cerrado el público objetivo, el alcance del MVP, el formato de las parejas, el contenido, la persistencia, el stack, la arquitectura, la dirección visual y el despliegue. La prioridad actual es completar la validación manual y preparar la entrega.

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
4. Cada capítulo muestra brevemente sus cartas y después las oculta.
5. El jugador voltea dos cartas por intento y busca relaciones semánticas correctas; los aciertos permanecen visibles y los errores vuelven a ocultarse.
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

La primera versión utiliza una biblioteca local de recursos revisados previamente. No se generan imágenes ni contenido educativo durante la partida.

Cada recurso podrá almacenar metadatos como:

```text
Archivo: marte.webp
Categoría: astronomía
Conceptos: Marte, planeta, planeta rojo
Dificultad: fácil
Edad recomendada: 8+
Fuente: NASA
Crédito: autoría o misión indicada en la ficha original
Enlace original: pendiente de seleccionar
Condiciones de uso: revisadas y registradas para cada recurso
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

No se integra un proveedor de IA durante la ejecución de la aplicación. La IA se utiliza como herramienta de apoyo durante el desarrollo para ideación, documentación, arquitectura, programación, creación inicial de contenidos, recursos visuales y pruebas. Todo resultado se revisa antes de incorporarlo al catálogo o al código.

Este uso se documenta en la memoria del TFM mediante decisiones, ejemplos de asistencia y una explicación de las revisiones realizadas. La generación dinámica de aventuras queda como ampliación posterior al MVP.

## 5. Fases de trabajo

### Fase 1 — Definición

- Cerrar nombre y descripción corta.
- Documentar el público objetivo y el alcance acordados.
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

- Selección de dificultad con intentos ilimitados o limitados, tiempo máximo y posibles parejas o condiciones especiales, recuperando la progresión del juego anterior.
- Partidas de refuerzo con los conceptos fallados.
- Más aventuras y escenarios narrativos.
- Generación opcional de portadas o imágenes de capítulo.
- Perfiles de usuario y progreso persistente.
- Narración y efectos de sonido o voz.
- Elección de características de la IA acompañante, como personalidad, tono o forma de comunicarse.
- Logros y rankings.
- Generación completa de imágenes bajo demanda.
- Selección de historia o expansión.

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

| Fecha | Estado | Hito |
| --- | --- | --- |
| 07/10/2026 | Completado | Se definieron la idea del juego de parejas semánticas, la aventura espacial y la estructura narrativa por capítulos. |
| 10/10/2026 | Completado | Se cerraron el público de 10–14 años, el alcance astronómico, los tres tableros y las 18 parejas educativas. |
| 10/10/2026 | Completado | Se fijaron la narrativa, las reglas de energía y tiempo, las recompensas y el desenlace de ATLAS y LURRA. |
| 10/10/2026 | Completado | Se definieron el stack con Vite, la arquitectura modular, el catálogo local y la persistencia mediante `localStorage`. |
| 10/10/2026 | Completado | Se implementó la primera versión jugable y se mejoraron progresivamente la interfaz, las pistas, los tiempos y la adaptación del tablero. |
| 11/10/2026 | Completado | Se cerraron la revisión técnica y de seguridad, las 12 pruebas automáticas y la integración de los recursos visuales acreditados. |
| 11/10/2026 | Completado | Se consolidó la identidad visual ilustrada con el fondo espacial, el reverso `MQ · ATLAS` y las instrucciones accesibles. |
| 12/10/2026 | Completado | Se publicó el repositorio y se desplegó la aplicación mediante GitHub Actions en GitHub Pages. |

## 10. Próximo bloque

La personalización visual, el despliegue público y la presentación se consideran cerrados en el estado actual. El siguiente bloque consiste en realizar una prueba manual completa, comprobar la instalación desde cero y completar el vídeo. El punto detallado de reanudación se conserva en `documentacion/continuidad.md`, documento interno utilizado para mantener el contexto entre sesiones de trabajo asistido por IA.
