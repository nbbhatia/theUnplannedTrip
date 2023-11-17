import React from "react";
import Layout from "../page";
import Image from "next/image";

import BGImage from "../../Assets/images/destBg.jpg";
import Destinations from "./destinations";
import BasicBreadcrumbs from "../Reusable/BreadCrumbs";

function DestinationsPackages() {
  let directionsList = ["East", "West", "North", "South"];
  return (
    <Layout style={{ margin: 0 }}>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "40vh", width: "100%", objectFit: "cover" }}
        priority
      />
      <div style={{ position: "absolute", top: 300, left: 100, color: "#fff" }}>
        <BasicBreadcrumbs />
        <h3
          style={{  color: "#fff" }}
        >
          Destinations
        </h3>
      </div>
      <Destinations />
    </Layout>
  );
}

export default DestinationsPackages;
