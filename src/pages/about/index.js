import React from "react";
import Layout from "../page";
import Image from "next/image";
import PkgeImage4 from "../../Assets/images/p-4.png";
import RightImagContentSection from "../Reusable/RightImagContentSection"

const subDestionations = () => {

  return (
    <Layout style={{ margin: 0 }}>
      <Image
        src={PkgeImage4}
        alt="Vercel Logo"
        style={{ height: "80vh", width: "100%", objectFit: "cover" }}
        priority
      />
      <RightImagContentSection />
      {/* <Grid md={12} sm={12} xs={12} item container style={{ padding: 48, display: "flex", flexWrap: "wrap" }}>
        {arrayOfSubDestinations.map((card, index) => (

          <Grid md={3} xs={6} sm={3} item key={index} style={{ display: "flex", paddingBottom: 32 }}>
            <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} isSubDestinations={true} />
          </Grid>


        ))}

      </Grid> */}

    </Layout>
  );
}

export default subDestionations;
