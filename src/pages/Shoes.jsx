import React, {useEffect} from 'react';
import { selectAllShoes } from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import FilterNav from '../components/UI/FilterNav';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';



function Shoes() {
    const allShoes = useSelector(selectAllShoes);

        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
        

    console.log("alllssss", allShoes);

    return(
        <div>
                 <div className="shoe-inn-wrp sub-cat-main">
                    <div className="title"><h2> Shoes</h2></div>
                    <div className="categories">
                          <div className="category">
                               <div>
                                <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                                </div>
                               <h4>All</h4>
                        </div>
                        <div className="category">
                            <div>
                              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/x/m/6-rso4327a-6-red-tape-white-black-1-resized-2-original-imahdr57jrzsd6wb.jpeg?q=70" alt="" />
                               </div>
                               <h4>MEN</h4>
                        </div>
                        <div className="category">
                            <div>
                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/4/d/d/-original-imahgybxsskvnwhz.jpeg?q=70" alt="" />
                             </div>
                            <h4>Women</h4>
                        </div>
                    </div>
                    <FilterNav />
                    <div className="main">
                         <ProductCardTypeA  products={allShoes} />
                    </div>
                 </div>
        </div>
    )
}


export default Shoes;