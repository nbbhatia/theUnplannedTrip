import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PackageImage1 from "./../../../Assets/images/p-1.png";
import PackageImage2 from "./../../../Assets/images/p-2.png";
import PackageImage3 from "./../../../Assets/images/p-3.png";
import PackageImage4 from "./../../../Assets/images/p-4.png";
import PackageImage5 from "./../../../Assets/images/p-5.png";
import PackageImage6 from "../../../Assets/images/p-6.png";
import { Grid } from "@mui/material";
import Image from "next/image";
const CarouselComponent = () => {
  let regionDisplay = [
    {
      url: PackageImage1,
      name: "North India",
      totalPackages: 200,
    },
    {
      url: PackageImage2,
      name: "South India",
      totalPackages: 200,
    },
    {
      url: PackageImage3,
      name: "West India",
      totalPackages: 200,
    },
    {
      url: PackageImage4,
      name: "East India",
      totalPackages: 200,
    },
    {
      url: PackageImage5,
      name: "Centeral India",
      totalPackages: 200,
    },
    {
      url: PackageImage6,
      name: "North East India",
      totalPackages: 200,
    },
  ];
  return (
    <Grid md={12} xs={12} sm={12} item container justifyContent="center">
      {regionDisplay.map((region, index) => (
        <Carousel>
          <div>
            {/* <img src={region.url} alt="regionImage" style={{height:200,width:200}}/> */}
            <Image
              src={region.url}
              alt="regionImage"
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
              priority
            />
            <p className="legend">{region.name}</p>
          </div>
        </Carousel>
      ))}
    </Grid>
  );
};

export default CarouselComponent;
