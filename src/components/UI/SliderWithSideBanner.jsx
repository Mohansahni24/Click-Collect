import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectNewArrivalsProducts } from '../../features/products/productsSlice';
import { selectAllHeadphonesProducts  } from '../../features/products/productsSlice';

function SliderWithSideBanner() {
  // Fixed variable name - using the selector correctly
  const newArrivalsProducts = useSelector(selectNewArrivalsProducts);
  const allHeadphone = useSelector(selectAllHeadphonesProducts );
  console.log("allHeadphone", allHeadphone);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerView, setProductsPerView] = useState(3);
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
        setProductsPerView(3);
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
       <div>
        <img  alt="Background image" aria-hidden="true" role="img" loading="lazy" decoding="async" data-nimg="fill" class="w-full absolute inset-x-0 inset-y-0" src="https://pisces.bbystatic.com/image2/BestBuy_US/dam/4474950-iac-headphones-lv-7dba3345-727f-44c4-b1f3-7d253a01b026.jpg" />
      {/* Side Banner Section (Optional - add your banner content here) */}
      <div className="side-banner">
        <h4>Give the gift of music this holiday season</h4>
        <span  className="text">Amazing on-the-go sound with headphones <br></br> from top brands&nbsp;</span>
         <a><h4>Shop all</h4></a>
      </div>

      {/* Slider Section */}
      <div className="product-slider-section">
        <div className="product-slider-container">
          {/* Left Navigation Button - Only show if NOT at the start */}
          {currentIndex > 0 && (
            <button 
              className="slider-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous products"
            >
              ‹
            </button>
          )}

          {/* Slider Container */}
          <div className="slider-wrapper">
            <div 
              className="products-slider"
              ref={sliderRef}
              style={{
                transform: `translateX(-${currentIndex * (100 / productsPerView)}%)`
              }}
            >
              {allHeadphone.map((product, index) => (
                <div key={product.id || index} className="product-card">
                    <div className="image-wrp">
                        <img 
                            src={product.images[0]} 
                            alt={product.name} 
                            className="product-image"
                            onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                            }}
                        />
                        <span className="wish-list-icon">
                                
                         </span>
                    </div>
                  <h3 className="product-name">{product.name}</h3>
                  <h6>Last Minute Deal</h6>
                  <p className="product-price">${product.price}</p>
                  <p className="original-price">${product.originalPrice}</p>
                    <p className="discount">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                    </p>               
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button - Only show if NOT at the end */}
          {currentIndex < maxIndex && (
            <button 
              className="slider-btn next-btn"
              onClick={nextSlide}
              aria-label="Next products"
            >
              ›
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

export default SliderWithSideBanner;