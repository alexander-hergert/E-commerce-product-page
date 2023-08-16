import React from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context";

/****************** STYLES ******************/

const Styles = styled.section`
  padding: 1rem 1.5rem;

  h2 {
    color: hsl(26, 100%, 55%);
    font-size: 1rem;
    text-transform: uppercase;
  }

  input:hover,
  button:hover {
    opacity: 0.5;
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
    .previous-price {
      color: hsl(220, 14%, 75%);
      text-decoration: line-through;
    }
  }

  .change-buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: hsl(223, 64%, 98%);
    padding: 0 1.5rem;
    border-radius: 10px;

    p {
      font-weight: bold;
    }
  }

  .cart-button-container {
    img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
        hue-rotate(93deg) brightness(103%) contrast(103%);
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    color: white;
    background-color: hsl(26, 100%, 55%);
    border-radius: 10px;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 20px 15px hsl(25, 100%, 94%);
  }

  @media screen and (min-width: 800px) {
    width: 40vw;

    .price-outer-container {
      display: block;
    }
    .previous-price {
      color: hsl(220, 14%, 75%);
      text-decoration: line-through;
      margin-top: 0;
    }

    .buttons-container {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
      max-width: 35rem;

      .change-buttons-container {
        width: 30%;
        min-width: 6rem;
      }
      .cart-button-container {
        width: 70%;
      }
    }
  }
`;

/****************** COMPONENTS ******************/

const ProductSection = () => {
  const { items, setItems, setIsInCart } = useGlobalContext();
  const customerLimit = 5;

  const handleDecrease = () => {
    if (items > 1) {
      setItems((prev) => prev - 1);
    } else if (items === 1) {
      setItems((prev) => prev - 1);
      setIsInCart(false);
    }
  };

  const handleIncrease = () => {
    if (items < customerLimit) {
      setItems((prev) => prev + 1);
    }
  };

  const handleSendToCart = () => {
    if (items > 0) {
      setIsInCart(true);
    }
  };

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
        <p className="previous-price">$250.00</p>
      </div>
      <div>
        <div className="buttons-container">
          <div className="change-buttons-container">
            <input
              type="image"
              src="assets/images/icon-minus.svg"
              alt="icon-minus"
              onClick={handleDecrease}
            />
            <p>{items}</p>
            <input
              type="image"
              src="assets/images/icon-plus.svg"
              alt="icon-plus"
              onClick={handleIncrease}
            />
          </div>
          <button className="cart-button-container" onClick={handleSendToCart}>
            <img src="assets/images/icon-cart.svg" alt="icon-cart" />
            <p> Add to cart</p>
          </button>
        </div>
      </div>
    </Styles>
  );
};

export default ProductSection;
