//* Definición y exportación del enrutador de users.

import { Router } from "express";
import { getAllUsers, login, register, userById } from "../controllers/usersController";

const usersRouter = Router(); //Se crea una instancia de 'Router'.

//* Enrutamiento hacia los controladores.
usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', userById);
usersRouter.post('/register', register);
usersRouter.post('/login', login);

export default usersRouter; //Se exporta el enrutador.