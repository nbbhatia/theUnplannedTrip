import React, { useState, useEffect } from "react";
import Layout from "../page";
import Image from "next/image";
import PackageCards from "../PackagesCards";
import style from "./style.module.css";

import { Grid, Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../../items";
import { useRouter } from "next/router";
import ButtonContainer from "../Reusable/Button";
import PopularDestination from "../destinationsPackages/destinations";
import IteniaryDetails from "../cityWiseDestinations";
import AccordianComponent from "../Reusable/Accordian"
const subDestionations = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 4024, min: 1024 },
      items: 3,
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
  const { city } = router.query;

  const [destinationsData, setDestinationsData] = useState(null);

  useEffect(() => {
    data
      .filter((item) => item.place === city)
      .map((dataObj) => setDestinationsData(dataObj)); // [ 2, 4, 6 ]
  }, [city]);

  return (
    <Layout style={{ margin: 0 }}>
      <Image
        src={destinationsData?.bannerImage}
        alt="Vercel Logo"
        style={{ height: "80vh", width: "100%", objectFit: "cover" }}
        priority
      />

      <Grid
        md={12}
        sm={12}
        xs={12}
        item
        style={{
          padding: "0 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div>
          <Typography variant="h6" className={style.subHeading}>
            {destinationsData?.place}
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.text}
          </Typography>
        </div>
      </Grid>
      {destinationsData?.historyContent && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="body1" className={style.body1}>
            History of {destinationsData?.place}
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.historyContent}
          </Typography>
        </Grid>
      )}
       {destinationsData?.thingsToDo && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="h6" className={style.body1}>
            Things to Do In Chopta
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.thingsToDoText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.thingsToDo?.map((card, index) => (
              <Grid
                md={3}
                xs={6}
                sm={3}
                item
                key={index}
                style={{ display: "flex", paddingBottom: 32 }}
              >
                <PackageCards
                  title={card.packageName}
                  packgImage={card.imageUrl}
                  subText={card.subText}
                />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      )}
      {destinationsData?.attaractions && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="h6" className={style.subHeading}>
            Attaractions
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.attaractionsText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.attaractions?.map((card, index) => (
              <Grid
                md={3}
                xs={6}
                sm={3}
                item
                key={index}
                style={{ display: "flex", paddingBottom: 32 }}
              >
                <PackageCards
                  title={card.packageName}
                  packgImage={card.imageUrl}
                  subText={card.subText}
                />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      )}
      {destinationsData?.temples && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="h6" className={style.subHeading}>
            Temples
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.templeText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.temples?.map((card, index) => (
              <Grid
                md={3}
                xs={6}
                sm={3}
                item
                key={index}
                style={{ display: "flex", paddingBottom: 32 }}
              >
                <PackageCards
                  title={card.packageName}
                  packgImage={card.imageUrl}
                  price={card.price}
                  subText={card.subText}
                />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      )}
      {destinationsData?.hotels && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
          <Typography variant="h6" className={style.subHeading}>
            Find <span className={style.uniqueText}>Best places</span> to stay
            in Haridwar
          </Typography>
          <Typography className={style.subText}>
            {destinationsData?.templeText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.hotels.map((card, index) => (
              <Grid
                md={3}
                xs={6}
                sm={3}
                item
                key={index}
                style={{ display: "flex", paddingBottom: 32 }}
              >
                <PackageCards
                  title={card.packageName}
                  packgImage={card.imageUrl}
                  price={card.price}
                  subText={card.subText}
                />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      )}
      {destinationsData?.visitPlaces && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "48px" }}>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" className={style.subHeading}>
              Find <span className={style.uniqueText}>Best places</span> to
              Visit in {destinationsData?.place}
            </Typography>
            <ButtonContainer />
          </Grid>

          <Typography className={style.subText}>
            {destinationsData?.templeText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.visitPlaces.map((card, index) => (
              <Grid
                md={3}
                xs={6}
                sm={3}
                item
                key={index}
                style={{ display: "flex", paddingBottom: 32 }}
              >
                <PackageCards
                  placeType={card.placeType}
                  title={card.packageName}
                  packgImage={card.imageUrl}
                  price={card.price}
                  subText={card.subText}
                />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      )}
      {destinationsData?.hillStations && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "48px" }}>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" className={style.subHeading}>
              Find <span className={style.uniqueText}>Hill Stations</span> to
              Visit in {destinationsData?.place}
            </Typography>
            <ButtonContainer />
          </Grid>

          <Typography className={style.subText}>
            {destinationsData?.hillStationsText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.hillStations.map((card, index) => (
              <Grid
                md={3}
                xs={6}
                sm={3}
                item
                key={index}
                style={{ display: "flex", paddingBottom: 32 }}
              >
                <PackageCards
                  placeType={card.placeType}
                  title={card.packageName}
                  packgImage={card.imageUrl}
                  price={card.price}
                  subText={card.subText}
                />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      )}
      {destinationsData?.religiousPackages && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "48px" }}>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" className={style.subHeading}>
              Find <span className={style.uniqueText}>Religious</span> to Visit
              in {destinationsData?.place}
            </Typography>
            <ButtonContainer />
          </Grid>

          <Typography className={style.subText}>
            {destinationsData?.templeText}
          </Typography>
          <Carousel showThumbs={false} responsive={responsive}>
            {destinationsData?.religiousPackages.map((card, index) => (
              <Grid
                md={3}
                xs={6}
                sm={3}
                item
                key={index}
                style={{ display: "flex", paddingBottom: 32 }}
              >
                <PackageCards
                  placeType={card.placeType}
                  title={card.packageName}
                  packgImage={card.imageUrl}
                  price={card.price}
                  subText={card.subText}
                />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      )}
      {destinationsData?.popularPackages && (
        <Grid md={12} xs={12} sm={12} item style={{ padding: "48px" }}>
          <PopularDestination data={destinationsData?.popularPackages} />
        </Grid>
      )}
      <Grid md={12} xs={12} sm={12} item style={{ padding: "0 24px" }}>
            <Typography variant="h6" className={style.subHeading}>
              {destinationsData?.place} Geography & Climate
            </Typography>
            <div style={{ marginTop: 24 }}>
              {destinationsData?.geographyClimate?.map((geographyClimateValue, index) =>
              (
                <Box sx={{md:6,xs:12,sm:6}}>
                <AccordianComponent 
                  title={geographyClimateValue.key} 
                  value={geographyClimateValue?.value} 
               />
                </Box>
              ))}

            </div>

          </Grid>
      <IteniaryDetails/>
    </Layout>
  );
};

export default subDestionations;
