import React, { useState, useEffect } from "react";
import Layout from "../page";
import Image from "next/image";
import style from "./style.module.css";
import { Grid, Box, Typography, Container, Chip, Rating } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { data } from "../../items";
import { useRouter } from "next/router";
import AccordianComponent from "../Reusable/Accordian";

const SubDestinations = () => {
  const router = useRouter();
  const { city } = router.query;
  const [destData, setDestData] = useState(null);

  const attractionResponsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2.5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1.5 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  useEffect(() => {
    if (city) {
      const found = data.find((item) => item.place.toLowerCase() === city.toLowerCase());
      setDestData(found);
    }
  }, [city]);

  if (!destData) return null;

  return (
    <Layout>
      {/* 1. HERO SECTION - Massive Heading */}
      <div className={style.heroContainer}>
        <Image src={destData.bannerImage} alt={destData.place} layout="fill" objectFit="cover" priority />
        <div className={style.heroOverlay}>
          <Typography variant="h1" className={style.heroTitle}>{destData.place}</Typography>
          <Typography className={style.heroSubtitle}>Explore the soul of Uttarakhand</Typography>
        </div>
      </div>

      <Container maxWidth="xl">
        {/* DESCRIPTION TEXT SECTION */}
        <Box className={style.mainDescriptionSection}>
            <Typography variant="h2" className={style.bigHeading}>
                About <span className={style.uniqueText}>{destData.place}</span>
            </Typography>
            <Typography className={style.descriptionContent}>
                {destData.text}
            </Typography>
        </Box>

        {/* 2. THINGS TO DO - BENTO GRID with Dark Overlays */}
        <Box className={style.sectionSpacing}>
          <div className={style.textCenter}>
            <Typography variant="h2" className={style.bigHeading}>Things to <span className={style.uniqueText}>Experience</span></Typography>
            <Typography className={style.subSectionDescription}>{destData.thingsToDoText}</Typography>
          </div>
          
          <div className={style.bentoGrid}>
            {destData.thingsToDo?.map((item, index) => (
              <div key={index} className={`${style.bentoItem} ${index === 0 ? style.largeBento : ""}`}>
                <Image src={item.imageUrl} alt={item.packageName} layout="fill" objectFit="cover" />
                <div className={style.imageOverlayGradient}></div> {/* Visibility Overlay */}
                <div className={style.bentoContent}>
                  <Typography variant="h4" className={style.cardTitle}>{item.packageName}</Typography>
                  <Typography variant="body1" className={style.cardBodyText}>{item.subText}</Typography>
                </div>
              </div>
            ))}
          </div>
        </Box>

        {/* 3. TOP ATTRACTIONS - Glass Cards with High Contrast */}
        <Box className={style.sectionSpacing}>
          <Typography variant="h2" className={style.bigHeading}>Must-Visit <span className={style.uniqueText}>Spots</span></Typography>
          <Typography className={style.subSectionDescription} sx={{ mb: 4 }}>{destData.attaractionsText}</Typography>
          
          <Carousel responsive={attractionResponsive} infinite itemClass={style.sliderPadding}>
            {destData.attaractions?.map((item, i) => (
              <div key={i} className={style.attractionCard}>
                <Image src={item.imageUrl} alt={item.packageName} layout="fill" objectFit="cover" />
                <div className={style.imageOverlayGradient}></div> {/* Visibility Overlay */}
                <div className={style.attractionGlass}>
                  <Typography variant="h4" fontWeight="bold">{item.packageName}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>{item.subText}</Typography>
                </div>
              </div>
            ))}
          </Carousel>
        </Box>

        {/* 4. HOTELS - Luxury Grid */}
        <Box className={style.sectionSpacing}>
          <Typography variant="h2" className={style.bigHeading} align="center">Premier <span className={style.uniqueText}>Hotels</span></Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {destData.hotels?.map((hotel, i) => (
              <Grid item xs={12} md={6} key={i}>
                <div className={style.hotelCard}>
                  <div className={style.hotelImageContainer}>
                    <Image src={hotel.imageUrl || "/hotel-placeholder.jpg"} alt={hotel.name} layout="fill" objectFit="cover" />
                    <div className={style.imageOverlaySmall}></div>
                    <Chip label={hotel.type || "Luxury"} className={style.hotelChip} />
                  </div>
                  <div className={style.hotelDetails}>
                    <div>
                        <Rating value={5} readOnly size="small" />
                        <Typography variant="h4" className={style.hotelName}>{hotel.name || hotel.packageName}</Typography>
                        <Typography variant="body2" className={style.hotelText}>{hotel.detail}</Typography>
                    </div>
                    <div className={style.hotelPriceRow}>
                      <Typography variant="h5" className={style.uniqueText}>₹4,500 <small>/ night</small></Typography>
                      <button className={style.bookBtn}>Check Availability</button>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
};

export default SubDestinations;