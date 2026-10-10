# Arquitectura

## Stack seleccionado para el MVP

- HTML semántico.
- CSS.
- JavaScript sin framework, organizado mediante módulos.
- Vite como herramienta de desarrollo y construcción.

Dejo React con Vite como posible evolución posterior, no como parte de mi entrega inicial.

Concretaré la arquitectura detallada antes de comenzar la implementación.

## Organización de la interfaz

- Utilizaré un único `index.html`.
- JavaScript controlará las vistas de inicio, introducción, tablero, resultado de capítulo y desenlace.
- Un único motor generará y gestionará los tableros de los tres capítulos.
- Los capítulos aportarán sus datos y su número de parejas al motor compartido.
- Al avanzar de capítulo actualizaré la vista sin navegar a otro archivo HTML.

## Contenido local

- Definiré los capítulos y sus contenidos en un módulo JavaScript, inicialmente `src/data/chapters.js`.
- Cada capítulo incluirá su identificador, título, textos narrativos, recompensa y lista de parejas.
- Cada pareja incluirá como mínimo un identificador, nombre, ruta de imagen, pista y explicación.
- El motor recibirá estos datos sin contener textos ni rutas específicos de un capítulo.

## Estado de la partida

- Centralizaré el estado temporal en un objeto JavaScript llamado `gameState`.
- Incluirá el capítulo actual, puntuación, intentos, cartas seleccionadas, parejas encontradas, reparaciones y bloqueo del tablero.
- Las reglas modificarán este objeto y la interfaz se actualizará a partir de sus valores.
- Separaré el estado temporal del progreso persistente guardado en `localStorage`.

## Persistencia por puntos de control

- Guardaré el nombre del jugador al comenzar la aventura.
- Al completar un capítulo guardaré el siguiente capítulo desbloqueado, la puntuación acumulada y los sistemas reparados.
- Al terminar guardaré que la aventura está completada.
- No persistiré el orden del tablero, las cartas volteadas ni las parejas parciales del capítulo en curso.
- Si se interrumpe un capítulo, al continuar se cargará de nuevo desde el principio.
- La opción de nueva partida eliminará el progreso guardado.

## Estructura inicial

```text
index.html
package.json
src/
  main.js
  game.js
  state.js
  storage.js
  ui.js
  data/
    chapters.js
  styles.css
public/
  images/
tests/
docs/
presentation/
media/
```

- `main.js` iniciará y coordinará la aplicación.
- `game.js` contendrá las reglas del juego.
- `state.js` contendrá `gameState`.
- `storage.js` gestionará `localStorage`.
- `ui.js` actualizará las vistas y controles.
- `chapters.js` contendrá los datos fijos de la aventura.

## Seguridad mínima

- Insertaré los datos introducidos por el jugador con `textContent` y crearé elementos mediante APIs seguras del DOM.
- No utilizaré entradas del jugador con `innerHTML`, `eval()`, `document.write()` ni atributos de eventos construidos dinámicamente.
- Normalizaré y limitaré el nombre del jugador a un máximo inicial de 30 caracteres.
- Validaré la estructura y los tipos de los datos recuperados de `localStorage`; ante datos inválidos aplicaré valores seguros o reiniciaré el progreso.
- No almacenaré secretos, credenciales ni información sensible en el código o en `localStorage`.
- Mantendré las dependencias al mínimo y revisaré sus vulnerabilidades conocidas.
- Alojaré localmente los recursos siempre que sea razonable y aplicaré una política CSP compatible con la aplicación.
- Añadiré pruebas para entradas con caracteres especiales y progreso manipulado o corrupto.

Al no existir backend, base de datos, comandos del sistema ni proveedor de IA durante la ejecución, el MVP no expone superficies de inyección SQL, de comandos o de prompts.

Como mínimo documentaré:

- Diagrama de contexto.
- Componentes del frontend.
- Motor y estado del juego.
- Necesidad o ausencia de backend y contratos de API.
- Modelo de datos.
- Biblioteca de contenidos e imágenes.
- Persistencia local mediante `localStorage`.
- Estrategia de pruebas.
- Despliegue y observabilidad.

## Principio inicial

He decidido que el MVP no dependa de servicios externos de IA. Definiré localmente las reglas, el contenido educativo y la narrativa, y conservaré el progreso en el navegador sin cuentas ni base de datos.
