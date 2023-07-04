import React from "react";
import Image from "next/image";
import BGImage from "../Assets/images/BG.jpg";
import TourPackagesList from "../pages/Destinations/destinations"
import PopularPackages from "../pages/PopularPackages";
import WhyTour from "../pages/WhyTour";
import BestPackages from "../pages/BestPackages";
import Layout from "@/pages/page";

const Landing = () => {
  return (
    <Layout>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        width="100%"
        height="100vh"
        style={{ height: "100vh", width: "100%" ,objectFit:"cover"}}
        priority
      />
      <TourPackagesList />
      <PopularPackages />
      {/* <WhyTour />
      <BestPackages /> */}
    </Layout>
  );
};

export default Landing;
