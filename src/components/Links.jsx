import React, { useRef, useEffect } from "react";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.div`
  transition: all 1s;
  padding: 1rem;
  background-color: white;
  min-width: 70%;
  position: fixed;
  top: 0;
  left: -100%;
  z-index: 100;
  height: 100vh;

  input {
    margin-bottom: 2rem;
  }

  li {
    margin: 1.5rem 0;
    font-weight: bold;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    background: none;
    position: static;
    min-width: 0;

    input {
      display: none;
    }
    menu {
      display: flex;
      gap: 1rem;

      a {
        color: hsl(219, 9%, 45%);
      }
    }
  }
`;

const ModalOverlay = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 50;
`;

/****************** COMPONENTS ******************/

const Links = ({ isMenuOpen, setIsMenuOpen }) => {
  const overlayRef = useRef();
  const menuRef = useRef();

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      overlayRef.current.style.visibility = "visible";
      menuRef.current.style.left = 0;
    } else {
      menuRef.current.style.left = "-100%";
      overlayRef.current.style.visibility = "hidden";
    }
  }, [isMenuOpen]);

  return (
    <ModalOverlay ref={overlayRef}>
      <Styles ref={menuRef}>
        <input
          type="image"
          src="assets/images/icon-close.svg"
          alt="close-icon"
          onClick={handleClose}
        />
        <menu>
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Men</a>
          </li>
          <li>
            <a href="">Women</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </menu>
      </Styles>
    </ModalOverlay>
  );
};

export default Links;
