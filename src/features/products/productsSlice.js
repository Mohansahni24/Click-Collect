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
  allFurnitureProduct: products.products.filter(p => p.category === "furniture"),
  allShoes: products.products.filter(p => p.category === "shoes"),
  allWomenProducts:products.products.filter(p => p.subCategory === "women"),
  allMenProducts:products.products.filter(p => p.subCategory === "men"),
  allToysProducts:products.products.filter(p => p.category === "toysGames"),
  mainBannerProducts: products.products.filter(p => products.mainBannerProduct.includes(p.id)),
  allHeadphonesProducts: products.products.filter(product => products.allHeadphones.includes(product.id)),
  newArrivalsProducts: products.products.filter(product => products.newArrivals.includes(product.id)),
  trendingProducts: products.products.filter(product => products.trendingProducts.includes(product.id)),
  topDealsProductd: products.products.filter(product => products.topDealsProducts.includes(product.id)),
  onlyForYouPrdoduct: products.products.filter(product => products.onlyForYou.includes(product.id)),
}
console.log("all data", initialState.allData);
console.log("all Furniture productttttyyyyyyyy", initialState.onlyForYouPrdoduct);
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
export const selectAllProduct = (state)  => state.products.allProducts;
export const selectBannerSliderProducts = (state) => state.products.mainBannerProducts;
export const selectTopDealsProducts = (state) => state.products.topDealsProductd;
export const selectNewArrivalsProducts = (state) => state.products.newArrivalsProducts;
export const selectAllHeadphonesProducts = (state) => state.products.allHeadphonesProducts;
export const selectAllClothingProducts = (state) => state.products.allclothingProducts;
export const selectAllAccessoriesProducts = (state) => state.products.allAccessoriesProducts;
export const selectAllElectronicsProducts = (state) => state.products.allElectronicsProducts; 
export const selectAllToysProducts = (state) => state.products.allToysProducts;
export const selectAllBooksProducts = (state) => state.products.allBooksProducts;
export const selectAllFurnitureProducts = (state) => state.products.allFurnitureProduct;
export const selectAllShoes = (state) => state.products.allShoes;
export const selectAllWomenProducts = (state) => state.products.allWomenProducts;
export const selectAllMenProducts = (state) => state.products.allMenProducts;
export const selectToysProducts = (state) => state.products.allToysProducts;
export const selectOnlyForYouProducts = (state) => state.products.onlyForYouPrdoduct;



export default productsSlice.reducer;


