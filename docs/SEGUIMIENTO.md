# Seguimiento del proyecto

## 1. Estado actual

El proyecto cuenta con una versión jugable de **Memory Quest: Señal estelar**. Están implementados los tres capítulos, el motor compartido, la energía, el cronómetro, el guardado local, el desenlace, el diseño responsive, las 18 imágenes acreditadas, el fondo y el reverso ilustrados y 12 pruebas automáticas. Quedan pendientes la prueba manual completa, el despliegue y los materiales de entrega.

Se han cerrado el público objetivo, el alcance del MVP, el formato de las parejas, el contenido, la persistencia, el stack, la arquitectura y la dirección visual. La prioridad actual es validar, desplegar y preparar la entrega.

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

Este uso deberá documentarse en la memoria del TFM mediante decisiones, ejemplos de asistencia y una explicación de las revisiones realizadas. La generación dinámica de aventuras queda como ampliación posterior al MVP.

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
- Historias ramificadas con decisiones.
- Importación de PDF o apuntes para crear una aventura educativa.
- Perfiles de usuario y progreso persistente.
- Aventuras compartibles mediante un enlace.
- Narración y efectos de voz.
- Elección de características de la IA acompañante, como personalidad, tono o forma de comunicarse.
- Logros y rankings.
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
| 07/10/2026 | Completado | Se seleccionó la idea de un juego de parejas semánticas con narrativa por capítulos. |
| 07/10/2026 | Completado | Se eligió una nave averiada como primera aventura de referencia. |
| 07/10/2026 | Completado | Se acordó utilizar una biblioteca de imágenes en lugar de generarlas durante la partida. |
| 07/10/2026 | Revisado | El público inicialmente definido entre 10 y 13 años se amplió a 10–14 años el 10/10/2026. |
| 07/10/2026 | Revisado | Se definieron COSMO, ATLAS, la misión ORIOS y la cápsula de semillas; el 10/10/2026 su nombre cambió de LUR a LURRA. |
| 07/10/2026 | Completado | Se establecieron el origen de la emergencia y la premisa narrativa fusionada. |
| 07/10/2026 | Completado | Se inició y completó el diseño narrativo de los capítulos. |
| 07/10/2026 | Completado | Se definieron posteriormente las reglas, el stack, la arquitectura, la planificación y la implementación. |
| 10/10/2026 | Completado | El público objetivo se ajustó a 10–14 años y el MVP se limitó a la astronomía. |
| 10/10/2026 | Completado | Se acordaron tres capítulos con 4, 6 y 8 parejas y el formato imagen y nombre frente a definición o pista. |
| 10/10/2026 | Completado | Se decidió usar un catálogo y una narrativa fijos y revisados, sin proveedor de IA durante la ejecución. |
| 10/10/2026 | Completado | Se decidió guardar el progreso en `localStorage`, sin usuarios ni base de datos. |
| 10/10/2026 | Completado | Se eligieron HTML, CSS y JavaScript sin framework con Vite para el MVP; React con Vite queda como evolución futura. |
| 10/10/2026 | Completado | Se eligió un único `index.html` con varias vistas y un motor compartido. |
| 10/10/2026 | Completado | Se eligieron objetos JavaScript en un módulo local para definir los contenidos. |
| 10/10/2026 | Completado | Se decidió centralizar el estado temporal de la partida en un único objeto JavaScript `gameState`. |
| 10/10/2026 | Completado | Se decidió guardar el progreso mediante puntos de control y reiniciar el capítulo si una partida se interrumpe a mitad del tablero. |
| 10/10/2026 | Completado | Se cerró una estructura con módulos separados para motor, estado, persistencia, interfaz y contenido. |
| 10/10/2026 | Completado | Se definieron controles contra XSS, datos manipulados en `localStorage`, exposición de secretos y dependencias innecesarias. |
| 10/10/2026 | Revisado | Se eligió inicialmente una dirección visual de panel de control juvenil; se sustituyó el 11/10/2026 por una estética más ilustrada. |
| 10/10/2026 | Completado | Se eligieron imágenes astronómicas oficiales de la NASA para las cartas del MVP. |
| 10/10/2026 | Completado | Se eligió GitHub Pages para publicar gratuitamente el juego mediante una construcción con Vite. |
| 10/10/2026 | Completado | Se conservaron la observación inicial y el volteo del juego anterior, adaptados a parejas de imagen y concepto frente a definición o pista. |
| 10/10/2026 | Completado | Se definió el primer tablero con Sol, Tierra, Luna y Vía Láctea. |
| 10/10/2026 | Revisado | La observación inicial de 8, 12 y 16 segundos se revisó posteriormente. |
| 10/10/2026 | Revisado | Los intentos ilimitados iniciales se sustituyeron por energía y penalizaciones. |
| 10/10/2026 | Completado | Se decidió medir y mostrar el tiempo empleado sin establecer un límite ni provocar derrotas en el MVP. |
| 10/10/2026 | Revisado | Se definieron 12 puntos de energía y penalizaciones inicialmente distintas; después se unificaron. |
| 10/10/2026 | Revisado | Las recompensas se simplificaron a un módulo por tablero y una barra de reparación. |
| 10/10/2026 | Completado | Se definieron las seis parejas del segundo capítulo y la protección de LURRA. |
| 10/10/2026 | Completado | Se cerró el segundo capítulo con el protocolo de LURRA, la baliza y el mapa. |
| 10/10/2026 | Completado | Se definieron las ocho parejas finales y el módulo de navegación y propulsión. |
| 10/10/2026 | Completado | Se resolvió el misterio de la señal mediante los identificadores enviados por ATLAS. |
| 10/10/2026 | Completado | Se eligieron `Memory Quest` como nombre general y `Señal estelar` como subtítulo. |
| 10/10/2026 | Completado | Se implementó la primera versión jugable con Vite y siete pruebas automáticas. |
| 10/10/2026 | Revisado | Tras la primera prueba manual, se añadió separación al formulario, se reforzó el estilo visual, se corrigió el giro 3D y se unificó el tiempo como `mm:ss`; pasaron ocho pruebas. |
| 10/10/2026 | Completado | Se corrigió la política de seguridad, se incorporaron 18 imágenes acreditadas y se rediseñaron el tablero, las cartas y el formulario. |
| 10/10/2026 | Revisado | Tras probar 8/12/16 y 20/30/40 segundos, la observación inicial se fijó en 14/21/28; también se eliminó del tablero el texto narrativo ya leído. |
| 10/10/2026 | Revisado | Hice que las cartas y los espacios se compacten según el nivel y la altura del ordenador para mantener el tablero completo visible en portátiles; en móvil priorizo la lectura aunque exista desplazamiento. |
| 10/10/2026 | Revisado | Reduje de 3 a 2 puntos la penalización por error del tercer capítulo para ampliar el margen de cuatro a seis errores. |
| 10/10/2026 | Completado | Se reorganizó la transición entre capítulos para destacar el módulo, el progreso y la narrativa. |
| 10/10/2026 | Revisado | Se simplificaron las 18 pistas a frases breves con una sola idea principal y se añadió una prueba que limita su longitud. |
| 10/10/2026 | Revisado | El contador ascendente de intentos se sustituyó durante la partida por una cuenta atrás de fallos restantes; el total se mantiene en el resumen. |
| 10/10/2026 | Revisado | Los fallos del primer capítulo se redujeron de doce a seis y la penalización se unificó en −2. |
| 10/10/2026 | Revisado | La cuenta atrás se colocó en el centro de la línea superior y su espacio se mantiene como `En juego` para evitar desplazamientos. |
| 11/10/2026 | Completado | Se revisaron claridad, estructura, comentarios, accesibilidad, validación de `localStorage`, CSP y dependencias; pasan doce pruebas, build y auditoría sin vulnerabilidades conocidas. |
| 11/10/2026 | Completado | Se sustituyó la paleta inicial por una combinación de azules índigo, dorado y gris azulado, sin degradados. |
| 11/10/2026 | Completado | Se incorporaron un fondo espacial con cenefa y un reverso ilustrado `MQ · ATLAS`, generados específicamente para el proyecto con apoyo de IA. |

## 10. Próximo bloque

La personalización visual se considera cerrada en el estado actual. El siguiente bloque consiste en realizar una prueba manual completa, comprobar la instalación desde cero, preparar el despliegue y completar la presentación y el vídeo. El punto detallado de reanudación se conserva en `docs/CONTINUIDAD.md`.
