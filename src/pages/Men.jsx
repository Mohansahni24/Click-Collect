import React, {useEffect} from 'react';
import { selectAllMenProducts } from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import FilterNav from '../components/UI/FilterNav';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';


function Men() {
      const womenProduct = useSelector(selectAllMenProducts);

            useEffect(() => {
              window.scrollTo(0, 0);
            }, []);
            

      console.log("womennnn", womenProduct)

      return(
        <div>
                <div className="women-inn-wrp sub-cat-main">
                    <div className="title"><h2> Mens</h2></div>
                    <div className="categories">
                          <div className="category">
                                <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                               <h4>All</h4>
                        </div>
                        <div className="category">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/v/i/l-fmt374-arrowfs-br-force-resized-2-original-imahex78untvtckq.jpeg?q=70" alt="" />
                               <h4>Cloths</h4>
                        </div>
                        <div className="category">
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/5/i/v/6-bullet-405-6-action-white-sky-blue-original-imah9pfhjamqtuuq.jpeg?q=70" alt="" />
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


export default Men;