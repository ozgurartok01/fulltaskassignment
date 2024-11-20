const { calculateProductPrices } = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const { minPrice, maxPrice, minPopularity, maxPopularity } = req.query;
    const products = await calculateProductPrices();

    // Filter products based on query parameters
    const filteredProducts = products.filter(product => {
      const price = parseFloat(product.price);
      const popularity = (parseFloat(product.popularityScore) / 20).toFixed(1); // Convert to a scale of 1 to 5

      return (
        (!minPrice || price >= parseFloat(minPrice)) &&
        (!maxPrice || price <= parseFloat(maxPrice)) &&
        (!minPopularity || popularity >= parseFloat(minPopularity)) &&
        (!maxPopularity || popularity <= parseFloat(maxPopularity))
      );
    });

    res.json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllProducts };
