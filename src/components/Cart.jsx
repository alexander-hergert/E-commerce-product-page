import React from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context";

/****************** STYLES ******************/

const Styles = styled.div`
  position: absolute;
  width: 25rem;
  height: 30vh;
  z-index: 20;
  top: 13%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 10px 15px hsl(220, 14%, 75%);

  .cart {
    font-weight: bold;
    border-bottom: 1px solid hsl(220, 14%, 75%);
    padding: 1.5rem 2rem;
  }

  .empty-cart {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 50%;
    color: hsl(219, 9%, 45%);
  }

  img {
    width: 4rem;
    border-radius: 5px;
  }

  .cart-container {
    padding: 1rem 2rem;
  }

  .empty-text {
    font-weight: bold;
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
  const { isCartOpen, items, setItems, isInCart, setIsInCart, setStock } =
    useGlobalContext();

  const handleDelete = () => {
    setItems(0);
    setIsInCart(false);
    setStock(5);
  };

  return (
    <>
      {isCartOpen && (
        <Styles>
          <div className="cart">Cart</div>
          {isInCart === false ? (
            <div className="empty-cart">
              <p className="empty-text">Your cart is empty.</p>
            </div>
          ) : (
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
                      {`$125.00 x ${items} `}
                      <span>{`$${items * 125}`}</span>
                    </p>
                  </div>
                  <input
                    type="image"
                    src="assets/images/icon-delete.svg"
                    alt="delete-icon"
                    onClick={handleDelete}
                  />
                </div>
                <div>
                  <button>Checkout</button>
                </div>
              </div>
            </div>
          )}
        </Styles>
      )}
    </>
  );
};

export default Cart;
