import { useSelector } from "react-redux";
import Card from "../card/Card";

import './FavouritesView.css'

const FavouritesView = () => {
    const data =useSelector((state)=>state.favourites);
console.log(data);
    return (
        <>
            <h2>Favourites</h2>
            <div className="favourites-container">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default FavouritesView;