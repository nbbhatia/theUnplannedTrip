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

function Footer() {
  const { backgroundColor, secondaryTextColor, primaryTextColor, textColor } =
    color_styling;
  return (
    <Grid
      md={12}
      xs={12}
      sm={12}
      item
      container
      justifyContent="center"
      style={{ background: secondaryTextColor, height: 400, padding: 32 }}
    >
      <Grid md={3} item style={{ alignContent: "center", display: "grid" }}>
        <div style={{ display: "flex" }}>
          <AddLocationIcon
            style={{
              color: primaryTextColor,
              fontSize: 24,
              fontWeight: "bold",
            }}
          />
          <Typography
            style={{
              color: textColor,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "Dancing Script ,cursive",
            }}
          >
            TheUnplannedTrip
          </Typography>
        </div>

        <Typography
          style={{
            color: textColor,
            fontSize: 16,
            fontFamily: "Dancing Script ,cursive",
            marginTop: 8,
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          maxime aut ut voluptate dolorum nisi ducimus ratione
        </Typography>
        <div style={{ display: "block" }}>
          <Typography
            style={{
              color: textColor,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "Dancing Script ,cursive",
              marginTop: 0,
            }}
          >
            Follow Us:
          </Typography>
          <div style={{ display: "flex" }}>
            <InstagramIcon
              style={{
                color: primaryTextColor,
                fontSize: 24,
                fontWeight: "bold",
                margin: "8px 16px 8px 0",
              }}
            />
            <TwitterIcon
              style={{
                color: primaryTextColor,
                fontSize: 24,
                fontWeight: "bold",
                margin: "8px 8px 8px 16px",
              }}
            />
            <GoogleIcon
              style={{
                color: primaryTextColor,
                fontSize: 24,
                fontWeight: "bold",
                margin: "8px 8px 8px 16px",
              }}
            />
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
        <Typography
          style={{
            color: textColor,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Dancing Script ,cursive",
          }}
        >
          Contact Us
        </Typography>

        <div style={{ display: "block" }}>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <LocalPhoneIcon
              style={{
                color: primaryTextColor,
                fontSize: 24,
                fontWeight: "bold",
                margin: "8px 16px 8px 0",
              }}
            />
            <Typography
              style={{
                color: textColor,
                fontSize: 14,
                fontFamily: "Dancing Script ,cursive",
                marginTop: 0,
              }}
            >
              +01852-1265122 <br />
              +01852-1265122
            </Typography>
          </div>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <EmailIcon
              style={{
                color: primaryTextColor,
                fontSize: 24,
                fontWeight: "bold",
                margin: "8px 16px 8px 0",
              }}
            />
            <Typography
              style={{
                color: textColor,
                fontSize: 14,
                fontFamily: "Dancing Script ,cursive",
                marginTop: 0,
              }}
            >
              info@example.com
              <br />
              support@example.com
            </Typography>
          </div>
          <div style={{ display: "flex", margin: "16px 0" }}>
            <AddLocationIcon
              style={{
                color: primaryTextColor,
                fontSize: 24,
                fontWeight: "bold",
                margin: "8px 16px 8px 0",
              }}
            />
            <Typography
              style={{
                color: textColor,
                fontSize: 14,
                fontFamily: "Dancing Script ,cursive",
                marginTop: 0,
              }}
            >
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
        <Typography
          style={{
            color: textColor,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Dancing Script ,cursive",
          }}
        >
          Support
        </Typography>

        <div style={{ display: "block" }}>
          <Typography
            style={{
              color: textColor,
              fontSize: 14,
              fontFamily: "Dancing Script ,cursive",
              margin: "16px 0",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            style={{
              color: textColor,
              fontSize: 14,
              fontFamily: "Dancing Script ,cursive",
              margin: "16px 0",
              fontWeight: "bold",
            }}
          >
            About Us
          </Typography>
          <Typography
            style={{
              color: textColor,
              fontSize: 14,
              fontFamily: "Dancing Script ,cursive",
              margin: "16px 0",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            style={{
              color: textColor,
              fontSize: 14,
              fontFamily: "Dancing Script ,cursive",
              margin: "16px 0",
              fontWeight: "bold",
            }}
          >
            Services
          </Typography>
          <Typography
            style={{
              color: textColor,
              fontSize: 14,
              fontFamily: "Dancing Script ,cursive",
              margin: "16px 0",
              fontWeight: "bold",
            }}
          >
            Terms and Conditions
          </Typography>
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
        <Typography
          style={{
            color: textColor,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Dancing Script ,cursive",
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
              margin:"16px 0px"
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
              margin:"16px 16px"
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
              margin:"16px 8px"
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
