import React from "react";
import Image from "next/image";
import BGImage from "../../Assets/images/destBg.jpg";

const MostPopularPackages = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        //   height: 200,
          textAlign: "center",
        //   position:"absolute"
        }}
      >
        <p>
        Some statistics about Travel WP<br />{" "}
          <span
            style={{
              color: "black",
              fontSize: 32,
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
           CENTER ACHIEVEMENTS
          </span>
        </p>
      </div>
      <div style={{ background: "skyBlue", height: 500 }}>
        <Image
          src={BGImage}
          alt="Vercel Logo"
          style={{
            height: 500,
            width: "100%",
            objectFit: "cover",
            position: "absolute",
          }}
          priority
        />
      </div>
    </div>
  );
};

export default MostPopularPackages;
