import styles from "./Header.module.css";
import header from "../assets/header/header.png";

import { Link } from "react-router-dom";

function Header(){
    return <div className={styles.container}>
        <div className={styles.header}>
            <div>
                <h1>Experience Culinary Excellence. Where Taste Meets Tradition.</h1>

                <p>Nestled in the heart of Mexico City, <span>Doña Diabla</span> is a sanctuary for food enthusiasts seeking an unforgettable dining experience. Our menu is a celebration of flavors, drawing inspiration from cuisines around the globe.</p>

                <Link to='/underConstruction'><button className={styles.btn}>Discover Menu</button></Link>
            </div>

            <div>
                <img src={header} alt="" />
            </div>

        </div>

    </div>
}

export default Header;