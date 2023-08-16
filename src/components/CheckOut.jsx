import React from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context";

/****************** STYLES ******************/

const Styles = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;

  .cart-container {
    display: flex;
    align-items: center;
  }

  .cart-symbol {
    display: grid;
    place-items: center;
    background-color: hsl(26, 100%, 55%);
    font-size: 0.75rem;
    width: 1rem;
    height: 0.75rem;
    position: absolute;
    bottom: 1.75rem;
    left: 0.75rem;
    border-radius: 10px;
    color: white;
  }

  input {
    width: 1.5rem;
  }

  input:hover {
    filter: brightness(0) saturate(100%) invert(0%) sepia(6%) saturate(7476%)
      hue-rotate(328deg) brightness(103%) contrast(106%);
  }

  img {
    width: 2rem;
    cursor: pointer;
  }

  img:hover {
    border: 2px solid hsl(26, 100%, 55%);
    border-radius: 50%;
  }

  @media screen and (min-width: 800px) {
    img {
      width: 3rem;
    }
  }
`;

/****************** COMPONENTS ******************/

const CheckOut = () => {
  const { isCartOpen, setIsCartOpen, items, isInCart } = useGlobalContext();

  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <Styles>
      <div className="cart-container">
        <input
          type="image"
          src="assets/images/icon-cart.svg"
          onClick={handleCart}
        />
        {items > 0 && isInCart && <div className="cart-symbol">{items}</div>}
      </div>
      <img src="/assets/images/image-avatar.png" alt="avatar" />
    </Styles>
  );
};

export default CheckOut;
