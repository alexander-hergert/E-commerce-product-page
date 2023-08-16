import React from "react";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: flex;
    padding: 1.5rem;
    min-width: 70%;
    menu {
      display: flex;
      li {
        margin: 0 1rem;
      }

      a {
        color: hsl(219, 9%, 45%);
        position: relative;
      }
      a:hover {
        color: black;
      }

      a:hover::after {
        content: "";
        position: absolute;
        left: 0;
        top: 70px;
        width: 100%;
        height: 5px;
        background-color: hsl(26, 100%, 55%);
      }
    }
  }
`;

/****************** COMPONENTS ******************/

const LinksDesktop = () => {
  return (
    <Styles>
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

export default LinksDesktop;
