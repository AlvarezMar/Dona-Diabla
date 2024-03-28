//* Definición y exportación del enrutador principal.

import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentsRouter from "./appointmentsRouter";

const router = Router(); //Se crea una instancia de 'Router'.

router.use('/users', usersRouter); //Todas las rutas en 'usersRouter' estaran precedidas por '/users'.
router.use('/appointments', appointmentsRouter); //Todas las rutas en 'appointmentsRouter' estarán precedidas por '/appointments'.


export default router; //Se exporta la instancia del enrutador.