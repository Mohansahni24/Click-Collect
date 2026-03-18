import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../features/cart/cartSlice';

function ProductCardTypeA({ title, products }) {

    const navigate = useNavigate();
    const { addItemToCart } = useCart();
    const allCartItems = useSelector(selectCartItems);

    const [visibleCount, setVisibleCount] = useState(10);

    const handleAddToCart = (product) => {
        const isItemInCart = allCartItems.find(
            (cartItem) => cartItem.product.id === product.id
        );

        if (!isItemInCart) {
            addItemToCart(product);
        } else {
            alert("Item already in cart");
        }
    };

    const handleCardClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 10);
    };

    return (
        <div className="choose-your-favorite-wrap">
            <h2>{title}</h2>

            <div className="cards-wrp">
                {products.slice(0, visibleCount).map((item) => {

                    const isItemInCart = allCartItems.find(
                        (cartItem) => cartItem.product.id === item.id
                    );

                    return (
                        <div
                            className="card"
                            onClick={() => handleCardClick(item.id)}
                            key={item.id}
                        >
                            <div className="image-wrp">
                                <img src={item.images[0]} alt="" />
                            </div>

                            <div className="content-wrp">
                                <h3>{item.name}</h3>

                                <p className="productrating">
                                    {item.rating}
                                    <img
                                        src="https://img.icons8.com/?size=100&id=19417&format=png&color=000000"
                                        alt=""
                                    />
                                </p>

                                <div className="price">
                                    <span className="discountedPrice">{item.price}</span>
                                    <span className="originalPrice">{item.originalPrice}</span>
                                    <span className="discountPercent">
                                        - {(((item.originalPrice - item.price) / item.originalPrice) * 100).toFixed(1)}%
                                    </span>
                                </div>

                                <button
                                    onClick={(e) => {
                                        handleAddToCart(item);
                                        e.stopPropagation();
                                    }}
                                    className="btn-tertiary"
                                >
                                    {isItemInCart ? "Added ✓" : "Add +"}
                                </button>
                            </div>

                            {item.badge && item.badge.toString().trim() && (
                                <div className="badge">
                                    <span>
                                        {item.badge
                                            .toString()
                                            .trim()
                                            .replace(/\b\w/g, c => c.toUpperCase())}
                                    </span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {visibleCount < products.length && (
                <div className="show-more-wrap">
                    <button className="show-more-btn" onClick={handleShowMore}>
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductCardTypeA;