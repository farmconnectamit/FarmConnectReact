// API Configuration
// For iOS simulator: http://localhost:8000/api
// For Android emulator: http://10.0.2.2:8000/api
// For physical device: http://<YOUR_IP>:8000/api
// Update the IP address below with your computer's local IP address
export const API_BASE_URL = "http://192.168.1.2:8000/api";

// Export API endpoints
export const ENDPOINTS = {
  PRODUCTS: "/products",
  MERCHANTS: "/merchants",
  CATEGORIES: "/categories",
  TAGS: "/tags",
};

// Export search parameters
export const SEARCH_PARAMS = {
  SEARCH: "search",
  CATEGORY: "category",
  MERCHANT: "merchant",
  ORDERING: "ordering",
};
