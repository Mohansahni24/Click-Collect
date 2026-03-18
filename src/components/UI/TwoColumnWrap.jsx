import React from 'react';
import beatheadphoneImg from '../../assets/images/beat-headphone.webp';

function TwoColumnWrap() {
  return (
    <div className="two-column-wrap" >
      <div className="img-column" >
          <img src={beatheadphoneImg} alt="" />
      </div>
      <div className="content-column" >
          <div className="content-wrp" >
              <h2>Beats Studio Pro in black/gold</h2>
              <p>Only at Click & Collect</p>
            </div>
            <div className="btn-wrp" >
                <button className="shop-now-btn btn-secondary" >Shop Now</button>
             </div>      
      </div>
    </div>
  );
}


export default TwoColumnWrap;