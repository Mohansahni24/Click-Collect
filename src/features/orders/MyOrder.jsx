import React from 'react';
import {  selectAllOrders } from './ordersSlice';
import { useSelector } from 'react-redux';





const MyOrder = ()  =>{
        const allOrders = useSelector(selectAllOrders);

        // log whenever orders change
        React.useEffect(() => {
            console.log('All orders in MyOrder component:', allOrders);
        }, [allOrders]);

        return(
            <div className="myOrder"> 
                <h2 className="text-3xl font-bold mb-4">My Orders ({allOrders.length}) </h2>

                {allOrders.length === 0 ? (
                    <p>No orders found.</p>
                ) : (
                    <div className="orders-list">
                        {allOrders.map((o) => (
                             <div className="order-card" key={o.id}>
                                  <div className="img-wrp"> <img src={o.items[0].product.images[0]} alt="" /></div>
                                  <div className="title">
                                        <h3>{o.items[0].product.name}</h3>
                                                <p className="price">{o.totalAmount.toFixed(2)}</p>
                                  </div>
                                  
                                  <div className="delivery-date">
                                  <p> Delivery on {o.deliveryDate}</p>
                                  
                                  <div className="status"> Status : <span>{o.status}</span> </div>
                                  </div>
                             </div>
                        ))}
                    </div>
                )}
            </div>
        )
}


export default MyOrder;