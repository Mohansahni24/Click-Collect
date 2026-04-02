import React, {useEffect, useState, useRef} from 'react';
import {useSelector} from 'react-redux';
import {selectAllFurnitureProducts} from '../features/products/productsSlice';
import TopDealsProduct from '../components/UI/TopDeals';



function Furniture(){

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
      
    const allFurniture = useSelector(selectAllFurnitureProducts);
    console.log("allfurrrrrrrrr", allFurniture)

    const [selectedCategory, setSelectedCategory] = useState("all");

    const finalProducts = selectedCategory == "all" ? allFurniture : allFurniture.filter((item) => item.subCategory === selectedCategory);
     
    const itemsRef = useRef(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      
        if (itemsRef.current) {
          itemsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className="furniture-wrp">
      <h2> Furniture</h2>
       <div className="banner">
            <img src="https://ii1.pepperfry.com/assets/e3182847-756a-4f53-b6b1-33da2b0f8336.jpg" alt="" />
       </div>

       <div className="category">
            <h3>Shop By Categories</h3>

            <div className="all-category">
                <div className={`Cat-a all ${selectedCategory === 'all' ? 'active' : ""}`} onClick={() =>  handleCategoryClick("all")}>
                    <img src="https://ii1.pepperfry.com/assets/w23-clip-ctg-all.png" alt="" />
                    <h4>All</h4>
                </div>
                <div className={`Cat-a ${selectedCategory === 'sofa' ? 'active' : ""}`} onClick={() =>  handleCategoryClick("sofa")}>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/1_3602X_110425.jpg" alt="" />
                    <h4>Sofas</h4>
                </div>
                <div className={`Cat-a ${selectedCategory === 'beds' ? 'active' : ""}`} onClick={() =>  handleCategoryClick("beds")}>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/2_3602X_110425.jpg" alt="" />
                    <h4>Beds</h4>
                </div>

                 <div className={`Cat-a ${selectedCategory === 'recliner' ? 'active' : ""}`} onClick={() =>  handleCategoryClick("recliner")}>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/6_3602X_110425.jpg" alt="" />
                    <h4>Recliners</h4>
                </div>

                <div className={`Cat-a ${selectedCategory === 'table' ? 'active' : ""}`} onClick={() =>  handleCategoryClick("table")}>
                    <img src="http://ii1.pepperfry.com/media/wysiwyg/banners/3_3602X_110425.jpg" alt="" />
                    <h4>Tables</h4>
                </div>
               
                <div className={`Cat-a ${selectedCategory === 'wardobes' ? 'active' : ""}`} onClick={() =>  handleCategoryClick("wardobes")}>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/8_3602X_110425.jpg" alt="" />
                    <h4>Wardobes</h4>
                </div>
               
            </div>
       </div>

       <div className="curated-category"  ref={itemsRef}>
            <h4>Curated Categories</h4>
            <div className="main">

            <div className="img-wrp">
                <img src="https://ii1.pepperfry.com/assets/9960f011-cdf5-48f2-bd43-48e5b736b522.jpg" alt="" />
            </div>
            <div className="img-wrp">
                <img src="https://ii1.pepperfry.com/assets/e6f424fa-fbe7-48fe-a3b7-e4d6a36a13f1.jpg" alt="" />
            </div>
            </div>
       </div>

       <div className="all-items" >
            <TopDealsProduct   topDealProducts={finalProducts } />
        
       </div>

    </div>
  )
}


export default Furniture;
