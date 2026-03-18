import React from 'react';
import {useSelector} from "react-redux";
import {selectAllProduct} from '../../features/products/productsSlice';
import ProductCardTypeA from '../Shared/ProductCardTypeA';


function ChooseYourFavorite(){
      const allProducts = useSelector(selectAllProduct) ;

      console.log("chooseYourFavourite", allProducts)
      
    return(
         <div>
            <ProductCardTypeA title="Choose Your Favorite" products={allProducts} />
         </div>
    );
}


export default ChooseYourFavorite;