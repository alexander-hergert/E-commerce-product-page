import React from "react";
import Links from "./Links";
import CheckOut from "./CheckOut";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  justify-content: space-between;
  border-bottom: 1px solid hsl(220, 14%, 75%);

  .logo-container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (min-width: 800px) {
    padding: 0 1rem;
    .left-nav-container {
      display: flex;
      gap: 2rem;
    }
    .menu-button {
      display: none;
    }
  }
`;

/****************** COMPONENTS ******************/

const NavSection = () => {
  return (
    <Styles>
      <div className="left-nav-container">
        <div className="logo-container">
          <img
            className="menu-button"
            src="/assets/images/icon-menu.svg"
            alt="menu-icon"
          />
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <Links />
      </div>
      <CheckOut />
    </Styles>
  );
};

export default NavSection;
