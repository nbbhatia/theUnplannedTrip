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

import { Grid, Box } from "@mui/material";

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
  return (
    <Layout style={{ margin: 0 }}>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "80vh", width: "100%", objectFit: "cover" }}
        priority
      />

      <Grid md={12} sm={12} xs={12} item container style={{ padding: 48, display: "flex", flexWrap: "wrap" }}>
        {arrayOfSubDestinations.map((card, index) => (

          <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
            <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} isSubDestinations={true} />
          </Grid>


        ))}

      </Grid>

    </Layout>
  );
}

export default subDestionations;
