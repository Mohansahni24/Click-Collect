import React, {useEffect} from 'react';
import { selectAllWomenProducts } from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import FilterNav from '../components/UI/FilterNav';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';


function Women() {
      const womenProduct = useSelector(selectAllWomenProducts);
      console.log("womennnn", womenProduct)

          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
          

      return(
        <div>
                <div className="women-inn-wrp sub-cat-main">
                    <div className="title"><h2> Womens</h2></div>
                    <div className="categories">
                          <div className="category">
                                <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                               <h4>All</h4>
                        </div>
                        <div className="category">
                              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/x/7/m-bisuit-dori-vols-1-spangel-fashion-original-imahgnq9wtbfkffh.jpeg?q=70" alt="" />
                               <h4>Cloths</h4>
                        </div>
                        <div className="category">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/t/f/-original-imahftqtpeuhcgga.jpeg?q=70" alt="" />
                            <h4>Shoes</h4>
                        </div>
                    </div>
                    <FilterNav />
                    <div className="main">
                         <ProductCardTypeA  products={ womenProduct} />
                    </div>
                 </div>
        </div>
      )
}


export default Women;