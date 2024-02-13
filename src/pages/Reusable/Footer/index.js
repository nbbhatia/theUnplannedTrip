import React from "react";
import { color_styling } from "../../../Assets/color";
import { Grid, Typography } from "../../../Assets/lib/mui";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import BhimAppImage from "../../../Assets/images/bhim.png";
import MasterCard from "../../../Assets/images/masterCard.png";
import VisaCard from "../../../Assets/images/visa.jpg";
import Image from "next/image";
import style from "./style.module.css"

function Footer() {
  const { backgroundColor, secondaryTextColor, textColor, footerBg2 } =
    color_styling;
  return (
    <Grid
      md={12}
      xs={12}
      sm={12}
      item
      container
      justifyContent="center"
      style={{ background: footerBg2, padding: 32 }}
    >
      <Grid md={6} item style={{ alignContent: "center", display: "grid" }}>
        <div style={{ display: "flex" }}>
          <AddLocationIcon
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "bold",
            }}
          />
          <Typography className={[style.text, style.font24]}>
            TheUnplannedTrip
          </Typography>
        </div>

        <Typography className={[style.text, style.font16]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          maxime aut ut voluptate dolorum nisi ducimus ratione
        </Typography>
        <div style={{ display: "block" }}>
          <Typography className={[style.text, style.font18]} >
            Follow Us:
          </Typography>
          <div style={{ display: "flex" }}>
            <InstagramIcon className={[style.icons, style.insta]} />
            <TwitterIcon className={[style.icons, style.TwitterIcon]} />
            <GoogleIcon className={[style.icons, style.TwitterIcon]} />
          </div>
        </div>
      </Grid>
      <Grid
        md={3}
        item
        style={{
          alignContent: "center",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Typography className={[style.text, style.font18]} >
          Contact Us
        </Typography>

        <div style={{ display: "block" }}>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <LocalPhoneIcon className={[style.icons, style.insta]} />
            <Typography className={[style.text, style.font16]}>
              +01852-1265122 <br />
              +01852-1265122
            </Typography>
          </div>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <EmailIcon className={[style.icons, style.insta]} />
            <Typography className={[style.text, style.font14]} >
              info@example.com
              <br />
              support@example.com
            </Typography>
          </div>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <AddLocationIcon className={[style.icons, style.insta]} />
            <Typography className={[style.text, style.font14]}>
              2752 Willison Street
              <br />
              Eagan, United State
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid
        md={3}
        item
        style={{
          alignContent: "center",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Typography className={[style.text, style.font18]}>
          Support
        </Typography>

        <div style={{ display: "block" }}>
          <Typography className={[style.text, style.font14_2]}>
            Contact Us
          </Typography>
          <Typography className={[style.text, style.font14_2]}>
            About Us
          </Typography>
          <Typography className={[style.text, style.font14_2]}>
            Contact Us
          </Typography>
          <Typography className={[style.text, style.font14_2]} >
            Services
          </Typography>
          <Typography className={[style.text, style.font14_2]} >
            Terms and Conditions
          </Typography>
        </div>
      </Grid>
      {/* <Grid
        md={3}
        item
        style={{
          alignContent: "center",
          display: "grid",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            color: textColor,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          We Accepts
        </Typography>

        <div style={{ display: "flex" }}>
          <Image
            src={VisaCard}
            alt="cardImg"
            style={{
              height: "50px",
              objectFit: "cover",
              width: "70px",
              borderRadius: 16,
              margin: "16px 0px"
            }}
          />

          <Image
            src={BhimAppImage}
            alt="cardImg"
            style={{
              height: "50px",
              objectFit: "cover",
              width: "150px",
              borderRadius: 16,
              margin: "16px 16px"
            }}
          />
          <Image
            src={MasterCard}
            alt="cardImg"
            style={{
              height: "50px",
              objectFit: "cover",
              width: "100px",
              borderRadius: 16,
              margin: "16px 8px"
            }}
          />
        </div>
      </Grid> */}
    </Grid>
  );
}

export default Footer;
