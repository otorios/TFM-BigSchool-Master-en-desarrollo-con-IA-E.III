# Arquitectura

Documento reservado para describir la arquitectura cuando se seleccione el stack.

Como mínimo deberá documentar:

- Diagrama de contexto.
- Componentes del frontend.
- Motor y estado del juego.
- Backend y contratos de API.
- Integración con el proveedor de IA.
- Modelo de datos.
- Biblioteca de contenidos e imágenes.
- Validación de contenido generado.
- Gestión de secretos.
- Manejo de errores y alternativa sin IA.
- Estrategia de pruebas.
- Despliegue y observabilidad.

## Principio inicial

Las reglas del juego no dependerán del modelo de IA. El proveedor de IA deberá poder sustituirse sin modificar el motor de cartas, la puntuación o el sistema de progresión.

