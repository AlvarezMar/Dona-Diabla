import loading from "../assets/underConstruction/loading.svg"
import styles from "./UnderConstruction.module.css"

function UnderConstruction(){

    return <div className={`${styles.container} ${styles.underConstruction}`}>
        <img src={loading} alt="" />
        <h1>Our Website Is <span>Almost Ready.</span></h1>
        <p>Get ready to embark on a culinary journey with us! Stay tuned while we cook up something delicious for you.</p>

    </div>
}

export default UnderConstruction;