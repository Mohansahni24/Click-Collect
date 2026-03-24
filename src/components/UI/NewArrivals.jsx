import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { selectNewArrivalsProducts } from '../../features/products/productsSlice';

function NewArrivals() {
   const navigate = useNavigate();

  // Fixed variable name - using the selector correctly
  const newArrivalsProducts = useSelector(selectNewArrivalsProducts);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerView, setProductsPerView] = useState(4);
  const sliderRef = useRef(null);
  
  // Handle responsive products per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setProductsPerView(1);
      } else if (window.innerWidth < 768) {
        setProductsPerView(2);
      } else if (window.innerWidth < 1024) {
        setProductsPerView(3);
      } else {
        setProductsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate maxIndex based on actual products and responsive setting
  const maxIndex = Math.max(0, newArrivalsProducts.length - productsPerView);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  // Optional: Auto-reset index when products or view changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [productsPerView, newArrivalsProducts.length, currentIndex, maxIndex]);

  return (
    <div className="slider-with-banner-container">
      {/* Side Banner Section (Optional - add your banner content here) */}
      <div className="side-banner">
        <h2>New Arrivals</h2>
        <p>Discover our latest products</p>
        <button className="shop-all-btn">Shop All</button>
      </div>

      {/* Slider Section */}
      <div className="product-slider-section">
        <div className="product-slider-container">
          {/* Left Navigation Button */}
          <button 
            className="slider-btn prev-btn"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous products"
          >
            ‹
          </button>

          {/* Slider Container */}
          <div className="slider-wrapper">
            <div 
              className="products-slider"
              ref={sliderRef}
              style={{
                transform: `translateX(-${currentIndex * (100 / productsPerView)}%)`
              }}
            >
              {newArrivalsProducts.map((product, index) => (
                <div key={product.id || index} className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                    }}
                  />
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button 
            className="slider-btn next-btn"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            aria-label="Next products"
          >
            ›
          </button>
        </div>

        
      </div>
    </div>
  );
}

export default NewArrivals;