import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { remove } from '../favourites/favouritesSlice'

import './FavCard.css'


const FavCard = ({
    id,
    title,
    imgUrl
}) => {
    const dispatch = useDispatch();

    function onClickHandler() {
        dispatch(remove(id))
    }

    console.log(imgUrl)

    return (

        <div className="card-wrapper">
            <div className="img-container">
                <img src={imgUrl} alt="album's image" />
            </div>
            <div className="title-container">
                <p>{title}</p>
                {/* <span className='icon' onClick={onClickHandler}><FontAwesomeIcon icon={solidHeart} /></span> */}
            </div>
        </div>

    );
}

export default FavCard;