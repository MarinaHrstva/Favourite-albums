import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import  {faHeart as regularHeart }   from '@fortawesome/free-regular-svg-icons'


const Card = ({
    title,
    imgUrl,
}) => {

    console.log(imgUrl);
    return (
        <div className="card-wrapper">
            <div className="img-container">
                <img src={imgUrl} alt="album's image" />
            </div>
            <div className="title-container">
                <p>{title}</p>
                <FontAwesomeIcon icon={regularHeart}/>
            </div>
        </div>
    );
}

export default Card;