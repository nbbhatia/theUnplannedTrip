import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import PkgeImage1 from "../../Assets/images/imagesofharidwar/haridwar6.jpg";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import PkgeImage6 from "../../Assets/images/p-6.png";
import Link from "next/link";
import style from "./style.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import ButtonContainer from "../Reusable/Button"

const destinations = (props) => {
  console.log(props?.data)
  let arrayOfDestinations = [
    { packageName: "Uttarakhand", imageUrl: PkgeImage1, gridValue: 6, NoOfTours: 5 },
    {
      packageName: "Himachal Pradesh",
      imageUrl: PkgeImage2,
      gridValue: 6,
      NoOfTours: 7,
    },
    {
      packageName: "Gangotri",
      imageUrl: PkgeImage3,
      gridValue: 6,
      NoOfTours: 7,
    },
    {
      packageName: "Yamnotri",
      imageUrl: PkgeImage4,
      gridValue: 6,
      NoOfTours: 7,
    },
    {
      packageName: "Kedarnath",
      imageUrl: PkgeImage5,
      gridValue: 6,
      NoOfTours: 7,
    },
    {
      packageName: "Badrinath",
      imageUrl: PkgeImage6,
      gridValue: 6,
      NoOfTours: 7,
    },
    // {
    //   packageName: "Kashmir",
    //   imageUrl: PkgeImage3,
    //   gridValue: 6,
    //   NoOfTours: 4,
    // },
    // {
    //   packageName: "Kerala",
    //   imageUrl: PkgeImage4,
    //   gridValue: 6,
    //   NoOfTours: 4,
    // },
    // {
    //   packageName: "Gujrat",
    //   imageUrl: PkgeImage5,
    //   gridValue: 4,
    //   NoOfTours: 4,
    // },
    // {
    //   packageName: "Assam",
    //   imageUrl: PkgeImage6,
    //   gridValue: 8,
    //   NoOfTours: 4,
    // },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: props?.data?2:1,
    },
    desktop: {
      breakpoint: { max: 4024, min: 1024 },
      items:props?.data?2:3,
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
  let popularPackData = props?.data ? props?.data : arrayOfDestinations
  return (
    <div style={{ display: "block", padding: props?.data ? 0 : 48 }}>

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

        {/* <div style={{ paddingRight: 24 }}>
          <Button
            variant="contained"
            size="md"
            className={style.viewPackageText}
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600, background: "#2095AE", margin: "24px 0" }}
          >
            <Link href={"/destinationsPackages"} style={{ color: "#fff", textDecoration: "none" }}> View All Destinations</Link>
            {/* <a href={"/cityWiseDestinations"} style={{ color: "#fff", textDecoration: "none" }}> View Packages</a> */}
        {/* </Button>
        </div> */}
        <ButtonContainer />
      </div>
      <Box sx={{ flexGrow: 1 }} style={{ height: "100%" }}>
        <Carousel
          showThumbs={false}
          responsive={responsive}
        >
          {popularPackData?.map((item, index) => (
            <div key={index} style={{ marginRight: 20,height:400 }}>
              <Link
                href={{
                  pathname: `/subDestinations`,
                  query: {
                    city: item.packageName,
                  }
                }}
              >
                <div className={style.destinationImage_div}>
                  <div className={style.destinationImage} />
                  <Image
                    src={item.imageUrl}
                    alt="Vercel Logo"
                    className={style.destination_image}
                  />

                  <div className={style.image_text}>
                    <span style={{ display: "block", padding: 16 }}>
                      <Typography variant="h2" className={style.destinationName}>{item.packageName}</Typography>
                      {/* <Typography variant="body2" className={style.noOfTour}>
      {item.NoOfTours} Tours
    </Typography> */}
                      {/* <Typography variant="body2" className={style.noOfTour}>
      Starting @ INR 500/-
    </Typography> */}
                    </span>
                  </div>
                </div>
                {/* </Item> */}
              </Link>
            </div>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default destinations;
{/* <Grid md={12} xs={12} sm={12} item style={{display:"flex"}}>
{arrayOfDestinations.map((item, key) => (
  <Carousel showThumbs={false} responsive={responsive}>
    <div>
      <Grid item md={item.gridValue} key={key}>
        <Link
          href={{
            pathname: `/subDestinations`,
            query: {
              city: item.packageName,
            }
          }}
        >
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
                {/* <Typography variant="body2" className={style.noOfTour}>
      {item.NoOfTours} Tours
    </Typography> */}
{/* <Typography variant="body2" className={style.noOfTour}>
      Starting @ INR 500/-
    </Typography> */}
//               </span>
//             </div>
//           </div>
//           {/* </Item> */}
//         </Link>
//       </Grid>

//     </div>
//   </Carousel>
// ))}
// </Grid> */}