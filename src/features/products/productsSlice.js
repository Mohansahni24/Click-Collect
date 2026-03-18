import { createSlice } from '@reduxjs/toolkit';
import products from '../../data/products.json';


const initialState = {
  allData: products,
  allProducts: products.products,
  bannerSliderData:products.bannerSlider,
  newArrivalsIds: products.newArrivals,
  allclothingProducts: products.products.filter(product => product.category === 'clothing'),
  allAccessoriesProducts: products.products.filter(product => product.category === 'accessories'),
  allElectronicsProducts: products.products.filter(product => product.category === 'electronics'),
  allToysProducts: products.products.filter(product => product.category === 'toysGames'),
  allBooksProducts: products.products.filter(product => product.category === 'books'),
  allHeadphonesProducts: products.products.filter(product => products.allHeadphones.includes(product.id)),
  newArrivalsProducts: products.products.filter(product => products.newArrivals.includes(product.id)),
  trendingProducts: products.products.filter(product => products.trendingProducts.includes(product.id)),
  topDealsProductd: products.products.filter(product => products.topDealsProducts.includes(product.id))
}
console.log("all data", initialState.allData)
// console.log("all product", initialState.allProducts);
// console.log("new arrival id", initialState.newArrivalsIds);
// console.log("new arrival product", initialState.newArrivalsProducts);
// console.log("trending product", initialState.trendingProducts);
// console.log("banner slider products ", initialState.bannerSliderData);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getAllProducts: (state) => {
      return state.allProducts;
    }
  }
})




// Actions Creators
export const { getAllProducts } = productsSlice.actions;


//Selectors 
export const selectBannerSliderProducts = (state) => state.products.bannerSliderData;
export const selectTopDealsProducts = (state) => state.products.topDealsProductd;
export const selectAllProduct = (state)  => state.products.allProducts;
export const selectNewArrivalsProducts = (state) => state.products.newArrivalsProducts;
export const selectAllHeadphonesProducts = (state) => state.products.allHeadphonesProducts;
export const selectAllClothingProducts = (state) => state.products.allclothingProducts;
export const selectAllAccessoriesProducts = (state) => state.products.allAccessoriesProducts;
export const selectAllElectronicsProducts = (state) => state.products.allElectronicsProducts; 
export const selectAllToysProducts = (state) => state.products.allToysProducts;
export const selectAllBooksProducts = (state) => state.products.allBooksProducts;




export default productsSlice.reducer;


