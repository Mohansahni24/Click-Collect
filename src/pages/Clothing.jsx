import {useEffect, useState} from 'react';
import { useSelector } from "react-redux";
import { selectAllClothingProducts } from "../features/products/productsSlice";
import { useProductFilters } from "../hooks/useProductFilters";
import FilterNav from "../components/UI/FilterNav";
import ProductCardTypeA from "../components/Shared/ProductCardTypeA";
import  {Link} from 'react-router-dom'

function Clothing() {
const allClothingProducts = useSelector(selectAllClothingProducts);

// Pass "accessories" as the page key so filters persist for this page
const {
  filters,
  sortBy,
  filteredProducts,
  handleFilterChange,
  handleClearAllFilters,
  handleSortChange,
} = useProductFilters(allClothingProducts, "clothing");

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

 const [selectedCategory, setSelectedCategory] = useState('all');
 
 const finalProducts = selectedCategory == "all" ? filteredProducts : filteredProducts.filter((item) => item.subCategory === selectedCategory);
      

return (
<>
  
    <div className="banner">
        <div className="banner-img">  
              <img src="https://s7ap1.scene7.com/is/image/adityabirlafashion/AS_D_HB_13_05_25_Denim_V3?resMode=sharp2&wid=1600&hei=642" alt="Accessories banner" />   
        </div> 
    </div>
    <div className="categories">
        <div className="category">
            <div className="category-head">
                <h2>Electronics</h2>
                <p>Electronics for adults and kids  we got you covered</p>
            </div>
          <ul>
          
            <li> 
               <Link  className={` ${selectedCategory == "all" ? "active" : ""}  `} onClick={()=> setSelectedCategory("all")}> 
                  <div>
                    <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                  </div>
                  <p>All</p>
                </Link>
            </li>
              <li> <Link  className={` ${selectedCategory == "men" ? "active" : ""}  `} onClick={()=> setSelectedCategory("men")}> <div><img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/w/u/f/-original-imagg9v4fmt5hcu8.jpeg?q=70" alt="" /></div><p>Men</p></Link></li>
              <li> <Link  className={` ${selectedCategory == "women" ? "active" : ""}  `} onClick={()=> setSelectedCategory("women")}> 
              <div>
                <img src="https://rukminim2.flixcart.com/image/1600/2140/xif0q/ethnic-set/v/u/q/xl-lf-new-dhingali-mehndi-vastrahaar-original-imahhs7qruha2e8y.jpeg?q=60" alt="" />
              </div><p>Women</p></Link></li>
          </ul>    
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
            
          <ProductCardTypeA
            title="All Clothing Products"
            products={finalProducts}
          />
        )}

</>
);
}
export default Clothing;