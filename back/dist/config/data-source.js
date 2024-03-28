"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Appointment_1 = require("../entities/Appointment");
const Credential_1 = require("../entities/Credential");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "pm3",
    synchronize: true,
    dropSchema: true,
    logging: false,
    entities: [Appointment_1.Appointment, Credential_1.Credential, User_1.User],
    subscribers: [],
    migrations: [],
});
