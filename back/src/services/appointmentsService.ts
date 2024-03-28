import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

// const turnos: IAppointment[] = [
//     {
//     id: 1,
//     date: '17/01/00',
//     time: '15:00',
//     userId: 2,
//     status: 'active'
//     }
// ];

export const allAppointments = async (): Promise<Appointment[]> => {
    const appointments: Appointment[] = await AppDataSource.getRepository(Appointment).find()
    return appointments;
}

export const appointmentById = async (id: number): Promise<Appointment> => {
    // const appointment = turnos.find(turno => turno.id === id);

    const appointment: Appointment | null = await AppDataSource.getRepository(Appointment).findOneBy({ id })

    if(!appointment) throw Error('Turno no encontrado.');
    return appointment;
}

// let id = 1;

export const createAppointment = async (userId: number, date: string, time: string): Promise<Appointment> => {
    const appointment: Appointment = AppDataSource.getRepository(Appointment).create({
        // id,
        date,
        time,
        userId,
        status: 'active' as 'active'
    });
    const results = AppDataSource.getRepository(Appointment).save(appointment);
    // id++;
    return results;
}

var hoy = new Date();
var hoyFormato = hoy.toISOString().split('T')[0];

console.log(hoyFormato);

export const cancelAppointments = async (id: number): Promise<string> => {
    // const appointment = turnos.find(turno => turno.id === id);

  
    

    const appointment = await AppDataSource.getRepository(Appointment).update({ id }, {status: 'cancelled'})
    console.log(appointment);
    

    if(!appointment.affected) throw Error('Turno no encontrado');
    // turnos.splice(turnos.indexOf(turnoCancelado), 1);
    return 'Turno cancelado.'
}
