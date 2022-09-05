
import './App.css';
import CatalogView from './features/catalog/CatalogView';
import FavouritesView from './features/favourites/FavouritesView';

function App() {
	return (
		<div className="App">
			<CatalogView />
			<FavouritesView />
		</div>
	);
}

export default App;
