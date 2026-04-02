import React, {useEffect, useState} from 'react';
import { selectAllWomenProducts } from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import FilterNav from '../components/UI/FilterNav';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';
import { useProductFilters } from "../hooks/useProductFilters";


function Women() {
      const womenProduct = useSelector(selectAllWomenProducts);
      console.log("womennnn", womenProduct)

          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
          
          const {
                              filters,
                              sortBy,
                              filteredProducts,
                              handleFilterChange,
                              handleClearAllFilters,
                              handleSortChange,
                            } = useProductFilters(womenProduct, "toysGames");
                 
        
       const [selectedCategory, setSelectedCategory] = useState('all')   

       const finalProducts = selectedCategory == "all" ?  filteredProducts :  filteredProducts.filter((item) => item.category == selectedCategory);


      return(
        <div>
                <div className="women-inn-wrp sub-cat-main">
                    <div className="title"><h2> Womens</h2></div>
                    <div className="categories">
                         <div className={`category ${selectedCategory === "all" ? "active" : ""}`} onClick={() => setSelectedCategory("all")}>
                                <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                               <h4>All</h4>
                         </div>
                        <div className={`category ${selectedCategory === "clothing" ? "active" : ""}`} onClick={() => setSelectedCategory("clothing")}>
                              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/x/7/m-bisuit-dori-vols-1-spangel-fashion-original-imahgnq9wtbfkffh.jpeg?q=70" alt="" />
                               <h4>Cloths</h4>
                        </div>
                        <div className={`category ${selectedCategory === "shoes" ? "active" : ""}`} onClick={() => setSelectedCategory("shoes")}>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/t/f/-original-imahftqtpeuhcgga.jpeg?q=70" alt="" />
                            <h4>Shoes</h4>
                        </div>
                    </div>
                   
                   
                    <FilterNav
                        onFilterChange={handleFilterChange}
                        onClearAllFilters={handleClearAllFilters}
                        onSortChange={handleSortChange}
                        activeFilters={filters}
                        sortBy={sortBy}
                    />


                    {finalProducts.length === 0 ? (
                      <div className="no-products">
                                  <h3>No products found matching the selected filters.</h3>
                                </div>
                    ) :(
                          <div className="main">
                                    <ProductCardTypeA  products={ finalProducts} />
                                </div>
                    )}

                   
                 </div>
        </div>
      )
}


export default Women;