import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Clothing.css';
import  { useSelector } from 'react-redux';
import { selectAllBooksProducts } from '../features/products/productsSlice';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';

import bookBanner from '../assets/images/book-banner.jpg';



function Book(){

        useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
      const allClothingProducts = useSelector(selectAllBooksProducts);
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

                             <li>  <Link to="/clothing/men"> 
                <div>
                  <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                </div>
                <p>All</p>
              </Link></li>
                             <li> <Link to="/clothing/women"> <div><img src="https://i.etsystatic.com/5411407/r/il/082a5e/6223042790/il_300x300.6223042790_tqqv.jpg" alt="" /></div><p>Philosophy & Religion </p></Link></li>
                             <li> <Link to="/clothing/kids"> <div><img src="https://rukminim2.flixcart.com/image/1600/2140/xif0q/book/2/4/s/map-history-first-paper-hindi-original-imahhhwjdrkaghxr.jpeg?q=60" alt="" /></div><p>History</p></Link></li>
                            
                          </ul>    
                    </div>
        
                </div>
                <div className="filter">
                        <div className="filter-sort-wrp">
                            <div className="filter-wrp">
                              <span className="wt-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 9a3 3 0 0 0 2.599-1.5H21v-2h-3.041a3 3 0 0 0-5.917 0H3v2h9.401A3 3 0 0 0 15 9m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 8a3 3 0 0 0 2.83-2H21v-2h-9.17a3.001 3.001 0 0 0-5.66 0H3v2h3.17A3 3 0 0 0 9 15m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 8a3 3 0 0 0 2.83-2H21v-2h-3.17a3.001 3.001 0 0 0-5.66 0H3v2h9.17A3 3 0 0 0 15 21m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></svg></span>
                              <span>All Filters</span>
                            </div>
                            <div className="sort-wrp"> 
                              <span>Sort By:</span>
                              <select name="sort" id="sort">
                                <option value="featured">Featured</option>
                                <option value="new-arrivals">New Arrivals</option>
                                <option value="price-low-to-high">Price: Low to High</option>
                                <option value="price-high-to-low">Price: High to Low</option>
                                <option value="best-selling">Best Selling</option>
                              </select>
                            </div>
                        </div>
        
                </div>
                <div className="products-list">
                    <ProductCardTypeA title="All Clothing Products" products={allClothingProducts} />
                </div>
            </div>
            )
}


export default Book;