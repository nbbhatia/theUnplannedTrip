import React from "react";
import style from "./VideoCss.module.scss";
import { Typography } from "@mui/material";

const VideoBanner = () => {
  return (
    <div className={style.banner_video}>
      <div className={style.video_div} />
      <video playsInline autoPlay muted loop className={style.video_banner}>
        <source src="/videos/homeVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={style.video_text}>
        <Typography className={style.heading}>The Unplanned Trip</Typography>
        <Typography className={style.subHeading}>
          Marvelous Uttarakhand
        </Typography>
      </div>
    </div>
  );
};

export default VideoBanner;
