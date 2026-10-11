# Revisión de código y seguridad

## Revisión del 11/10/2026

He revisado todos los módulos JavaScript, la configuración de Vite, la política CSP, la persistencia, las pruebas y la construcción de producción antes de continuar con el diseño.

## Criterios aplicados

- Mantengo módulos pequeños y con una sola responsabilidad.
- Utilizo nombres descriptivos y comentarios únicamente cuando explican una decisión o una regla que no resulta evidente.
- Creo contenido dinámico con APIs del DOM y `textContent`; no utilizo `innerHTML`, `eval()`, `document.write()` ni ejecución de código construido desde entradas.
- Trato el contenido de `localStorage` como una entrada no fiable.
- Mantengo los recursos localmente y reduzco las dependencias al mínimo.
- Conservo las reglas comprobables en funciones puras y mediante pruebas automáticas.

## Mejoras realizadas

- La hoja de estilos se carga como recurso procesado por Vite. Esto permite retirar `'unsafe-inline'` de `style-src` y mantener una CSP más estricta tanto en desarrollo como en producción.
- La validación del progreso comprueba la coherencia entre capítulo desbloqueado, puntuación, módulos reparados y estado de finalización, además de sus tipos y límites.
- El nombre normaliza espacios y caracteres de control, mantiene un máximo de 30 caracteres y se inserta siempre mediante `textContent`.
- El texto alternativo específico definido para cada imagen se copia ahora a la carta correspondiente.
- Los valores máximos de energía y puntuación utilizan constantes compartidas en lugar de cifras repetidas.
- Eliminé una función de estado que no se utilizaba y un manejador vacío del botón de envío.
- Añadí comentarios breves sobre la mezcla, el estado temporal, la confianza de `localStorage`, la construcción segura del DOM y los puntos de control.

## Comprobaciones superadas

- 12 pruebas automáticas.
- Comprobación sintáctica de todos los archivos JavaScript con `node --check`.
- Construcción de producción con Vite.
- Inicio del servidor de desarrollo y carga correcta del HTML y el CSS.
- `npm audit`: 0 vulnerabilidades conocidas.
- `git diff --check`: sin errores de espacios o formato del parche.

## Riesgo residual y alcance

La aplicación no utiliza backend, cuentas, base de datos, secretos ni proveedor de IA durante la ejecución. Por ello no existe una superficie de inyección SQL, de comandos o de prompts. La CSP incluida mediante etiqueta `meta` aporta defensa adicional para este sitio estático; cuando configure el despliegue revisaré si GitHub Pages permite complementar las cabeceras de seguridad y documentaré sus limitaciones.

El progreso es local y puede borrarse desde el navegador. No contiene información sensible y no se considera un sistema de autenticación ni una fuente de datos autoritativa.
