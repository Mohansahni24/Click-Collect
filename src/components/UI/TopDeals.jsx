import React from 'react';
import {selectTopDealsProducts} from '../../features/products/productsSlice';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";




function TopDeals({topDealProducts, title}){
     const navigate = useNavigate();

    //  const topDealProducts = useSelector(selectTopDealsProducts)
     console.log("top deal productsss", topDealProducts);
    return(
         <div className="top-deals">
            <h2>{title}</h2>
            <div className="top-deals-products">
                <div className="card-wrp">
                {topDealProducts?.map((item) => {
                        const discountPercent = ((item.originalPrice - item.price) / item.originalPrice) * 100;

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
                                        <p>{item.description}</p>
                                     </div>   

                                     <div className="btns-wrp">
                                        <button className="btn btn-primary" onClick={(e)=>{
                                            e.stopPropagation();
                                        }}>Add to Cart</button>
                                        <button className="wish-btn"  onClick={(e) => {
                                            e.stopPropagation();
                                        }}>
                                            <img src="https://img.icons8.com/?size=100&amp;id=19411&amp;format=png&amp;color=000000" alt=""></img>
                                        </button>
                                     </div>


                                </div>

                                {item.discount > 15 && (
                                          <div class="card__badge">
                                      <span class="badge badge--onsale" aria-hidden="true">
                                    
                                        <span class="onsale_badge">
                                        30% OFF
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