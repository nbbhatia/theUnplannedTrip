import React from "react";
import BGImage from "../../Assets/images/BG.jpg";
import PackagesList from "./PackageList";
import PackageImage1 from "../../Assets/images/p-1.png";
import PackageImage2 from "../../Assets/images/p-2.png";
import PackageImage3 from "../../Assets/images/p-3.png";
import PackageImage4 from "../../Assets/images/p-4.png";
import PackageImage5 from "../../Assets/images/p-5.png";
import PackageImage6 from "../../Assets/images/p-6.png";
import { Grid, } from "../../Assets/lib/mui";
import {color_styling} from "../../Assets/color"

const Destinations = () => {
  const {primaryTextColor,secondaryTextColor} = color_styling
  let list_of_packages = [
    {
    price:200,
    name:'Nainital',
    stay:'5days/6Nights',
    rating:5,
    imgUrl:PackageImage1
  },
  {
    price:200,
    name:'Shimla',
    stay:'5days/6Nights',
    rating:5,
    imgUrl:PackageImage2
  },
  {
    price:200,
    name:'Massorie',
    stay:'5days/6Nights',
    rating:5,
    imgUrl:PackageImage3
  },
  {
    price:200,
    name:'Auli',
    stay:'5days/6Nights',
    rating:5,
    imgUrl:PackageImage4
  },
  {
    price:200,
    name:'Rishikesh',
    stay:'5days/6Nights',
    rating:5,
    imgUrl:PackageImage4
  },
  {
    price:200,
    name:'Haridwar',
    stay:'5days/6Nights',
    rating:5,
    imgUrl:PackageImage6
  }
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
        {/* <Typography
            gutterBottom
            component="div"
            style={{ fontSize: 20, color: primaryTextColor, fontWeight: "bold" , fontFamily: "Dancing Script ,cursive",}}
          >
            Choose Your Package
            </Typography> */}
          <span style={{ fontSize: 20, color: primaryTextColor, fontWeight: "bold" , fontFamily: "Dancing Script ,cursive",}}>
            Choose Your Package
          </span>
          <br />
          <span style={{ fontSize: 36, color:secondaryTextColor, fontWeight: "bold", fontFamily: "Dancing Script ,cursive", }}>
            {" "}
            Select Your Best Package
            <br /> For Your Travel
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
        {list_of_packages.map((packages, key) => (
          <Grid md={4} style={{ padding: 16 }}>
            <PackagesList price={packages.price} name={packages.name} stay={packages.stay}rating={packages.rating} imgUrl={packages.imgUrl}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Destinations;
