// Deprecated helper script; kept empty intentionally.
// Previously used to swap CSS themes. Safe to remove.
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: -3rem;
  position: relative;
  z-index: 10;
}

.feature-item {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  text-align: center;
  transition: transform 0.2s;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-item h3 {
  margin: 1rem 0 0.5rem;
  color: var(--text-main);
}

.feature-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* Product List */
.product-page {
  padding: 2rem 0;
}

.product-page h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-main);
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.search-input, .category-select {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input:focus, .category-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.search-input {
  width: 100%;
  max-width: 400px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.product-card {
  background: var(--bg-card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.product-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.product-price {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.product-card .cta-button {
  margin-top: auto;
  width: 100%;
}

/* Product Detail */
.detail-page {
  padding: 4rem 0;
}

.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  background: var(--bg-card);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
}

.detail-image {
  width: 100%;
  border-radius: var(--radius);
  object-fit: cover;
  max-height: 500px;
}

.detail-info h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.category-tag {
  display: inline-block;
  background-color: #e0e7ff;
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.description {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.7;
}

.detail-info .price {
  font-size: 2rem;
  color: var(--text-main);
  margin-bottom: 2rem;
}

.detail-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.back-link {
  color: var(--text-secondary);
  font-weight: 500;
}

.back-link:hover {
  color: var(--text-main);
  text-decoration: underline;
}

/* Cart Page */
.cart-page {
  padding: 3rem 0;
  max-width: 800px;
}

.cart-list {
  background: var(--bg-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  margin-bottom: 2rem;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius);
  margin-right: 1.5rem;
}

.item-info {
  flex-grow: 1;
}

.item-info h4 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.cart-summary {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  text-align: right;
}

.cart-summary h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

/* Checkout Page */
.checkout-page {
  padding: 3rem 0;
  max-width: 600px;
}

.checkout-content {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
}

.order-summary {
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: var(--radius);
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-main);
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  font-size: 1rem;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

/* Footer */
.footer {
  background-color: white;
  border-top: 1px solid var(--border-color);
  padding: 3rem 0;
  margin-top: 4rem;
  text-align: center;
  color: var(--text-secondary);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-banner h1 {
    font-size: 2rem;
  }
  
  .detail-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .nav-links {
    gap: 1rem;
  }
  
  .nav-links a {
    font-size: 0.85rem;
  }
}
`;

fs.writeFileSync(path.join('c:\\Users\\hagis\\vite\\UAS\\ecommerce-uas\\src\\index.css'), cssContent);
console.log('index.css updated');
