# Arquitectura

## Stack seleccionado para el MVP

- HTML semántico.
- CSS.
- JavaScript sin framework, organizado mediante módulos.
- Vite como herramienta de desarrollo y construcción.

React con Vite queda registrado como posible evolución posterior y no forma parte de la entrega inicial.

La primera versión implementa esta arquitectura y mantiene cada responsabilidad en un módulo pequeño.

## Organización de la interfaz

- Se utiliza un único `index.html`.
- JavaScript controlará las vistas de inicio, introducción, tablero, resultado de capítulo y desenlace.
- Un único motor generará y gestionará los tableros de los tres capítulos.
- Los capítulos aportarán sus datos y su número de parejas al motor compartido.
- Al avanzar de capítulo se actualiza la vista sin navegar a otro archivo HTML.

## Contenido local

- Los capítulos y sus contenidos se definen en `src/data/chapters.js`.
- Cada capítulo incluirá su identificador, título, textos narrativos, recompensa y lista de parejas.
- Cada pareja incluye un identificador, nombre, pista, símbolo de respaldo, ruta de imagen local y texto alternativo.
- El motor recibe estos datos sin contener textos ni rutas específicos de un capítulo.

## Estado de la partida

- El estado temporal se centraliza en un objeto JavaScript creado por `createGameState`.
- Incluye el capítulo actual, energía, intentos, errores, cartas seleccionadas, parejas encontradas, tiempo y bloqueo del tablero.
- Las reglas modificarán este objeto y la interfaz se actualizará a partir de sus valores.
- El estado temporal se mantiene separado del progreso persistente guardado en `localStorage`.

## Persistencia por puntos de control

- El nombre del jugador se guarda al comenzar la aventura.
- Al completar un capítulo se guardan el siguiente capítulo desbloqueado, la puntuación acumulada y los sistemas reparados.
- Al terminar se registra que la aventura está completada.
- No se persisten el orden del tablero, las cartas volteadas ni las parejas parciales del capítulo en curso.
- Si se interrumpe un capítulo, al continuar se cargará de nuevo desde el principio.
- La opción de nueva partida eliminará el progreso guardado.

## Estructura inicial

```text
index.html
package.json
src/
  assets/
    fondo-cenefa-estelar.png
    reverso-carta-atlas.png
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
    README.md
tests/
docs/
presentation/
media/
```

- `main.js` inicia y coordina la aplicación.
- `game.js` contiene las reglas puras del juego.
- `state.js` crea el estado temporal.
- `storage.js` gestiona y valida `localStorage`.
- `ui.js` crea y actualiza las vistas y controles mediante APIs seguras del DOM.
- `chapters.js` contiene los datos fijos de la aventura.

## Seguridad mínima

- Los datos introducidos por el jugador se insertan con `textContent` y los elementos se crean mediante APIs seguras del DOM.
- No se utilizan entradas del jugador con `innerHTML`, `eval()`, `document.write()` ni atributos de eventos construidos dinámicamente.
- El nombre del jugador se normaliza y se limita a 30 caracteres.
- Se validan la estructura, los tipos y la coherencia de los datos recuperados de `localStorage`; ante datos inválidos se reinicia el progreso.
- No se almacenan secretos, credenciales ni información sensible en el código o en `localStorage`.
- Las dependencias se mantienen al mínimo y se revisan sus vulnerabilidades conocidas.
- Los recursos se alojan localmente siempre que resulta razonable y se aplica una política CSP compatible con la aplicación. La hoja CSS se carga como recurso propio para no necesitar `'unsafe-inline'` en `style-src`.
- Existen pruebas para entradas con caracteres especiales y progreso manipulado o corrupto.

Al no existir backend, base de datos, comandos del sistema ni proveedor de IA durante la ejecución, el MVP no expone superficies de inyección SQL, de comandos o de prompts.

## Principio inicial

Se ha decidido que el MVP no dependa de servicios externos de IA. Las reglas, el contenido educativo y la narrativa se definen localmente, y el progreso se conserva en el navegador sin cuentas ni base de datos.
