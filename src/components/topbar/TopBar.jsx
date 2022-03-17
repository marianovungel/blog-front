import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Context} from '../../Context/Context'

export default function TopBar() {

    const {user, dispatch} = useContext(Context)
    console.log(user)

    const handleLogout = (e) =>{
        e.preventDefault();
        dispatch({type:"LOGOUT"})
    }
    const URLImg = "http://localhost:5000/images/";
    return (
        <div className="top">
            <div className="topLeft">
            <i className=" topIcon fab fa-facebook-square"></i>
            <i className=" topIcon fab fa-twitter-square"></i>
            <i className=" topIcon fab fa-pinterest-square"></i>
            <i className=" topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to='/'>HOME</Link></li>
                    <li className="topListItem"><Link to=''>ABOUT</Link></li>
                    <li className="topListItem"><Link to=''>CONTACT</Link></li>
                    <li className="topListItem"><Link to='/write'>WRITE</Link></li>
                    <li className="topListItem" onClick={handleLogout}><Link to='/login'>{user && "LOGOUT"}</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <Link to="/settings">
                    {user.photo ? (
                    <img className ="topImg" src={URLImg + user.photo} alt="foto"/>) : (
                    <i style={{width:"100px",marginLeft:"20px"}} class="fa-solid fa-user"></i>)}
                
                </Link>
                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
