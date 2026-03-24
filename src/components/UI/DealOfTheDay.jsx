import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";

function DealOfTheDay() {
   
     const [isDealActive, setIsDealActive] = useState(false);

     const navigate = useNavigate();
    return(
        <div className={`dealOfTheDay-page ${isDealActive ? "active" : ""}`}>
                <div className="dealOfTheDay-wrapper">
                        <div className="dealOfTheDay-content">
                            <div className="btn-wrp" onClick={ () => setIsDealActive(!isDealActive) }>
                                <p>Deal of the day! </p>
                                <svg viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" class="chakra-icon css-13otjrl"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.93934 14.0394C5.52513 13.4536 6.47487 13.4536 7.06066 14.0394L24.5 31.4788L41.9393 14.0394C42.5251 13.4536 43.4749 13.4536 44.0607 14.0394C44.6464 14.6252 44.6464 15.575 44.0607 16.1608L26.2678 33.9536C25.2915 34.93 23.7085 34.93 22.7322 33.9536L4.93934 16.1608C4.35355 15.575 4.35355 14.6252 4.93934 14.0394Z" fill="white"></path></svg>
                            </div>
                            <div className="card-wrp" onClick={() => navigate(`/product/A002970`)}>
                                <div className="card">
                                     <div className="img">
                                         <img src="https://rukminim2.flixcart.com/image/1600/2140/xif0q/computer/a/0/5/-original-imagvrefuybuvbe5.jpeg?q=60" alt="" />
                                     </div>
                                     <div className="info">
                                            <h3 className="title">Acer - Chromebook 315 4GB LPDDR4X</h3>
                                            <div className="price">
                                                 <p><span className="product-discount">75% OFF</span></p>
                                                 <p><span className="product-price">Rs12499</span> <span className="product-original-price">Rs49995</span></p>
                                            </div>
                                     </div>

                                     <div className="view-btn">
                                        <button onClick={() => navigate(`/product/A002970`)}>Buy</button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                </div>
        </div>
    )
}


export default DealOfTheDay;