import React, {useEffect} from 'react';
import { selectToysProducts } from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import FilterNav from '../components/UI/FilterNav';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';


function Toys() {
      const allToyProducts = useSelector(selectToysProducts );
 
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
          

      return(
        <div>
                <div className="women-inn-wrp sub-cat-main">
                    <div className="title"><h2> Toys</h2></div>
                    <div className="categories">
                          <div className="category">
                                <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                               <h4>All</h4>
                        </div>
                        <div className="category">
                                    <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-stuffed-toy/l/0/9/3-feet-cream-teddy-for-kids-and-gift-for-someone-jai-maa-kamla-original-imagtvgar7ebzfyv.jpeg?q=70" alt="" />
                                  <h4>TeddyBear</h4>
                        </div>
                        <div className="category">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/d/n/e/rock-car-spring-wheels-1-20-scale-remote-control-3-caddle-toes-original-imahcxgbns9gvzzt.jpeg?q=70" alt="" />
                            <h4>Toys</h4>
                        </div>
                    </div>
                    <FilterNav />
                    <div className="main">
                       <ProductCardTypeA  products={ allToyProducts} />
                    </div>
                 </div>
        </div>
      )
}


export default Toys;