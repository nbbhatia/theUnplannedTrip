import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import PkgeImage1 from "../../Assets/images/p-1.png";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import PkgeImage6 from "../../Assets/images/p-6.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./index.css";
import Link from "next/link";

const destinations = () => {
  let arrayOfDestinations = [
    { packageName: "Uttarakhand", imageUrl: PkgeImage6, gridValue: 8, NoOfTours: 5 },
    {
      packageName: "Himachal Pardesh",
      imageUrl: PkgeImage2,
      gridValue: 4,
      NoOfTours: 7,
    },
    {
      packageName: "Punjab",
      imageUrl: PkgeImage3,
      gridValue: 4,
      NoOfTours: 4,
    },
    {
      packageName: "Delhi",
      imageUrl: PkgeImage4,
      gridValue: 4,
      NoOfTours: 4,
    },
    {
      packageName: "Haryana",
      imageUrl: PkgeImage5,
      gridValue: 4,
      NoOfTours: 4,
    },
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

      <div style={{ display: "block", paddingBottom: 24 }}>
        <Typography variant="body1" style={{ color: "#2095AE", letterSpacing: 10 }}>
          Top Destinations
        </Typography>
        <Typography variant="h4" style={{ color: "#2095AE" }}>
          <span style={{ color: "#0f2454", fontWeight: "bold" }}>
            Popular
          </span> Destinations
        </Typography>
      </div>

      <Grid container spacing={2} >



        {arrayOfDestinations.map((item, key) => (
          <Grid item md={item.gridValue} key={key}>
            <Item>
              <div class="destinationImage">



                <Image
                  src={item.imageUrl}
                  alt="Vercel Logo"
                  style={{ height: 300, width: "100%", objectFit: "cover" }}
                  priority
                />
                <Link href={"/subDestinations"} style={{ color: "#fff" }}>
                  <div
                    style={{
                      position: "absolute",
                      display: "flex",
                      right: 30,
                      bottom: 30,
                      color: "#fff",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon style={{ fontSize: 55 }} />
                    <span style={{ display: "block" }}>
                      <Typography variant="h4">{item.packageName}</Typography>
                      <Typography variant="body2" style={{ float: "right" }}>
                        {item.NoOfTours} Tours
                      </Typography>
                    </span>
                  </div>
                </Link>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default destinations;
