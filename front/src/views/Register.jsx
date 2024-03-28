import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./Register.module.css";
import { validation } from "../helpers/registerValidation";

import done from "../assets/register/done.svg";
import { Link, useNavigate } from "react-router-dom";

function Register(){

    const initialState = {
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: '',
        confirmPassword: ''
    }

    const [errors, setErrors] = useState(initialState);
    const [registerData, setRegisterData] = useState(initialState);
    const [isClicked, setIsClicked] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleChange = (event) => {
        setRegisterData({
            ...registerData, [event.target.name]: event.target.value 
        });

        setErrors(validation({
            ...registerData, [event.target.name]: event.target.value 
        }));
    }

    useEffect(() => {
        if (isClicked) {
            if (Object.keys(errors).length === 0) {
                console.log('All fields are valid.'); 
            } else {
                console.log('Validation failed. Please check all fields.'); 
            }
        }
    }, [isClicked, errors]);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsClicked(true);

        if(Object.keys(errors).length === 0){
            axios.post('http://localhost:3000/users/register', registerData)
            .then(response => {
                console.log(response.data);
                setRegisterData(initialState);
                setAlert(false);
                setRegistered(true);

                setTimeout(() => {
                    navigate('/login')
                    
                }, 1500);
            })
            .catch(error => {
                if(error.response){
                    console.log(error.response);
                } else if (error.request){
                    setAlert(true);
                    console.log(error.request);
                }
            })
        }
    }

    return <>
        <div className={`${styles.container} ${styles.register} ${!registered && styles.display}`}>
            {
                registered ? <div className={styles.registered}>
                    <img src={done} alt="" />
                    <h1>You're all set!</h1>
                    <p>Welcome to <span>Doña Diabla</span></p>
                </div> :
                <>
                    <div className={styles.register_img}>
                        <img className={styles.register_hero} src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_fill,fl_lossy/hellofresh_s3/image/612f9b601fd550178b663597-df1c5756.jpg" alt="" />

                    </div>
                    <div>
                        <h1>Register</h1>
                        <p className={styles.login}>Already have an account? <Link to='/login'>Sign In Here!</Link></p>

                        <form className={styles.register_form} onSubmit={handleSubmit}>

                            <div className={styles.field}>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" value={registerData.name} onChange={handleChange} placeholder="Juan Alvarez"/>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" value={registerData.email} onChange={handleChange} placeholder="ejemplo@gmail.com"/>
                            </div>

                            <div className={styles.field_container}>
                                <div className={styles.field}>
                                    <label htmlFor="birthdate">Birthday:</label>
                                    <input type="date" id="birthdate" name="birthdate" value={registerData.birthdate} onChange={handleChange}/>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="nDni">ID Number:</label>
                                    <input type="text" id="nDni" name="nDni" value={registerData.nDni} onChange={handleChange} placeholder="12345678"/>
                                </div>

                            </div>

                            <hr />
                            
                            <div className={styles.field}>
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="username" name="username" value={registerData.username} onChange={handleChange} placeholder="AlvarezMar" />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" value={registerData.password} onChange={handleChange} placeholder="••••••••" />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" value={registerData.confirmPassword} onChange={handleChange} placeholder="••••••••" />

                            </div>

                            <div className={styles.error}>
                                {
                                    isClicked && Object.values(errors).length > 0 && <p className={styles.warning}>{Object.values(errors)[0]}</p>
                                }
                            </div>

                            <button className={styles.btn}>Sign Up</button>

                        </form>
                        
                    </div>
                </>                
            }
        </div>
        {
            alert && <div className={`${styles.container} ${styles.alert}`}>
                <p>Sorry, servers are currently unavailable. <br />Please try again later.</p>
            </div>
        }
    </>
    

}

export default Register;