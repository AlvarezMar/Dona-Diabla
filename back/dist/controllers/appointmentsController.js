"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.newAppointment = exports.getAppointment = exports.getAllAppointments = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointmentsService_1.allAppointments)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = yield (0, appointmentsService_1.appointmentById)(Number(req.params.id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getAppointment = getAppointment;
const newAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, date, time } = req.body;
    try {
        const appointment = yield (0, appointmentsService_1.createAppointment)(userId, date, time);
        res.status(201).json(appointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.newAppointment = newAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = yield (0, appointmentsService_1.cancelAppointments)(Number(req.params.id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.cancelAppointment = cancelAppointment;
