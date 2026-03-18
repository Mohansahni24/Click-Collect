// import React from 'react';

// const Button = ({ 
//   children, 
//   variant = 'primary',
//   size = 'medium',
//   fullWidth = false,
//   disabled = false,
//   loading = false,
//   onClick,
//   className = '',
//   type = 'button',
//   ...props 
// }) => {
//   const baseClasses = 'inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
//   const variants = {
//     primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
//     secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
//     danger: 'bg-danger text-white hover:bg-danger-dark focus:ring-danger',
//     success: 'bg-success text-white hover:bg-success-dark focus:ring-success',
//     outline: 'bg-transparent border border-primary text-primary hover:bg-primary-light focus:ring-primary',
//     'outline-secondary': 'bg-transparent border border-secondary text-secondary hover:bg-secondary-light focus:ring-secondary',
//   };
  
//   const sizes = {
//     small: 'px-3 py-1.5 text-sm',
//     medium: 'px-4 py-2 text-base',
//     large: 'px-6 py-3 text-lg',
//   };
  
//   const widthClass = fullWidth ? 'w-full' : '';
//   const disabledClass = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';
  
//   const classes = `
//     ${baseClasses}
//     ${variants[variant]}
//     ${sizes[size]}
//     ${widthClass}
//     ${disabledClass}
//     ${className}
//   `.trim().replace(/\s+/g, ' ');

//   return (
//     <button
//       type={type}
//       className={classes}
//       onClick={onClick}
//       disabled={disabled || loading}
//       {...props}
//     >
//       {loading && (
//         <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
//           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//         </svg>
//       )}
//       {children}
//     </button>
//   );
// };

// export default Button;