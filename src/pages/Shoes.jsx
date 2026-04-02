import React, {useEffect, useState} from 'react';
import { selectAllShoes } from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import FilterNav from '../components/UI/FilterNav';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';
import { useProductFilters } from "../hooks/useProductFilters";




function Shoes() {
const allShoes = useSelector(selectAllShoes);


console.log("allshoessss", allShoes)

const {
    filters,
    sortBy,
    filteredProducts,
    handleFilterChange,
    handleClearAllFilters,
    handleSortChange,
    } = useProductFilters(allShoes, "electronics");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    

console.log("alllssss", allShoes);

const [selectedCategory, setSelectedCategory] = useState('all')

// const finalProducts = selectedCategory == "all" ? allShoes : allShoes.filter((item) => item.subCategory == selectedCategory)

const finalProducts = selectedCategory == "all" ? filteredProducts : filteredProducts.filter((item) => item.subCategory === selectedCategory);


return(
    <div>
                <div className="shoe-inn-wrp sub-cat-main">
                <div className="title"><h2> Shoes</h2></div>
                <div className="categories" >
                        <div className={`category ${selectedCategory === "all" ? "active" : ""}`}   onClick={()=> setSelectedCategory("all")}>
                            <div>
                            <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                            </div>
                            <h4>All</h4>
                    </div>
                    <div className={`category ${selectedCategory === "men" ? "active" : ""}`} onClick={() => setSelectedCategory("men")}>
                        <div>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/x/m/6-rso4327a-6-red-tape-white-black-1-resized-2-original-imahdr57jrzsd6wb.jpeg?q=70" alt="" />
                            </div>
                            <h4>MEN</h4>
                    </div>
                    <div className={`category ${selectedCategory === "women" ? "active" : ""} `} onClick={() => setSelectedCategory("women")}>
                        <div>
                        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/d/d/-original-imahgybxsskvnwhz.jpeg?q=70" alt="" />
                            </div>
                        <h4>Women</h4>
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


export default Shoes;