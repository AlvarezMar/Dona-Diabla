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
exports.cancelAppointments = exports.createAppointment = exports.appointmentById = exports.allAppointments = void 0;
const data_source_1 = require("../config/data-source");
const Appointment_1 = require("../entities/Appointment");
const allAppointments = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).find();
    return appointments;
});
exports.allAppointments = allAppointments;
const appointmentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).findOneBy({ id });
    if (!appointment)
        throw Error('Turno no encontrado.');
    return appointment;
});
exports.appointmentById = appointmentById;
const createAppointment = (userId, date, time) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).create({
        date,
        time,
        userId,
        status: 'active'
    });
    const results = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).save(appointment);
    return results;
});
exports.createAppointment = createAppointment;
var hoy = new Date();
var hoyFormato = hoy.toISOString().split('T')[0];
console.log(hoyFormato);
const cancelAppointments = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).update({ id }, { status: 'cancelled' });
    console.log(appointment);
    if (!appointment.affected)
        throw Error('Turno no encontrado');
    return 'Turno cancelado.';
});
exports.cancelAppointments = cancelAppointments;
