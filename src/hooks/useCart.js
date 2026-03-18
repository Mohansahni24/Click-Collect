import {addToCart, increseQuantity, decreaseQuantity, removeFromCart, clearCart} from '../features/cart/cartSlice';
import {useDispatch} from 'react-redux';

export const useCart = () =>{
      const dispatch = useDispatch();

      const addItemToCart = (product) =>{
          dispatch(addToCart({product, quantity: 1}))
      }
      
      const increaseItemQuantity = (productId) =>{
          dispatch(increseQuantity(productId))
      }
      
      const decreaseItemQuantity = (productId) =>{
        dispatch(decreaseQuantity(productId))
      }
     
      const removeItemFromCart =  (productId) =>{
         dispatch(removeFromCart(productId))
      }

      const clearCartItems = () =>{
           dispatch(clearCart());
      }
      return{
          addItemToCart,
          increaseItemQuantity,
          decreaseItemQuantity,
          removeItemFromCart,
          clearCartItems,
      };
};