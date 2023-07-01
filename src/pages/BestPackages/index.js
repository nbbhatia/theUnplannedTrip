import React from "react";
import Image from "next/image";
import BGImage from "../../Assets/images/BG.jpg";

function index() {
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
            Feature Tours
          </span>
          <br />
          <span style={{ fontSize: 36, color: "black", fontWeight: "bold" }}>
            See Our Best Popular
            <br /> Packages
          </span>
          <br />
        </div>
      </div>
      <div style={{ height: 500, paddingTop: 24 }}>
        <Image
          src={BGImage}
          alt="Vercel Logo"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          // priority
        />
      </div>
    </div>
  );
}

export default index;
