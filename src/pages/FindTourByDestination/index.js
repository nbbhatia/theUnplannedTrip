import React from "react";
import BGImage from "../../Assets/images/destBg.jpg";
import Image from "next/image";
function FindTourByDestinations() {
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
      {/* <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "70vh", width: "100%", objectFit: "cover" }}
        priority
      /> */}
    </div>
  );
}

export default FindTourByDestinations;
