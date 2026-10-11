# Memory Quest: Señal estelar

**Memory Quest: Señal estelar** es un videojuego web educativo de memoria y asociaciones semánticas. La aventura está ambientada en una misión espacial y se divide en tres capítulos con dificultad progresiva.

El proyecto corresponde al Trabajo Final del Máster en Desarrollo con Inteligencia Artificial. La IA se utiliza como apoyo documentado durante el proceso de diseño y desarrollo, pero el juego no depende de ningún proveedor de IA durante su ejecución.

> **Estado actual:** el MVP es jugable y contiene los tres capítulos completos, las 18 parejas educativas, imágenes acreditadas, progreso local, diseño responsive, una identidad visual ilustrada y 12 pruebas automáticas. Antes de la entrega quedan pendientes una prueba manual completa, el despliegue público, las slides y el vídeo.

## Descripción del proyecto

El jugador asume el papel de un cadete de la misión ORIOS. Después de que una tormenta de partículas dañe la nave ATLAS, deberá ayudar a COSMO a reparar sus sistemas y proteger la Cápsula LURRA.

Para avanzar debe relacionar conceptos de astronomía con sus definiciones o pistas. Cada tablero completado recupera un módulo de la nave, permite continuar la historia y contribuye a la puntuación final.

La aventura contiene tres capítulos:

1. **Una voz entre las estrellas:** 4 parejas para restablecer las comunicaciones.
2. **Las semillas de la Tierra:** 6 parejas para recuperar la protección de LURRA.
3. **El camino a casa:** 8 parejas para reconstruir la navegación y reactivar la propulsión.

Las decisiones educativas, narrativas y técnicas se explican con más detalle en [Decisiones del proyecto](docs/DECISIONES.md) y [Continuidad del proyecto](docs/CONTINUIDAD.md).

## Funcionalidades principales

- Aventura completa formada por tres capítulos de dificultad progresiva.
- Tableros de 4, 6 y 8 parejas semánticas.
- Parejas formadas por una imagen con su concepto y una definición o pista breve.
- Periodo inicial de observación de 14, 21 y 28 segundos según el capítulo.
- Mezcla aleatoria de las cartas en cada partida.
- Energía y cuenta atrás de seis fallos disponibles por capítulo.
- Cronómetro informativo sin límite de tiempo.
- Barra de progreso de reparación y estadísticas al terminar cada tablero.
- Recompensa narrativa y módulo recuperado al completar cada capítulo.
- Tres desenlaces según la energía total conservada.
- Guardado del nombre y del progreso entre capítulos mediante `localStorage`.
- Opción para continuar una partida o comenzar una nueva.
- Interfaz responsive adaptada principalmente a ordenadores y portátiles.
- Imágenes astronómicas locales con texto alternativo y créditos registrados.
- Fondo espacial y reverso de cartas creados con apoyo de IA generativa para representar provisionalmente la identidad visual del MVP.
- Validación del nombre y del progreso almacenado en el navegador.

## Cómo jugar

1. Se introduce el nombre del cadete y se comienza la misión.
2. Se consultan la introducción y las reglas del capítulo.
3. Se observan las cartas mientras permanecen visibles durante la cuenta atrás.
4. Se seleccionan dos cartas para relacionar cada concepto con su pista.
5. Las parejas correctas permanecen visibles; cada error consume 2 puntos de energía.
6. El tablero debe completarse antes de agotar los 12 puntos de energía.
7. La recuperación de los tres módulos de ATLAS permite descubrir el desenlace de la misión.

Si se cierra la página, se conserva el último capítulo completado. Los tableros a medias no se guardan y se reinician al continuar.

## Stack tecnológico

- **HTML5 semántico:** estructura principal y punto de entrada de la aplicación.
- **CSS:** diseño visual, animaciones, giro de cartas y adaptación responsive.
- **JavaScript moderno:** lógica organizada mediante módulos ES, sin framework.
- **Vite:** servidor de desarrollo y construcción de producción.
- **Node.js Test Runner:** ejecución de las pruebas automáticas.
- **Web Storage API (`localStorage`):** persistencia local del progreso.
- **Git y GitHub:** control de versiones y alojamiento del repositorio.
- **GitHub Pages:** plataforma prevista para el despliegue público.

No existe backend, base de datos ni servicio externo de IA durante la ejecución. La explicación técnica ampliada se encuentra en [Arquitectura](docs/ARQUITECTURA.md).

## Instalación y ejecución

### Requisitos

- Node.js 20.19 o posterior.
- npm, incluido con Node.js.

### Ejecución local

```bash
git clone git@github.com:otorios/TFG-BigSchool-Master-en-desarrollo-con-IA-E.III.git
cd TFG-BigSchool-Master-en-desarrollo-con-IA-E.III
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local desde la que se puede abrir el juego.

### Versión de producción

```bash
npm run build
npm run preview
```

La construcción se genera en la carpeta `dist/`. Esta carpeta es un resultado temporal y no forma parte del código fuente versionado.

## Pruebas

Para ejecutar las pruebas automáticas:

```bash
npm test
```

Actualmente existen 12 pruebas que comprueban:

- Creación y emparejamiento de cartas.
- Cálculo de energía y resultados finales.
- Formato del cronómetro.
- Número de fallos disponibles.
- Longitud de las pistas.
- Normalización y límite del nombre del jugador.
- Rechazo de progreso manipulado o incoherente.
- Aceptación de una estructura de progreso válida.

La última revisión también verificó la sintaxis de JavaScript, la construcción de Vite y las dependencias. Los resultados y criterios están documentados en [Revisión de código y seguridad](docs/REVISION-CODIGO.md).

## Estructura del proyecto

```text
.
├── index.html                  # Punto de entrada
├── package.json               # Scripts y dependencias
├── vite.config.js             # Configuración de Vite
├── src/
│   ├── main.js                # Flujo de pantallas y partida
│   ├── game.js                # Reglas puras del juego
│   ├── state.js               # Estado temporal del capítulo
│   ├── storage.js             # Validación y persistencia local
│   ├── ui.js                  # Creación y actualización de la interfaz
│   ├── styles.css             # Diseño y adaptación responsive
│   ├── assets/                # Fondo y reverso ilustrados del juego
│   └── data/chapters.js       # Capítulos, narrativa y parejas
├── public/images/             # Imágenes locales y recursos visuales
├── tests/                     # Pruebas automáticas
├── docs/                      # Documentación técnica y de seguimiento
├── presentation/              # Material de la presentación
└── media/                     # Material de la demostración y el vídeo
```

## Datos, privacidad y seguridad

- El juego no requiere registro ni recopila información personal en un servidor.
- El nombre y el progreso se almacenan únicamente en el navegador del jugador mediante `localStorage`.
- No se almacenan contraseñas, secretos ni datos sensibles.
- La interfaz introduce el contenido dinámico mediante APIs seguras del DOM y `textContent`.
- El progreso recuperado del navegador se valida antes de utilizarlo.
- Los recursos se sirven localmente y la aplicación aplica una política de seguridad de contenidos.
- Las imágenes utilizadas y su procedencia están registradas en [Créditos de las imágenes](docs/CREDITOS-IMAGENES.md).

Los recursos visuales generados con apoyo de IA forman parte exclusivamente del MVP presentado en el TFM. Una evolución posterior del proyecto contempla sustituirlos por ilustraciones propias o creadas mediante colaboraciones con artistas.

## Acceso y credenciales

El proyecto **no incorpora autenticación ni cuentas de usuario**, por lo que no se necesitan usuario y contraseña de prueba. El nombre introducido al comenzar solo identifica al cadete dentro de la partida y permanece almacenado localmente en el navegador.

## Despliegue y entregables

| Entregable | Estado | Enlace |
| --- | --- | --- |
| Repositorio de código | Disponible | [Repositorio en GitHub](https://github.com/otorios/TFG-BigSchool-Master-en-desarrollo-con-IA-E.III) |
| Aplicación desplegada | Pendiente | Se añadirá la URL de GitHub Pages |
| Slides de presentación | Pendiente | Se añadirá el enlace público o archivo definitivo |
| Vídeo explicativo | Pendiente | Se añadirá el enlace de acceso al vídeo de YouTube |
| Credenciales de prueba | No aplicable | El proyecto no tiene autenticación |

Los requisitos y la lista de comprobación de la entrega están recogidos en [Requisitos de entrega](docs/REQUISITOS-ENTREGA.md).

## Documentación

- [Arquitectura](docs/ARQUITECTURA.md): stack, módulos, estado, persistencia y seguridad.
- [Decisiones del proyecto](docs/DECISIONES.md): decisiones funcionales, visuales, narrativas y técnicas.
- [Seguimiento del proyecto](docs/SEGUIMIENTO.md): planificación y registro cronológico del trabajo.
- [Continuidad y punto de reanudación](docs/CONTINUIDAD.md): estado vigente y próximos pasos.
- [Revisión de código y seguridad](docs/REVISION-CODIGO.md): comprobaciones y mejoras aplicadas.
- [Créditos de las imágenes](docs/CREDITOS-IMAGENES.md): fuentes y atribuciones de los recursos visuales.
- [Requisitos de entrega](docs/REQUISITOS-ENTREGA.md): entregables y lista de comprobación final.
- [Banco de ideas para historias](docs/IDEAS-HISTORIAS.md): ideas conservadas para futuras aventuras.
- [Presentación](presentation/README.md): preparación de las slides.
- [Material para la demostración](media/README.md): preparación del vídeo y la demostración.

## Estado pendiente antes de la entrega

- Realizar una prueba manual completa de los tres capítulos.
- Comprobar la instalación desde cero.
- Configurar y verificar el despliegue público.
- Preparar las slides de presentación.
- Grabar el vídeo explicativo con captura de pantalla.
- Incorporar al README las URLs definitivas del despliegue, las slides y el vídeo.
- Revisar y cumplimentar el formulario de entrega.

## Fechas

- **Fecha interna objetivo por FUNDAE:** 23/10/2026.
- **Fecha oficial indicada en la documentación del TFM:** 26/10/2026.

La planificación utiliza el 23 de octubre como fecha real de finalización y reserva los días posteriores como margen de seguridad.
