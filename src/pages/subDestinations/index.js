import React from "react";
import Layout from "../page";
import Image from "next/image";
import PackageCards from "../PackagesCards"
import BGImage from "../../Assets/images/imagesofharidwar/omPull.jpeg";
import PkgeImage1 from "../../Assets/images/p-1.png";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import PkgeImage6 from "../../Assets/images/p-5.png";
import style from "./style.module.css";
import { Grid, Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const subDestionations = () => {
  let arrayOfSubDestinations = [
    { packageName: "Haridwar", imageUrl: PkgeImage6, price: 500, NoOfTours: 5 },
    {
      packageName: "Rishikesh",
      imageUrl: PkgeImage2,
      price: 500,
      NoOfTours: 7,
    },
    {
      packageName: "Dehradun",
      imageUrl: PkgeImage3,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Almora",
      imageUrl: PkgeImage4,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Badrinath",
      imageUrl: PkgeImage5,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Badrinath",
      imageUrl: PkgeImage5,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Kedarnath",
      imageUrl: PkgeImage5,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Nainital",
      imageUrl: PkgeImage1,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Pauri",
      imageUrl: PkgeImage6,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Kotdwar",
      imageUrl: PkgeImage2,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Lansdowne",
      imageUrl: PkgeImage3,
      price: 500,
      NoOfTours: 4,
    }, {
      packageName: "Gangotri",
      imageUrl: PkgeImage4,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "Yamnoutri",
      imageUrl: PkgeImage5,
      price: 500,
      NoOfTours: 4,
    },
    {
      packageName: "DevPrayag",
      imageUrl: PkgeImage6,
      price: 500,
      NoOfTours: 4,
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
    <Layout style={{ margin: 0 }}>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "80vh", width: "100%", objectFit: "cover" }}
        priority
      />

      <Grid md={12} sm={12} xs={12} item container style={{ padding: 48, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Typography variant="h6" className={style.heading}>
          Haridwar
        </Typography>
        <Typography className={style.subText}>
          A tour of the temples in Haridwar, India, can be a spiritually enriching experience. Haridwar is
          one of the holiest cities in India, located in the state of Uttarakhand along the banks of the sacred
          Ganges River. It is known for its ghats, temples, and religious significance. Here&#39;s a list of some
          of the prominent temples you can visit on a Haridwar temples tour:
          A tour of the temples in Haridwar, India, can be a spiritually enriching experience. Haridwar is
          one of the holiest cities in India, located in the state of Uttarakhand along the banks of the sacred
          Ganges River. It is known for its ghats, temples, and religious significance. Here&#39;s a list of some
          of the prominent temples you can visit on a Haridwar temples tour:
        </Typography>
        {/* {arrayOfSubDestinations.map((card, index) => (
          <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
            <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} isSubDestinations={true} />
          </Grid>
        ))} */}


        {/* </div> */}

      </Grid>

      <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
        <Typography variant="h6" className={style.subHeading}>
          Attractions
        </Typography>
        <Carousel showThumbs={false} responsive={responsive}>
          {arrayOfSubDestinations.map((card, index) => (
            <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
              <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} />
            </Grid>
          ))}
        </Carousel>
      </Grid>
      <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
        <Typography variant="h6" className={style.subHeading}>
          Temples
        </Typography>
        <Carousel showThumbs={false} responsive={responsive}>
          {arrayOfSubDestinations.map((card, index) => (
            <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
              <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} />
            </Grid>
          ))}
        </Carousel>
      </Grid>
      <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
        <Typography variant="h6" className={style.subHeading}>
          Find <span className={style.uniqueText}>
            Best places
          </span> to stay in Haridwar
        </Typography>
        <Carousel showThumbs={false} responsive={responsive}>
          {arrayOfSubDestinations.map((card, index) => (
            <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
              <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} />
            </Grid>
          ))}
        </Carousel>
      </Grid>
    </Layout>
  );
}

export default subDestionations;
