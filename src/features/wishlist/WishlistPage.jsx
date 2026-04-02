import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "./wishlistSlice";
import { useWishlist } from "../..//hooks/useWishlist";
import { useCart } from "../../hooks/useCart";
import emptyWishlistImage from "../../assets/images/empty-wishlist-icon.png";
import "./WishlistPage.css";

function WishlistPage() {
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);
  const {  removeItemFromWishlist } = useWishlist();
  const { addItemToCart} = useCart();
  console.log(wishlistItems);

  const handleMoveToCart = (item)  =>{
       addItemToCart(item);
       removeItemFromWishlist(item);
  }

  return (
    <div className="wishlist-page">
      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <div>
            <img src={emptyWishlistImage} alt="" />
          </div>

          <h2>Your wishlist is empty</h2>
          <p>Looks like you haven't added anything to your wishlist yet</p>

          <button
            onClick={() => navigate("/")}
            className="continue-shopping-btn"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <h2 className="wishlist-page-title">My Wishlist</h2>

          <div className="allCards">
            {wishlistItems.map((item, index) => (
              <div className="card" key={item.id || index} onClick={() => navigate(`/product/${item.id}`)}>
                <div className="img-wrp">
                  <img
                    src={item.images?.[0] || "/placeholder.png"}
                    alt={item.name}
                  />
                </div>

                <div className="content-wrp">
                  <h3 className="title">{item.name}</h3>

                  <div className="price-wrp">
                    <p>
                      <span className="discounted-price">
                        Rs {item.price || 299}
                      </span>
                      <span className="original-price">
                        Rs {item.originalPrice || 499}
                      </span>
                      <span className="discount">
                        ({item.discount || 40}% OFF)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="Move-to-bag-btn" onClick={(e) => {
                   e.stopPropagation();
                  handleMoveToCart(item)
                }}>
                  <button className="btn-tertiary">Move to Bag</button>
                </div>

                <div className="remove-btn"  onClick= {(e) =>{
                    e.stopPropagation();
                   removeItemFromWishlist(item)
                }
                   }>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-12h-14v12zm2-10h10v10h-10v-10zM15 5v-2h-6v2h-6v2h18v-2zM9 12h2v6h-2zM13 12h2v6h-2z" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
