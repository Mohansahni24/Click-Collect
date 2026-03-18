import React, { useState, useEffect } from 'react';
import  logo from '../../assets/images/logo-transparent.png';
import { Link } from 'react-router-dom';
import {selectCartItems} from '../../features/cart/cartSlice';
import {selectWishlistItems} from '../../features/wishlist/wishlistSlice';
import {useSelector} from 'react-redux';
import  OrderIcon from '../../assets/images/orders-icon.svg';
import CouponIcon from '../../assets/images/Coupons-icon.svg';
import GiftCardIcon from '../../assets/images/GiftCard-icon.svg';
import ProfileIcon from '../../assets/images/profile-icon.svg';
import flameIcon from '../../assets/images/flame-icon.png';


function Navbar() {
    const cartItems = useSelector(selectCartItems);
    const wishlistItems = useSelector(selectWishlistItems);


     
  
return (
  <div>
      <div className="header cont-wrp">
           <div className="container" > 
                <div className="header-tp"> 
                    <div className="logo"> <Link  to="/"> <img src={logo}/> </Link> </div> 
                    <div className="search-bar"> 
                            <form id="gnav-search" className="global-enhancements-search-nav wt-position-relative wt-display-flex-xs" method="GET" action="/uk/search.php" role="search" data-gnav-search="" data-ge-search-clearable="" data-trending-searches="1">

                                <div className="search-container" data-id="search-bar">
                                    <div className="wt-input-btn-group global-enhancements-search-input-btn-group emphasized_search_bar emphasized_search_bar_grey_bg search-bar-container" data-id="search-suggestions-trigger">
                                        <input id="global-enhancements-search-query" data-id="search-query" data-search-input="" type="text" name="search_query" class="wt-input wt-input-btn-group__input" placeholder="Search for anything" value="" autocomplete="off" autocorrect="off" autocapitalize="off" role="combobox" aria-autocomplete="both" aria-controls="global-enhancements-search-suggestions" aria-expanded="false"/>
                                        
                                        <button type="submit" className="wt-input-btn-group__btn global-enhancements-search-input-btn-group__btn" value="Search" aria-label="Search" data-id="gnav-search-submit-button">   
                                            <span className="wt-icon wt-nudge-b-2 wt-nudge-r-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 19a8.46 8.46 0 0 0 5.262-1.824l4.865 4.864 1.414-1.414-4.865-4.865A8.5 8.5 0 1 0 10.5 19m0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"></path></svg></span>
                                        </button>
                                    </div>
                                   
                                </div>

                                <input id="search-js-router-enabled" type="hidden" value="true" />
                                <input type="hidden" value="all" name="search_type" id="search-type"></input>
                            
                        </form>
                    </div>
                    <div className="icons-and-singin">
                        <ul>
                            <li className="sign-in-txt">
                               <Link to="/login" >Sign In</Link>
                            </li>
                            <li className="wish-list-icon">
                                <Link to="/wishList">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3 0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61"></path></svg>
                                     {wishlistItems.length > 0 &&  <span className="wishlist-count-bubble">{wishlistItems.length}</span>}
                                   
                                </Link>
                            </li>
                            <li className="icon-item">
                                <Link to="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a5 5 0 0 0-5 5v1H2.447l2.4 12h14.306l2.4-12H17V8a5 5 0 0 0-5-5m0 2a3 3 0 0 0-3 3v1h6V8a3 3 0 0 0-3-3M6.486 19l-1.6-8h14.227l-1.6 8z"></path></svg>
                                    {cartItems.length > 0 && <span className="cart-count-bubble">{cartItems.length}</span>}
                                </Link>
                            </li>
                            <li className="account-icon">
                                <Link to="/login"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"/></svg></Link>
                                  <div className="User-Submenu">
                            <h3>Your Account</h3>

                            <ul>
                                <li><Link to="/profile" disabled={true}><img src={ProfileIcon} alt="" /> My Profile(Comming Soon)</Link></li>
                                <li><Link to="/my-orders" ><img src={OrderIcon} alt="" /> My Orders</Link></li>
                                <li><Link to="/coupons" disabled={true}><img src={CouponIcon} alt="" /> Coupons(Comming Soon)</Link></li>
                                <li><Link to="/gift-cards" disabled={true}><img src={GiftCardIcon} alt="" /> Gift Cards(Comming Soon)</Link></li>
                            </ul>
                         </div>   
                            </li>
                        </ul>
                        
                     
                    </div>
                </div>
                <div className="header-btm"> 
                    <div className="spacer-left"> </div>
                   <div className="nav-links">
                       <ul>
                            <li><Link to="/hot-deals" >Hot Deal <img src={flameIcon} alt="" /></Link></li>
                            <li><Link to="/accessories" >Accessories</Link></li>
                            <li><Link to="/clothing" >Clothing</Link></li>
                            <li><Link to="/electronics" >Electronics</Link></li>  
                            <li className="book"><Link to="/books" >Books</Link></li>      
                            <li><Link to="/toys-games" >Toys & Games</Link></li>       
                       </ul>
                   </div>
                     <div className="spacer-right">
                        </div>
                </div>
          </div>
      </div>
  </div>
)
}

export default Navbar;