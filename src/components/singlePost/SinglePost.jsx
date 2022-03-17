import { useLocation } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { Context } from "../../Context/Context"
import api from "../../api"
import "./singlePost.css"
import { Link } from "react-router-dom"

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [uploadMode, setUploadMode] = useState(false)

    useEffect(()=>{
        const getPost = async ()=>{
            const res = await api.get("/posts/"+path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
        }
        getPost()
    }, [path])

    const URLImg = "http://localhost:5000/images/";
    const {user} = useContext(Context);

    const handleDelete = async () =>{
        try{
            await api.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.replace("/");
        }catch(err){
            console.log(err)
        }
    }

    const hendleUpdate = async () =>{
        try{
            await api.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            // window.location.reload();
            setUploadMode(false);
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            {post.photo && (
            <img className="imgPost" src={URLImg + post.photo} alt="foto do sidebar"/>
            )}
            {uploadMode ? (<input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} className="siglePostTitleInput"/>) : (
            <h1 className="siglePostTitle">
                        {title}
                        {post.username === user?.username && (
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={()=>setUploadMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
            )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: 
                        <Link className="authorColor" to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePosDate">
                        {new Date(post.createdAd).toDateString()}
                    </span>
                </div>
                {uploadMode ? (<textarea value={desc} onChange={(e)=>setDesc(e.target.value)} className="singlePostDescInput"/>) : (
                    <p className="singlePostDesc">{desc}</p>
                )}
                {uploadMode && (
                    <button className="singlePostButton" onClick={hendleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}
