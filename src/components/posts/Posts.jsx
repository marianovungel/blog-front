import Post from "../post/Post"
import "./posts.css"

export default function Posts({postsa}) {
    console.log(postsa)
    return (
        <div className="postss">
            {postsa.map((p) => (
                <Post post={p} />
            ))}
        </div>
    )
}
