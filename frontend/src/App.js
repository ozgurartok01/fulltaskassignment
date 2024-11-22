import React, { useEffect, useState } from "react";
import ProductCarousel from "./components/ProductCarousel";
import FilterOptions from "./components/FilterOptions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import './font.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    const query = new URLSearchParams(filters).toString();
    fetch(`${API_URL}/api/products?${query}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        const transformedProducts = data.map((product) => ({
          ...product,
          popularity: (product.popularityScore / 20).toFixed(1), // Convert to a scale of 1 to 5
        }));
        setProducts(transformedProducts);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [filters]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      {products.length > 0 ? (
        <ProductCarousel products={products} />
      ) : (
        <p>Loading products...</p>
      )}
      <FilterOptions onFilter={handleFilter} />
    </div>
  );
};

export default App;
