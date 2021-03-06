import { useRef, useContext } from "react";
import api from '../../api'
import { Context } from "../../Context/Context";
import "./login.css"
import { Link } from "react-router-dom"
import Vanilla from 'react-vanilla-tilt'


export default function Login() {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch } = useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try{
            const res = await api.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"})
        }
    }
    return (
        <div className="login">
            <Vanilla className='vanillaLogin'>
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="Enter you Username..." ref={userRef} />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter you password..." ref={passwordRef} />
                <button className="loginButton" type="submit">Login</button>
            </form>
            </Vanilla>
            <Link to='/register'>
                <button className="loginRegisterButton">Register</button>
            </Link>
        </div>
    )
}
