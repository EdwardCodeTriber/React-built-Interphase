import React from 'react';
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="product-page">
      <div className="product-info">
        <h2 className="product-title">Wood Candy Sofa</h2>
        <p className="product-description">
          Yonoh Creative Studio from Spain has won many design awards such as IF and red dot. 
          Complexity and simplicity are not Yonoh's definition of design.
        </p>
        <h3 className="product-price">R399.00</h3>
        <button className="buy-now-button">Buy now</button>
      </div>
      
      <div className="product-image-container">
        <img
          src="picture-back.png" 
          alt="Wood Candy Sofa"
          className="product-image"
        />
        <button className="add-to-cart-button">Add to cart</button>
      </div>
    </div>
  );
};

export default Home;
