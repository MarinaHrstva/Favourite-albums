import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../favourites/favouritesSlice'

import './Card.css'
import { useState } from 'react'


const Card = ({
    title,
    imgUrl,
    id,
}) => {
    const favAlbums = useSelector((state) => state.favourites.favourites);
    const dispatch = useDispatch()

    function onClickHandler() {
        dispatch(add({ title, imgUrl, id }))

    }

    return (
        <div className="card-wrapper">
            <div className="img-container">
                <img src={imgUrl} alt="album's image" />
            </div>
            <div className="title-container">
                <p>{title}</p>
                <button className='add-btn' onClick={onClickHandler}>Add</button>
            </div>
        </div>
    );
}

export default Card;