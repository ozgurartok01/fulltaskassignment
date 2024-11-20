const fs = require("fs");
const axios = require("axios");

// GoldAPI URL and your API Key
const GOLD_API_URL = "https://www.goldapi.io/api/XAU/USD";
const API_KEY = "goldapi-132nl419m3og7a2a-io"; // Replace with your actual API key

// Fallback gold price (used if API request fails)
const FALLBACK_GOLD_PRICE = 60; // Example fallback value in USD per gram

// Load product data
const getProducts = () => {
  try {
    const data = JSON.parse(fs.readFileSync("products.json"));
    return data;
  } catch (error) {
    console.error("Error reading products.json:", error.message);
    throw new Error("Failed to load product data.");
  }
};

// Fetch current gold price
const getGoldPrice = async () => {
  try {
    const response = await axios.get(GOLD_API_URL, {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json",
      },
    });

    // Ensure the gold price data exists
    if (response.data && response.data.price_gram_24k) {
      console.log("Gold price fetched successfully:", response.data.price_gram_24k);
      return response.data.price_gram_24k;
    } else {
      console.warn("Gold price data missing. Using fallback value.");
      return FALLBACK_GOLD_PRICE;
    }
  } catch (error) {
    console.error("Error fetching gold price:", error.message);
    return FALLBACK_GOLD_PRICE;
  }
};

// Calculate product prices
const calculateProductPrices = async () => {
  try {
    const products = getProducts();
    const goldPrice = await getGoldPrice();

    // Map through products and calculate their prices
    return products.map(product => {
      const price = ((product.popularityScore)/20 + 1) * product.weight * goldPrice;
      return { ...product, price: price.toFixed(2) };
    });
  } catch (error) {
    console.error("Error calculating product prices:", error.message);
    throw new Error("Failed to calculate product prices.");
  }
};

module.exports = { calculateProductPrices };
