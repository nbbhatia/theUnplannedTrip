import React from "react";
import BGImage from "../../Assets/images/BG.jpg";
import PackagesList from "./PackageList";

import { Grid } from "../../Assets/lib/mui";

const Destinations = () => {
  let list_of_packages = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 32,
          textAlign: "center",
        }}
      >
        <div style={{ display: "block" }}>
          <span style={{ fontSize: 20, color: "orange", fontWeight: "bold" }}>
            Choose Your Package
          </span>
          <br />
          <span style={{ fontSize: 36, color: "black", fontWeight: "bold" }}>
            {" "}
            Select Your Best Package
            <br /> For Your Travel
          </span>
          <br />
        </div>
      </div>
      <Grid
        md={12}
        xs={12}
        sm={12}
        item
        container
        style={{ padding: 32, display: "flex", flexWrap: "wrap" }}
      >
        {list_of_packages.map((packages, key) => (
          <Grid md={4} style={{ padding: 16 }}>
            <PackagesList />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Destinations;
