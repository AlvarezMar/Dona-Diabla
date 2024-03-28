import styles from './Appointment.module.css';
import options from '../assets/appointments/options.svg';
function Appointment({turnos, handleAppointmentCancel}){
    const {id, date, time, userId, status} = turnos;

    const today = new Date();
    const appointmentDay = new Date(date)

    const difference = appointmentDay - today;
    const hourDifference = difference / (1000 * 60 * 60);


    const handleClick = () => {
        if(hourDifference < 24){
            alert('Your appointment cannot be canceled within one day of its scheduled time.')
        } else if(window.confirm(
            `Would you like to cancel your appointment for ${date} at ${time}?`
            )){
            handleAppointmentCancel(id)
        }
    }

    const appointmentStatus = status === 'active' ? styles.active : styles.cancelled
    return <div>
        <div className={`${styles.container} ${styles.appointment}`}>
            <p className={styles.id}>{id}</p>
            <p className={styles.date}>{date}</p>
            <p className={styles.time}>{time}</p>

            <span>
                <p className={`${styles.status} ${appointmentStatus}`}>{status}</p>
                <img onClick={handleClick} src={options} alt="" />
            </span>
        </div>
    </div>
}

export default Appointment;