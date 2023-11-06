import { databaseInit } from './controladores/databaseInit.js';
import express from 'express';

databaseInit();

const app = express();

app.get('/', function(request, response) {
  response.send("Olá mundo!");
});

app.listen(8080, () => { console.log("app is running..."); });