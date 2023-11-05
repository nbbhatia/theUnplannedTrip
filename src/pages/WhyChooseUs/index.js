import React from "react";
import HandPickedImage from "../../Assets/images/handpickedHotels.png";
import BestPriceImage from "../../Assets/images/bestPrice.png";
import WorldClassServiceImage from "../../Assets/images/worldClassService.png";
import Image from "next/image";
import { Typography } from "@mui/material";

const WhyChooseUs = () => {
  let whyChooseArray = [
    {
      title: "Handpicked Hotels",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
      image: HandPickedImage,
    },
    {
      title: "Handpicked Hotels",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
      image: BestPriceImage,
    },
    {
      title: "Handpicked Hotels",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.",
      image: WorldClassServiceImage,
    },
  ];
  return (
    <div style={{ padding: 48 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 200,
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        <p>WHY CHOOSE US ?</p>
      </div>
      <div style={{ display: "flex" }}>
        {whyChooseArray.map((obj, key) => (
          <div style={{justifyContent:"center"}}>
            <Image
              src={obj.image}
              alt="Vercel Logo"
              style={{
                height: 200,
                width: "100%",
                objectFit: "contain",
              }}
              priority
            />
            <span>
              <Typography style={{ textAlign: "center" }}>
                {obj.title}
              </Typography>
              <Typography style={{ textAlign: "center" }}>
                {obj.subTitle}
              </Typography>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
