import React from 'react';
import beatheadphoneImg from '../../assets/images/beat-headphone.webp';
import {useNavigate} from "react-router-dom";



function TwoColumnWrap({product}) {
  const navigate = useNavigate();

  return (
    <div className="two-column-wrap" >
      <div className="img-column" >
          <img src={product.images[0]} alt="" />
      </div>
      <div className="content-column" >
          <div className="content-wrp" >
              <h2>{product.name}</h2>
              <p>Only at Click & Collect</p>
            </div>
            <div className="btn-wrp" >
                <button className="shop-now-btn btn-secondary" onClick={() => navigate(`/product/${product.id}`)}>Shop Now</button>
             </div>      
      </div>
    </div>
  );
}


export default TwoColumnWrap;