import React from 'react';

function ProductsPage(){
   return(
       <div>
          <h1>This is Products Page</h1>
          </div>
   )
}

export default ProductsPage


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { FaFilter, FaSort } from 'react-icons/fa';
// import {
//   selectFilteredProducts,
//   selectFilters,
//   selectCategories,
//   setCategoryFilter,
//   setPriceFilter,
//   setSizeFilter,
//   setColorFilter,
//   setBrandFilter,
//   setInStockFilter,
//   setSortBy,
//   clearFilters
// } from '../features/products/productsSlice';
// import ProductList from '../features/products/ProductList';

// const ProductsPage = () => {
//   const dispatch = useDispatch();
//   const { category } = useParams();
//   const filteredProducts = useSelector(selectFilteredProducts);
//   const filters = useSelector(selectFilters);
//   const categories = useSelector(selectCategories);
//   const allProducts = useSelector(state => state.products.products);

//   const [showFilters, setShowFilters] = useState(false);
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedColors, setSelectedColors] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);

//   // Extract unique values
//   const allSizes = [...new Set(allProducts.flatMap(p => p.sizes || []))];
//   const allColors = [...new Set(allProducts.flatMap(p => p.colors || []))];
//   const allBrands = [...new Set(allProducts.map(p => p.brand))];

//   useEffect(() => {
//     if (category) {
//       dispatch(setCategoryFilter(category));
//     }
//   }, [category, dispatch]);

//   const handleSizeToggle = (size) => {
//     const newSizes = selectedSizes.includes(size)
//       ? selectedSizes.filter(s => s !== size)
//       : [...selectedSizes, size];
//     setSelectedSizes(newSizes);
//     dispatch(setSizeFilter(newSizes));
//   };

//   const handleColorToggle = (color) => {
//     const newColors = selectedColors.includes(color)
//       ? selectedColors.filter(c => c !== color)
//       : [...selectedColors, color];
//     setSelectedColors(newColors);
//     dispatch(setColorFilter(newColors));
//   };

//   const handleBrandToggle = (brand) => {
//     const newBrands = selectedBrands.includes(brand)
//       ? selectedBrands.filter(b => b !== brand)
//       : [...selectedBrands, brand];
//     setSelectedBrands(newBrands);
//     dispatch(setBrandFilter(newBrands));
//   };

//   const handleClearFilters = () => {
//     setSelectedSizes([]);
//     setSelectedColors([]);
//     setSelectedBrands([]);
//     setPriceRange([0, 1000]);
//     dispatch(clearFilters());
//   };

//   const sortOptions = [
//     { value: 'featured', label: 'Featured' },
//     { value: 'newest', label: 'Newest' },
//     { value: 'price-low-high', label: 'Price: Low to High' },
//     { value: 'price-high-low', label: 'Price: High to Low' },
//     { value: 'rating', label: 'Rating' },
//     { value: 'name-asc', label: 'Name: A to Z' },
//     { value: 'name-desc', label: 'Name: Z to A' }
//   ];

//   return (
//     <div className="container py-8">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//         <div>
//           <h1 className="text-3xl font-bold">
//             {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection` : 'All Products'}
//           </h1>
//           <p className="text-gray-600 mt-2">{filteredProducts.length} products found</p>
//         </div>

//         <div className="flex items-center gap-4">
//           <button
//             className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
//             onClick={() => setShowFilters(!showFilters)}
//           >
//             <FaFilter />
//             {showFilters ? 'Hide Filters' : 'Show Filters'}
//           </button>

//           <div className="relative">
//             <select
//               value={filters.sortBy}
//               onChange={(e) => dispatch(setSortBy(e.target.value))}
//               className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-primary appearance-none bg-white"
//             >
//               {sortOptions.map(option => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//             <FaSort className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//         {/* Filters Sidebar */}
//         {showFilters && (
//           <aside className="lg:col-span-1">
//             <div className="bg-white rounded-lg border p-6 space-y-6">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Filters</h3>
//                 <button
//                   className="text-sm text-primary hover:text-primary-dark"
//                   onClick={handleClearFilters}
//                 >
//                   Clear All
//                 </button>
//               </div>

//               {/* Price Range */}
//               <div>
//                 <h4 className="font-medium mb-3">Price Range</h4>
//                 <input
//                   type="range"
//                   min="0"
//                   max="1000"
//                   step="10"
//                   value={priceRange[1]}
//                   onChange={(e) => {
//                     const newMax = parseInt(e.target.value);
//                     setPriceRange([0, newMax]);
//                     dispatch(setPriceFilter({ min: 0, max: newMax }));
//                   }}
//                   className="w-full"
//                 />
//                 <div className="flex justify-between text-sm text-gray-600 mt-2">
//                   <span>$0</span>
//                   <span>${priceRange[1]}</span>
//                 </div>
//               </div>

//               {/* Categories */}
//               {categories.length > 0 && (
//                 <div>
//                   <h4 className="font-medium mb-3">Categories</h4>
//                   <div className="space-y-2">
//                     {categories.map(cat => (
//                       <label key={cat.id} className="flex items-center">
//                         <input
//                           type="radio"
//                           name="category"
//                           checked={filters.category === cat.id}
//                           onChange={() => dispatch(setCategoryFilter(
//                             filters.category === cat.id ? '' : cat.id
//                           ))}
//                           className="mr-2"
//                         />
//                         <span>{cat.name}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Sizes */}
//               {allSizes.length > 0 && (
//                 <div>
//                   <h4 className="font-medium mb-3">Sizes</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {allSizes.map(size => (
//                       <button
//                         key={size}
//                         className={`px-3 py-1 border rounded ${selectedSizes.includes(size)
//                             ? 'bg-primary text-white border-primary'
//                             : 'hover:bg-gray-50'
//                           }`}
//                         onClick={() => handleSizeToggle(size)}
//                       >
//                         {size}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Colors */}
//               {allColors.length > 0 && (
//                 <div>
//                   <h4 className="font-medium mb-3">Colors</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {allColors.map(color => (
//                       <button
//                         key={color}
//                         className={`w-8 h-8 rounded-full border ${selectedColors.includes(color) ? 'ring-2 ring-primary' : ''
//                           }`}
//                         style={{ backgroundColor: color }}
//                         onClick={() => handleColorToggle(color)}
//                         title={color}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* Brands */}
//               {allBrands.length > 0 && (
//                 <div>
//                   <h4 className="font-medium mb-3">Brands</h4>
//                   <div className="space-y-2 max-h-48 overflow-y-auto">
//                     {allBrands.map(brand => (
//                       <label key={brand} className="flex items-center">
//                         <input
//                           type="checkbox"
//                           checked={selectedBrands.includes(brand)}
//                           onChange={() => handleBrandToggle(brand)}
//                           className="mr-2"
//                         />
//                         <span>{brand}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* In Stock */}
//               <div>
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     checked={filters.inStock}
//                     onChange={(e) => dispatch(setInStockFilter(e.target.checked))}
//                     className="mr-2"
//                   />
//                   <span>In Stock Only</span>
//                 </label>
//               </div>
//             </div>
//           </aside>
//         )}

//         {/* Products Grid */}
//         <main className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
//           {filteredProducts.length === 0 ? (
//             <div className="text-center py-20">
//               <div className="text-6xl mb-6">🔍</div>
//               <h3 className="text-2xl font-bold mb-4">No products found</h3>
//               <p className="text-gray-600 mb-8">Try adjusting your filters or search terms</p>
//               <button
//                 className="btn btn-primary px-6 py-3"
//                 onClick={handleClearFilters}
//               >
//                 Clear All Filters
//               </button>
//             </div>
//           ) : (
//             <ProductList
//               products={filteredProducts}
//               loading={useSelector(state => state.products.loading)}
//               error={useSelector(state => state.products.error)}
//             />
//           )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;