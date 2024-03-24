import React, { useState, useEffect } from "react";
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
import {data as data} from "../items"
import { useRouter } from "next/router";

const subDestionations = () => {
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

let router = useRouter();
 const { city } = router.query

  const [destinationsData, setDestinationsData] = useState()

  useEffect(() => {
    data.filter((item) => item.place === city).map((dataObj) => setDestinationsData(dataObj)); // [ 2, 4, 6 ]
  }, [city])

console.log("destinationsData",destinationsData)
  return (
    <Layout style={{ margin: 0 }}>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "80vh", width: "100%", objectFit: "cover" }}
        priority
      />

      <Grid md={12} sm={12} xs={12} item style={{ padding: 48, display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <div>
          <Typography variant="h6" className={style.subHeading}>
            {destinationsData?.place}
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.text}
          </Typography>
        </div>
      </Grid>

      {destinationsData?.attaractions &&
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="h6" className={style.subHeading}>
            Attaractions
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.attaractionsText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.attaractions?.map((card, index) => (
              <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
                <PackageCards title={card.packageName} packgImage={card.imageUrl} subText={card.subText}/>
              </Grid>
            ))}
          </Carousel>
        </Grid>}
      {destinationsData?.temples &&
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="h6" className={style.subHeading}>
            Temples
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.templeText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.temples?.map((card, index) => (
              <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
                <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} subText={card.subText}/>
              </Grid>
            ))}
          </Carousel>
        </Grid>}
      {destinationsData?.hotels &&
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="h6" className={style.subHeading}>
            Find <span className={style.uniqueText}>
              Best places
            </span> to stay in Haridwar
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.templeText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.hotels.map((card, index) => (
              <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
                <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} subText={card.subText}/>
              </Grid>
            ))}
          </Carousel>
        </Grid>
      }
    </Layout>
  );
}

export default subDestionations;
