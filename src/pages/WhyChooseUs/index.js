import React from "react";
import HandPickedImage from "../../Assets/images/handpickedHotels.png";
import BestPriceImage from "../../Assets/images/bestPrice.png";
import WorldClassServiceImage from "../../Assets/images/worldClassService.png";
import Image from "next/image";
import { Grid, Typography } from "@mui/material";
import style from "./style.module.css"

const WhyChooseUs = () => {
  let whyChooseArray = [
    {
      title: "Handpicked Hotels",
      subTitle:
        "Are you looking for Hotels? Book the best hotels and Resorts. We book all types of hotels in all category in India.",
      image: HandPickedImage,
    },
    {
      title: "Why choose us",
      subTitle:
        "Choosing our travel company ensures a seamless journey with expertly crafted itineraries, personalized experiences, and a commitment to customer satisfaction. We prioritize your travel needs, offering a blend of convenience, reliability, and memorable adventures that set us apart in the travel industry.",
      image: BestPriceImage,
    },
    {
      title: "Value of Your Money",
      subTitle:
        "Our travel company prioritizes delivering exceptional value for your money. We offer competitive pricing without compromising on the quality of services. From cost-effective packages to transparent pricing, we strive to ensure that every penny spent translates into a rewarding and memorable travel experience, making your investment with us worthwhile.",
      image: WorldClassServiceImage,
    },
  ];
  return (
    <Grid style={{ padding: 48, }}>
      <div
        style={{
          fontSize: 24,
          fontWeight: "bold",

        }}
      >
        <Typography variant="h4" className={style.heading} style={{ color: "#0f2454" }}>WHY <span className={style.uniqueText}>
          CHOOSE
        </span> US ?</Typography>
      </div>
      <Grid md={12} xs={12} sm={12} container item style={{ display: "flex" }}>
        {whyChooseArray.map((obj, index) => (
          <Grid md={4} key={index} item container style={{ justifyContent: "center",padding:16 }}>
         <Image
              src={obj.image}
              alt="Vercel Logo"
              style={{
                height: 200,
                width: "100%",
                objectFit: "contain",
               
              }}
            
            />
           
            <span style={{height:"100%"}}>
              <Typography variant="h6" className={style.heading_text}>
                {obj.title}
              </Typography>
              <Typography className={style.subHeading}>
                {obj.subTitle}
              </Typography>
            </span>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default WhyChooseUs;
