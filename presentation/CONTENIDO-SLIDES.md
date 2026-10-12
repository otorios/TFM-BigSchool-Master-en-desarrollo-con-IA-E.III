# Contenido propuesto para las slides

Este documento sirve como borrador editable antes de trasladar el contenido a PowerPoint. Los textos visibles se han mantenido breves para que la explicación oral aporte el detalle.

## Slide 1 — Portada

### Texto visible

**Memory Quest: Señal estelar**  
Una aventura educativa de memoria y astronomía

Trabajo Fin de Máster  
Nombre de la alumna

### Recurso visual sugerido

- Captura de la pantalla inicial o composición con el fondo espacial y el reverso `MQ · ATLAS`.

### Nota de apoyo

Presentar brevemente el proyecto y explicar que se trata de un juego web educativo desarrollado como TFM.

## Slide 2 — Problema y propuesta

### Texto visible

**Aprender relacionando, no solo memorizando**

- Algunos conceptos resultan difíciles de recordar de forma aislada.
- Los juegos de memoria tradicionales emparejan elementos idénticos.
- Memory Quest relaciona una imagen y su nombre con una definición o pista.
- La narrativa convierte el aprendizaje en una misión con un objetivo.

### Recurso visual sugerido

- Una pareja de cartas del juego: concepto frente a definición.

### Nota de apoyo

Explicar que la propuesta combina memoria visual, comprensión semántica y progresión narrativa para un público de 10 a 14 años.

## Slide 3 — Experiencia del jugador

### Texto visible

**Una misión espacial en tres capítulos**

- Capítulo 1: 4 parejas para recuperar las comunicaciones.
- Capítulo 2: 6 parejas para proteger la Cápsula LURRA.
- Capítulo 3: 8 parejas para restaurar la navegación.
- Energía, cronómetro, recompensas y progreso guardado.

### Recurso visual sugerido

- Tres capturas pequeñas, una de cada tablero, o una captura del tablero junto a los tres módulos.

### Nota de apoyo

Contar el flujo desde el inicio de la aventura hasta el desenlace. Aclarar que cada acierto explica la relación educativa y permite avanzar en la reparación de ATLAS.

## Slide 4 — Historia y contenido educativo

### Texto visible

**Astronomía al servicio de la historia**

- 18 relaciones educativas revisadas.
- Conceptos sobre el sistema solar, el espacio y los fenómenos astronómicos.
- ATLAS, COSMO, la misión ORIOS y la Cápsula LURRA conectan los capítulos.
- Imágenes locales con fuentes y créditos documentados.

### Recurso visual sugerido

- Selección de cartas con el Sol, la Tierra, una nebulosa y un agujero negro.

### Nota de apoyo

Explicar que el contenido y las relaciones son fijos y se revisan antes de incorporarse. No se genera contenido educativo durante la partida.

## Slide 5 — Arquitectura

### Texto visible

**Una arquitectura sencilla y modular**

- HTML, CSS y JavaScript con Vite.
- Un motor compartido para los tres capítulos.
- Módulos separados para reglas, estado, interfaz, almacenamiento y contenido.
- Progreso validado y almacenado en `localStorage`.
- Sin backend, cuentas de usuario ni base de datos.

### Recurso visual sugerido

- Diagrama sencillo con `main.js` en el centro y conexiones a motor, estado, interfaz, almacenamiento y contenidos.

### Nota de apoyo

Justificar que esta solución reduce la complejidad, facilita las pruebas y permite entregar un MVP completo y mantenible.

## Slide 6 — Uso de inteligencia artificial

### Texto visible

**IA como apoyo al desarrollo, no como dependencia**

- Ideación y evolución de la narrativa.
- Apoyo en documentación, arquitectura y programación.
- Creación inicial de recursos visuales.
- Revisión de calidad, seguridad y pruebas.
- Validación humana antes de incorporar cada resultado.

### Recurso visual sugerido

- Flujo breve: asistencia con IA → revisión humana → incorporación al proyecto.

### Nota de apoyo

Destacar que la aplicación no llama a ningún proveedor de IA durante su ejecución. Las reglas, la narrativa y los contenidos se distribuyen localmente.

## Slide 7 — Calidad, seguridad y despliegue

### Texto visible

**Un MVP probado y publicado**

- 12 pruebas automáticas de reglas, progreso y validación.
- Construcción de producción verificada.
- Revisión de accesibilidad, diseño responsive y seguridad.
- Recursos locales y política de seguridad de contenidos.
- Despliegue automático con GitHub Actions y GitHub Pages.

**Aplicación:**  
https://otorios.github.io/TFM-BigSchool-Master-en-desarrollo-con-IA-E.III/

### Recurso visual sugerido

- Captura de una ejecución correcta de GitHub Actions y otra de la aplicación publicada.

### Nota de apoyo

Explicar que cada cambio en `main` ejecuta la instalación, las pruebas, la construcción y la publicación. No existen secretos ni credenciales en el cliente.

## Slide 8 — Resultado y evolución

### Texto visible

**Resultado**

- Juego completo de principio a fin.
- Tres capítulos y 18 parejas educativas.
- Progreso local y tres desenlaces según la energía conservada.
- Aplicación pública y documentada.

**Próximos pasos**

- Nuevas temáticas y aventuras.
- Selección de dificultad.
- Partidas de refuerzo.
- Perfiles y sincronización opcionales.

### Recurso visual sugerido

- Captura del desenlace o de la nave reparada.

### Nota de apoyo

Cerrar destacando que el objetivo del MVP se ha cumplido y que la arquitectura permite ampliar el contenido sin sustituir el motor principal.

## Enlaces para la última slide o diapositiva adicional

- **Aplicación:** https://otorios.github.io/TFM-BigSchool-Master-en-desarrollo-con-IA-E.III/
- **Repositorio:** https://github.com/otorios/TFM-BigSchool-Master-en-desarrollo-con-IA-E.III

## Revisión antes de crear el PowerPoint

- Sustituir `Nombre de la alumna` por el nombre definitivo.
- Elegir las capturas que representen mejor cada apartado.
- Reducir cualquier texto que resulte demasiado largo al maquetarlo.
- Mantener la misma paleta visual del juego.
- Comprobar que los enlaces sean clicables.
- Añadir el enlace definitivo de las slides al README cuando se publique o se incorpore el archivo final.
