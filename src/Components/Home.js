import React from "react";
import "../styles/Home.css";

const Home = () => {

  const clicked = () => {
    console.log("Clicked");
  };
  
  return (
    <div className="product-page">
      <div className="product-info">
        <h2 className="product-title">Wood Candy Sofa</h2>
        <p className="product-description">
          Yonoh Creative Studio from Spain has won many design awards such as IF
          and red dot. Complexity and simplicity are not Yonoh's definition of
          design.
        </p>
        <h3 className="product-price">R399.00</h3>
        <button className="buy-now-button" onClick={clicked}>
          Buy now
        </button>
      </div>

      <div className="product-image-container">
        <img
          src="picture-back.png"
          alt="Wood Candy Sofa"
          className="product-image"
        />
      </div>
    </div>
  );
};

export default Home;
