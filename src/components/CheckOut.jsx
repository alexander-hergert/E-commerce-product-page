import React from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context";

/****************** STYLES ******************/

const Styles = styled.div`
  display: flex;
  align-items: center;

  .cart-container {
    display: flex;
    align-items: center;
  }

  .cart-symbol {
    display: grid;
    place-items: center;
    background-color: hsl(26, 100%, 55%);
    width: 1.5rem;
    height: 1rem;
    position: relative;
    right: 1rem;
    top: -0.75rem;

    border-radius: 10px;
    color: white;
  }

  input {
    width: 1.5rem;
  }

  img {
    width: 2rem;
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
