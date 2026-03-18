import React, {useState} from 'react';
import './FilterNav.css';

const FilterNav = ({ onFilterChange, onClearAllFilters, onSortChange, activeFilters, sortBy }) => {
  const [showFilter, setShowFilter] = useState(false);
  
  // Define filter options
  const colorOptions = [
    { label: 'Red', value: 'Red', color: 'red' },
    { label: 'Blue', value: 'Blue', color: 'blue' },
    { label: 'Green', value: 'Green', color: 'green' },
    { label: 'Black', value: 'Black', color: 'black' },
    { label: 'White', value: 'White', color: 'white' },
    { label: 'Yellow', value: 'Yellow', color: 'yellow' }
  ];
  
  const ratingOptions = [
    { label: '★★★★☆ & above', value: '4 ★' },
    { label: '★★★☆☆ & above', value: '3 ★' },
    { label: '★★☆☆☆ & above', value: '2 ★' },
    { label: '★☆☆☆☆ & above', value: '1 ★' }
  ];
  
  const priceOptions = [
    { label: 'Under $50', value: 'Under $50' },
    { label: '$50 - $100', value: '$50 - $100' },
    { label: '$100 - $200', value: '$100 - $200' },
    { label: 'Above $200', value: 'Above $200' }
  ];

  // Handle filter checkbox change
  const handleCheckboxChange = (type, value) => {
    if (onFilterChange) {
      let filterType;
      switch(type) {
        case 'color': filterType = 'color'; break;
        case 'rating': filterType = 'rating'; break;
        case 'price': filterType = 'price'; break;
        default: return;
      }
      onFilterChange(filterType, value);
    }
  };

  // Handle sort select change
  const handleSortSelectChange = (e) => {
    if (onSortChange) {
      onSortChange(e.target.value);
    }
  };

  // Check if a filter is active
  const isFilterActive = (type, value) => {
    switch(type) {
      case 'color': return activeFilters?.colors?.includes(value);
      case 'rating': return activeFilters?.ratings?.includes(value);
      case 'price': return activeFilters?.priceRanges?.includes(value);
      default: return false;
    }
  };

  // Handle clear all
  const handleClearAll = () => {
    if (onClearAllFilters) {
      onClearAllFilters();
    }
  };

  return (
    <div className="filter">
      <div className="filter-sort-wrp">
        <div className="filter-wrp" onClick={() => setShowFilter(true)}>
          <span className="wt-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path fillRule="evenodd" clipRule="evenodd" d="M15 9a3 3 0 0 0 2.599-1.5H21v-2h-3.041a3 3 0 0 0-5.917 0H3v2h9.401A3 3 0 0 0 15 9m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 8a3 3 0 0 0 2.83-2H21v-2h-9.17a3.001 3.001 0 0 0-5.66 0H3v2h3.17A3 3 0 0 0 9 15m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 8a3 3 0 0 0 2.83-2H21v-2h-3.17a3.001 3.001 0 0 0-5.66 0H3v2h9.17A3 3 0 0 0 15 21m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path>
            </svg>
          </span>
          <span>All Filters</span>
        </div>
        <div className="sort-wrp"> 
          <span>Sort By:</span>
          <select 
            name="sort" 
            id="sort"
            value={sortBy || 'featured'}
            onChange={handleSortSelectChange}
          >
            <option value="featured">Featured</option>
            <option value="new-arrivals">New Arrivals</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="best-selling">Best Selling</option>
          </select>
        </div>
      </div>
      
      <div className={`filter-tags ${showFilter ? "filter-visible" : ""}`}>
        <div className="all-tags"></div>
        <div className="filter-nav">
          <div className="all-filter-tags">
            <h2>Filters</h2>

            {/* Color Filters */}
            <div className="filter-section">
              <h4>Color</h4>
              {colorOptions.map((color) => (
                <div className="filter-item" key={color.value}>
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      className="checkbox-input"
                      checked={isFilterActive('color', color.value)}
                      onChange={() => handleCheckboxChange('color', color.value)}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="color-option">
                      <span 
                        className="color-dot" 
                        style={{ backgroundColor: color.color }}
                      ></span>
                      {color.label}
                    </span>
                  </label>
                </div>
              ))}
            </div>

            {/* Rating Filters */}
            <div className="filter-section">
              <h4>Rating</h4>
              {ratingOptions.map((rating) => (
                <div className="filter-item" key={rating.value}>
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      className="checkbox-input"
                      checked={isFilterActive('rating', rating.value)}
                      onChange={() => handleCheckboxChange('rating', rating.value)}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="rating-option">{rating.label}</span>
                  </label>
                </div>
              ))}
            </div>

            {/* Price Range Filters */}
            <div className="filter-section">
              <h4>Price Range</h4>
              {priceOptions.map((price) => (
                <div className="filter-item" key={price.value}>
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      className="checkbox-input"
                      checked={isFilterActive('price', price.value)}
                      onChange={() => handleCheckboxChange('price', price.value)}
                    />
                    <span className="checkbox-custom"></span>
                    {price.label}
                  </label>
                </div>
              ))}
            </div>
          </div>  

          <div className="action-buttons filter-header">
            <button className="cancel-all-btn" onClick={() => setShowFilter(false)}>
              Cancel
            </button>
            <button className="clear-all-btn" onClick={handleClearAll}>
              Clear All
            </button>
          </div>
        </div>
     
        <div className="Close-wrp-btn">
          <span onClick={() => setShowFilter(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterNav;