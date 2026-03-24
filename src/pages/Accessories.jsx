import {useEffect} from "react";
import { useSelector } from "react-redux";
import { selectAllAccessoriesProducts } from "../features/products/productsSlice";
import { useProductFilters } from "../hooks/useProductFilters";
import FilterNav from "../components/UI/FilterNav";
import ProductCardTypeA from "../components/Shared/ProductCardTypeA";
import accessoriesBanner from '../assets/images/accessories-img.png';
import { Link } from 'react-router-dom'

function Accessories() {
  const allAccessoriesProducts = useSelector(selectAllAccessoriesProducts);

  // Pass "accessories" as the page key so filters persist for this page
  const {
    filters,
    sortBy,
    filteredProducts,
    handleFilterChange,
    handleClearAllFilters,
    handleSortChange,
  } = useProductFilters(allAccessoriesProducts, "accessories");
  
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      

  return (
    <>
      <div className="banner">
        <div className="banner-img">  
          <img src={accessoriesBanner} alt="Accessories banner" />   
        </div> 
      </div>
      <div className="categories">
        <div className="category">
          <div className="category-head">
            <h2>Electronics</h2>
            <p>Electronics for adults and kids we got you covered</p>
          </div>
          <ul>
            <li> 
              <Link to="/clothing/men"> 
                <div>
                  <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                </div>
                <p>All</p>
              </Link>
            </li>
            <li> 
              <Link to="/clothing/women"> 
                <div>
                  <img src="https://rukminim2.flixcart.com/image/1600/2140/xif0q/headphone/g/j/x/-original-imahfmckycuffav9.jpeg?q=60" alt="" />
                </div>
                <p>Earphones</p>
              </Link>
            </li>
            <li> 
              <Link to="/clothing/kids"> 
                <div>
                  <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/key-chain/b/x/e/tom-and-jerry-3d-keychain-for-girls-po-2-set-key-chain-couple-original-imahgjavgxhcyx8t.jpeg?q=70" alt="" />
                </div>
                <p>Key Chains</p>
              </Link>
            </li>
            <li> 
              <Link to="/clothing/indian-ethnic"> 
                <div>
                  <img src="https://rukminim2.flixcart.com/image/1600/2140/xif0q/battery-charger/3/r/p/usb-c-20w-pd-wall-charger-for-iphn-11-to-15-series-with-type-c-original-imahgvnnutzezwd6.jpeg?q=60" alt="" />
                </div>
                <p>Charger</p>
              </Link>
            </li>
            <li> 
              <Link to="/clothing/indian-ethnic"> 
                <div>
                      <img src="https://rukminim2.flixcart.com/image/3200/4260/xif0q/sunglass/1/6/d/-original-imahg2ft63yptrnm.jpeg?q=60" alt="" />
                   </div>
                <p>Belt & SunGlass</p>
              </Link>
            </li>
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

      <ProductCardTypeA
        title={`All Accessories Products (${filteredProducts.length})`}
        products={filteredProducts}
      />
    </>
  );
}

export default Accessories;