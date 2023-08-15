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
    document.body.querySelector("#tn1").classList.remove("active");
    document.body.querySelector("#tn2").classList.remove("active");
    document.body.querySelector("#tn3").classList.remove("active");
    document.body.querySelector("#tn4").classList.remove("active");
    const url = "/assets/images/image-product-";
    if (activeThumbnails.tn1 === true) {
      document.body.querySelector("#tn1").classList.add("active");
      imageRef.current.src = `${url}1.jpg`;
      setActiveTnNumber(0);
    } else if (activeThumbnails.tn2 === true) {
      document.body.querySelector("#tn2").classList.add("active");
      imageRef.current.src = `${url}2.jpg`;
      setActiveTnNumber(1);
    } else if (activeThumbnails.tn3 === true) {
      document.body.querySelector("#tn3").classList.add("active");
      imageRef.current.src = `${url}3.jpg`;
      setActiveTnNumber(2);
    } else if (activeThumbnails.tn4 === true) {
      document.body.querySelector("#tn4").classList.add("active");
      imageRef.current.src = `${url}4.jpg`;
      setActiveTnNumber(3);
    }
    console.log(activeThumbnails);
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
