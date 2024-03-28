//* Definición y exportación del enrutador de appointments.

import { Router } from "express";
import { cancelAppointment, getAllAppointments, getAppointment, newAppointment } from "../controllers/appointmentsController";

const appointmentsRouter = Router(); //Se crea una instancia de 'Router'.

//* Enrutamiento hacia los controladores.
appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.get('/:id', getAppointment);
appointmentsRouter.post('/schedule', newAppointment);
appointmentsRouter.put('/cancel/:id', cancelAppointment);

export default appointmentsRouter; //Se exporta el enrutador.