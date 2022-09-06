
import CatalogView from './features/catalog/CatalogView';
import FavouritesView from './features/favourites/FavouritesView';

import './App.css';

function App() {
	return (
		<div className="App">
			<CatalogView />
			<FavouritesView />
		</div>
	);
}

export default App;
