// features/filters/filterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_FILTERS = {
  colors: [],
  ratings: [],
  priceRanges: [],
};

const initialState = {
  // Store filters for each product category/page
  clothing: {
    filters: DEFAULT_FILTERS,
    sortBy: "featured"
  },
  accessories: {
    filters: DEFAULT_FILTERS,
    sortBy: "featured"
  },
  electronics: {
    filters: DEFAULT_FILTERS,
    sortBy: "featured"
  },
  toysGames: {
    filters: DEFAULT_FILTERS,
    sortBy: "featured"
  },
  books: {
    filters: DEFAULT_FILTERS,
    sortBy: "featured"
  },
  // For global/all products search
  global: {
    filters: DEFAULT_FILTERS,
    sortBy: "featured"
  }
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // Set filters for a specific page/category
    setFilters: (state, action) => {
      const { page, filters } = action.payload;
      if (state[page]) {
        state[page].filters = filters;
      }
    },
    
    // Set sortBy for a specific page/category
    setSortBy: (state, action) => {
      const { page, sortBy } = action.payload;
      if (state[page]) {
        state[page].sortBy = sortBy;
      }
    },
    
    // Clear all filters for a specific page/category
    clearFilters: (state, action) => {
      const { page } = action.payload;
      if (state[page]) {
        state[page].filters = DEFAULT_FILTERS;
        state[page].sortBy = "featured";
      }
    },
    
    // Toggle a single filter value
    toggleFilter: (state, action) => {
      const { page, filterType, value } = action.payload;
      const pageState = state[page];
      
      if (!pageState) return;
      
      const filterKey = {
        color: 'colors',
        rating: 'ratings',
        price: 'priceRanges'
      }[filterType];
      
      if (!filterKey) return;
      
      const currentFilters = pageState.filters[filterKey];
      if (currentFilters.includes(value)) {
        pageState.filters[filterKey] = currentFilters.filter(v => v !== value);
      } else {
        pageState.filters[filterKey].push(value);
      }
    },
    
    // Reset all filter states (e.g., on logout)
    resetAllFilters: () => initialState
  }
});

export const { 
  setFilters, 
  setSortBy, 
  clearFilters, 
  toggleFilter, 
  resetAllFilters 
} = filterSlice.actions;

// Selectors
export const selectFilters = (state, page) => state.filters[page]?.filters || DEFAULT_FILTERS;
export const selectSortBy = (state, page) => state.filters[page]?.sortBy || "featured";
export const selectFilterState = (state, page) => state.filters[page] || initialState[page];

export default filterSlice.reducer;