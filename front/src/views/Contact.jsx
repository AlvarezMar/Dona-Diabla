import styles from './Contact.module.css';
import store from '../assets/contact/store.svg';
import phone from '../assets/contact/phone.svg';

function Contact(){
    
    return <div className={`${styles.container} ${styles.contact}`}>
        <h1>Contact Us</h1>
        <div className={styles.contact_info}>
            <div className={styles.contact_cards}>
                <img src={store} alt="" />
                <h3>Our Location</h3>
                <p>Presa Falcón 243, Granada, Miguel Hidalgo, 11529 Ciudad de México, CDMX</p>
            </div>

            <div className={styles.contact_cards}>
                <img src={phone} alt="" />
                <h3>Phone Number</h3>
                <p>+52 55 71 50 50</p>
            </div>
        </div>

        <form className={styles.form}>
            <div className={styles.form_fields}>
                <div className={styles.form_field}>
                    <label>Name:</label>
                    <input type="text" placeholder='Juan Alvarez' />
                </div>
                <div className={styles.form_field}>
                    <label>Email:</label>
                    <input type="text" placeholder='ejemplo@gmail.com' />
                </div>
            </div>

            <label>Message:</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Hello, I'm interested in getting more information about your services."></textarea>

            <button className={styles.btn}>Send Message</button>
        </form>
    </div>

}

export default Contact;