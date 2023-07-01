import React from "react";
import { Button } from "../../Assets/lib/mui";
import Image from 'next/image';
import BGImage from '../../Assets/images/BG.jpg'
import TourPackagesList from "../Destinations/destinations";
import PopularPackages from "../PopularPackages";
import WhyTour from "../WhyTour";
import BestPackages from "../BestPackages"
import Footer from "../Reusable/Footer";
import Header from "../Reusable/Header"

const Landing = () => {
  return (
    <div>
      <Header/>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        width="100%"
        height="100vh"
        style={{ height: "100vh", width: "100%" }}
        priority
      />
      <TourPackagesList/>
      <PopularPackages/>
      <WhyTour/>
      <BestPackages/>
      <Footer/>
    </div>
  );
};

export default Landing;
