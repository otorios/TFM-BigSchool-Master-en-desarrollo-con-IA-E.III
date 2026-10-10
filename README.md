# Memory Quest: Señal estelar

Videojuego web educativo de memoria y asociaciones semánticas, organizado como una aventura narrativa por capítulos y desarrollado con apoyo de inteligencia artificial.

> Estado actual: primera versión jugable implementada. Pendientes principales: incorporar y acreditar las imágenes de la NASA, realizar pruebas de juego, activar el despliegue y preparar la entrega.

## Idea general

El MVP presenta una aventura fija de astronomía, dividida en tres capítulos con tableros de 4, 6 y 8 parejas semánticas.

Las parejas no son dos imágenes idénticas. Cada pareja combina una carta con la imagen y el nombre de un concepto y otra con una definición o pista breve, por ejemplo:

- `Sol` ↔ `Soy la estrella situada en el centro del sistema solar`.
- `Atmósfera` ↔ `Soy la capa de gases que rodea un planeta`.
- `Año luz` ↔ `Soy la distancia que recorre la luz durante un año`.

Cada pareja correcta hace avanzar una barra de reparación. Completar un tablero entrega un módulo de la nave y desbloquea el siguiente capítulo de la historia.

## Propuesta de valor

Memory Quest combina:

- Un juego de memoria sencillo de comprender.
- Aprendizaje mediante asociaciones semánticas.
- Una aventura espacial dividida en tres capítulos.
- Progresión narrativa y recompensas.
- Contenido controlado mediante una biblioteca de recursos.
- Inteligencia artificial como apoyo documentado durante el desarrollo.

Las parejas, pistas, explicaciones y textos narrativos del MVP estarán preparados y revisados previamente. La aplicación no dependerá de un proveedor de IA durante su ejecución.

## Primera aventura de referencia

**Tema:** astronomía.  
**Premisa:** una expedición ha sufrido una avería y ha perdido la comunicación con la Tierra.  
**Objetivo:** superar los tableros para recuperar energía, reparar las comunicaciones, restaurar la navegación y poner en marcha la propulsión.  
**Recompensa final:** reparar la nave y regresar a casa.

## Ejecutar el proyecto

Requisitos: Node.js 20.19 o posterior.

```bash
npm install
npm run dev
```

Vite mostrará la dirección local de desarrollo. Para verificar la versión de producción y las pruebas:

```bash
npm test
npm run build
npm run preview
```

## Estructura principal

- `src/data/chapters.js`: catálogo fijo de capítulos y parejas.
- `src/game.js`: creación del tablero, emparejamiento, energía y resultado.
- `src/state.js`: estado temporal del capítulo.
- `src/storage.js`: validación y persistencia mediante `localStorage`.
- `src/ui.js`: creación segura de elementos y actualización de la interfaz.
- `src/main.js`: coordinación de pantallas, partida y narrativa.
- `tests/`: pruebas del motor, la entrada de nombre y el progreso manipulado.

## Documentación del proyecto

- [Seguimiento del proyecto](docs/SEGUIMIENTO.md)
- [Continuidad y punto de reanudación](docs/CONTINUIDAD.md)
- [Banco de ideas para historias](docs/IDEAS-HISTORIAS.md)
- [Requisitos de entrega](docs/REQUISITOS-ENTREGA.md)
- [Decisiones del proyecto](docs/DECISIONES.md)
- [Arquitectura](docs/ARQUITECTURA.md)
- [Créditos y estado de las imágenes](docs/CREDITOS-IMAGENES.md)
- [Presentación](presentation/README.md)
- [Material para la demostración](media/README.md)

## Entregables finales

Este repositorio deberá contener al finalizar:

- Código fuente completo.
- Documentación de instalación y ejecución.
- Descripción del stack tecnológico.
- Funcionalidades y estructura del proyecto.
- URL pública del despliegue.
- Slides de presentación o enlace público.
- URL del vídeo explicativo con captura de pantalla.
- Credenciales de prueba, únicamente si finalmente se incorpora autenticación.

## Fechas

- **Fecha interna objetivo por FUNDAE:** 23/10/2026.
- **Fecha oficial indicada en la documentación del TFM:** 26/10/2026.

La planificación utilizará el 23 de octubre como fecha real de finalización y reservará los días posteriores como margen de seguridad.
