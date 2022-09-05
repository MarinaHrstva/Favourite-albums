import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { add, remove } from '../favourites/favouritesSlice'

import './Card.css'
import { useState } from 'react'


const Card = ({
    title,
    imgUrl,
    id
}) => {
    const [isFavourite, setIsFavourite] = useState(false)
    const dispatch = useDispatch()

    function onClickHandler() {
        if (isFavourite) {
            dispatch(remove(id))
        } else {
            dispatch(add({title,imgUrl,isFavourite,id}))
        }
        setIsFavourite(state => (
            !state
        ));

    }

    return (
        <div className="card-wrapper">
            <div className="img-container">
                <img src={imgUrl} alt="album's image" />
            </div>
            <div className="title-container">
                <p>{title}</p>
                <span className='icon' onClick={onClickHandler}><FontAwesomeIcon icon={isFavourite ? solidHeart : regularHeart} /></span>
            </div>
        </div>
    );
}

export default Card;