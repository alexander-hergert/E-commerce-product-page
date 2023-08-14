import React from "react";
import Carousell from "./Carousell";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.section`
  padding: 1rem;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

/****************** COMPONENTS ******************/

const ViewSection = () => {
  return (
    <>
      <Styles>
        ViewSection
        <Carousell />
      </Styles>
    </>
  );
};

export default ViewSection;
