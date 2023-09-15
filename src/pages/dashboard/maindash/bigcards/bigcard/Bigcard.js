import React from 'react';
import './Bigcard.css'; 
const Bigcard = ({ data }) => {
  const calculateDasharray = (percentage) => {
    const circumference = 2 * Math.PI * 42; 
    const dashLength = (percentage / 100) * circumference; 
    const gapLength = circumference - dashLength;
    return `${dashLength} ${gapLength}`;
  };

  return (
    <div className='bigcard'>
      <div className='top-product'>
        <h2 className='card-title'>Top Products</h2>
        <div className='circular-bar'>
          <svg className='progress-ring' width='100' height='100'>
            {data.map((product, index) => (
              <circle
                className='progress-ring-circle'
                key={index}
                stroke={product.color} 
                strokeWidth='8' 
                fill='transparent'
                r='42' 
                cx='50' 
                cy='50' 
                style={{
                  strokeDasharray: calculateDasharray(product.percentage), 
                }}
              />
            ))}
          </svg>
        </div>
      </div>
      <div className='percentages'>
        {data.map((product, index) => (
          <div className='individual' key={index}>
            <p className='product-name'>{product.title}</p>
            <span>{product.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bigcard;
