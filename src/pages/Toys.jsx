import React, {useEffect} from 'react';
import { selectToysProducts } from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import FilterNav from '../components/UI/FilterNav';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';
import { useProductFilters } from "../hooks/useProductFilters";



function Toys() {
      const allToyProducts = useSelector(selectToysProducts );

      console.log("alltoysssssssss", allToyProducts);

       const {
              filters,
              sortBy,
              filteredProducts,
              handleFilterChange,
              handleClearAllFilters,
              handleSortChange,
            } = useProductFilters(allToyProducts, "toysGames");
 
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
          
          const [selectedCategory, setSelectedCategory] = React.useState("all");

          const finalProducts = selectedCategory == "all" ? filteredProducts : filteredProducts.filter((product) => product.subCategory === selectedCategory )

      return(
        <div>
                <div className="women-inn-wrp sub-cat-main">
                    <div className="title"><h2> Toys</h2></div>
                    <div className="categories">
                          <div className={`category ${selectedCategory === "all" ? "active" : ""}`}  onClick={()=> setSelectedCategory("all")}>
                                <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                               <h4>All</h4>
                        </div>
                        <div className={`category ${selectedCategory === "teddy-bear" ? "active" : ""}`} onClick={()=> setSelectedCategory("teddy-bear")}>
                                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-stuffed-toy/l/0/9/3-feet-cream-teddy-for-kids-and-gift-for-someone-jai-maa-kamla-original-imagtvgar7ebzfyv.jpeg?q=70" alt="" />
                                  <h4>TeddyBear</h4>
                        </div>
                        <div className={`category ${selectedCategory === "toys" ? "active" : ""}`} onClick={()=> setSelectedCategory("toys")}>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/d/n/e/rock-car-spring-wheels-1-20-scale-remote-control-3-caddle-toes-original-imahcxgbns9gvzzt.jpeg?q=70" alt="" />
                            <h4>Toys</h4>
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
                                    <ProductCardTypeA  products={finalProducts} />
                                  </div>
                      )}

                 
                 </div>
        </div>
      )
}


export default Toys;