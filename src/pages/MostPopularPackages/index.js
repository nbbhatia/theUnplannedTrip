import React from "react";
import Image from "next/image";
import BGImage from "../../Assets/images/destBg.jpg";
import PackageCards from "./PackagesCards";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MostPopularPackages = () => {
  let Cards = [1, 2, 3, 4, 5, 6, 7, 8];
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 200,
          textAlign: "center",
        }}
      >
        <p>
          Find a Tour by <br />{" "}
          <span
            style={{
              color: "black",
              fontSize: 32,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Destinations
          </span>
        </p>
      </div>
      <div style={{ background: "skyBlue", height: 500 }}>
        <Image
          src={BGImage}
          alt="Vercel Logo"
          style={{
            height: 500,
            width: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
          priority
        />
        <div style={{display:"flex",justifyContent:"center",padding:24}}>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              //   height: 200,
              textAlign: "center",
                position:"absolute",
                color: "white",
            //   zIndex:999
            }}
          >
            <p>
            Take a Look at Our
              <br />{" "}
              <span
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                MOST POPULAR TOURS
              </span>
            </p>
          </div>
          </div>
        <div style={{ marginLeft: 48, marginRight: 48 }}>
        
          <Carousel responsive={responsive}>
            {Cards.map((card, index) => (
              <div key={index} style={{ marginTop: 100 }}>
                <PackageCards />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MostPopularPackages;
