import Card from "../card/Card";

import './FavouritesView.css'

const FavouritesView = () => {
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