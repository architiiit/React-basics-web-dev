import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {

  //useState is used to update UI on event happening
  //state change happens on component instance basis

  //HW1--Why const??
  const [title, setTitle] =  useState(props.title);//useState argument takes the initialisation value fot the variable
  //(value of variable , function for updating the value)


  function clickHandler() {
    //title = "Popcorn";
    setTitle("Popcorn");
    //HW2--Instantly happens or takes some time??
    console.log("button clicked");
  }
  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add to Cart</button>
    </Card>
  );
}

export default ProductItem;