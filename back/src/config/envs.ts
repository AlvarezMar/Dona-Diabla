//*Configuración de variables de entorno.

import 'dotenv/config'; //Importa y carga la configuración de variables de entorno desde el archivo '.env'.

export const PORT = process.env.PORT; //Se crea una variable PORT cuyo valor es la variable definida con el mismo nombre en el archivo '.env'.