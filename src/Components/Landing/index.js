import React from "react";
import { Button } from "../../Assets/lib/mui";
import Image from 'next/image';
import BGImage from '../../Assets/images/BG.jpg'
import TourPackagesList from "../TourPackagesList";
import PopularPackages from "../PopularPackages"

const Landing = () => {
  return (
    <div>
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
    </div>
  );
};

export default Landing;
