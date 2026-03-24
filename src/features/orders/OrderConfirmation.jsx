import React, {useEffect} from 'react';
import thankYouImage from '../../assets/images/thank-you.webp';

const OrderConfirmation = () => {

        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

    return (
        <div className='order-confirmation'>
            <div className='order-conf-wrp'>
             <h2>Thank you for your purchase!</h2>
             <h3>Order Id: <span>8767587</span></h3>
              
           <div><img src={thankYouImage} alt="Thank You" /></div>
             <p>Your order has been confirmed. We will notify you with the details of your purchase once your order has been shipped.</p>
             <a href="/my-orders">Track Order</a>
          </div>
        </div>
    )
}

export default OrderConfirmation;