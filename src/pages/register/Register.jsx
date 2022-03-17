import "./register.css"
import { useState } from "react"
import api from '../../api'

export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError(false)
        try{
            const res = await api.post("/auth/register", {
                username,
                email,
                password,
            })
            res.data && window.location.replace("/login")
            console.log(res)
        }catch(err){
            setError(true)
        }
    }

    return (
        <div className="register">
            {error && (<div className="banner"> Verifica os seus Dados se estão Corretos!</div>)}
            <span className="registerTitle">register</span>
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter you name..." onChange={e=>setUsername(e.target.value)} />
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="Enter you email..." onChange={e=>setEmail(e.target.value)} />
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter you password..." onChange={e=>setPassword(e.target.value)} />
                <button className="registerButton" type="submit" >register</button>
            </form>
            <button className="registerRegisterButton">Login</button>
        </div>
    )
}