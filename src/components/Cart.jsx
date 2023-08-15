import React from "react";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.div`
  display: none;
  position: absolute;
  width: 25rem;
  height: 30vh;
  z-index: 20;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px hsl(220, 14%, 75%);

  .cart {
    font-weight: bold;
    border-bottom: 1px solid hsl(220, 14%, 75%);
    padding: 1.5rem 2rem;
  }

  img {
    width: 4rem;
    border-radius: 5px;
  }

  .cart-container {
    padding: 1rem 2rem;
  }

  .cart-infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    p {
      color: hsl(219, 9%, 45%);
    }

    span {
      color: black;
      font-weight: bold;
    }
  }

  button {
    width: 100%;
    padding: 1rem 0;
    color: white;
    background-color: hsl(26, 100%, 55%);
    border: none;
    border-radius: 10px;
  }

  @media screen and (min-width: 800px) {
    left: 80%;
  }
`;

/****************** COMPONENTS ******************/

const Cart = () => {
  return (
    <Styles>
      <div className="cart">Cart</div>
      <div className="cart-container">
        <div>
          <div className="cart-infos">
            <img
              src="assets/images/image-product-1-thumbnail.jpg"
              alt="thumbnail-1"
            />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                {`$125.00 x ${3}`}
                <span> $375.00</span>
              </p>
            </div>
            <input
              type="image"
              src="assets/images/icon-delete.svg"
              alt="delete-icon"
            />
          </div>
          <div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Cart;
