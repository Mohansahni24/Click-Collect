import React, {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {selectAllProduct} from '../features/products/productsSlice';
import {useSelector} from 'react-redux';
import { selectCartItems } from '../features/cart/cartSlice';
import {selectWishlistItems} from '../features/wishlist/wishlistSlice';
import {useCart} from '../hooks/useCart';
import {useWishlist} from '../hooks/useWishlist';

// import {selectAllProduct} from '../../features/products/productsSlice';

const ProductDetailPage = () => {
    const {id} = useParams();
    const  allProducts = useSelector(selectAllProduct);
      const {addItemToCart} = useCart();
      const {addItemToWishlist, removeItemFromWishlist} = useWishlist();
      const navigate = useNavigate();

    // console.log('product details page', allProducts)
    const product = allProducts.find((item) => item.id == id);
    const cartItems = useSelector(selectCartItems);
    const wishlistItems = useSelector(selectWishlistItems);
    const inCart = cartItems.some((item) => item.product.id == product?.id);
    const inWishlistItems = wishlistItems.some((item) => item.id == product?.id);
    const [currImgIndex, setCurrImgIndex] = useState(0);
    

    const handleWishlist = ()  =>{
         
         if(inWishlistItems){
              removeItemFromWishlist(product);
         }else{
              addItemToWishlist(product);
         }
    }
    
   

   const handleThumbNilClick = (index) =>{
        setCurrImgIndex(index);
    }
    // console.log("found product", product);
  return (
    <div className="product-details-page">
      <div className="product-details-wrapper">
        <div className="detail-page-top">
          <div className="img-wrp">
            <div className="all-imgs-wrp">
               {product.images.map((img, index)=>{
                  return <div className={`image ${index === currImgIndex ? 'active' : ''}`} key={index} onClick={()=>handleThumbNilClick(index)}>
                          <img src={img} alt="" />
                       </div>
               })}
            </div>
            <div className="main-img">
              <img 
                src={product.images[currImgIndex]} 
                alt="Product" 
              />
            </div>
          </div>
          <div className="product-info-wrp">
            <div>
              <p className="product-brand">Sony</p>
              <h2 className="product-name">Sony WH-1000XM4 Wireless Noise-Cancelling Over-Ear Headphones</h2>
              <p className="product-rating"> ⭐⭐⭐⭐⭐ <strong>{product.rating}</strong>(1500 reviews)</p>
              <div className="product-price-section">
                  <div className="price-wrp">
                    <h3 className="product-special-price">Special Price</h3>
                <h4 className="product-offer">
                  <span>₹15000 off</span>
                </h4>
                </div>
               
                    <p>
                      <span className="product-price">Rs348.00</span>
                      <span className="product-original-price">Rs499.99</span>
                      <span className="product-discount">-12%</span>
                    </p>
                
              </div>
              <div className="product-availability">
                <p>Availability: <span>In Stock</span></p>
              </div>
              <div className="free-shipping-info">
                <p><strong>Free Shipping*</strong></p>
                <div className="shipping-details">
                  <div className="shipping-icon">
                    <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid="pdp_shipping_icon" aria-hidden="true">
                      <g clipPath="url(#clip0_1_327)">
                        <path d="M1.25 13.5V6C1.25 5.60218 1.40804 5.22064 1.68934 4.93934C1.97065 4.65804 2.35218 4.5 2.75 4.5H14.75C15.1478 4.5 15.5294 4.65804 15.8107 4.93934C16.092 5.22064 16.25 5.60218 16.25 6V12" stroke="#0ABF4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M16.25 12V6H19.25C20.4435 6 21.5881 6.47411 22.432 7.31802C23.2759 8.16193 23.75 9.30653 23.75 10.5V16.5C23.75 16.8978 23.592 17.2794 23.3107 17.5607C23.0294 17.842 22.6478 18 22.25 18H21.5" stroke="#0ABF4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M23.75 12H20.75C20.3522 12 19.9706 11.842 19.6893 11.5607C19.408 11.2794 19.25 10.8978 19.25 10.5V6" stroke="#0ABF4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M19.25 17.25C19.25 17.8467 19.0129 18.419 18.591 18.841C18.169 19.2629 17.5967 19.5 17 19.5C16.4033 19.5 15.831 19.2629 15.409 18.841C14.9871 18.419 14.75 17.8467 14.75 17.25C14.75 16.6533 14.9871 16.081 15.409 15.659C15.831 15.2371 16.4033 15 17 15C17.5967 15 18.169 15.2371 18.591 15.659C19.0129 16.081 19.25 16.6533 19.25 17.25Z" stroke="#0ABF4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M7.25 17.25C7.25 17.8467 7.01295 18.419 6.59099 18.841C6.16903 19.2629 5.59674 19.5 5 19.5C4.40326 19.5 3.83097 19.2629 3.40901 18.841C2.98705 18.419 2.75 17.8467 2.75 17.25C2.75 16.6533 2.98705 16.081 3.40901 15.659C3.83097 15.2371 4.40326 15 5 15C5.59674 15 6.16903 15.2371 6.59099 15.659C7.01295 16.081 7.25 16.6533 7.25 17.25Z" stroke="#0ABF4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12.5 18H9.5" stroke="#0ABF4F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_1_327">
                          <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p>*It will depend on the order amount <br /> Receive it between 2 and 7 business days</p>
                </div>
              </div>
              <div className="product-buttons">
                <div
                  className="add-to-cart-btn"
                  onClick={() => (inCart ? navigate('/cart') : addItemToCart(product))}
                >
                  <span>{inCart ? 'Go to Cart' : 'Add to Cart'}</span>
                </div>
                <div className="save-btn" onClick={() => handleWishlist()}>
                  <span className="icon">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        role="img"
                        data-testid="save-for-later-button-icon-empty-rectangle-lg"
                        stroke="grey"
                        stroke-width="1.5px" 
                        fill={inWishlistItems ? 'grey' : 'none' }
                      >
                        <path d="M12 22.03c-.2 0-.4-.08-.54-.23l-8.55-8.9a6 6 0 0 1 .21-8.5 5.96 5.96 0 0 1 4.3-1.65
                        6 6 0 0 1 4.59 2.31 5.93 5.93 0 0 1 4.57-2.3c1.61-.03 3.13.55 4.3 1.65
                        a5.96 5.96 0 0 1 1.87 4.21 5.96 5.96 0 0 1-1.66 4.29l-8.55 8.89
                        c-.14.15-.34.23-.54.23z"/>
                      </svg>
                  </span>
                  <p>save</p>
                </div>
              </div>
              <div className="exchange-and-return-policy">
                  <p>Return & Exchange Policy</p>
              </div>
              <div className="extra-info">
                <div className="exchange-wrp">
                  <img 
                    alt="Returns and Exchanges icon" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    src="https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/blt04f8f7d64d1db416/68c064b7a726cb461ce1866f/cambios_y_devoluciones.svg?width=20&amp;height=20&amp;auto=avif&amp;quality=75&amp;format=pjpg" 
                  />
                  <p>Exchanges and returns</p>
                </div>
                <div className="warranty-wrp">
                  <img 
                    alt="Warranty icon" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    src="https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/blt8fb388b04e59a85b/68c064b711efa927545ca169/garantia.svg?width=20&amp;height=20&amp;auto=avif&amp;quality=75&amp;format=pjpg" 
                  />
                  <p>warranty</p>
                </div>
                <div className="secure-wrp">
                  <img 
                    alt="Your purchase is secure icon" 
                    loading="lazy" 
                    width="20" 
                    height="20" 
                    src="https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/blt2fdb46e92a8cf21e/68c064b79594d8198d3f1591/compra_segura.svg?width=20&amp;height=20&amp;auto=avif&amp;quality=75&amp;format=pjpg" 
                  />
                  <p>Your purchase is secure</p> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-page-bottom">
               <p></p>
                <div className="title"> <h4>Description and specifications</h4></div>
                <div className="description-and-spec-wrp">
                     <div className="description-wrp">
                         <h3>Description</h3>
                            <p>Turn any space into your office or entertainment center with the new Lenovo Ideatab 11 Tablet , which includes its versatile Keyboard and precise Pen Plus.</p>
                           <p>Its stunning 11-inch IPS display with a resolution of 2560 x 1600 delivers unparalleled image quality for work, watching series, or designing. Experience superior performance for even the most demanding multitasking thanks to its impressive 8GB of LPDDR4x RAM and ultra-fast 128GB of UFS 2.2 storage, powered by a robust MediaTek Helio G88 processor .</p>
                           <p>It comes equipped with the Android 15 operating system, guaranteeing access to the latest features and top-notch security. It also features USB-C ports, a 3.5 mm headphone jack, and a card slot.</p>
                           <p>Capture your moments with its 8 MP rear camera and make crystal-clear video calls with the 5 MP front camera. All this with the peace of mind of a 7040 mAh battery that keeps you going all day.</p>
                      </div>
                     <div className="specification-wrp">
                      <h3>Specifications</h3>

                      <table className="chakra-table css-5605sr">
                        <tbody className="css-1ykoahy">
                            <tr className="css-0">
                              <td className="css-xumdn4">Processor Series</td>
                              <td className="css-k2m69w">Helium G88</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">RAM</td>
                              <td className="css-k2m69w">8 GB</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Screen resolution</td>
                              <td className="css-k2m69w">2560 x 1600</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Storage capacity / Internal memory</td>
                              <td className="css-k2m69w">128 GB</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Expandable memory</td>
                              <td className="css-k2m69w">Up to 1 TB</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Charging Interface</td>
                              <td className="css-k2m69w">USB-C</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Rear camera</td>
                              <td className="css-k2m69w">8 mp</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Brand</td>
                              <td className="css-k2m69w">Lenovo</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Warranty</td>
                              <td className="css-k2m69w">12 months</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Processor</td>
                              <td className="css-k2m69w">MediaTek</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Front camera</td>
                              <td className="css-k2m69w">5 mp</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Screen size</td>
                              <td className="css-k2m69w">11 inches</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Model #</td>
                              <td className="css-k2m69w">IDEATAB 11+KEYBOARD</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Operating System</td>
                              <td className="css-k2m69w">Android</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Battery capacity</td>
                              <td className="css-k2m69w">7,040 mAh</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Operating system version</td>
                              <td className="css-k2m69w">15</td>  
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Model</td>
                              <td className="css-k2m69w">Ideatab 11 + Keyboard</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Color</td>
                              <td className="css-k2m69w">Grey</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Product type</td>
                              <td className="css-k2m69w">Tablet</td>
                            </tr>
                            <tr className="css-0">
                              <td className="css-xumdn4">Measures</td>
                              <td className="css-k2m69w">25.4 x 0.6 x 16.6 cm</td>
                            </tr>
                        </tbody>
                      </table>
                      </div>
                </div>
             
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;