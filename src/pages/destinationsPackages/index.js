import React from "react";
import Layout from "../page";
import Image from "next/image";
import BGImage from "../../Assets/images/destBg.jpg";
import Destinations from "../Home/Destinations/destinations";

function DestinationsPackages() {
  let directionsList = ["East", "West", "North", "South"];
  return (
    <Layout style={{ margin: 0 }}>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "70vh", width: "100%", objectFit: "cover" }}
        priority
      />
     
      <Destinations />
    </Layout>
  );
}

export default DestinationsPackages;
