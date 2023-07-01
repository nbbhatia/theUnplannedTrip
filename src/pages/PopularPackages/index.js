import React from "react";
import PackagesList from "./PackagesList";
import { Grid } from "../../Assets/lib/mui";
import Image from "next/image";
import BGImage from "../../Assets/images/BG.jpg";
const TourPackageList = () => {
  let list_of__popular_packages = [
    {
      isImage: true,
    },
    {
      destinationName: "1",
      price: 400,
      rating: "2",
    },
    {
      destinationName: "2",
      price: 400,
      rating: "2",
    },

    // {
    //   destinationName: "abc",
    //   price: 400,
    //   rating: "2",
    // },

    {
      destinationName: "3",
      price: 400,
      rating: "2",
    },
  
    {
      destinationName: "4",
      price: 400,
      rating: "2",
    },
    {
      destinationName: "5",
      price: 400,
      rating: "2",
    },
    {
      destinationName: "6",
      price: 400,
      rating: "2",
    },
    {
      isImage: true,
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 32,
          textAlign: "center",
        }}
      >
        <div style={{ display: "block" }}>
          <span style={{ fontSize: 20, color: "orange", fontWeight: "bold" }}>
            Popular Destinations
          </span>
          <br />
          <span style={{ fontSize: 36, color: "black", fontWeight: "bold" }}>
            {" "}
            Select Our Best Popular
            <br /> Destinations
          </span>
          <br />
        </div>
      </div>
      <Grid
        md={12}
        xs={12}
        sm={12}
        item
        container
        style={{ padding: 32, display: "flex", flexWrap: "wrap" }}
      >
        {list_of__popular_packages.map((packages, key) => (
          <Grid md={3} style={{ padding: 16 }}>
            {packages.isImage ? (
              <div style={{ paddingBottom: 16, height: 420 }}>
                <Image
                  src={BGImage}
                  alt="cardImg"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            ) : (
              <PackagesList packageName={packages.destinationName} />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TourPackageList;
