import styles from './InvitedUser.module.css'
import profile from "../assets/navbar/profile.svg"
import defaultPP from '../assets/profile/defaultPP.svg'

import { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function InvitedUser(){

    let menuTimer;
    const [menu, setMenu] = useState(false);

    const handleMouseEnter = () => {
        clearTimeout(menuTimer)
        setMenu(true);
    };

    const handleMouseLeave = () => {
        menuTimer = setTimeout(() => {
            setMenu(false);
        }, 200);
    };

    const handleMouseReturn = () => {
        clearTimeout(menuTimer)
    }

    const logged = useSelector(state => state.actualUser.userData.login);

    return <div className={`${styles.invitedUser} ${styles.container}`}>
        {
            logged ? <Link to='/profile/myData'><img src={defaultPP} width='40px' alt="" /></Link> :
            <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseReturn} src={profile} alt="" />
        }
        {
            !logged && menu && <div className={styles.invitedUser_menu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <span className={styles.triangle}></span>
                <Link to='/login'><p>Login</p></Link>
                <Link to='/register'><p>Register</p></Link>
                <p>Options</p>
            </div>
        }

    </div>
}

export default InvitedUser;