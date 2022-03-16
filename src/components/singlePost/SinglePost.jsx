import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://www2.pictures.zimbio.com/gi/Maria+Borges+vW5IYuOXLxZm.jpg" alt="foto" className="singlePostImg"/>
                <h1 className="siglePostTitle">
                    lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Safak</b>
                    </span>
                    <span className="singlePosDate">
                        1 hour ago
                    </span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    it. Inventore illo facere a veritatis placeat nobis 
                    caecati optio, tempora adipisci! Rerum tenetur 
                    repellendus assumenda consequatu
                    tempora quidem possimus molestias! Officia, incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    it. Inventore illo facere a veritatis placeat nobis 
                    caecati optio, tempora adipisci! Rerum tenetur repellendus assumenda consequatu
                    tempora quidem possimus molestias! Officia, incidunt.Lorem ipsum dolor sit amet consectetur, adipisicing
                    it. Inventore illo facere a veritatis placeat nobis 
                    caecati optio, tempora adipisci! Rerum tenetur repellendus assumenda consequatu
                    tempora quidem possimus molestias! Officia, incidunt.
                </p>
            </div>
        </div>
    )
}
