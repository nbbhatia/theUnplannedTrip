import React from "react";
import Image from "next/image";
import BGImage from "../../Assets/images/destBg.jpg";
import PackageCards from "../PackagesCards";
import Carousel from "react-multi-carousel";
import PkgeImage1 from "../../Assets/images/hotel1.jpeg";
import PkgeImage2 from "../../Assets/images/hotel2.jpeg";
import PkgeImage3 from "../../Assets/images/hotel3.jpeg";
import PkgeImage4 from "../../Assets/images/hotel4.jpeg";
import PkgeImage5 from "../../Assets/images/p-5.png";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@mui/material";
import style from "./style.module.css"

const MostPopularPackages = () => {
  let Cards = [
    {
      title: "Hotel Anil",
      image: PkgeImage1,
      price: 200
    },
    {
      title: "Hotel Shivlinga",
      image: PkgeImage2,
      price: 300
    },
    {
      title: "Hotel Mahima",
      image: PkgeImage3,
      price: 700
    },
    {
      title: "Hotel Knaygoh Khar",
      image: PkgeImage4,
      price: 800
    },
    {
      title: "Hotel Shikhar",
      image: PkgeImage3,
      price: 700
    },
    {
      title: "GMVN Tourist Bungalow",
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

  return (
   
    <div>
      <div  style={{ display: "block", paddingBottom: 24, padding: 48 }}>
        <Typography className={style.heading}>
          CHOOSE YOUR PLACE
        </Typography>
        <Typography className={style.subHeading}>
          <span className={style.uniqueText}>
            Popular
          </span> <span style={{ letterSpacing: 10 }}> TOURS</span>
        </Typography>
      </div>
      <div style={{ background: "#2095AE", height: "100%",padding:48 }}>
      <Carousel showThumbs={false} responsive={responsive}>
            {Cards.map((card, index) => (
              <div key={index}>
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
