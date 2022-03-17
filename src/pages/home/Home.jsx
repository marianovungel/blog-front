import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import "./home.css"
import api from '../../api'
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Home() {
    const [postsa, setPostsa] = useState([])
    const {search} = useLocation()

    useEffect(()=>{
        const fetchPost = async ()=>{
            const res = await api.get("/posts"+search)
            setPostsa(res.data)
        }
        fetchPost();
    }, [search])
    return (
        <>
            <Header/>
        <div className="home">
            <Posts postsa={postsa} />
            <Sidebar/>
        </div>
        </>
    )
}
