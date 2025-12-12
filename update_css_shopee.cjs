// Deprecated helper script; kept empty intentionally.
// Previously used to swap CSS themes. Safe to remove.

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
