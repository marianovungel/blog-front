import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">register</span>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter you name..."/>
                <label>Email</label>
                <input className="registerInput" type="email" placeholder="Enter you email..."/>
                <label>Password</label>
                <input className="registerInput" type="email" placeholder="Enter you password..."/>
                <button className="registerButton">register</button>
            </form>
            <button className="registerRegisterButton">Login</button>
        </div>
    )
}