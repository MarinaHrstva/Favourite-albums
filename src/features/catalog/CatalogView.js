
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import { fetchCatalog } from "./catalogSlice";

import './CatalogView.css'

const CatalogView = () => {
	const data = useSelector((state) => state.catalog)

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCatalog())
	}, []);


	return (
		<>
			<h1>CATALOG</h1>
			<div className="catalog-container">
				{data.loading && <p>Loading...</p>}
				{data.error && <p>Error: {data.error}</p>}
				{data.data.length > 0 && data.data.map(a => <Card title={a.title} id={a.id} imgUrl={a.url} key={a.id} />)}

			</div>
		</>
	);
}

export default CatalogView;