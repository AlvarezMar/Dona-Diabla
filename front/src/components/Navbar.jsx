import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import search from '../assets/navbar/search.svg';
import cart from '../assets/navbar/cart.svg';
import profile from '../assets/navbar/profile.svg';

import { Link } from 'react-router-dom';
import InvitedUser from './InvitedUser';
import { useSelector } from 'react-redux';

function Navbar(){

    const logged = useSelector(user => user.actualUser.userData.login);

    return <div>
        <div className={`${styles.container} ${styles.navbar}`}>
            <div className={styles.navbar_main}>
                <Link to='/'><img width='150rem' src={logo} alt="" /></Link>
    
                <Link to='/'>Home</Link>
                <Link to='/underConstruction'>About</Link>
                <Link to='/underConstruction'>Menu</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div className={styles.navbar_login}>
                {
                    logged ? 
                        <Link to='/profile/newAppointment'>
                            <button className={styles.btn}>Book your table </button>
                        </Link> :
                        <Link to='/login'>
                            <button className={styles.btn}>Book your table </button>
                        </Link>
                }

                <Link to='/underConstruction'>
                    <img src={search} alt="" />
                </Link>
                
                <Link to='/underConstruction'>
                    <img src={cart} alt="" />
                </Link>

                {/* <Link to='/login'>
                    <img src={profile} alt="" />
                </Link> */}

                <InvitedUser/>


            </div>
        </div>
    </div>
}

export default Navbar;