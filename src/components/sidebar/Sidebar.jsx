import { useEffect, useState } from "react"
import "./sidebar.css"
import api from '../../api'
import { Link } from "react-router-dom"

export default function Sidebar() {
    const [cat, setCat] = useState([])

    useEffect(()=>{
        const getCat = async ()=>{
            const res = await api.get("/categories")
            console.log(res.data)
            setCat(res.data)
        }
        getCat()
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT ME</span>
                <img src="https://i.pinimg.com/236x/42/80/a7/4280a717cf2d8025bdc771edf0768eab.jpg" alt="borgrs" className="postImg" />
                <p className="pSidibar"> Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Quis laboriosam dolores blanditiis possimus aut nisi commodi ipsum.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle"> CATEGORIES</span>
            <ul className="sidebarList">
            {cat.map((c)=>(
                <Link className="catColor" to={`/?cat=${c.name}`}>
                    <li className="sidebarListItem">{c.name}</li>
                </Link>
            ))}
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle"> FOLLOW US</span>
            <div className="sidebarSocial">
                <i className=" sidebarIcon fab fa-facebook-square"></i>
                <i className=" sidebarIcon fab fa-twitter-square"></i>
                <i className=" sidebarIcon fab fa-pinterest-square"></i>
                <i className=" sidebarIcon fab fa-instagram-square"></i>
            </div>

            </div>
        </div>
    )
}
