import Sidebar from "../../components/sidebar/Sidebar"
import "./setting.css"
import { useContext, useState } from "react";
import {Context} from "../../Context/Context"
import api from "../../api"

export default function Setting() {
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const { user, dispatch } = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updateUser = {
            userId: user._id,
            username,
            email,
            password,
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updateUser.photo = filename;
            try{
                await api.post("/upload", data)
            }catch(err){}
        }
        try{
            const res = await api.put("/users/" + user._id, updateUser)
            dispatch({type: "UPDATE_SUCCESS", payload: res.data })
            setSuccess(false)
        }catch(err){
            dispatch({type: "UPDATE_FAILURE"})
        }
    }

    return (

        <div className="setting">
            <div className="settingswrapper">
                <div className="settingsTitle">
                    <span className="settingsUdateTitle">Update your Account</span>
                    <span className="settingsUdateTitle">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className="settingspp">
                        
                        {file ? (
                            <img className="img"src={file && URL.createObjectURL(file)} alt="" />
                        ) : (<i style={{width:"100px", height:"50px", marginLeft:"20px"}} class="fa-solid fa-user"></i>)}
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                         <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                    <input text="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
                    <label>E-mail</label>
                    <input text="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input text="password" placeholder="*********" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="settingsSubmit" type="submit">Update</button>
                    {success &&  <span style={{color: "green", textAlign: "center", marginTop: "30px"}}>Perfil atualizado com sucesso!</span>}
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
