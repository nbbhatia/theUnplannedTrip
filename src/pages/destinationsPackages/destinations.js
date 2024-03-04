import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import PkgeImage1 from "../../Assets/images/imagesofharidwar/haridwar6.jpg";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import PkgeImage6 from "../../Assets/images/p-6.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import style from "./style.module.css"

const destinations = () => {
  let arrayOfDestinations = [
    { packageName: "Haridwar", imageUrl: PkgeImage1, gridValue: 6, NoOfTours: 5 },
    {
      packageName: "Rishikesh",
      imageUrl: PkgeImage2,
      gridValue: 6,
      NoOfTours: 7,
    },
    {
      packageName: "Massorie",
      imageUrl: PkgeImage3,
      gridValue: 6,
      NoOfTours: 4,
    },
    {
      packageName: "Dehradun",
      imageUrl: PkgeImage4,
      gridValue: 6,
      NoOfTours: 4,
    },
    // {
    //   packageName: "Haryana",
    //   imageUrl: PkgeImage5,
    //   gridValue: 4,
    //   NoOfTours: 4,
    // },
    // {
    //   packageName: "Dehradun",
    //   imageUrl: PkgeImage6,
    //   gridValue: 8,
    //   NoOfTours: 4,
    // },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: theme.palette.text.secondary,
  }));


  return (
    <div style={{ display: "block", padding: 48 }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "block", paddingBottom: 24 }}>
          <Typography className={style.heading}>
            Top Destinations
          </Typography>
          <Typography variant="h4" className={style.subHeading}  >
            <span className={style.uniqueText} >
              Popular
            </span> Destinations
          </Typography>
        </div>

        <div style={{ paddingRight: 24 }}>
          <Button
            variant="contained"
            size="md"
            className={style.viewPackageText}
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600, background: "#2095AE", margin: "24px 0" }}
          >
            <Link href={"/destinationsPackages"} style={{ color: "#fff", textDecoration: "none" }}> View All Destinations</Link>
            {/* <a href={"/cityWiseDestinations"} style={{ color: "#fff", textDecoration: "none" }}> View Packages</a> */}
          </Button>
        </div>

      </div>

      <Grid container spacing={2} >



        {arrayOfDestinations.map((item, key) => (
          <Grid item md={item.gridValue} key={key}>
            <Link href={"/subDestinations"}>
              <div className={style.destinationImage_div}>
                <div className={style.destinationImage} />
                <Image
                  src={item.imageUrl}
                  alt="Vercel Logo"
                  className={style.destination_image}
                  priority
                />

                <div className={style.image_text}>
                  <span style={{ display: "block", padding: 16 }}>
                    <Typography variant="h2" className={style.destinationName}>{item.packageName}</Typography>
                    <Typography variant="body2" className={style.noOfTour}>
                      {item.NoOfTours} Tours
                    </Typography>
                    <Typography variant="body2" className={style.noOfTour}>
                      Starting @ INR 500/-
                    </Typography>
                  </span>
                </div>
              </div>
              {/* </Item> */}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default destinations;
