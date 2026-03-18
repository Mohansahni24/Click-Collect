import {addToWhishlist, removeFromWishlist} from '../features/wishlist/wishlistSlice';
import {useDispatch} from 'react-redux';

export const useWishlist = () =>{
    const dispatch = useDispatch();

    const addItemToWishlist = (product) =>{
         dispatch(addToWhishlist(product))
    }

    const removeItemFromWishlist = (product) =>{
         dispatch(removeFromWishlist(product))
    }

  return{
      addItemToWishlist,
      removeItemFromWishlist
  }
}