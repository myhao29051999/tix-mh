import React from "react";
import { Image } from "antd";

// components
import { ModalTrailer } from "components";

// styles
import { TixCarouselStyle } from "./style";

export default function TixCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  return (
    <TixCarouselStyle {...settings}>
      <div className="tix-carousel__item">
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/Package-U22.png"
          alt="img-carousel"
        />
      </div>
      <div className="tix-carousel__item">
        <Image
          preview={false}
          width="100%"
          src="https://www.bhdstar.vn/wp-content/uploads/2018/03/App.jpg"
          alt="img-carousel"
        />
        {/* <ModalTrailer videoId={"8YjFbMbfXaQ"} /> */}
      </div>
     
    </TixCarouselStyle>
  );
}
