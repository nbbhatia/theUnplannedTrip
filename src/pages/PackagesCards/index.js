import * as React from "react";
import { useRouter } from "next/router"
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Box, Rating, Typography } from "@mui/material";
import "./card.css"

export default function BasicCard(props) {
  let { title, packgImage, price, isDestinationCard, isSubDestinations } = props
  let location = useRouter();
  return (
    <Box sx={{ ml: 2 }} style={{ width: "100%" }}>
      <Card sx={{ mr: 2 }} style={{ padding: 0, boxShadow: "none", gap: 0 }}>
        <a href="/cityWiseDestinations" className="href-link" style={{ position: "relative", }}>
          <img
            src={packgImage?.src}
            alt="package-image"
            className="gradient-image"
            style={{ height: !isDestinationCard ? "200px" : 330, width: "100%", borderRadius: "7px 7px 0 0", objectFit: "cover" }}
          />

         

        </a>
        {isDestinationCard &&
          <div style={{ paddingLeft: 20, position: "absolute", bottom: 10 }}>
            <a href="/cityWiseDestinations" className="href-link">
              <Typography level="title-lg">{title}</Typography>
            </a>

            <Typography fontSize="lg" fontWeight="lg" style={{ color: "#fff" }}>
              Rs.{price} k
            </Typography>
          </div>
        }
        {!isDestinationCard &&
          <div style={{ padding: 16 }}>
            <a href="/cityWiseDestinations" className="href-link">
              <Typography level="title-lg" style={{color:"#000"}}>{title}</Typography>
            </a>
          
   
            {location.pathname !== "/subDestinations" ?
              <CardContent orientation="horizontal">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography level="body-xs">Total price: <span style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>Rs.{price} k</span></Typography>
                </div>
               
                <Button
                  variant="solid"
                  size="md"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
                >
                  <a href={isSubDestinations && "/packageDetails"} style={{ color: "#fff", textDecoration: "none" }}> Explore</a>
                </Button>
              </CardContent>
              : <div>
                <Typography level="body-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
               
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1" style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>Total Tour: <span style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>5+</span></Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography level="body-xs">Starting price per person: <span style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>Rs.{price} k</span></Typography>
                </div>
                <Rating name="read-only" value={4} readOnly />
              </div>
            }
          </div>
        }
      </Card>
    </Box>
  );
}

