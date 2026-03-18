import React from 'react';

const Card = ({ children, className = '', hoverable = false, ...props }) => {
  const baseClasses = 'bg-white rounded-lg border border-gray-200';
  const hoverClass = hoverable ? 'hover:shadow-lg transition-shadow duration-300' : '';
  
  const classes = `${baseClasses} ${hoverClass} ${className}`.trim().replace(/\s+/g, ' ');
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardBody = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`px-6 py-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;