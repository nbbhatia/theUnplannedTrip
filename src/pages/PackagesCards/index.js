import * as React from "react";
import { useRouter } from "next/router"
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Box, Rating, Typography } from "@mui/material";
import style from "./style.module.css"
import Link from "next/link";

export default function BasicCard(props) {
  let { title, packgImage, price, isDestinationCard, isSubDestinations, subText, numberOfTour,rating  } = props
  let location = useRouter();
  return (
    <Box sx={{ ml: 2 }} style={{ width: "100%" }}>
      <Card sx={{ mr: 2 }} style={{ padding: 0, boxShadow: "none", gap: 0,minHeight:380 }}>
        <Link href="/cityWiseDestinations" className="href-link" style={{ position: "relative", }}>
          <img
            src={packgImage?.src}
            alt="package-image"
            className={style.gradientImage}
            style={{ height: !isDestinationCard ? 200 : 330, width: "100%", borderRadius: "7px 7px 0 0", objectFit: "cover" }}
          />



        </Link>
        {isDestinationCard &&
          <div style={{ paddingLeft: 20, position: "absolute", bottom: 10 }}>
            <Link href="/cityWiseDestinations" className="href-link">
              <Typography level="title-lg" className={style.hotelName}>{title}</Typography>
            </Link>

            <Typography fontSize="lg" fontWeight="lg" style={{ color: "#fff" }}>
              Rs.{price} k
            </Typography>
          </div>
        }
        {!isDestinationCard &&
          <div style={{ padding: 8 }}>
            <Link href="/cityWiseDestinations" className="href-link">
              <Typography level="title-lg" className={style.hotelName} >{title}</Typography>
            </Link>


            {location.pathname !== "/subDestinations" ?
              <CardContent orientation="horizontal">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography level="body-xs" className={style.price}>Rs.{price} <span className={style.perNight}>per night</span></Typography>
                </div>

                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  <Link href={"/packageDetails"} className={style.btnText}> Explore</Link>
                </Button>
              </CardContent>
              : <div>
                <Typography level="body-xs" className={style.cardSubText}>{subText}</Typography>
                {numberOfTour &&
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1" className={style.perNight} style={{ fontWeight: "bold" }}>Total Tour: <span className={style.perNight} style={{ fontWeight: "bold" }}>5+</span></Typography>
                  </div>}
                {price &&
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography level="body-xs" className={style.perNight} >Starting price per person: <span style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>Rs.{price} k</span></Typography>
                  </div>
                }
                {rating&&
                <Rating name="read-only" value={rating} readOnly />
                }
              </div>
            }
          </div>
        }
      </Card>
    </Box>
  );
}

