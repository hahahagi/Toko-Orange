const fs = require("fs");
const path = require("path");

const cssContent = `:root {
  --primary-color: #ee4d2d; /* Shopee Orange */
  --primary-hover: #d73211;
  --secondary-color: #26aa99; /* Shopee Teal/Green for some accents */
  --accent-color: #ee4d2d;
  --text-main: #222222;
  --text-secondary: #757575; /* Gray text */
  --bg-body: #f5f5f5; /* Light gray background */
  --bg-card: #ffffff;
  --border-color: #e8e8e8;
  --shadow-sm: 0 1px 1px 0 rgba(0,0,0,.05);
  --shadow-md: 0 1px 6px 0 rgba(0,0,0,.1);
  --radius: 2px; /* Shopee uses sharper corners usually */
  --font-sans: 'Helvetica Neue', Helvetica, Arial, 文泉驛正黑, 'WenQuanYi Zen Hei', 'Hiragino Sans GB', 'LiHei Pro', 'Heiti TC', 'Microsoft JhengHei', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-body);
  color: var(--text-main);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navbar */
.navbar {
  background: linear-gradient(-180deg, #f53d2d, #f63);
  color: white;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.logo:hover {
    opacity: 0.9;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
}

.nav-links a:hover, .nav-links a.active {
  color: white;
  opacity: 1;
}

.cart-link {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
}

.cart-badge {
  background-color: white;
  color: var(--primary-color);
  font-size: 0.75rem;
  font-weight: bold;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -12px;
  border: 1px solid var(--primary-color);
}

/* Buttons */
.cta-button {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  text-align: center;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.09);
}

.cta-button:hover {
  opacity: 0.9;
  background-color: #f05d40;
}

.secondary-btn {
  background-color: white;
  border: 1px solid var(--border-color);
  color: var(--text-main);
}

.remove-btn {
  background-color: transparent;
  color: var(--text-secondary);
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.remove-btn:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

/* Home Page */
.home-page {
  padding-bottom: 4rem;
}

.hero-banner {
  background: white;
  color: var(--text-main);
  text-align: center;
  padding: 4rem 1rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--border-color);
}

.hero-banner h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.hero-banner p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.feature-item {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  text-align: center;
  border: 1px solid transparent;
  transition: border-color 0.2s;
}

.feature-item:hover {
  border-color: var(--primary-color);
}

.feature-item h3 {
  margin: 1rem 0 0.5rem;
  color: var(--primary-color);
}

/* Product List */
.product-page {
  padding: 2rem 0;
}

.product-page h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: left;
  color: var(--text-main);
  border-left: 4px solid var(--primary-color);
  padding-left: 10px;
  background: white;
  padding: 15px;
  box-shadow: var(--shadow-sm);
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: white;
  padding: 1rem;
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius);
}

.search-input, .category-select {
  padding: 0.6rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 0.9rem;
  outline: none;
}

.search-input:focus, .category-select:focus {
  border-color: var(--primary-color);
}

.search-input {
  flex-grow: 1;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); /* Smaller cards like Shopee */
  gap: 10px;
}

.product-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.1s, border-color 0.1s;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  position: relative;
}

.product-card:hover {
  transform: translateY(-1px);
  border: 1px solid var(--primary-color);
  z-index: 1;
}

.product-card img {
  width: 100%;
  height: 190px;
  object-fit: cover;
}

.product-info {
  padding: 0.8rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--text-main);
  font-weight: 400;
  line-height: 1.2rem;
  height: 2.4rem; /* Limit to 2 lines */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.product-price {
  font-weight: 600;
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-top: auto;
  margin-bottom: 0.5rem;
}

.product-card .cta-button {
  margin-top: 5px;
  width: 100%;
  font-size: 0.8rem;
  padding: 0.5rem;
  background-color: rgba(238, 77, 45, 0.1);
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.product-card .cta-button:hover {
  background-color: var(--primary-color);
  color: white;
}

/* Product Detail */
.detail-page {
  padding: 2rem 0;
}

.detail-container {
  display: grid;
  grid-template-columns: 450px 1fr;
  gap: 2rem;
  background: var(--bg-card);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
}

.detail-image {
  width: 100%;
  border-radius: var(--radius);
  object-fit: cover;
}

.detail-info h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.category-tag {
  display: inline-block;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6;
}

.detail-info .price {
  font-size: 2rem;
  color: var(--primary-color);
  background: #fafafa;
  padding: 15px;
  margin-bottom: 2rem;
  font-weight: 600;
}

.detail-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.back-link {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Cart Page */
.cart-page {
  padding: 2rem 0;
  max-width: 900px;
}

.cart-list {
  background: var(--bg-card);
  box-shadow: var(--shadow-sm);
  margin-bottom: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 1px solid var(--border-color);
  margin-right: 1.5rem;
}

.item-info h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.cart-summary {
  background: var(--bg-card);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  text-align: right;
  position: sticky;
  bottom: 0;
  border-top: 1px solid var(--primary-color);
}

.cart-summary h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

/* Checkout Page */
.checkout-page {
  padding: 2rem 0;
  max-width: 700px;
}

.checkout-content {
  background: var(--bg-card);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border-top: 4px solid var(--primary-color);
}

/* Footer */
.footer {
  background-color: #fbfbfb;
  border-top: 4px solid var(--primary-color);
  padding: 3rem 0;
  margin-top: 4rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .detail-container {
    grid-template-columns: 1fr;
  }
  
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
`;

fs.writeFileSync(
  path.join("c:\\Users\\hagis\\vite\\UAS\\ecommerce-uas\\src\\index.css"),
  cssContent
);
console.log("index.css updated to Shopee style");
