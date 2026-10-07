# Seguimiento del proyecto

## 1. Estado actual

El proyecto se encuentra en fase de definición. La idea elegida es crear **Memory Quest**, un videojuego educativo de parejas semánticas con una aventura generada y desbloqueada por capítulos.

Todavía están pendientes la selección definitiva del stack, la definición visual y la planificación detallada de implementación.

## 2. Visión del producto

El jugador podrá escoger un tema y recibir una aventura relacionada con él. Para avanzar tendrá que completar tableros de memoria cuyas cartas están unidas por una relación semántica, no necesariamente por una imagen idéntica.

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
2. Selecciona o escribe un tema.
3. El sistema crea una aventura corta de tres capítulos.
4. Cada capítulo contiene un tablero de parejas semánticas.
5. El jugador voltea cartas y encuentra relaciones correctas.
6. Cada acierto concede una pieza necesaria para reparar la nave.
7. Al terminar el tablero se desbloquea un fragmento de la historia.
8. Al completar los tres capítulos se presenta el desenlace.

### 3.2 Funcionalidades obligatorias

- Pantalla inicial y selección de tema.
- Una aventura completa de tres capítulos.
- Generación o selección controlada de parejas semánticas.
- Tablero funcional con cartas ocultas.
- Validación de parejas correctas e incorrectas.
- Explicación de la relación al descubrir una pareja.
- Sistema de intentos, tiempo o puntuación.
- Recompensas vinculadas a la reparación de la nave.
- Desbloqueo progresivo de capítulos.
- Pantalla final con resolución de la historia.
- Diseño responsive y navegación básica mediante teclado.
- Manejo comprensible de errores de red o del proveedor de IA.
- Aplicación desplegada mediante una URL pública.
- Pruebas de las reglas principales del juego.
- README con instalación, ejecución, stack y estructura.

### 3.3 Biblioteca de imágenes y contenidos

En la primera versión no se generarán todas las imágenes durante la partida. Se utilizará una biblioteca propia de recursos revisados previamente.

Cada recurso podrá almacenar metadatos como:

```text
Archivo: marte.webp
Categoría: astronomía
Conceptos: Marte, planeta, planeta rojo
Dificultad: fácil
Edad recomendada: 8+
Fuente o licencia: pendiente
```

El sistema utilizará estos metadatos para seleccionar cartas compatibles con el tema y construir parejas fiables. La IA podrá generar la ambientación, los capítulos y las explicaciones, pero no deberá inventar referencias a imágenes inexistentes.

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

No se decidirá si estos datos necesitan una base de datos completa hasta concretar los casos de uso. Para el MVP podrían comenzar como datos locales estructurados y evolucionar a una base de datos si el guardado o la generación lo requieren.

## 4. Papel de la inteligencia artificial

La IA debe aportar valor real sin controlar las reglas fundamentales del juego.

### Dentro del MVP

- Interpretar o clasificar el tema elegido.
- Crear el título y la premisa de la aventura.
- Proponer capítulos vinculados al objetivo general.
- Redactar explicaciones de las relaciones.
- Generar contenido en un formato estructurado y validable.

Ejemplo orientativo:

```json
{
  "title": "La expedición perdida",
  "theme": "Astronomía",
  "chapters": [
    {
      "title": "La señal de Marte",
      "story": "La tripulación detecta una señal entre las interferencias.",
      "reward": "Módulo de comunicaciones",
      "pairs": [
        {
          "left": "Marte",
          "right": "El planeta rojo",
          "explanation": "Marte recibe este nombre por el óxido de hierro de su superficie."
        }
      ]
    }
  ]
}
```

### Validaciones necesarias

- El contenido debe respetar un esquema conocido.
- No puede haber cartas repetidas dentro del mismo tablero.
- Cada capítulo debe contener el número previsto de parejas.
- Las relaciones deben ser comprensibles y apropiadas para la dificultad.
- Las imágenes solicitadas deben existir en la biblioteca.
- El contenido debe ser seguro y adecuado.
- Debe existir una alternativa controlada si la generación falla.

## 5. Fases de trabajo

### Fase 1 — Definición

- Cerrar nombre y descripción corta.
- Definir público objetivo y rango de edad.
- Elegir el alcance exacto del MVP.
- Escribir requisitos y criterios de aceptación.
- Elegir el stack tecnológico.
- Diseñar las pantallas y el flujo del jugador.
- Concretar cómo se obtienen y licencian las imágenes.

### Fase 2 — Diseño técnico

- Definir arquitectura.
- Diseñar el modelo de datos.
- Definir el contrato de generación de aventuras.
- Preparar la primera colección de astronomía.
- Diseñar el comportamiento alternativo sin IA.
- Preparar estrategia de pruebas y seguridad.

### Fase 3 — Implementación del núcleo

- Crear navegación y pantallas principales.
- Implementar el motor de cartas y parejas.
- Implementar puntuación y progreso.
- Incorporar la primera aventura completa.
- Implementar capítulos, recompensas y desenlace.

### Fase 4 — Integración de IA

- Crear prompts estructurados.
- Validar las respuestas recibidas.
- Conectar la narrativa con la biblioteca de contenidos.
- Controlar errores, tiempos de espera y costes.
- Incorporar trazas suficientes para diagnosticar fallos.

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
- **Arquitectura:** separación entre motor del juego, contenido, persistencia y proveedor de IA.
- **Fundamentos de IA:** prompting, generación estructurada y uso responsable.
- **Flujo de desarrollo con IA:** documentación, contexto, reglas y desarrollo asistido.
- **Calidad:** pruebas, accesibilidad, usabilidad, métricas y observabilidad.
- **Seguridad:** validación de entradas, gestión de secretos y control del contenido.
- **Infraestructura:** CI/CD, despliegue, contenedores y persistencia.
- **LLMOps:** latencia, coste, evaluación y trazabilidad de las generaciones.

## 8. Riesgos iniciales

| Riesgo | Medida de control |
| --- | --- |
| Relaciones incorrectas generadas por IA | Catálogo validado, esquema estricto y revisión automática. |
| La IA solicita imágenes inexistentes | Limitar la selección a identificadores proporcionados por la aplicación. |
| Alcance excesivo | Terminar primero una aventura de tres capítulos. |
| Latencia o caída del proveedor | Aventuras de ejemplo y comportamiento alternativo local. |
| Coste de generación | Generar una vez, reutilizar resultados y limitar tamaño. |
| Inconsistencia narrativa | Conservar un estado estructurado de la aventura. |
| Problemas de licencia de imágenes | Registrar fuente y licencia de cada recurso. |
| Falta de tiempo para la entrega | Congelar ampliaciones hasta que el MVP esté desplegado. |

## 9. Registro de progreso

| Fecha | Estado | Decisión o avance |
| --- | --- | --- |
| 07/10/2026 | Completado | Seleccionada la idea de un juego de parejas semánticas con narrativa por capítulos. |
| 07/10/2026 | Completado | Elegida una nave averiada como primera aventura de referencia. |
| 07/10/2026 | Completado | Acordado utilizar una biblioteca de imágenes en lugar de generarlas todas durante la partida. |
| 07/10/2026 | Pendiente | Definir público objetivo, stack, alcance final y planificación. |

## 10. Próxima decisión

Antes de programar debe definirse:

1. Para quién está pensado el juego.
2. Si el tema será completamente libre o se escogerá de un catálogo inicial.
3. Qué tipo de cartas tendrá la primera versión.
4. Qué stack se utilizará.
5. Cuántas parejas tendrá cada nivel.
6. Qué contenidos serán deterministas y cuáles generará la IA.
