# Shopsy - React Shopping Cart Application

A modern e-commerce shopping cart application built with React, React Router, and Tailwind CSS.

## Features

- Browse products fetched from Fake Store API
- Add/remove items to cart
- Adjust item quantities in cart
- Real-time cart total calculation
- 10% discount applied automatically
- Responsive design for all devices
- Clean and intuitive navigation

## Tech Stack

- React
- React Router DOM
- Tailwind CSS 
- Vite
- Fake Store API

## Getting Started

1. Clone the repository:
```sh
git clone : https://github.com/santhoshkumark2003/Add-To-Cart_Router
```

2. Install dependencies:
```sh
npm install
```

3. Run the development server:
```sh
npm run dev
```

4. Open http://localhost:5173 in your browser

## Project Structure

```
src/
├── components/
│   ├── CartItem.jsx    # Shopping cart item component
│   ├── Navbar.jsx      # Navigation header component
│   └── ProductCard.jsx # Product display component
├── pages/
│   ├── CartPage.jsx    # Shopping cart page
│   └── ProductsPage.jsx# Products listing page
├── App.jsx            # Main application component
├── main.jsx          # Application entry point
└── index.css         # Global styles
```

## Key Features Implementation

### Cart Management
- Add/remove items
- Quantity adjustment
- Automatic total calculation
- 10% discount on total

### Routing
- Product listing at root (/)
- Cart page at /cart
- 404 page for invalid routes

## API Integration

The application uses the Fake Store API (https://fakestoreapi.com) to fetch product data.

## Contributing

Feel free to open issues and pull requests for any improvements.

## License

MIT
