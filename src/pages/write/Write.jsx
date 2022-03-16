import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img src="https://www2.pictures.zimbio.com/gi/Maria+Borges+vW5IYuOXLxZm.jpg" alt="" className="writeImg" />
          <form className="writeForm">
              <div className="writeFormGroup">
                  <label htmlFor="fileInput">
                    <i class="writeIcon fas fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}}/>
                  <input type="text" placeholder="Title" autoFocus={true}/>
              </div>
              <div className="writeFormGroup">
                  <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                  <button className="writeSubmit">Publish</button>
              </div>
            </form>  
        </div>
    )
}
