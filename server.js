const SockJS = require('sockjs-client');
const Stomp = require('stomp-websocket');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.set('port', process.env.PORT || 3000);

app.use(cors({
  origin: 'http://magickbrushstrokesback.azurewebsites.net', // Cambiar al momento de subir a azure
}));

app.use(express.static(path.join(__dirname, 'resources/static')));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  },
}));

let port = app.get("port");

app.listen(port, () => {
  console.log("Server en ejecución por el puerto "+port);
});