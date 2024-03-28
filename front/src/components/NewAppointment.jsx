import styles from "./NewAppointment.module.css";
import done from "../assets/register/done.svg";

import axios from "axios";
import { validation } from "../helpers/appointmentValidation";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments, setUserData } from "../redux/userSlice";

function NewAppointment(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logged = useSelector(state => state.actualUser.userData.user?.login);


    const initialState = {
        date: '',
        time: '',
        userId: useSelector(state => state.actualUser.userData.user?.id)
    }

    const [appointmentData, setAppointmentData] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const [isClicked, setIsClicked] = useState(false);
    const [created, setCreated] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleChange = (event) => {
        setAppointmentData({
            ...appointmentData, [event.target.name]: event.target.value
        });

        setErrors(validation({
            ...appointmentData, [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsClicked(true);

        if(Object.keys(errors).length === 0){
            axios.post('http://localhost:3000/appointments/schedule', appointmentData)
            .then(response => response.data)
            .then(data => {
                console.log(data);
                setAlert(false);
                setCreated(true);
                setAppointmentData(initialState)
                setIsClicked(false)
                setTimeout(() => {
                    setCreated(false);
                }, 2000);
            })
            .catch(error => {
                setAlert(true);
                console.log(error.request);
            })
        }
    }

    const hoy = new Date();
    const maxFecha = new Date();
    maxFecha.setMonth(maxFecha.getMonth() + 2);

    const hoyFormato = hoy.toISOString().split('T')[0];
    const maxFechaFormato = maxFecha.toISOString().split('T')[0];

    return <>
        <div className={`${styles.container} ${styles.newAppointment}`}>
            {
                created ? <div className={styles.appointmentCreated}>
                            <img src={done} alt="" />
                            <h1>Appointment Created!</h1>
                            <p>{`for: ${appointmentData.date} at ${appointmentData.time}`}!</p>
                        </div> :
                        <>
                            <h1>New Appointment</h1>
                            <p className={styles.legend}>Select a date and time to book your table at <span>Doña Diabla!</span></p>

                            <form className={styles.appointment_form}>
                                <div className={styles.appointment_form_inputs}>
                                    <div>
                                        <label htmlFor="date">Date:</label>
                                        <input type="date" id="date" name="date" min={hoyFormato} max={maxFechaFormato} onChange={handleChange} value={appointmentData.date}/>
                                    </div>

                                    <div>
                                        <label htmlFor="time">Time:</label>
                                        <input type="time" id="time" name="time" onChange={handleChange} value={appointmentData.time}/>
                                    </div>

                                </div>

                                <div className={styles.error}>
                                    
                                    {
                                        isClicked && Object.values(errors).length > 0 && <p>{Object.values(errors)[0]}</p>
                                    }

                                </div>

                                <button className={styles.btn} onClick={handleSubmit}>Create Appointment</button>
                            </form>
                        </>
                }
        </div>

        {
            alert && <div className={`${styles.alert} ${styles.container}`}> 
                <p>Sorry, servers are currently unavailable. <br />Please try again later.</p>
            </div>
        }
    </>
}


export default NewAppointment;