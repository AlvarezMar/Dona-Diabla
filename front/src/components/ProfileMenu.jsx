import { Link } from 'react-router-dom';
import styles from './ProfileMenu.module.css'
import { useDispatch } from 'react-redux';

function ProfileMenu(){

    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(setUserData({}))
        dispatch(setUserAppointments([]))
    }

    return <div className={styles.profile}>
        <Link to='/profile/myData'>My Data</Link>
        <Link to='/profile/newAppointment'>New Appointment</Link>
        <Link>My Lists</Link>
        <Link>My Favorites</Link>
        <Link>My Payment Methods</Link>
        <Link to='/' onClick={handleLogOut}>Log Out</Link>
    </div>
}

export default ProfileMenu;