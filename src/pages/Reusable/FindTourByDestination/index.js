import React from "react";
import BGImage from "../../Assets/images/destBg.jpg";
import Image from "next/image";
const FindTourByDestinations = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 200,
          textAlign: "center",
        }}
      >
        <p>
          Find a Tour by <br />{" "}
          <span
            style={{
              color: "black",
              fontSize: 32,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Destinations
          </span>
        </p>
      </div>
    </div>
  );
};

export default FindTourByDestinations;
