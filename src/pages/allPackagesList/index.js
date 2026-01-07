import React, { useState } from "react";
import Layout from "../page";
import AllPackagesList from "./allPackages";

const AllPackages = () => {
  return (
    <Layout style={{ margin: 0 }}>
      <AllPackagesList />
    </Layout>
  );
};

export default AllPackages;
