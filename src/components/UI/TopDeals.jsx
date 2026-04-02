import React from 'react';
import {selectTopDealsProducts} from '../../features/products/productsSlice';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import { useCart } from '../../hooks/useCart';
import {selectCartItems} from '../../features/cart/cartSlice';
import { useWishlist } from "../../hooks/useWishlist";
import { selectWishlistItems } from '../../features/wishlist/wishlistSlice';
import toast from "react-hot-toast";





function TopDeals({topDealProducts, title}){


    const navigate = useNavigate();

    const { addItemToWishlist, removeItemFromWishlist } = useWishlist();

    const allCartItems = useSelector(selectCartItems);
    const allWhislistItems= useSelector(selectWishlistItems);

    console.log("select cart itemss", allCartItems );

    const { addItemToCart } = useCart();

    const handleAddToWishlist = (item) =>{
        const alreadyInWishlist = allWhislistItems.find((wishlistItem) => {
            return wishlistItem.id === item.id;
        })

        if(!alreadyInWishlist){
             addItemToWishlist(item);
        }else{
            removeItemFromWishlist(item);
        }
    }

    const handleAddToCart = (item) =>{

        const itemAlreadyInCart = allCartItems.find((cartItem)=> {
            return  cartItem.product.id === item.id
        })

        console.log("item already in cart", item)
        
        if(!itemAlreadyInCart){
                addItemToCart(item);
        }else{
            toast.error("Item is already in cart")
        }
        
    }
    
//  const alreadyInCart = 

//  const topDealProducts = useSelector(selectTopDealsProducts)
    // console.log("top deal productsss", topDealProducts);
return(
        <div className="top-deals">
        <h2>{title}</h2>
        <div className="top-deals-products">
            <div className="card-wrp">
            {topDealProducts?.map((item) => {
                    const discountPercent = ((item.originalPrice - item.price) / item.originalPrice) * 100;
                    
                    const isItemInCart = allCartItems.find((cartItem) => {
                        return cartItem.product.id == item.id;
                    })

                    const alreadyInWishlist = allWhislistItems.find((wishlistItem) => {
                        return wishlistItem.id === item.id;
                    })

                    return (
                        <div className="card" key={item.id}  onClick={() => navigate(`/product/${item.id}`)}>
                            <div className="image-wrp">
                                <img src={item.images[0]} alt={item.name} />
                            </div>

                            <div className="info-wrp">
                                
                                <div className="title-price-wrp">
                                        <h3>{item.name}</h3>
                                        <p class="productrating">
                                            4.5
                                            <img src="https://img.icons8.com/?size=100&amp;id=19417&amp;format=png&amp;color=000000" alt="" />
                                        </p>
                                    </div>
                                    <div className="description">
                                    <p>   {item.description
      ?.split(" ")
      .slice(0, 5)
      .join(" ")}</p>
                                    </div>   

                                    <div className="btns-wrp">
                                    <button className="btn btn-primary" onClick={(e)=>{
                                        e.stopPropagation();
                                        handleAddToCart(item);
                                    }}>{isItemInCart ? "Added" : "Add to Cart"}</button>
                                    <button  className={`wish-btn ${alreadyInWishlist ? "already-in-wishlist" : ""}`} onClick={(e) => {
                                        e.stopPropagation();
                                        handleAddToWishlist(item);
                                    }}>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24" 
                                            width="24" 
                                            height="24"
                                            fill="white"
                                            >
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                                                    2 5.42 4.42 3 7.5 3 
                                                    9.24 3 10.91 3.81 12 5.09 
                                                    13.09 3.81 14.76 3 16.5 3 
                                                    19.58 3 22 5.42 22 8.5 
                                                    22 12.28 18.6 15.36 13.45 20.04 
                                                    L12 21.35z"/>
                                            </svg>
                                        </button>
                                    </div>


                            </div>

                            {item.discount >= 50 && (
                                        <div class="card__badge">
                                    <span class="badge badge--onsale" aria-hidden="true">
                                
                                    <span class="onsale_badge">
                                    {item.discount}% OFF
                                    </span>
                                    </span>
                            </div>
                            )}
                            
                        </div>
                    );
                })}
                </div>
        </div>
        </div>
)
}
export default TopDeals;