
import Card from "../card/Card";

import './CatalogView.css'

const CatalogView = () => {

  return (
    <>
      <h1>Catalog</h1>
      <div className="catalog-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
    </>
  );
}

export default CatalogView;