import React from 'react';

function BenefitsBar() {
  const benefits = [
    {
      title: "Secure shipping",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt81f564913ca7e893/bltbcb085cd34d1446e/68158481473f11d280acafa5/envio_gratis.png?quality=75&format=pjpg&auto=avif",
   
      alt: "Secure shipping icon"
    },
    {
      title: "Up to 2 years warranty",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt670214de05ad4e21/blt13b2742bb1e93183/66fbe22d6626798560cb4711/garantia.svg?quality=75&format=pjpg&auto=avif",
      link: "https://centrodeayuda.coppel.com/s/cambios-devoluciones-y-garantias",
      alt: "Icon for up to 2 years warranty"
    },
    {
      title: "Exclusive products",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt670214de05ad4e21/blt62ecdac92e0d8b19/66fbcc328883c9198d4cb8ae/productos-exclusivos.svg?quality=75&format=pjpg&auto=avif",
  
      alt: "Icon for exclusive products"
    },
    {
      title: "Easy and secure purchase",
      icon: "https://imagescontentstack.coppel.com/v3/assets/blt670214de05ad4e21/blt8bea9b24acaacaf9/66fbe20abb7fe52d898b7320/compra-fácil-y-segura.svg?quality=75&format=pjpg&auto=avif",
   
      alt: "Icon for easy and secure purchase"
    }
  ];

  return (
    <div className="benefits-wrapper" role="region" aria-label="Shopping benefits">
      <div className="benefits-container" id="benefitsBlock" data-testid="benefitsBlock">
        <div data-testid="benefits-of-buying" className="benefits-content">
          <a 
           
            className="benefits-header-link"
            data-testid="benefits-heading"
          >
            <h3 className="benefits-title">
              Benefits of shopping at <span>click</span> <span>& collect</span>
            </h3>  
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="benefits-arrow"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M9.18296 5.22781C9.50243 4.92406 10.0204 4.92406 10.3399 5.22781L16.5755 11.1565C16.5756 11.1566 16.5758 11.1568 16.5759 11.1569C16.6923 11.2675 16.7847 11.3989 16.8478 11.5434C16.9109 11.6882 16.9434 11.8433 16.9434 12C16.9434 12.1567 16.9109 12.3118 16.8478 12.4566C16.7847 12.6011 16.6923 12.7325 16.5759 12.8431C16.5758 12.8432 16.5756 12.8434 16.5755 12.8435L10.3399 18.7722C10.0204 19.0759 9.50243 19.0759 9.18296 18.7722C8.86349 18.4685 8.86349 17.976 9.18296 17.6723L15.1489 12L9.18296 6.32775C8.86349 5.53155 8.86349 6.02401 9.18296 5.22781Z" 
                fill="#1C42E8"
              />
            </svg>
          </a>
          
          <ul 
            role="list" 
            className="benefits-list"
            aria-label="List of shopping benefits"
          >
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                data-testid={`benefit-item-${index}`}
                className="benefit-item"
              >
                <a 
                
                  title={benefit.title}
                  className="benefit-link"
                >
                  <img 
                    alt={benefit.alt}
                    src={benefit.icon}
                    className="benefit-icon"
                    aria-hidden="true"
                  />
                  <span className="benefit-text">{benefit.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BenefitsBar;