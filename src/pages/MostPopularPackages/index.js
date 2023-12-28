import React from "react";
import Image from "next/image";
import BGImage from "../../Assets/images/destBg.jpg";
import PackageCards from "../PackagesCards";
import Carousel from "react-multi-carousel";
import PkgeImage1 from "../../Assets/images/p-1.png";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";

const MostPopularPackages = () => {
  let Cards = [
    {
      title: "Handpicked Hotels",
      image: PkgeImage1,
      price: 200
    },
    {
      title: "Handpicked Hotels",
      image: PkgeImage2,
      price: 300
    },
    {
      title: "Handpicked Hotels",
      image: PkgeImage3,
      price: 700
    },
    {
      title: "Handpicked Hotels",
      image: PkgeImage4,
      price: 800
    },
    {
      title: "Handpicked Hotels",
      image: PkgeImage3,
      price: 700
    },
    {
      title: "Handpicked Hotels",
      image: PkgeImage4,
      price: 800
    },

  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 4024, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };
  return (
    // <div
    //   style={{
    //     position: "relative",
    //     background: "lightGreen",
    //     height: 500,
    //     padding: 32,
    //   }}
    // >
    //   <Carousel
    //     swipeable={false}
    //     draggable={false}
    //     showDots={true}
    //     responsive={responsive}
    //     ssr={true} // means to render carousel on server-side.
    //     infinite={false}
    //     keyBoardControl={true}
    //     containerClass="carousel-container"
    //      style={{ display: "contents" }}
    //  customRightArrow={<CustomRightArrow />}
    //   >
    //     <div style={{ display: "flex" }}>
    //       {Cards.map((card, index) => (
    //         <div key={index}>
    //           <PackageCards />
    //         </div>
    //       ))}
    //     </div>
    //   </Carousel>
    // </div>
    <div>
      <div style={{ display: "block", paddingBottom: 24, padding: 48 }}>
        <Typography variant="body1" style={{ color: "#2095AE", letterSpacing: 10 }}>
          CHOOSE YOUR PLACE
        </Typography>
        <Typography variant="h4" style={{ color: "#2095AE" }}>
          <span style={{ color: "#0f2454", fontWeight: "bold" }}>
            Popular
          </span> <span style={{ letterSpacing: 10 }}> TOURS</span>
        </Typography>
      </div>
      <div style={{ background: "#2095AE", height: "100%",padding:48 }}>
      <Carousel responsive={responsive}>
            {Cards.map((card, index) => (
              <div key={index} >
                <PackageCards title={card.title} packgImage={card.image} price={card.price} />
              </div>
            ))}
          </Carousel>
        <div >

         
        </div>
      </div>
    </div>
  );
};

export default MostPopularPackages;
