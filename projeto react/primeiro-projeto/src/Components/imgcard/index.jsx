import "./style.css"
import img1 from "../../assets/img1.jpg"

export default function ImgCard(props) {
    return (
        <div className="image-card">
            <img src={props.newimg} />
            <p className="image-card-caption">
                {props.caption}
            </p>
            
        </div>
    )
}