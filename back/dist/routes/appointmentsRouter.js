"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.get('/', appointmentsController_1.getAllAppointments);
appointmentsRouter.get('/:id', appointmentsController_1.getAppointment);
appointmentsRouter.post('/schedule', appointmentsController_1.newAppointment);
appointmentsRouter.put('/cancel/:id', appointmentsController_1.cancelAppointment);
exports.default = appointmentsRouter;