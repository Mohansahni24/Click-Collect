import React, {useState, useEffect, useRef, useCallback} from 'react';
import {useSelector} from "react-redux";
import {selectBannerSliderProducts} from '../../features/products/productsSlice';
import { selectAllProduct } from '../../features/products/productsSlice';

import {useNavigate} from 'react-router-dom';

function Slider() {
  const bannerSlideProducts = useSelector(selectBannerSliderProducts);
  const allProducts = useSelector(selectAllProduct);

  const rightBannProductA = allProducts.find(p => p.id === "B0380");

  const rightBannProductB = allProducts.find(p => p.id === "E0345")



  const navigate = useNavigate();

  console.log("banner slider productsssssx", rightBannProductA )
  const [currIndex, setCurrIndex] = useState(1); // Start from 1 because we added a duplicate at the beginning
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const isTransitioningRef = useRef(true);
  
  // Add a duplicate at the beginning and end for seamless looping
  const slides = bannerSlideProducts.length > 0 ? [
    bannerSlideProducts[bannerSlideProducts.length - 1], // Last item at the beginning
    ...bannerSlideProducts, // Original items
    bannerSlideProducts[0] // First item at the end
  ] : [];

  const totalSlides = slides.length;
  const realSlideCount = bannerSlideProducts.length;

  // Function to get the current real slide index (for dots)
  const getRealSlideIndex = () => {
    if (currIndex === 0) return realSlideCount - 1;
    if (currIndex === totalSlides - 1) return 0;
    return currIndex - 1;
  };

  // Function to handle dot click
  const handleDotClick = (index) => {
    // Clear interval when manually navigating
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Add 1 because we have the duplicate at the beginning
    setCurrIndex(index + 1);
    
    // Restart interval
    startInterval();
  };

  // Function to go to next slide
  const goToNextSlide = useCallback(() => {
    setCurrIndex(prev => {
      // If at the last duplicate, jump to first real slide without animation
      if (prev >= totalSlides - 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrIndex(1);
          setTimeout(() => {
            setIsTransitioning(true);
          }, 50);
        }, 0);
        return prev; // Keep same index for now, will be updated in setTimeout
      }
      return prev + 1;
    });
  }, [totalSlides]);

  // Function to handle transition end
  const handleTransitionEnd = useCallback(() => {
    // If at the last duplicate (copy of first slide)
    if (currIndex === totalSlides - 1) {
      setIsTransitioning(false);
      setCurrIndex(1); // Jump to first real slide
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
    // If at the first duplicate (copy of last slide) - for backward navigation
    else if (currIndex === 0) {
      setIsTransitioning(false);
      setCurrIndex(totalSlides - 2); // Jump to last real slide
      setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
    }
    
    // Update ref to match state
    isTransitioningRef.current = isTransitioning;
  }, [currIndex, totalSlides, isTransitioning]);

  // Start interval function
  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      goToNextSlide();
    }, 3000);
  }, [goToNextSlide]);

  // Initialize slider and interval
  useEffect(() => {
    if (bannerSlideProducts.length === 0) return;
    
    startInterval();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [bannerSlideProducts, startInterval]);

  // Set up transition end listener
  useEffect(() => {
    const sliderElement = sliderRef.current;
    
    const handleTransitionEndLocal = () => {
      handleTransitionEnd();
    };
    
    if (sliderElement) {
      sliderElement.addEventListener('transitionend', handleTransitionEndLocal);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('transitionend', handleTransitionEndLocal);
      }
    };
  }, [handleTransitionEnd]);

  // Handle component unmounting
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Calculate the transform percentage
  const getTransform = () => {
    if (totalSlides === 0) return 'translateX(0%)';
    return `translateX(-${currIndex * (100 / totalSlides)}%)`;
  };

  return (
    <div className="Sliders">
      <div className="slider-left">
        <div style={styles.sliderContainer}>
          <div 
            ref={sliderRef}
            style={{ 
              ...styles.slider, 
              transform: getTransform(),
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              width: `${totalSlides * 100}%`
            }}
          >
            {slides.map((item, index) => (
              <div 
                style={{...styles.slide, width: `${100 / totalSlides}%`}} 
                key={`slide-${index}-${item.id || index}`}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img src={item.images[0]} alt="" style={styles.image} />
              </div>
            ))}
          </div>
          
          {/* Dots Container */}
          {realSlideCount > 0 && (
            <div style={styles.dotsContainer}>
              {bannerSlideProducts.map((_, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.dot,
                    ...(index === getRealSlideIndex() ? styles.activeDot : {})
                  }}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>


      <div className="slider-right">
        <div className="top"  onClick={() => navigate(`/product/${rightBannProductA.id}`)}>
          <img src={ rightBannProductA.images[0]} alt="" />
        </div>
        <div className="bottom" onClick={() => navigate(`/product/${rightBannProductB.id}`)}>
          <img src={rightBannProductB.images[0]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slider;

const styles = {
  sliderContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  slider: {
    display: "flex",
  },
  slide: {
    height: "360px",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  // Dots styles
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "20px",
    left: 0,
    right: 0,
    gap: "10px",
    zIndex: 10,
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    padding: 0,
    cursor: "pointer",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: "background-color 0.3s ease",
  },
  activeDot: {
    backgroundColor: "white",
    transform: "scale(1.2)",
  },
};