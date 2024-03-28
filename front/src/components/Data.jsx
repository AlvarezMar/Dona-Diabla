import styles from "./Data.module.css";
import profilePicture from "../assets/profile/defaultPP.svg"

import { useSelector } from "react-redux";

 function Data(){

    const userData = useSelector(state => state.actualUser.userData.user)

    return <div className={styles.data}>
        <div className={styles.data_main}>
            <img width='80rem' src={profilePicture} alt="" />
            <h1>{userData?.name}</h1>
        </div>

        <hr />
        <div className={styles.data_grid}>
            <div>
                <h3>Email:</h3>
                <p>{userData?.email}</p>
            </div>

            <div>
                <h3>ID credentials:</h3>
                <p>{userData?.nDni}</p>
            </div>
            <div>

                <h3>Birthday:</h3>
                <p>{userData?.birthdate}</p>
            </div>

        </div>

    </div>


}

export default Data;