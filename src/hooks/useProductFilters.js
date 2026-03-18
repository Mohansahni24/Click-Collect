// hooks/useProductFilters.jsx
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  selectFilters, 
  selectSortBy, 
  toggleFilter, 
  clearFilters as clearReduxFilters,
  setSortBy as setReduxSortBy
} from "../features/filters/filterSlice";

// helper to normalize price
const getPrice = (product) =>
  parseFloat(
    String(product.price || product.currentPrice || 0).replace(/[^0-9.-]+/g, "")
  ) || 0;

export function useProductFilters(products = [], pageKey = "global") {
  const dispatch = useDispatch();
  
  // Get filter state from Redux
  const filters = useSelector((state) => selectFilters(state, pageKey));
  const sortBy = useSelector((state) => selectSortBy(state, pageKey));

  const filteredProducts = useMemo(() => {
    let result = [...products];

    /* ---------- COLOR FILTER ---------- */
    if (filters.colors.length) {
      result = result.filter((product) =>
        filters.colors.some((color) =>
          product.color?.toLowerCase() === color.toLowerCase() ||
          product.colors?.some((c) => c.toLowerCase() === color.toLowerCase())
        )
      );
    }

    /* ---------- RATING FILTER ---------- */
    if (filters.ratings.length) {
      result = result.filter((product) =>
        filters.ratings.some((rating) => {
          const minRating = parseFloat(rating);
          return product.rating >= minRating;
        })
      );
    }

    /* ---------- PRICE FILTER ---------- */
    if (filters.priceRanges.length) {
      result = result.filter((product) =>
        filters.priceRanges.some((range) => {
          const price = getPrice(product);

          switch (range) {
            case "Under $50":
              return price < 50;
            case "$50 - $100":
              return price >= 50 && price <= 100;
            case "$100 - $200":
              return price >= 100 && price <= 200;
            case "Above $200":
              return price > 200;
            default:
              return true;
          }
        })
      );
    }

    /* ---------- SORTING ---------- */
    result.sort((a, b) => {
      const priceA = getPrice(a);
      const priceB = getPrice(b);

      switch (sortBy) {
        case "price-low-to-high":
          return priceA - priceB;
        case "price-high-to-low":
          return priceB - priceA;
        case "new-arrivals":
          return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
        case "best-selling":
          return (b.salesCount || 0) - (a.salesCount || 0);
        case "featured":
        default:
          return (b.isFeatured || 0) - (a.isFeatured || 0);
      }
    });

    return result;
  }, [products, filters, sortBy]);

  /* ---------- HANDLERS ---------- */
  const handleFilterChange = (type, value) => {
    dispatch(toggleFilter({ page: pageKey, filterType: type, value }));
  };

  const handleClearAllFilters = () => {
    dispatch(clearReduxFilters({ page: pageKey }));
  };

  const handleSortChange = (value) => {
    dispatch(setReduxSortBy({ page: pageKey, sortBy: value }));
  };

  return {
    filters,
    sortBy,
    filteredProducts,
    handleFilterChange,
    handleClearAllFilters,
    handleSortChange,
  };
}