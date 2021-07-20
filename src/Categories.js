import React from 'react';

const Categories = ({filterProducts, categories}) => {
  console.log(categories)
  
  return (
    <div className="btn-container">
    {categories.map((item, key)=>{
    return(
      <button key={key} 
      className="filter-btn" 
      onClick={()=>filterProducts(item)}>{item}</button>
    )
  })}
    </div>
    
  )
};

export default Categories;
