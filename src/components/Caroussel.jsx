import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGlobalContext } from "../context";
/****************** STYLES ******************/

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

const Styles = styled.section`
  position: absolute;
  width: 25%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .close {
    text-align: right;
    img {
      cursor: pointer;
      width: 1rem;
    }
  }

  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 20;
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 50%;
  }

  .slick-dots {
    width: 90%;
    position: static;
    display: flex !important;
    justify-content: space-between;
    margin-top: 1rem;

    .slick-active {
      position: relative;
      div {
        width: 3rem;
        height: 3rem;
        border-radius: 5px;
        border: 1px solid hsl(26, 100%, 55%);
      }

      div::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.75);
        pointer-events: none;
        border-radius: 5px;
      }
    }
  }

  .slick-thumb {
    li {
      margin: 0;
    }
    div {
      width: 3rem;
      height: 3rem;
      border-radius: 5px;
    }
  }

  .slick-prev:before {
    content: url("/assets/images/icon-previous.svg");
  }
  .slick-next:before {
    content: url("/assets/images/icon-next.svg");
  }

  img {
    width: 100%;
    border-radius: 15px;
  }

  @media screen and (min-width: 800px) {
  }
`;
/****************** COMPONENT ******************/
const Caroussel = () => {
  const { isModal, setIsModal, activeTnNumber } = useGlobalContext();
  const baseUrl = "assets/images";

  const sliderRef = useRef();

  const handleClose = () => {
    setIsModal(false);
  };

  useEffect(() => {
    if (isModal && sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickGoTo(activeTnNumber);
      }, 100);
    }
  }, [isModal]);

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <div
            style={{
              position: "relative",
              backgroundImage: `url(${baseUrl}/image-product-${
                i + 1
              }-thumbnail.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </a>
      );
    },
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {isModal && (
        <ModalOverlay>
          <Styles>
            <div className="close">
              <img
                src="assets/images/icon-close.svg"
                alt="icon-close"
                onClick={handleClose}
              />
            </div>
            <Slider {...settings} ref={sliderRef}>
              <div>
                <img src="assets/images/image-product-1.jpg" alt="product-1" />
              </div>
              <div>
                <img src="assets/images/image-product-2.jpg" alt="product-2" />
              </div>
              <div>
                <img src="assets/images/image-product-3.jpg" alt="product-3" />
              </div>
              <div>
                <img src="assets/images/image-product-4.jpg" alt="product-4" />
              </div>
            </Slider>
          </Styles>
        </ModalOverlay>
      )}
    </>
  );
};

export default Caroussel;
