import React ,{useEffect, useState}from 'react';
import { Link} from 'react-router-dom';
import {selectAllElectronicsProducts} from '../features/products/productsSlice';
import { useSelector } from 'react-redux';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';
import accessoriesBanner from '../assets/images/Electronic-Banner.jpg';
import { useProductFilters } from "../hooks/useProductFilters";
import FilterNav from "../components/UI/FilterNav";

function Electronics(){
     const allElectronicsProducts = useSelector(selectAllElectronicsProducts);


     const {
      filters,
      sortBy,
      filteredProducts,
      handleFilterChange,
      handleClearAllFilters,
      handleSortChange,
    } = useProductFilters(allElectronicsProducts, "electronics");
    


       useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
        const [selectedCategory, setSelectedCategory] = useState('all');
        
        const finalProducts = selectedCategory == "all" ? filteredProducts : filteredProducts.filter((item) => item.subCategory === selectedCategory);

     return(
            <div className="Clothing-Page">
            <div className="banner">
                <div className="banner-img">  
                   <img src={accessoriesBanner} alt="Accessories banner" />   
                 </div> 
             </div>
            <div className="categories">
                <div className="category">
                       <div className="category-head">
                          <h2>Electronics</h2>
                          
                          <p>Electronics for adults and kids  we got you covered</p>
                       </div>
                     <ul>
                      <li> <Link className={` ${selectedCategory == "all" ? "active" :""} `}  onClick={()=> setSelectedCategory("all")}> 
                            <div>
                              <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                            </div>
                            <p>All</p>
                        </Link>
                      </li>
                         <li> <Link className={` ${selectedCategory == "mobile" ? "active" :""} `} onClick={()=> setSelectedCategory("mobile")}> <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3un_PcOeFWpRUZaOPwmi5r4mKq50GIzg3Q&s" alt="" /></div><p>Mobile</p></Link></li>
                         <li> <Link className={` ${selectedCategory == "laptop" ? "active" :""} `} onClick={()=> setSelectedCategory("laptop")}> <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHY4S4ENNDA4jBQXKkNv6PZR9pIpdJWkDqbg&s" alt="" /></div><p>Laptop</p></Link></li>
                         <li> <Link className={` ${selectedCategory == "camera" ? "active" :""} `} onClick={()=> setSelectedCategory("camera")}> <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8U1eyblkDa0xGcWq44jylZsFjAqN_aRCmQ&s" alt="" /></div><p>Camers</p></Link></li>
                        <li> <Link className={` ${selectedCategory == "earphones" ? "active" :""} `} onClick={() => setSelectedCategory("earphones")}> <div><img src="data:image/jpeg;base64,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" alt="" /></div><p>Headphones</p></Link></li>

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
             <div className="products-list">
            <ProductCardTypeA
              title="All Electronics Products"
              products={finalProducts}
            />
            </div>
        )}
           
            
        </div>
        )
}


export default Electronics;