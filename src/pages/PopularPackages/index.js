import React from "react";
import PackagesList from "../Reusable/PackageList";
import { Grid } from "../../Assets/lib/mui";
import Image from "next/image";
import BGImage from "../../Assets/images/BG.jpg";
import PackageImage1 from "../../Assets/images/p-1.png";
import PackageImage2 from "../../Assets/images/p-2.png";
import PackageImage3 from "../../Assets/images/p-3.png";
import PackageImage4 from "../../Assets/images/p-4.png";
import PackageImage5 from "../../Assets/images/p-5.png";
import PackageImage6 from "../../Assets/images/p-6.png";
import { ContentSection } from "../Reusable/Content_Section";
const TourPackageList = () => {
  // let list_of__popular_packages = [
  //   {
  //     isImage: true,
  //   },
  //   {
  //     destinationName: "1",
  //     price: 400,
  //     rating: "2",
  //   },
  //   {
  //     destinationName: "2",
  //     price: 400,
  //     rating: "2",
  //   },

  //   // {
  //   //   destinationName: "abc",
  //   //   price: 400,
  //   //   rating: "2",
  //   // },

  //   {
  //     destinationName: "3",
  //     price: 400,
  //     rating: "2",
  //   },

  //   {
  //     destinationName: "4",
  //     price: 400,
  //     rating: "2",
  //   },
  //   {
  //     destinationName: "5",
  //     price: 400,
  //     rating: "2",
  //   },
  //   {
  //     destinationName: "6",
  //     price: 400,
  //     rating: "2",
  //   },
  //   {
  //     isImage: true,
  //   },
  // ];
  let list_of__popular_packages = [
    {
      isImage: true,
    },
    {
      price: 200,
      name: "Nainital",
      stay: "5days/6Nights",
      rating: 5,
      imgUrl: PackageImage1,
    },
    {
      price: 200,
      name: "Shimla",
      stay: "5days/6Nights",
      rating: 5,
      imgUrl: PackageImage2,
    },
    {
      price: 200,
      name: "Massorie",
      stay: "5days/6Nights",
      rating: 5,
      imgUrl: PackageImage3,
    },
    {
      price: 200,
      name: "Auli",
      stay: "5days/6Nights",
      rating: 5,
      imgUrl: PackageImage4,
    },
    {
      price: 200,
      name: "Rishikesh",
      stay: "5days/6Nights",
      rating: 5,
      imgUrl: PackageImage5,
    },
    {
      price: 200,
      name: "Haridwar",
      stay: "5days/6Nights",
      rating: 5,
      imgUrl: PackageImage6,
    },
    {
      isImage: true,
    },
  ];
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
        {list_of__popular_packages.map((packages, key) => (
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