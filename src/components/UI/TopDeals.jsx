import React from 'react';
import {selectTopDealsProducts} from '../../features/products/productsSlice';
import {useSelector} from "react-redux";




function TopDeals({topDealProducts}){
    //  const topDealProducts = useSelector(selectTopDealsProducts)
    //  console.log("top deal products", topDealProducts);
    return(
         <div className="top-deals">
            <h2>Top Deals</h2>
            <div className="top-deals-products">
                <div className="card-wrp">
                {topDealProducts?.map((item) => {
                        const discountPercent = ((item.originalPrice - item.price) / item.originalPrice) * 100;

                        return (
                            <div className="card" key={item.id}>
                                <div className="image-wrp">
                                    <img src={item.images[1]} alt={item.name} />
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
                                        <p>{item.description}</p>
                                     </div>   

                                     <div className="btns-wrp">
                                        <button className="btn btn-primary">Add to Cart</button>
                                        <button className="wish-btn">
                                            <img src="https://img.icons8.com/?size=100&amp;id=19411&amp;format=png&amp;color=000000" alt=""></img>
                                        </button>
                                     </div>

                                    {/* <p className="original-price">
                                        Original Price: <span>${item.originalPrice}</span>
                                    </p>

                                    <p className="price">
                                        Offer Price: <span>${item.price}</span>
                                    </p>

                                    <p className="discount">
                                        Discount: {discountPercent.toFixed(0)}%
                                    </p> */}
                                    

                                </div>
                                <div class="card__badge">
                                      <span class="badge badge--onsale" aria-hidden="true">
                                    
                                        <span class="onsale_badge">
                                        30% OFF
                                        </span>
                                        </span>
                                </div>
                            </div>
                        );
                    })}
                 </div>
            </div>
         </div>
    )
}
export default TopDeals;