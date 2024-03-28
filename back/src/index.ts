//*Entry Point de la aplicación.

import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then(res => {
    console.log('Database connection established.');
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}.`);
    }); //Se inicia el servidor que escucha en el puerto de la constante PORT.
})
