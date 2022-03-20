import { useState, useContext } from "react"
import api from "../../api"
import {Context} from "../../Context/Context"
import "./write.css"

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newProst = {
            username: user.username,
            title,
            desc,
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            newProst.photo = filename;
            try{
                const newdata = await api.post('/upload', data)
                console.log(newdata)
            }catch(err){}
        }

        try{
            const res = await api.post("/posts", newProst)
            window.location.replace("/post/"+res.data.post._id)

            console.log(res.data.post._id)
        }catch(err){}
    }

    return (
        <div className="write">
            {file && (
                <img src={URL.createObjectURL(file)}alt="" className="writeImg" />
            )}
          <form className="writeForm" onSubmit={handleSubmit}>
              <div className="writeFormGroup">
                  <label htmlFor="fileInput">
                    <i class="writeIcon fas fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
                  <input type="text" className="writetitle" placeholder="Title" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
              </div>
              <div className="writeFormGroup">
                  <textarea placeholder="Tell your story..." type="text" className="writeInput writeText" onChange={e=>setDesc(e.target.value)}></textarea>
                  <button className="writeSubmit" type="submit">Publish</button>
              </div>
            </form>  
        </div>
    )
}
