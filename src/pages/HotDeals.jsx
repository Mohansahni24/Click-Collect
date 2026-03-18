import React from 'react';
import specialOfferImage from '../assets/images/special-offer-new.png'; 
import {useSelector} from "react-redux";
import {selectAllProduct} from '../features/products/productsSlice';
import ProductCardTypeA from '../components/Shared/ProductCardTypeA';
import TwoColumnWrap from '../components/UI/TwoColumnWrap';
import TopDeals from '../components/UI/TopDeals';


function HotDeals(){
    const allProducts = useSelector(selectAllProduct) ;
    // console.log("hotDeals", allProducts)
    const flashDealProducts = allProducts.filter(p => p.discount > 30);

    const todayForYouProducts = allProducts.filter(p => p.discount > 20 && p.discount <= 30);

    // countdown timer state (e.g. start at 24 hours = 86400 seconds)
    const [timeLeft, setTimeLeft] = React.useState(29900);

    // format helper
    const formatTime = (secs) => {
        const hrs = Math.floor(secs / 3600);
        const mins = Math.floor((secs % 3600) / 60);
        const seconds = secs % 60;
        return `${hrs.toString().padStart(2,'0')} : ${mins.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`;
    };

    React.useEffect(() => {
        if (timeLeft === null) return;
        const interval = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft]);

    return(
        <div className="hot-deal">
            <div className="banner-wrp">
                  <div className="banner">
                    <div className="content">
                          <h6>#Big Hot Sale</h6>
                          <h3>Limited Time Offer <br /> Up to 70% off</h3>
                          <p>Redefine Your Everyday Need</p>

                    </div>   
                    <div className="image">
                        <img src={specialOfferImage} alt="Special Offer" />
                    </div>
                  </div>
            </div>

            <div className="flesh-deal-wrp">
                     <div className="flash-deal-outer-wrp">
                         <h2>Flash Deals   {timeLeft !== null && (
                             
                                 <span>{formatTime(timeLeft)}</span>
                            
                         )}</h2>
                        
                       
                 
                         <div className="all-card-wrp">
                            <ProductCardTypeA title="" products={flashDealProducts} />
                         </div>
                     </div>
            </div>
            <div className="add-deal-wrp">
                                <div className="two-columns-aid">
                                    <TwoColumnWrap />
                                </div>
            </div>

            <div className="today-for-you-wrp">
                 <div className="today-for-you-outer-wrp">
                    <h2>Today For You!</h2>
                    <div>
                        <TopDeals topDealProducts={todayForYouProducts} />
                    </div>
                 </div>
            </div>
        </div>

        
    )
}


export default HotDeals;