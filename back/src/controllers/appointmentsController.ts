//* Definición de controladores para manejar las operaciones de 'appointments'.

import { Request, Response } from "express";
import { allAppointments, appointmentById, cancelAppointments, createAppointment } from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment";

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const appointments: Appointment[] = await allAppointments();
        res.status(200).json(appointments);

    } catch (error: any) {
        res.status(404).json({message: error.message});
    }
}

export const getAppointment = async (req: Request, res: Response) => {
    try {
        const appointment: Appointment = await appointmentById(Number(req.params.id)); 
        res.status(200).json(appointment);
        
    } catch (error: any) {
        res.status(404).json({message: error.message});
    }
}

export const newAppointment = async (req: Request, res: Response) => {
    const { userId, date, time } = req.body;
    try {
        const appointment: Appointment  = await createAppointment(userId, date, time);
        res.status(201).json(appointment)
        
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}

export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const appointment = await cancelAppointments(Number(req.params.id));
        res.status(200).json(appointment);
        
    } catch (error: any) {
        res.status(404).json({message: error.message});
        
    }
}