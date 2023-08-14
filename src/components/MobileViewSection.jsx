import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from "styled-components";
import Slider from "react-slick";

/****************** STYLES ******************/
const Styles = styled.div`
  .slick-prev,
  .slick-next {
    position: absolute;
    z-index: 10;
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 50%;
  }

  .slick-prev {
    left: 3rem;
  }

  .slick-next {
    right: 3rem;
  }

  .slick-prev:before {
    content: url("/assets/images/icon-previous.svg");
  }
  .slick-next:before {
    content: url("/assets/images/icon-next.svg");
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

/****************** COMPONENTS ******************/

const MobileViewSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Styles>
      <Slider {...settings}>
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
  );
};

export default MobileViewSection;
