import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context";

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

    img:hover {
      opacity: 0.5;
    }

    .active {
      opacity: 0.5;
      border: 2px solid hsl(26, 100%, 55%);
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

/****************** COMPONENTS ******************/

const ViewSection = () => {
  const [activeThumbnails, setActiveThumbnails] = useState({
    tn1: true,
    tn2: false,
    tn3: false,
    tn4: false,
  });
  const imageRef = useRef();
  const { setIsModal, setActiveTnNumber } = useGlobalContext();

  const handleModal = () => {
    setIsModal(true);
  };

  const handleThumbnail = (e) => {
    const id = e.target.id;
    const value = {
      tn1: false,
      tn2: false,
      tn3: false,
      tn4: false,
      [id]: true,
    };
    setActiveThumbnails(value);
  };

  useEffect(() => {
    //Choose thumbnail and add styles
    const url = "/assets/images/image-product-";
    for (let i = 0; i < 4; i++) {
      document.body.querySelector(`#tn${i + 1}`).classList.remove("active");
      if (activeThumbnails[`tn${i + 1}`] === true) {
        document.body.querySelector(`#tn${i + 1}`).classList.add("active");
        imageRef.current.src = `${url}${i + 1}.jpg`;
        setActiveTnNumber(i);
      }
    }
  }, [activeThumbnails]);

  return (
    <>
      <Styles>
        <img
          ref={imageRef}
          src="/assets/images/image-product-1.jpg"
          alt="main-image"
          onClick={handleModal}
        />
        <div>
          <img
            id="tn1"
            src="assets/images/image-product-1-thumbnail.jpg"
            alt="thumbnail-1"
            onClick={handleThumbnail}
          />
          <img
            id="tn2"
            src="assets/images/image-product-2-thumbnail.jpg"
            alt="thumbnail-2"
            onClick={handleThumbnail}
          />
          <img
            id="tn3"
            src="assets/images/image-product-3-thumbnail.jpg"
            alt="thumbnail-3"
            onClick={handleThumbnail}
          />
          <img
            id="tn4"
            src="assets/images/image-product-4-thumbnail.jpg"
            alt="thumbnail-4"
            onClick={handleThumbnail}
          />
        </div>
      </Styles>
    </>
  );
};

export default ViewSection;
