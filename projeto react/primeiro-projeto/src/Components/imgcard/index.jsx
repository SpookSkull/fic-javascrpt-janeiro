import "./style.css"

import img1 from "../../assets/img1.jpg"

export default function ImgCard(props) {
    return (
        <div className="image-card">
            <img src={img1} />
            <p className="image-card-caption">
                {props.caption}
            </p>
            
        </div>
    )
}