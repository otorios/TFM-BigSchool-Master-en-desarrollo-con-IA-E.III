# Arquitectura

## Stack seleccionado para el MVP

- HTML semántico.
- CSS.
- JavaScript sin framework, organizado mediante módulos.
- Vite como herramienta de desarrollo y construcción.

Dejo React con Vite como posible evolución posterior, no como parte de mi entrega inicial.

Concretaré la arquitectura detallada antes de comenzar la implementación.

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
