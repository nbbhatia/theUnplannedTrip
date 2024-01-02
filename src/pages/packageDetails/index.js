import React from 'react';
import { Typography, Grid } from '@mui/material';
import PkgeImage1 from "../../Assets/images/imagesofharidwar/haridwar1.jpg";
import PkgeImage2 from "../../Assets/images/imagesofharidwar/haridwar2.jpg";
import PkgeImage3 from "../../Assets/images/imagesofharidwar/haridwar3.jpg";
import PkgeImage4 from "../../Assets/images/imagesofharidwar/haridwar4.jpg";
import PkgeImage5 from "../../Assets/images/imagesofharidwar/haridwar5.jpg";
import PkgeImage6 from "../../Assets/images/imagesofharidwar/haridwar6.jpg";
import PkgeImage7 from "../../Assets/images/imagesofharidwar/haridwar7.jpg";
import PkgeImage8 from "../../Assets/images/imagesofharidwar/haridwar8.jpg";
import PkgeImage9 from "../../Assets/images/imagesofharidwar/haridwar9.jpg";
import PkgeImage10 from "../../Assets/images/imagesofharidwar/haridwar10.jpg";
import PkgeImage11 from "../../Assets/images/imagesofharidwar/haridwar11.jpg";
import PkgeImage12 from "../../Assets/images/imagesofharidwar/haridwar12.jpg";
import PkgeImage13 from "../../Assets/images/imagesofharidwar/haridwar13.jpg";
import PkgeImage14 from "../../Assets/images/imagesofharidwar/haridwar14.jpg";
import PkgeImage15 from "../../Assets/images/imagesofharidwar/haridwar15.jpg";
import PkgeImage16 from "../../Assets/images/imagesofharidwar/haridwar16.jpg";
import PkgeImage17 from "../../Assets/images/imagesofharidwar/haridwar17.jpg";
import PkgeImage18 from "../../Assets/images/imagesofharidwar/haridwar18.jpg";
import BGImage from "../../Assets/images/p-4.png";
import Layout from '../page';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ImageCarousel from "../Reusable/ImageCarousel";
import Accordian from "../Reusable/Accordian";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import QueryForm from "../Reusable/QueryForm";
import PackagesCards from "../PackagesCards";
import ImageModal from "../Reusable/ImageModal"
import Image from 'next/image';
const PackageDetails = () => {
  const packageDetailData = [
    {
      packageName: "Haridwar",
      imageUrl: PkgeImage6,
      price: 5000,
      NoOfTours: 5,
      noOfDays: "5 Days 4 Nights",
      Information: `Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisterione venenatis lacus gravida eros ut turpis interdum ornare. Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisterione venenatis lacus gravida eros ut turpis interdum ornare.`,
      Departure: 'NYC International Airport',
      DepartureTime: "7.00AM",
      ReturnTime: "Approximately 9.30PM",
      TourGallery: [PkgeImage1, PkgeImage2, PkgeImage3, PkgeImage4, PkgeImage5, PkgeImage6, PkgeImage7, PkgeImage8, PkgeImage9, PkgeImage10, PkgeImage11, PkgeImage12, PkgeImage13, PkgeImage14, PkgeImage15, PkgeImage16, PkgeImage17, PkgeImage18],
      ItenaryInfo: [{ key: "Departure", value: 'NYC International Airport' },
      { key: "DepartureTime", value: '7.00AM' },
      { key: "Duration", value: "5Days / 4Nights" },
      { key: "Number of Travellers", value: "2 Adult" },
      { key: "Price Includes", value: ["Accomodation", "Porter & Personal Guide", "Insurance", "Breakfast", "Tranportation / Car"] },
      { key: "Price Excludes", value: ["Flights", "Lunch", "Typical Souvenir", "BreakfaSunscreen",] }
      ]
    },
    // {
    //   packageName: "Dehradun",
    //   imageUrl: PkgeImage6,
    //   price: 500,
    //   NoOfTours: 5,
    //   noOfDays: "5 Days 4 Nights",
    //   Information: `Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisterione venenatis lacus gravida eros ut turpis interdum ornare.`,
    //   Departure: 'NYC International Airport',
    //   DepartureTime: "7.00AM",
    //   ReturnTime: "Approximately 9.30PM",
    //   TourGallery: [PkgeImage1, PkgeImage2, PkgeImage3, PkgeImage4]
    // }
  ]
  let itineraryArray = [
    { key: "Day 1: Departure", value: "Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare." },
    { key: "Day 2: Adventure Begins", value: "Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare." },
    { key: "Day 3: Sea Tour", value: "Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare." },
    { key: "Day 4: Adventure", value: "Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare." },
    { key: "Day 5: Sea Tour", value: "Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare." },
    { key: "Day 6: Adventure Begins", value: "Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare." },
    { key: "Day 7: Return", value: "Travel non lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc volutpat miss sapien vel conseyen turpeutionyer masin libero sevenion vusetion viventa augue sit amet hendrerit vestibulum. Duisteyerion venenatis lacus gravida eros ut turpis interdum ornare." },
  ]
  let BookingFormValues = [
    { name: "Name", type: "text" },
    { name: "Email", type: "email" },
    { name: "PhoneNo.", type: "number" },
    { name: "BookingDate", type: "date" },
    { name: "Messages", type: "textArea" }
  ]
  let QueryFormValues = [
    { name: "Name", type: "text" },
    { name: "Email", type: "email" },
    { name: "PhoneNo.", type: "number" },
    { name: "Messages", type: "textArea" }
  ]
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
  return (
    <Layout style={{ margin: 0 }}>
      {packageDetailData?.map((data, index) =>
      (
        <Grid key={index} md={12} xs={12} sm={12} item container style={{ display: "flex", position: "relative", }}>
          <Image
            src={BGImage}
            alt="Vercel Logo"
            style={{ height: "80vh", width: "100%", objectFit: "cover" }}
            priority
          />

          <Grid md={8} xs={12} sm={12} item style={{ display: "block" }}>

            <div style={{ display: "block", padding: 48 }}>
              <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
              <div style={{ display: "block" }}>
              <Typography variant="body1" style={{ color: "#2095AE", letterSpacing: 10 }}>
                  Travel Agency
                </Typography>
                <Typography variant="h2" style={{ color: "#2095AE", paddingTop: 8, }}>
                <span style={{ color: "#0f2454", fontWeight: "bold" }}>
                  {data.packageName}
                </span> Uttarakhand
              </Typography>
              </div>
               
                <ImageModal galleryImages={data.TourGallery} />
              </div>
             
              <div style={{ display: "flex", paddingTop: "16px" }}>
                <AccessAlarmsIcon
                  style={{
                    color: "#0f2454",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: 8
                  }}
                />
                <Typography
                  style={{
                    color: "#676977",
                    fontSize: 16,
                  }}
                >
                  {data.noOfDays}
                </Typography>
              </div>
              <div style={{ display: "flex", padding: "8px 0", alignItems: "center" }}>
                <CurrencyRupeeIcon
                  style={{
                    color: "#0f2454",
                    fontSize: 24,
                    fontWeight: "bold",
                    marginRight: 4
                  }}
                />
                <Typography
                  style={{
                    color: "#2095AE",
                    fontSize: 24,
                    fontWeight: "bold",
                  }}
                >
                  {data.price} <span style={{ fontSize: 16, fontWeight: 500 }}>per person</span>
                </Typography>
              </div>

              <div style={{ display: "block", padding: "48px 0", alignItems: "center" }}>
                <Typography variant="h4" style={{ color: "#0f2454", letterSpacing: 10 }}>
                  INFORMATION
                </Typography>
                <Typography
                  style={{
                    color: "#676977",
                    fontSize: 16,
                    fontWeight: 300
                  }}
                >
                  {data.Information}
                </Typography>
              </div>

              <Grid md={12} xs={12} sm={12} item container style={{ display: "flex" }}>
                <Grid md={12} xs={12} sm={12} item style={{ paddingRight: 24 }}>
                  {data.ItenaryInfo.map((info, index) =>
                  (
                    <div key={index}>
                      <Grid md={12} xs={12} sm={12} item container justifyContent="space-between" style={{ borderBottom: "1px solid #676977", padding: "16px 0" }}>
                        <Typography
                          style={{
                            color: "#0f2454",
                            fontSize: 16,
                            fontWeight: 300,
                            fontWeight: "bold"
                          }}
                        >
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
            <Grid md={12} xs={12} sm={12} item container style={{ display: "block", alignItems: "center", padding: 48 }}>
              <Typography variant="h4" style={{ color: "#0f2454", letterSpacing: 10 }}>
                ITINERARY
              </Typography>
              <div style={{ marginTop: 24 }}>
                {itineraryArray.map((itineraryKeyValue, index) =>
                (
                  <div key={index}>
                    <Accordian title={itineraryKeyValue.key} value={itineraryKeyValue.value} />
                  </div>
                ))}

              </div>

            </Grid>
          </Grid>

          <Grid md={4} xs={12} sm={12} item style={{
            background: "#f4f5f8",
            padding: "45px 25px",
            height: "100%",

          }}>
            <Typography variant="h4" style={{ color: "#0f2454", textAlign: "center", marginBottom: 24 }}>
              Book the Tour
            </Typography>
            <QueryForm formValues={BookingFormValues} buttonText="Booking Now" />
            <Typography variant="h4" style={{ color: "#0f2454", textAlign: "center", margin: "24px 0" }}>
              OR
            </Typography>
            <Typography variant="body1" style={{ color: "#0f2454", textAlign: "center" }}>
              Fill up the form below to tell us what you're looking for
            </Typography>
            <QueryForm formValues={QueryFormValues} buttonText="Send Enquiry" />
          </Grid>
        </Grid>
      ))}
      <Grid>
        <Typography variant="h4" style={{ color: "#0f2454", letterSpacing: 10, padding: "0 48px" }}>
          Related TOURS
        </Typography>
        <Grid md={12} sm={12} xs={12} item container style={{ padding: 32, display: "flex", flexWrap: "wrap" }}>
          {arrayOfRelatedTours.map((card, index) => (
            <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
              <PackagesCards title={card.packageName} packgImage={card.imageUrl} price={card.price} isSubDestinations={true} />
            </Grid>
          ))}

        </Grid>
      </Grid>

    </Layout>
  )
}

export default PackageDetails;