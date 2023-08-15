import React from "react";
import { styled } from "styled-components";

/****************** STYLES ******************/

const Styles = styled.section`
  padding: 1rem;

  img {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
  }

  div {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
    img {
      width: 20%;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

/****************** COMPONENTS ******************/

const ViewSection = () => {
  return (
    <>
      <Styles>
        <img src="/assets/images/image-product-1.jpg" alt="main-image" />
        <div>
          <img
            src="assets/images/image-product-1-thumbnail.jpg"
            alt="thumbnail-1"
          />
          <img
            src="assets/images/image-product-2-thumbnail.jpg"
            alt="thumbnail-2"
          />
          <img
            src="assets/images/image-product-3-thumbnail.jpg"
            alt="thumbnail-3"
          />
          <img
            src="assets/images/image-product-4-thumbnail.jpg"
            alt="thumbnail-4"
          />
        </div>
      </Styles>
    </>
  );
};

export default ViewSection;
