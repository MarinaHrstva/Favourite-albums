import { useSelector } from "react-redux";
import FavCard from "../favCard/FavCard";

import './FavouritesView.css'

const FavouritesView = () => {

    const data = useSelector((state) => state.favourites);
    
    return (
        <>
            <h2>FAVOURITES</h2>
            <div className="favourites-container">
                {data.favourites.length === 0 && <p>No albums yet!</p>}
                {data.favourites.length > 0 && data.favourites.map(f => <FavCard title={f.title} id={f.id} imgUrl={f.imgUrl} key={f.id+'f'} />)}
            </div>
        </>
    );
}

export default FavouritesView;