import React, { useState, useRef, useEffect } from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../context";

/****************** STYLES ******************/

const Styles = styled.section`
  padding: 1rem;
  min-width: 20rem;
  max-width: 35rem;

  img {
    width: 100%;
    border-radius: 14px;
    cursor: pointer;
  }

  div {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;

    div {
      max-width: 6rem;
      width: 20%;
      cursor: pointer;
      img {
        width: 100%;
        pointer-events: none;
      }
    }

    div.active {
      border: 2px solid hsl(26, 100%, 55%);
      border-radius: 16px;
    }

    div.active img {
      opacity: 0.5;
    }

    img:hover {
      opacity: 0.5;
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

  const thumbnails = [1, 2, 3, 4];
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
          {thumbnails.map((number) => {
            return (
              <div key={number} id={`tn${number}`} onClick={handleThumbnail}>
                <img
                  src={`assets/images/image-product-${number}-thumbnail.jpg`}
                  alt={`thumbnail-${number}`}
                />
              </div>
            );
          })}
        </div>
      </Styles>
    </>
  );
};

export default ViewSection;
