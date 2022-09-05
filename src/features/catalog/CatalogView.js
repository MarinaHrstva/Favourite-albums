
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import { fetchCatalog } from "./catalogSlice";

import './CatalogView.css'

const CatalogView = () => {
  const data = useSelector((state) => state.catalog)

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCatalog())
  }, []);
  
  console.log(data);
  
  return (
    <>
      <h1>Catalog</h1>
      <div className="catalog-container">
        {data.loading && <p>Loading...</p>}
        {data.error && <p>Error: {data.error}</p>}
        {data.data.length>0 && data.data.map(a=><Card title={a.title} imgUrl={a.url} key={a.id}/>)}
            
      </div>
    </>
  );
}

export default CatalogView;