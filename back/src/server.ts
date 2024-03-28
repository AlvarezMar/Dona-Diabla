//*Configuración del servidor.

import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";

const server = express(); //Se crea una instancia de la aplicación Express.

//*Middlewares
server.use(cors());
server.use(express.json()); //Permite que el servidor procese solicitudes en formato JSON.
server.use(morgan('dev')); //Genera mensajes de registro en la consola con formato 'dev'. Más legible para el desarrollo.

server.use(router); //Las solicitudes que lleguen a la aplicación serán dirigidas al enrutador principal.

export default server; //Se exporta la instancia de la aplicación.