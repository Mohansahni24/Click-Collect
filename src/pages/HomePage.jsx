import React, {useState, useEffect, useRef} from 'react';
// import {useSelector} from "react-redux";
// import {selectBannerSliderProducts} from '../features/products/productsSlice';
import Slider from '../components/UI/Slider';
import TopDeals from '../components/UI/TopDeals';
import AllDepartment from '../components/UI/AllDepartment';
import BenefitsBar from '../components/UI/BenifitsBar';
import  TwoColumnWrap  from '../components/UI/TwoColumnWrap';
import ChooseYourFavorite from '../components/UI/ChooseYourFavorite';
import SliderWithSideBanner from '../components/UI/SliderWithSideBanner';
import NewArrivals from '../components/UI/NewArrivals';
import DealOfTheDay from '../components/UI/DealOfTheDay';
import { useSelector } from 'react-redux';
import { selectTopDealsProducts } from '../features/products/productsSlice';


function HomePage() {

    const topDealProducts = useSelector(selectTopDealsProducts);

  return (
    <div className="HomePage ">
      <div className="home-wrp">
         <div className="Sliders-wrapper">
          <Slider />
         </div>
         <div className="marquee-banner">
                <marquee behavior="scroll" direction="left">Top Brands, Upto 80% OFF Only on Click & Collect</marquee>
         </div>
         <div className="all-departments"> 
            <AllDepartment />
         </div>
          <div className="choose-your-favorite">
            <ChooseYourFavorite/>
         </div>
         <div className="benifits-bar">

          <BenefitsBar />
         </div>
         <div className="new-arrivals-section">
          <NewArrivals />
         </div>

         <div className="top-delas-wrapper"> 
          <TopDeals  topDealProducts={topDealProducts}/>
         </div>
         <div className="two-columns-aid">
          <TwoColumnWrap />
         </div>
          <div className="slider-with-side-banner">
            <SliderWithSideBanner />
          </div> 
          <div className="deal-of-the-day-section">
            <DealOfTheDay />
          </div>
          
      </div>
    </div>
  );
}

export default HomePage;

const styles = {
  sliderContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  slider: {
    display: "flex",
  },
  slide: {
    height: "400px",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  // Dots styles
  dotsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "20px",
    left: 0,
    right: 0,
    gap: "10px",
    zIndex: 10,
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    padding: 0,
    cursor: "pointer",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    transition: "background-color 0.3s ease",
  },
  activeDot: {
    backgroundColor: "white",
    transform: "scale(1.2)",
  },
};