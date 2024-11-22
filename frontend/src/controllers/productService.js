import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/api/products`);
  return response.data;
};

