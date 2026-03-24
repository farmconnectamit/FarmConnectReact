# FarmConnect - API Integration Guide

## Overview
This document describes the integration between the React Native ProductList app and the Django backend API.

## Django Backend Setup

### API Endpoints

#### Products API
- **URL**: `http://localhost:8000/api/products/`
- **Method**: `GET`
- **Authentication**: None (public endpoint)

**Query Parameters:**
- `search` - Search in product name and description
- `category` - Filter by category ID
- `merchant` - Filter by merchant ID
- `ordering` - Order results (e.g., `price`, `-price`, `created_at`, `-created_at`)

**Response Format:**
```json
[
  {
    "id": 1,
    "merchant": 4,
    "merchant_name": "Fresh Farms Ltd",
    "name": "Fresh Tomatoes",
    "description": "Organically grown fresh tomatoes",
    "category": 1,
    "category_name": "Vegetables",
    "tag_ids": [1, 2],
    "price": "2.99",
    "image_url": "https://example.com/tomatoes.jpg",
    "is_active": true,
    "created_at": "2026-03-06T05:22:18.944693Z"
  }
]
```

### Running the Django Server
```bash
cd /Users/amitchoudhary/FarmerConnectRepo/farm_connect
python manage.py runserver
```

## React Native App Setup

### API Configuration
The API endpoint is configured in `config/api-config.js`:
```javascript
export const API_BASE_URL = "http://localhost:8000/api";
```

For Android emulator, use `http://10.0.2.2:8000/api` instead of localhost.

### Redux Toolkit Query
The app uses Redux Toolkit Query for API data fetching:
- **File**: `store/product-api.js`
- **Hook**: `useGetAllProductsQuery`

### Home Screen Features
- **Search**: Real-time search by product name/description
- **Category Filtering**: Filter products by category
- **Sorting**: Sort by price or creation date
- **Product Display**: Shows product image, name, description, and price
- **Add to Cart**: Add products to the cart

### Navigation
The app uses React Navigation with the following screens:
- **SignIn** - User sign in
- **SignUp** - User registration
- **Home** - Product listing with search/filter
- **Cart** - Shopping cart
- **Details** - Product details

## Testing the Integration

### Test API Endpoints
```bash
# Get all products
curl http://localhost:8000/api/products/

# Search products
curl "http://localhost:8000/api/products/?search=tomato"

# Filter by category
curl "http://localhost:8000/api/products/?category=1"

# Order by price
curl "http://localhost:8000/api/products/?ordering=price"
```

### Run the React Native App
```bash
cd /Users/amitchoudhary/AndroidStudioProjects/FarmConnectModules/ProductList
npm start
# Then press 'a' for Android or 'i' for iOS
```

## Data Models

### Django Models
- **Merchant** - Product sellers
- **Category** - Product categories (with parent support)
- **Tag** - Product tags
- **Product** - Main product model
- **ProductOption** - Product options (Weight, Size, etc.)
- **ProductOptionValue** - Option values (500g, 1kg, etc.)
- **ProductAllowedOptionValue** - Allowed option combinations
- **ProductVariant** - Product variants
- **Inventory** - Product stock
- **VariantInventory** - Variant stock

### Sample Data
The database includes:
- 3 Merchants
- 6 Categories (4 main + 2 subcategories)
- 5 Tags
- 5 Products with inventory

## Notes
- The API is currently set to use `localhost:8000` for iOS simulator
- For Android emulator, change to `10.0.2.2:8000`
- For physical devices, use your computer's local IP address
- Make sure Django server is running before starting the React Native app
