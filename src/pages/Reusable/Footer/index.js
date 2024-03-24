import React from "react";
import { color_styling } from "../../../Assets/color";
import { Grid, Typography } from "../../../Assets/lib/mui";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
// import BhimAppImage from "../../../Assets/images/bhim.png";
// import MasterCard from "../../../Assets/images/masterCard.png";
// import VisaCard from "../../../Assets/images/visa.jpg";
// import Image from "next/image";
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
          <span style={{
            color: "#fff",
            fontSize: 24,
            fontWeight: "bold",
          }} >
            <AddLocationIcon />
          </span>

          <span className={[style.text, style.font24]}>
            <Typography >
              TheUnplannedTrip
            </Typography>
          </span>

        </div>
        <span className={[style.text, style.font16]}>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            maxime aut ut voluptate dolorum nisi ducimus ratione
          </Typography>
        </span>

        <div style={{ display: "block" }}>
          <span className={[style.text, style.font18]}>
            <Typography>
              Follow Us:
            </Typography>
          </span>

          <div style={{ display: "flex" }}>
            <span className={[style.icons, style.insta]}>
              <InstagramIcon />
            </span>
            <span className={[style.icons, style.TwitterIcon]}>
              <TwitterIcon />
            </span>
            <span className={[style.icons, style.TwitterIcon]}>
              <GoogleIcon />
            </span>

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
        <span className={[style.text, style.font18]}>
          <Typography>
            Contact Us
          </Typography>
        </span>


        <div style={{ display: "block" }}>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <span className={[style.icons, style.insta]} >
              <LocalPhoneIcon />
            </span>

            <span className={[style.text, style.font16]}>
              <Typography>
                +01852-1265122 <br />
                +01852-1265122
              </Typography>
            </span>
          </div>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <span className={[style.icons, style.insta]}>
              <EmailIcon />
            </span>

            <span className={[style.text, style.font14]} >
              <Typography>
                info@example.com
                <br />
                support@example.com
              </Typography>
            </span>

          </div>
          <div style={{ display: "flex", margin: "16px 0" }}>
          <span className={[style.icons, style.insta]} >
          <AddLocationIcon />
          </span>
            
            <span className={[style.text, style.font14]}>
              <Typography>
                2752 Willison Street
                <br />
                Eagan, United State
              </Typography>
            </span>
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
        <span className={[style.text, style.font18]}>
          <Typography>
            Support
          </Typography>
        </span>


        <div style={{ display: "block" }}>
          <span className={[style.text, style.font14_2]} >
            <Typography>
              Contact Us
            </Typography>
          </span>
          <span className={[style.text, style.font14_2]}>
            <Typography>
              About Us
            </Typography>
          </span>
          <span className={[style.text, style.font14_2]}>
            <Typography>
              Contact Us
            </Typography>
          </span>
          <span className={[style.text, style.font14_2]}>
            <Typography>
              Services
            </Typography>
          </span>
          <span className={[style.text, style.font14_2]}>
            <Typography>
              Terms and Conditions
            </Typography>
          </span>

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
