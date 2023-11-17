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

const destinations = () => {
  let arrayOfDestinations = [
    { packageName: "goa", imageUrl: PkgeImage1, gridValue: 8, NoOfTours: 5 },
    {
      packageName: "Haridwar",
      imageUrl: PkgeImage2,
      gridValue: 4,
      NoOfTours: 7,
    },
    {
      packageName: "Dehradun",
      imageUrl: PkgeImage3,
      gridValue: 4,
      NoOfTours: 4,
    },
    {
      packageName: "Nainital",
      imageUrl: PkgeImage4,
      gridValue: 4,
      NoOfTours: 4,
    },
    {
      packageName: "Rishikesh",
      imageUrl: PkgeImage5,
      gridValue: 4,
      NoOfTours: 4,
    },
    {
      packageName: "Dehradun",
      imageUrl: PkgeImage6,
      gridValue: 8,
      NoOfTours: 4,
    },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: theme.palette.text.secondary,
  }));
 

  return (
    <Grid container spacing={2} style={{ padding: 48 }}>
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
            </div>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default destinations;
