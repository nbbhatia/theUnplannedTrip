import React, { useEffect, useState } from 'react';
import { Typography, Grid } from '@mui/material';
import PkgeImage1 from "../../Assets/images/imagesofharidwar/haridwar1.jpg";
import PkgeImage2 from "../../Assets/images/imagesofharidwar/haridwar2.jpg";
import PkgeImage3 from "../../Assets/images/imagesofharidwar/haridwar3.jpg";
import PkgeImage4 from "../../Assets/images/imagesofharidwar/haridwar4.jpg";
import PkgeImage5 from "../../Assets/images/imagesofharidwar/haridwar5.jpg";
import PkgeImage6 from "../../Assets/images/imagesofharidwar/haridwar6.jpg";
// import PkgeImage7 from "../../Assets/images/imagesofharidwar/haridwar7.jpg";
// import PkgeImage8 from "../../Assets/images/imagesofharidwar/haridwar8.jpg";
// import PkgeImage9 from "../../Assets/images/imagesofharidwar/haridwar9.jpg";
// import PkgeImage10 from "../../Assets/images/imagesofharidwar/haridwar10.jpg";
// import PkgeImage11 from "../../Assets/images/imagesofharidwar/haridwar11.jpg";
// import PkgeImage12 from "../../Assets/images/imagesofharidwar/haridwar12.jpg";
// import PkgeImage13 from "../../Assets/images/imagesofharidwar/haridwar13.jpg";
// import PkgeImage14 from "../../Assets/images/imagesofharidwar/haridwar14.jpg";
// import PkgeImage15 from "../../Assets/images/imagesofharidwar/haridwar15.jpg";
// import PkgeImage16 from "../../Assets/images/imagesofharidwar/haridwar16.jpg";
// import PkgeImage17 from "../../Assets/images/imagesofharidwar/haridwar17.jpg";
// import PkgeImage18 from "../../Assets/images/imagesofharidwar/haridwar18.jpg";
import BGImage from "../../Assets/images/p-4.png";
import Layout from '../page';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import ImageCarousel from "../Reusable/ImageCarousel";
import Accordian from "../Reusable/Accordian";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Form from "../Reusable/FormContainer"
import PackagesCards from "../PackagesCards";
import ImageModal from "../Reusable/ImageModal"
import Image from 'next/image';
import { useRouter } from "next/router";
import { data } from "../../items";
import style from "./style.module.scss";
const PackageDetails = () => {
  let router = useRouter();
  const { city } = router.query;
  console.log("city", city)

  let arrayOfRelatedTours = [
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

  ];
  const [destinationsData, setDestinationsData] = useState(null)
  console.log("data", data)
  useEffect(() => {
    data.filter((item) => item.place === city).map((dataObj) => setDestinationsData(dataObj)); // [ 2, 4, 6 ]
  }, [city])
  console.log("destinationsData", destinationsData)

  return (
    <Layout style={{ margin: 0 }}>

      <Grid md={12} xs={12} sm={12} item container className={style.parentDiv}>
        <Image
          src={BGImage}
          alt="Vercel Logo"
          className={style.bgImageStyle}
          priority
        />

        <Grid md={8} xs={12} sm={12} item style={{ display: "block" }}>

          <div style={{ display: "block", padding: 48 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "block" }}>
                {/* <Typography variant="body1" style={{ color: "#2095AE", letterSpacing: 10 }}>
                    Travel Agency
                  </Typography> */}
                <Typography className={style.heading}>
                  {destinationsData?.place}
                </Typography>
              </div>

              <ImageModal galleryImages={destinationsData?.TourGallery} />
            </div>

            <div className={style.noOfDaysDiv}>
              <AccessAlarmsIcon className={style.alarmsIcon} />
              <Typography className={style.noOfDaysText}>
                {destinationsData?.noOfDays}
              </Typography>
            </div>
            <div className={style.priceDiv}>
              <CurrencyRupeeIcon className={style.rupeeIcon} />
              <Typography className={style.priceText}>
                {destinationsData?.price} <span style={{ fontSize: 16, fontWeight: 500 }}>per person</span>
              </Typography>
            </div>

            <div className={style.informationDiv}>
              <Typography className={style.informationText}>
                INFORMATION
              </Typography>
              <Typography className={style.info_body}>
                {destinationsData?.Information}
              </Typography>
            </div>

            <Grid md={12} xs={12} sm={12} item container style={{ display: "flex" }}>
              <Grid md={12} xs={12} sm={12} item style={{ paddingRight: 24 }}>
                {destinationsData?.ItenaryInfo?.map((info, index) =>
                (
                  <div key={index}>
                    <Grid md={12} xs={12} sm={12} item container justifyContent="space-between" className={style.itenaryInfoDiv}>
                      <Typography className={style.infoKey}>
                        {info.key}
                      </Typography>
                      {info.key === "Price Includes" || info.key === "Price Excludes" ?
                        <div>
                          {info.value.map((info, index) =>
                          (
                            <span key={index} style={{ display: "flex" }}>
                              <RadioButtonCheckedIcon style={{ color: "#0f2454" }} />
                              <Typography

                                style={{
                                  color: "#2095AE",
                                  fontSize: 16,
                                  fontWeight: 300,
                                  marginLeft: 12,
                                  width: "114px"
                                }}
                              >
                                {info}
                              </Typography>

                            </span>
                          ))}
                        </div>
                        : <Typography
                          style={{
                            color: "#2095AE",
                            fontSize: 16,
                            fontWeight: 300
                          }}
                        >
                          {info.value}
                        </Typography>
                      }
                    </Grid>
                  </div>
                ))}
              </Grid>
            </Grid>
          </div>
          <Grid md={12} xs={12} sm={12} item container className={style.itenaryDiv}>
            <Typography className={style.itenary_text}>
              ITINERARY
            </Typography>
            <div style={{ marginTop: 24 }}>
              {destinationsData?.itineraryArray?.map((itineraryKeyValue, index) =>
              (
                <div key={index}>
                  <Accordian title={itineraryKeyValue.key} value={itineraryKeyValue.value} />
                </div>
              ))}

            </div>

          </Grid>
        </Grid>

        <Grid md={4} xs={12} sm={12} item className={style.form_div}>
          <Form />
        </Grid>
      </Grid>
      {/* ))} */}
      <Grid>
        <Typography className={style.relatedTour_text}>
          Related TOURS
        </Typography>
        <Grid md={12} sm={12} xs={12} item container className={style.relatedTour_div}>
          {arrayOfRelatedTours.map((card, index) => (
            <Grid md={3} xs={6} sm={3} item key={index} className={style.packageCards}>
              <PackagesCards title={card.packageName} packgImage={card.imageUrl} price={card.price} isSubDestinations={true} />
            </Grid>
          ))}

        </Grid>
      </Grid>

    </Layout>
  )
}

export default PackageDetails;