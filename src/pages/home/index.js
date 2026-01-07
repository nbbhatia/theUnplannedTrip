import React from "react";
import MostPopularPackages from "../Hotels";
import WhyChooseUs from "../WhyChooseUs";
import PopularDestinationsPackages from "../popularDestinationsPackages/popularDestinations";
import RightImagContentSection from "../Reusable/RightImagContentSection";
import ThemeSelection from "../themes"
import VideoBanner from "../Reusable/VideoBanner";
import RecomendPackages from "../Hero"
import "./index.css";
import CharDhamYatra from "../charDhamYatra";

const Home = () => {
  return (
    <div>
      <VideoBanner />
      <ThemeSelection />
      <PopularDestinationsPackages />
      <RecomendPackages />
      <MostPopularPackages />
      <WhyChooseUs />
      <CharDhamYatra />
    </div>
  );
};

export default Home;

