import React, { useState } from "react";

const FilterOptions = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPopularity, setMinPopularity] = useState("");
  const [maxPopularity, setMaxPopularity] = useState("");

  const handleFilter = () => {
    onFilter({ minPrice, maxPrice, minPopularity, maxPopularity });
  };

  return (
    <div className="filter-options">
      <h3>Filter Products</h3>
      <div>
        <label>Min Price:</label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Max Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Min Popularity:</label>
        <input
          type="number"
          value={minPopularity}
          onChange={(e) => setMinPopularity(e.target.value)}
        />
      </div>
      <div>
        <label>Max Popularity:</label>
        <input
          type="number"
          value={maxPopularity}
          onChange={(e) => setMaxPopularity(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default FilterOptions;