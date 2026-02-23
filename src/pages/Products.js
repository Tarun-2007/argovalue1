import { useEffect, useState } from 'react';
import { productService } from '../services/productService';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setProducts(data);
    } catch (err) {
      setError('Failed to load products');
      // Mock data for demo
      setProducts([
        { _id: '1', name: 'Organic Honey', category: 'Dairy & Honey', price: 450, description: 'Pure organic honey from local farms' },
        { _id: '2', name: 'Mango Pickle', category: 'Pickles', price: 180, description: 'Traditional homemade mango pickle' },
        { _id: '3', name: 'Wheat Flour', category: 'Grains', price: 60, description: 'Fresh stone-ground wheat flour' },
        { _id: '4', name: 'Turmeric Powder', category: 'Spices', price: 120, description: 'Organic turmeric powder' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="products-header">
          <h1>Our Products</h1>
          <p>Discover value-added agricultural products from our community</p>
        </div>

        {error && <div className="info-message">{error}</div>}

        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <div className="product-image">
                <div className="product-placeholder">🌾</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-category">{product.category}</span>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">₹{product.price}</span>
                  <button className="view-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
