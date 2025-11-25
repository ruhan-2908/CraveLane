import React, {useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken} = useContext(StoreContext)
    const [currentState, setCurrentState] = useState("Sign Up")
    const [data,setData]  = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler =(e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setData(data=>({...data,[name]:value}))
    }

    //login or register 
    const onLogin = async (e)=>{
        e.preventDefault();
        let newUrl = url;
        if ( currentState === "Login")
        {
            newUrl += '/api/user/login'
        }else
        {
            newUrl += '/api/user/register'
        }
        const response = await axios.post(newUrl,data);
        if ( response.data.success )
        {
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }
        else
        {
            alert(response.data.message)
        }
    }
    return (
        <div className='login-popup'>
            {/* for Login and Register - both - onLogin */}
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> :
                        <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
                    <input type="email" placeholder='Your Email' onChange={onChangeHandler} value={data.email} name='email' required />
                    <input onChange={onChangeHandler} name='password' value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create A New Account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
                    : <p>Already Have An Account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
