import {createSlice} from '@reduxjs/toolkit';

// load orders from localStorage so they survive page reloads
const savedOrders = localStorage.getItem('orders');
const initialState = {
    allOrders: savedOrders ? JSON.parse(savedOrders) : [],
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        addOrder: (state, action) =>{
             console.log('Order addedddd:', action.payload);
            state.allOrders.push(action.payload);
            // save updated list so reloads still have the orders
            localStorage.setItem('orders', JSON.stringify(state.allOrders));
        }
    }
})


// Export actions
export const {addOrder} = ordersSlice.actions;


// Export selectors
export const selectAllOrders = (state) => state.orders.allOrders;




export default ordersSlice.reducer;