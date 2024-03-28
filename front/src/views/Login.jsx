import styles from "./Login.module.css";
import done from "../assets/register/done.svg";

import axios from "axios";
import { validation } from "../helpers/loginValidation";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function Login(){

    const initialState = {
        username: '',
        password: ''
    }

    const [loginData, setLoginData] = useState(initialState);
    const [errors, setErrors] = useState(initialState);
    const [isClicked, setIsClicked] = useState(false);
    const [userNotFound, SetUserNotFound] = useState(false);
    const [alert, setAlert] = useState(false);
    const [logged, setLogged] = useState(false);

    const handleChange = (event) => {
        setLoginData({
            ...loginData, [event.target.name]: event.target.value
        });

        setErrors(validation({
            ...loginData, [event.target.name]: event.target.value
        }));
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsClicked(true);

        if(Object.keys(errors).length === 0){
            axios.post('http://localhost:3000/users/login', loginData)
            .then(response => response.data)
            .then(data => {
                dispatch(setUserData(data));
                setAlert(false);
                setLogged(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            })
            .catch(error => {
                if(error.response){
                    SetUserNotFound(true);
                    console.log(error.response);
                } else if(error.request){
                    setAlert(true);
                    console.log(error.request);
                }
            })
        }
    }

    return <>
        <div className={`${styles.container} ${styles.login}`}>
            {
                logged ? <div className={styles.logged}>
                    <img src={done} alt="" />
                    <h1>Welcome back,</h1>
                    <p>{loginData.username}!</p>
                </div> :
                <>
                    <h1>Login</h1>
                    <p className={styles.register}>Don't have an account? <Link to='/register'>Sign Up Here!</Link></p>

                    <form className={styles.login_form}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" onChange={handleChange} value={loginData.username} placeholder="AlvarezMar" />

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" onChange={handleChange} value={loginData.password} placeholder="••••••••" />

                        <div className={styles.error}>
                            
                            {
                                isClicked && Object.values(errors).length > 0 && <p>{Object.values(errors)[0]}</p>
                            }

                            {
                                Object.values(errors).length == 0 && userNotFound && <p>*Invalid username or password.</p>
                            }
                            <a className={styles.forgot} href="">Forgot Password?</a>

                        </div>

                        <button className={styles.btn} onClick={handleSubmit}>Sign In</button>
                    </form>
                </>
            }
        </div>

        {
            alert && <div className={`${styles.alert} ${styles.container}`}> 
                <p>Sorry, servers are currently unavailable. <br />Please try again later.</p>
            </div>
        }
    </>
}

export default Login;