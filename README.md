## Chat Socket io para choucair

Aplicacion de chat en tiempo real utilizando Nodejs, React, Socketio, TaildwindCSS, Tostify, 


## Backend

- Node.js
  - express
  - socket.io

1. Asegúrate de tener Node.js instalado en tu sistema.

2. Abre una terminal y navega al directorio del backend:

   ```bash
   cd backend

   npm install

   npm start
   ```

## Frontend

- React
- TailwindCSS



## Detalles de la API

-Endpoint para establecer el Nick del usuario:
Método: POST

-Ruta: /api/chat/set-nick

-Cuerpo de la solicitud (JSON):

```
{
  "nick": "nombre_de_usuario"
}
```

# Endpoint para enviar mensajes:
Método: POST

Ruta: /api/chat/send-message

Cuerpo de la solicitud (JSON):

```
{
  "body": "Mensaje de ejemplo",
  "from": "nombre_de_usuario",
  "to": "nombre_destinatario (opcional)"
}
```

# Socket Events:
connection: Evento emitido cuando un nuevo cliente se conecta al servidor.
setNick: Evento para establecer el Nick del usuario.
message: Evento para enviar y recibir mensajes.

