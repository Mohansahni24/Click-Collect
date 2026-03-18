import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers:{
         addToWhishlist:(state, action)=>{
                 const payload = action.payload;
                 console.log("action payload in add to wishlist", payload);
                 state.items.push(payload);
         },
         removeFromWishlist:(state, action) =>{
                 const payload = action.payload;
                 state.items = state.items.filter((item) => item.id !== payload.id);
         }
    }
})

// Export actions
export const {addToWhishlist, removeFromWishlist} = wishlistSlice.actions;

//Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export default wishlistSlice.reducer;