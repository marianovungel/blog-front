import { Link } from "react-router-dom"
import "./post.css"

export default function Post({post}) {
    const URLImg = "http://localhost:5000/images/";

    return (
        <div className="post">
            {post.photo && (
                <img className="imgPost" src={URLImg + post.photo} alt="foto do sidebar"/>
            )}
              {/* (<img className="imgPost" src="https://i.pinimg.com/236x/1d/ed/55/1ded551e08dcf538880979ae5fb3fea1.jpg" alt="foto do sidebar"/>) */}
        
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Photo</span>
                </div>
                <Link className="titleColor" to={`/post/${post._id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAd).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    )
}
