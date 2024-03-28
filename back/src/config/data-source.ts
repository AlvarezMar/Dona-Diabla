import { DataSource } from "typeorm";

import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credential";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "pm3",
    synchronize: true,
    dropSchema: true, //*Elimina todos los datos existentes en la base de datos.
    logging: false,
    entities: [Appointment, Credential, User],
    subscribers: [],
    migrations: [],
})