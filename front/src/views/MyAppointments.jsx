import { useEffect, useState } from "react";
import axios from 'axios';

import styles from './MyAppointments.module.css'
import Appointment from "../components/Appointment";
import no_appointments from '../assets/appointments/no_appointments.svg';
import {misTurnos} from "../helpers/myAppointments"
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../redux/userSlice";

function myAppointments(){

    // const appointmentHelper = misTurnos;
    // console.log(appointmentHelper);
    // const [turnos, setTurnos] = useState(appointmentHelper) 


    const actualUserId = useSelector(state => state.actualUser?.userData?.user?.id);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + actualUserId)
        .then(response => response.data.appointments)
        .then(data => dispatch(setUserAppointments(data)))
        .catch(error => console.error('Error Conection:', error.message))
    },[])

    const handleAppointmentCancel = (appointmentId) => {
        axios.put('http://localhost:3000/appointments/cancel/' + appointmentId)
        .then(response => response.data)
        .then(data => {
            axios.get('http://localhost:3000/users/' + actualUserId)
            .then(response => response.data.appointments)
            .then(data => dispatch(setUserAppointments(data)))
            .catch(error => console.error('Error Conection:', error.message))
        })
        .catch(error => console.error('Error Conection:', error.message))
    }

    const appointments = useSelector(state => state.actualUser.userAppointments);

    return <div className={`${styles.container} ${styles.myAppointments}`}>
        <h1>My Appointments</h1>

        <div className={styles.appointment_list}>
            <div className={styles.appointment_fields}>
                <h3>Id</h3>
                <h3>Date</h3>
                <h3>Time</h3>
                <h3>Status</h3>
            </div>
            {
                !appointments[0] ?
                <>
                    <img src={no_appointments} alt="" />
                    <h2 className={styles.no_appointment}>No Appointments!</h2>
                </> :
                appointments.slice().reverse().map((turno, index) => (
                    <Appointment key={index} turnos = {turno} handleAppointmentCancel={handleAppointmentCancel}/>
                    
                    ))
            }
        </div>
        
    </div>

}

export default myAppointments;
