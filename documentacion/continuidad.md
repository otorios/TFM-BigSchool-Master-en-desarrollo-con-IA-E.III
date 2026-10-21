# Continuidad interna del desarrollo

> **Documento interno y complementario:** este archivo no forma parte de la documentación principal que se presenta como resultado del TFM. Se conserva en el repositorio para proporcionar contexto al agente de IA, facilitar la reanudación del trabajo entre sesiones y aportar trazabilidad sobre el proceso de desarrollo asistido.

Este documento permite retomar **Memory Quest: Señal estelar** sin depender del historial de conversación. Debe actualizarse al cerrar cada sesión de trabajo relevante.

## Repositorio correcto

- **Repositorio local:** `C:\Users\Usuario\Documents\TFM-BigSchool-Master-en-desarrollo-con-IA-E.III`.
- **Repositorio remoto:** `git@github.com:otorios/TFM-BigSchool-Master-en-desarrollo-con-IA-E.III.git`.
- **Rama de trabajo:** `main`.
- El repositorio no debe confundirse con `C:\Users\Usuario\Documents\BigSchool`, que contiene los materiales generales del máster.

## Proyecto anterior de referencia

- **Repositorio:** `git@github.com:otorios/Juego_parejas_JS.git`.
- Se conserva como referencia histórica del planteamiento original con JavaScript, niveles, mezcla de cartas y navegación.
- Debe tratarse como **solo lectura**. Cualquier elemento que se reutilice deberá copiarse primero al repositorio del TFG.

## Estado actualizado el 11/10/2026

El MVP se encuentra implementado con HTML, CSS y JavaScript modular, construido mediante Vite. Incluye:

- Inicio, nueva partida y continuación mediante `localStorage` validado.
- Tres capítulos con 4, 6 y 8 parejas semánticas.
- Observación inicial de 14, 21 y 28 segundos.
- Doce puntos de energía y seis fallos disponibles en cada capítulo.
- Cronómetro informativo, derrota, reintento y tres resultados finales.
- Dieciocho imágenes astronómicas locales y acreditadas.
- Fondo espacial con cenefa y reverso `MQ · ATLAS`, generados con IA específicamente para el MVP.
- Diseño responsive, giro 3D y adaptación del tablero al número de cartas.
- Doce pruebas automáticas y construcción de producción verificada.

La revisión técnica y de seguridad se documenta en `documentacion/revision-codigo.md`. La procedencia de los recursos visuales se recoge en `documentacion/creditos-imagenes.md`.

## Dirección visual vigente

La primera propuesta utilizaba una estética de panel tecnológico con cian, ámbar y rojo. Tras probarla se optó por una dirección más ilustrada y artesanal, sin degradados:

- `#171A3D`: fondo espacial principal.
- `#192D50`: paneles principales.
- `#284B69`: superficies secundarias.
- `#34576B`: detalles atenuados.
- `#E3C06E`: acciones, indicadores y resultados destacados.
- `#DFDBDD`: texto general y controles principales.

El fondo `src/assets/fondo-cenefa-estelar.png` incorpora una escena espacial panorámica y una cenefa inferior de símbolos estelares. El archivo `src/assets/reverso-carta-atlas.png` define el reverso común de las cartas con estrellas, perseidas y la identificación `MQ · ATLAS`. Ambas imágenes se generaron específicamente para el proyecto con apoyo de IA y se revisaron antes de su incorporación.

Las referencias de Pinterest solo documentan la inspiración general. Sus archivos no se incluyen ni se redistribuyen en el repositorio.

## Arquitectura y persistencia

- Un único `index.html` contiene el punto de entrada de todas las vistas.
- `src/main.js` coordina el flujo de pantallas y la partida.
- `src/game.js` contiene las reglas puras.
- `src/state.js` crea el estado temporal de cada capítulo.
- `src/storage.js` valida y conserva el progreso.
- `src/ui.js` crea y actualiza la interfaz mediante APIs seguras del DOM.
- `src/data/chapters.js` contiene la narrativa y las parejas fijas.

El progreso persistente incluye el nombre, el capítulo desbloqueado, la puntuación acumulada, los módulos reparados y la finalización. No se guardan el orden del tablero ni las cartas seleccionadas durante un capítulo. Si la partida se interrumpe, el capítulo activo comienza de nuevo y los anteriores se conservan.

## Historia vigente

- **Nave:** ATLAS.
- **Misión científica:** ORIOS.
- **IA acompañante:** COSMO.
- **Carga:** Cápsula LURRA, que conserva semillas destinadas a recuperar ecosistemas terrestres.
- **Protagonista:** cadete en formación, sin género ni edad explícitos.
- **Público de referencia:** 10 a 14 años.

Una tormenta de partículas daña varios sistemas de ATLAS. Mientras se reparan las comunicaciones, la protección de LURRA y la navegación, aparece una señal procedente de una baliza de una expedición anterior. La baliza reconoce los identificadores ORIOS y LURRA emitidos por el sistema de emergencia y proporciona los datos necesarios para completar el mapa de regreso.

Los capítulos son:

1. **Una voz entre las estrellas:** reparación de las comunicaciones.
2. **Las semillas de la Tierra:** protección de la Cápsula LURRA.
3. **El camino a casa:** reconstrucción del mapa y reactivación de la propulsión.

ATLAS regresa siempre con LURRA a salvo. La energía acumulada determina si el viaje final es rápido, normal o lento.

## Decisiones de alcance

- La narrativa, las parejas, las pistas y las explicaciones son fijas y se revisan antes de incorporarse.
- No se generan imágenes ni contenido educativo durante la partida.
- No se integra un proveedor de IA durante la ejecución.
- No existen usuarios, backend ni base de datos.
- La IA se utiliza como apoyo documentado durante el desarrollo.
- React, nuevos temas, selección de dificultad y generación dinámica quedan como evoluciones futuras.

## Trabajo pendiente

1. Realizar una prueba manual completa de los tres capítulos.
2. Comprobar la instalación desde cero.
3. Ensayar la presentación final ya disponible en PowerPoint y PDF.
4. Grabar y publicar un vídeo accesible mediante enlace en YouTube.
5. Añadir al README la URL definitiva del vídeo.
6. Revisar y cumplimentar el formulario de entrega.

## Prompt de reanudación

```text
Se está desarrollando Memory Quest: Señal estelar, el TFM documentado en este repositorio. Deben revisarse primero README.md, documentacion/continuidad.md, documentacion/decisiones.md, documentacion/seguimiento.md, documentacion/arquitectura.md, documentacion/revision-codigo.md y documentacion/creditos-imagenes.md. No deben modificarse decisiones aceptadas sin registrar el cambio. El MVP funcional, las 18 imágenes acreditadas, el fondo y el reverso ilustrados, las doce pruebas, el despliegue público y la presentación final en PowerPoint y PDF ya existen. El siguiente bloque consiste en realizar una prueba manual completa, ensayar la presentación y preparar el vídeo. Los cambios deben mantenerse pequeños y la documentación aprobada debe actualizarse.
```

## Normas para documentar el trabajo

- La documentación se redactará en tercera persona o mediante construcciones impersonales.
- Cada cambio o commit tendrá un nombre descriptivo y una breve descripción.
- Si cambia una decisión registrada, se actualizará su apartado en lugar de crear un punto duplicado.
- Una decisión modificada distinguirá entre `Idea original`, `Decisión actual` y `Motivo del cambio`.
- La fecha de actualización solo se añadirá a los puntos realmente modificados.
- Al cerrar una sesión relevante se actualizarán este documento, el seguimiento y las decisiones afectadas.

## Documentos de referencia

- `README.md`: presentación general y uso del proyecto.
- `documentacion/seguimiento.md`: alcance, fases y progreso.
- `documentacion/decisiones.md`: decisiones aceptadas y motivos.
- `documentacion/ideas-historias.md`: banco de ideas narrativas.
- `documentacion/especificaciones-oficiales-entrega-tfm.pdf`: copia local del documento oficial de entrega.
- `documentacion/requisitos-entrega.md`: requisitos administrativos.
- `documentacion/arquitectura.md`: documentación técnica.
- `documentacion/revision-codigo.md`: revisión de calidad y seguridad.
- `documentacion/creditos-imagenes.md`: procedencia de los recursos visuales.
