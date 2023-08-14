import React from "react";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.section`
  padding: 1rem;
  h2 {
    color: hsl(26, 100%, 55%);
    font-size: 1rem;
  }

  article {
    color: hsl(219, 9%, 45%);
    line-height: 1.5;
  }

  .price-outer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .price-inner-container {
      display: flex;
      align-items: center;
      gap: 1rem;

      .price {
        font-size: 2rem;
        font-weight: bold;
      }

      .sale {
        color: hsl(26, 100%, 55%);
        font-weight: bold;
        background-color: hsl(25, 100%, 94%);
        width: 3rem;
        text-align: center;
        border-radius: 5px;
      }
    }
  }

  @media screen and (min-width: 800px) {
  }
`;

/****************** COMPONENTS ******************/

const ProductSection = () => {
  return (
    <Styles>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <article>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </article>
      <div className="price-outer-container">
        <div className="price-inner-container">
          <p className="price">$125.00</p>
          <p className="sale">50%</p>
        </div>
        <p>$250.00</p>
      </div>
      <div>
        <div>
          <input
            type="image"
            src="assets/images/icon-minus.svg"
            alt="icon-minus"
          />
          <p>0</p>
          <input
            type="image"
            src="assets/images/icon-plus.svg"
            alt="icon-plus"
          />
        </div>
        <div>
          <img src="assets/images/icon-cart.svg" alt="icon-cart" />
          <button>Add to cart</button>
        </div>
      </div>
    </Styles>
  );
};

export default ProductSection;
