const SockJS = require('sockjs-client');
const Stomp = require('stomp-websocket');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 3000; 

app.use(cors({
  origin: 'http://192.168.1.11:9090', // Cambiar al momento de subir a azure
}));

app.use(express.static(path.join(__dirname, 'resources/static')));

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.set('Content-Type', 'application/javascript');
    }
  },
}));

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://10.2.67.60:${PORT}`);
});