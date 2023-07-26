import React from "react";
import PackagesList from "../../Reusable/PackageList";
import { Grid } from "../../../Assets/lib/mui";
import  ContentSection from "../../Reusable/Content_Section";
import PackageImage1 from "./../../../Assets/images/p-1.png";
import PackageImage2 from "./../../../Assets/images/p-2.png";
import PackageImage3 from "./../../../Assets/images/p-3.png";
import PackageImage4 from "./../../../Assets/images/p-4.png";
import PackageImage5 from "./../../../Assets/images/p-5.png";
import PackageImage6 from "../../../Assets/images/p-6.png";
// import list_of_packages from "../../Reusable/Utils/data"

const Destinations = () => {
  const list_of_packages = [
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
        title="Choose Your Package"
        subTitle={`Select Your Best Package \n For Your Travel`}
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
          packages.imgUrl&&
          <Grid md={4} key={key} item style={{ padding: 16 }}>
            <PackagesList
              price={packages.price}
              name={packages.name}
              stay={packages.stay}
              rating={packages.rating}
              imgUrl={packages.imgUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Destinations;
