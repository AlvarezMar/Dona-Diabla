import styles from "./Profile.module.css"
import MyAppointments from "./MyAppointments";
import { Outlet } from "react-router-dom";
import ProfileMenu from "../components/ProfileMenu";

function Profile(){

    return <div className={`${styles.container} ${styles.profile}`}>
        <h1 className={styles.profile_heading}>Profile</h1>
        <div className={styles.profile_menu}>
            <div>
                <ProfileMenu/>
            </div>

            <div>
                <div>
                    <Outlet/>
                </div>
                
                <div className={styles.appointments}>
                    <MyAppointments/>
                </div>
            </div>
        </div>  
    </div>
}

export default Profile;