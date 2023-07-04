import React from "react";
import { color_styling } from "../../../Assets/color";
export const ContentSection = ({ title, subTitle }) => {
  const { primaryTextColor, secondaryTextColor } = color_styling;
  const replaceWithBr = () => {
    return subTitle.replace(/\n/g, "<br />");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "32px 32px 0px 32px",
        textAlign: "center",
      }}
    >
      <div style={{ display: "block" }}>
        <span
          style={{
            fontSize: 20,
            color: primaryTextColor,
            fontWeight: "bold",
            fontFamily: "Dancing Script ,cursive",
          }}
        >
          {title}
        </span>
        {/* <br /> */}
        <p
          style={{
            fontSize: 36,
            color: secondaryTextColor,
            fontWeight: "bold",
            fontFamily: "Dancing Script ,cursive",
            margin:0
          }}
          dangerouslySetInnerHTML={{__html: replaceWithBr()}}
        />
          {/* {subTitle} */}
        
        <br />
      </div>
    </div>
  );
};
