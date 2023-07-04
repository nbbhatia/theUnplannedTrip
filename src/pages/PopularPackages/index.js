import React from "react";
import PackagesList from "../Reusable/PackageList";
import { Grid } from "../../Assets/lib/mui";
import Image from "next/image";
import BGImage from "../../Assets/images/BG.jpg";
import { ContentSection } from "../Reusable/Content_Section";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { list_of_packages } from "../Reusable/Utils/data";
const TourPackageList = () => {
  return (
    <div>
      <ContentSection
        title="Popular Destinations"
        subTitle={`Select Our Best Popular \n Destinations`}
      />
      <Grid
        md={12}
        xs={12}
        sm={12}
        item
        container
        style={{ padding: 32, display: "flex", flexWrap: "wrap" }}
      >
        {list_of_packages.map((packages, key) => (
          <Grid md={3} style={{ padding: 16 }}>
            {packages.isImage ? (
              <div style={{ paddingBottom: 16, height: "100%" }}>
                <Image
                  src={BGImage}
                  alt="cardImg"
                  style={{ height: "100%", objectFit: "cover", width: "100%" }}
                />
              </div>
            ) : (
              <PackagesList
                price={packages.price}
                name={packages.name}
                stay={packages.stay}
                rating={packages.rating}
                imgUrl={packages.imgUrl}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TourPackageList;
