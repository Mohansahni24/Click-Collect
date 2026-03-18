import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items:[],
    shippingAddress: null,
    paymentMethod: '',
}


const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers:{
      addToCart: (state, action) => {
        const payload = action.payload || {};
        if (!('quantity' in payload)) payload.quantity = 1;
     //    console.log("action payload in add to cartttt", payload);
        state.items.push(payload);
      },
      increseQuantity: (state, action) => {
           const productId = action.payload;

           const existingItem = state.items.find(item => item.product.id === productId);
           if(existingItem){
                existingItem.quantity = (existingItem.quantity || 0) + 1;
           }
      },
      decreaseQuantity: (state, action) => {
             const productId = action.payload;

             const existingItem = state.items.find( item => item.product.id === productId);
             if(existingItem && existingItem.quantity > 1){
                  existingItem.quantity -= 1;
             }
      },
      removeFromCart: (state, action) =>{
            const productId = action.payload;
            state.items = state.items.filter( item => item.product.id !== productId);

      },
      addShippingAddress: (state, action) =>{
              state.shippingAddress = action.payload;
          //     console.log("Shipping address added to cart sliceee", action.payload);
      },
      clearCart: (state) => {
          state.items = [];
          state.shippingAddress = null;
          state.paymentMethod = '';
      }


}});

// Export actions
export const { addToCart } = cartSlice.actions;
export const { increseQuantity } = cartSlice.actions;
export const { decreaseQuantity } = cartSlice.actions;
export const { removeFromCart } = cartSlice.actions;
export const {addShippingAddress} = cartSlice.actions;
export const {clearCart} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectShippingAddress = (state) => state.cart.shippingAddress;

export default cartSlice.reducer;
