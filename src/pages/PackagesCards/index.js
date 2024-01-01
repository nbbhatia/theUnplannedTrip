import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { Box } from "@mui/material";
import "./card.css"

export default function BasicCard(props) {
  let { title, packgImage, price, isDestinationCard, isSubDestinations } = props
  return (
    <Box sx={{ ml: 2 }} style={{ width: "100%" }}>
      <Card sx={{ mr: 2 }} style={{ padding: 0, boxShadow: "none", gap: 0 }}>
        <img
          src={packgImage?.src}
          alt="package-image"
          className="gradient-image"
          style={{ height: !isDestinationCard ? "200px" : 330, width: "100%", borderRadius: "7px 7px 0 0" ,objectFit:"cover"}}
        />
        {isDestinationCard &&
          <div style={{ paddingLeft: 20, position: "absolute", bottom: 10 }}>
            <Typography level="title-lg" style={{ color: "#fff" }}>{title}</Typography>
            <Typography fontSize="lg" fontWeight="lg" style={{ color: "#fff" }}>
              Rs.{price} k
            </Typography>
          </div>
        }
        {!isDestinationCard &&
          <div style={{ padding: 16 }}>
            <Typography level="title-lg">{title}</Typography>


            <CardContent orientation="horizontal">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography level="body-xs">Total price: <span style={{ fontSize: 16, color: "#000", fontWeight: "bold" }}>Rs.{price} k</span></Typography>
                {/* <Typography fontSize="lg" fontWeight="lg">
                  Rs.{price} k
                </Typography> */}
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
          </div>
        }
      </Card>
    </Box>
  );
}

