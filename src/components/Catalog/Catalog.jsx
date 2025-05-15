import "./Catalog.css";
import Product from "../Product/Product";
import DataService, { mock_catalog, mock_categories } from "../../services/DataService";
import { useEffect, useState } from "react";

function Catalog() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allFilters, setAllFilters] = useState([]);

  async function loadProducts() {
    let allProds = await DataService.getCatalog();
    setAllProducts(allProds);
    let allFilts = await DataService.getCategories();
    setAllFilters(allFilts);
  }

  useEffect(function() {
    loadProducts();
  }, []);

  const toggleCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = allProducts.filter(prod => 
    selectedCategories.includes(prod.category)
  );

  return (
    <div className="catalog main-container">
      <div className="gray-container">
        <div className="header-row">
          <div className="shop-image inner-container">
            <img src="/images/Shop.webp" alt="Shop banner" />
          </div>
          <div className="filters inner-container">
            {allFilters.map(({category, image}) => (
              <div
                key={category}
                className={`filter-image ${selectedCategories.includes(category) ? "active" : ""}`}
                onClick={() => toggleCategory(category)}
              >
                <img src={image} alt={category} />
                {/* <span className="category-name">{category}</span> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      { filteredProducts.length > 0 ? 
      <div className="product-content gray-container">
          {filteredProducts.map(prod => <Product key={prod.title} data={prod} />)}
       
      </div>
      : <div className="catalog product-content gray-container">
      <h3>There are no products yet, select a booster pack to start shopping!</h3>
   
  </div>}
    </div>
  );
}

export default Catalog;