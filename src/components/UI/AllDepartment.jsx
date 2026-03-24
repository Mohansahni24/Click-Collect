import React from 'react';
import {Link} from "react-router-dom"; 


function AllDepartment() {
    
    
     

  const departments = [
    {
      name: "Offers",
      discount: "Up to 50%",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/blt4257082fd900284e/686c1b7716748225e21b19ca/oferta-icono_red.svg?quality=75&format=pjpg&auto=avif",
      link: "/hot-deals"
    },
    {
      name: "Shoes",
      discount: "Up to 40%",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/bltb7f8b583f3296813/684875cafcc17b3d70fd2ff9/shoes-category.png?quality=75&format=pjpg&auto=avif",
      link: "/shoes"
    },
    {
      name: "Women",
      discount: "Up to 40%",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/blt92b8d3f05770adc6/684875a524f13bc5b2d5a2ba/women-category.png?quality=75&format=pjpg&auto=avif",
      link: "/women"
    },
    {
      name: "Men",
      discount: "Up to 40%",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/bltf468ec8b48e33836/684875359621d957564d442b/men-category.png?quality=75&format=pjpg&auto=avif",
      link: "/men"
    },
    {
      name: "Home and Furniture",
      discount: "Up to 30%",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/blt8d81ac1d364f2770/6848751bb0379122122b5811/home-category.png?quality=75&format=pjpg&auto=avif",
      link: "/furniture"
    },
    {
      name: "Toyverse",
      discount: "Up to 50%",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/blt4e3805231c5d1a26/6848754b45f69acb0c938e6e/toys-category.png?quality=75&format=pjpg&auto=avif",
      link: "/toys"
    },
   
  
  ];

  return (
    <div className="department_list">
        <h2>All departments</h2>
      <div className="departments-carousel" >
        <div className="glider-contain">
          <div id=":r2:" className="glider">
            <div className="glider-track">
              {departments.map((dept, index) => (
                
                <Link to={`${dept.link}`} key={dept.name || index}>
                  <div className="chakra-stack ">
                    <div className="css-1tzla9f">
                      <div className="css-1nlups8">
                        <img 
                          alt={`${dept.name} icon`} 
                          loading="eager" 
                          fetchpriority="low" 
                          aria-hidden="true" 
                          src={dept.icon} 
                        />
                      </div>
                    </div>
                    <p className="chakra-text ">
                      {dept.name}
                    </p>
                    <span className="css-1mqzzxp">
                      {dept.discount}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllDepartment;