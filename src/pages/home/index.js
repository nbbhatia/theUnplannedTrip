import React from 'react'
import MostPopularPackages from "../MostPopularPackages";
import WhyChooseUs from "../WhyChooseUs";
// import CenterAcheivements from "../CenterAchivements";
// import ExplorePackages from "../ExploreDestinations";
import DestinationsPackages from "../destinationsPackages/destinations";
import RightImagContentSection from "../Reusable/RightImagContentSection";
import VideoBanner from '../Reusable/VideoBanner';
import "./index.css";
import CharDhamYatra from '../charDhamYatra';

const Home = () => {

    return (
        <div>
            <VideoBanner />
            <RightImagContentSection />
            <DestinationsPackages />
            <MostPopularPackages />
            <WhyChooseUs />
            <CharDhamYatra/>

            {/* <UkVideo/> */}
            {/* <CenterAcheivements /> */}
            {/* <ExplorePackages/>
       <MostPopularPackages />
      <WhyChooseUs /> */}
            {/* <TourPackagesList /> */}

            {/* <WhyTour />
      <BestPackages /> */}
        </div>
    )
}

export default Home