import React from "react";
import PackagesList from "../Reusable/PackageList";
import { Grid } from "../../Assets/lib/mui";
import { ContentSection } from "../Reusable/Content_Section";
import {list_of_packages} from "../Reusable/Utils/data"

const Destinations = () => {
  
  return (
    <div>
      <ContentSection
        title="Choose Your Package"
        subTitle={`Select Your Best Package \n For Your Travel`}
      />
      <Grid
        md={12}
        xs={12}
        sm={12}
        item
        container
        style={{ padding: 32, display: "flex", flexWrap: "wrap" }}
      >
        {list_of_packages.map((packages, key) => (
          packages.imgUrl&&
          <Grid md={4} style={{ padding: 16 }}>
            <PackagesList
              price={packages.price}
              name={packages.name}
              stay={packages.stay}
              rating={packages.rating}
              imgUrl={packages.imgUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Destinations;
