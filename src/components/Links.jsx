import React from "react";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.div`
  padding: 1rem;
  background-color: gray;
  min-width: 70%;
  position: fixed;
  top: 0;
  display: none;

  li {
    margin: 1rem 0;
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

/****************** COMPONENTS ******************/

const Links = () => {
  return (
    <Styles>
      <input type="image" src="assets/images/icon-close.svg" alt="close-icon" />
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
  );
};

export default Links;
