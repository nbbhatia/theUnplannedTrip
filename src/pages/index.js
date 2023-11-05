import React from "react";
import Image from "next/image";
import BGImage from "../Assets/images/BG.jpg";
import TourPackagesList from "./Reusable/Carousel";
import PopularPackages from "./Home/PopularPackages";
import WhyTour from "../pages/WhyTour";
import BestPackages from "../pages/BestPackages";
import Layout from "@/pages/page";
import { Carousel } from "react-responsive-carousel";
import { items } from "./Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TravelImage1 from "../Assets/images/travel1.jpg";
import TravelImage2 from "../Assets/images/travel3.jpg";
import TravelImage3 from "../Assets/images/travel4.jpg";
import FindTourByDestinations from "./FindTourByDestination";
import MostPopularPackages from "./MostPopularPackages"
// import styles from "../styles/Responsive.module.css";
import "./index.css";

const Landing = () => {
  const items = {
    bootstrap: [],
    elastic: [],
    responsive: [
      {
        id: 1,
        title:
          "Swiper Carousel Example,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl: TravelImage1,
      },
      {
        id: 2,
        title: "Swiper Carousel Example",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl: TravelImage2,
      },
      {
        id: 3,
        title: "Swiper Carousel Example",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
        imageUrl: TravelImage3,
      },
    ],
  };
  return (
    <Layout>
      {/* <Image
        src={BGImage}
        alt="Vercel Logo"
        width="100%"
        height="100vh"
        style={{ height: "100vh", width: "100%" ,objectFit:"cover"}}
        priority
      /> */}
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={true}
        style={{ position: "relative" }}
        // className={styles.mySwiper}
      >
        {items?.responsive?.map((item) => (
          <div key={item.id}>
            <div
              style={{
                width: "100%",
                height: "80vh",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Image
                src={item.imageUrl}
                alt="Vercel Logo"
                fill={true}
                priority
              />
              <div
                style={{
                  background: "transparent",
                  position: "absolute",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                 <div>
                  <h1 class="cssanimation sequence fadeInBottom">
                    {item.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <FindTourByDestinations />
      <MostPopularPackages/>
      {/* <TourPackagesList /> */}
      {/* <PopularPackages /> */}
      {/* <WhyTour />
      <BestPackages /> */}
    </Layout>
  );
};

export default Landing;
