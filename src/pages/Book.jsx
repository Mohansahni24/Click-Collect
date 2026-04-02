import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Clothing.css';
import  { useSelector } from 'react-redux';
import { selectAllBooksProducts } from '../features/products/productsSlice';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';
import bookBanner from '../assets/images/book-banner.jpg';
import { useProductFilters } from "../hooks/useProductFilters";
import FilterNav from "../components/UI/FilterNav";



function Book(){

  const allBookProducts = useSelector(selectAllBooksProducts);

  const {
    filters,
    sortBy,
    filteredProducts,
    handleFilterChange,
    handleClearAllFilters,
    handleSortChange,
  } = useProductFilters(allBookProducts, "books");

        useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
     const [selectedCategory, setSelectedCategory] = useState('all');

     const finalProducts = selectedCategory == "all" ? filteredProducts : filteredProducts.filter((item) => item.subCategory === selectedCategory);

    return(
                <div className="Clothing-Page">
                <div className="banner">
                    <div className="banner-img">  
                       <img src={bookBanner} alt="Book banner" />   
                     </div> 
                 </div>
                <div className="categories">
                    <div className="category">
                           <div className="category-head">
                              <h2>Book</h2>
                              
                              <p>Book for adults and kids  we got you covered</p>
                           </div>
                         <ul>

                             <li>  <Link className={` ${selectedCategory == "all" ? "active" :""} `} onClick= {() => setSelectedCategory("all")}> 
                <div>
                  <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                </div>
                <p>All</p>
              </Link></li>
                             <li> <Link   className={` ${selectedCategory == "phylosphy-religion" ? "active" :""} `}  onClick={() => setSelectedCategory("phylosphy-religion")}> <div><img src="https://i.etsystatic.com/5411407/r/il/082a5e/6223042790/il_300x300.6223042790_tqqv.jpg" alt="" /></div><p>Philosophy & Religion </p></Link></li>
                             <li> <Link  className={` ${selectedCategory == "history" ? "active" :""} `}  onClick={() => setSelectedCategory("history")}> <div><img src="https://rukminim2.flixcart.com/image/1600/2140/xif0q/book/2/4/s/map-history-first-paper-hindi-original-imahhhwjdrkaghxr.jpeg?q=60" alt="" /></div><p>History</p></Link></li>
                            
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

                <div className="products-list">
                  {finalProducts.length === 0 ? (
                    <div className="no-products">
                      <h3>No products found matching the selected filters.</h3>
                    </div>
                  ) : (
                    <ProductCardTypeA
                      title="All Book Products"
                      products={finalProducts}
                    />
                  )}
                </div>
            </div>
            )
}


export default Book;