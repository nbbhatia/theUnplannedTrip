import React from "react";
import Image from "next/image";
import { Typography, Box, Container, Grid } from "@mui/material";

const experiences = [
  {
    title: "River Cruises",
    tours: "38 Tours",
    img: "https://images.unsplash.com/photo-1509142141272-386001222e9f",
  },
  {
    title: "Hills for Solo Travellers",
    tours: "36 Tours",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
  {
    title: "Europe Under 3 Lacs",
    tours: "275 Tours",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
  },
  {
    title: "Vietnam for 18-35 yrs",
    tours: "9 Tours",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592",
  },
  {
    title: "Indian Bike Tours",
    tours: "15 Tours",
    img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
  },
  {
    title: "Best of Wildlife",
    tours: "44 Tours",
    img: "https://images.unsplash.com/photo-1547407139-3c921a66005c",
  },
  {
    title: "Airfare Inclusive",
    tours: "158 Tours",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2",
  },
  {
    title: "Women Only",
    tours: "5 Tours",
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
  },
  {
    title: "Tours Under 1 lac",
    tours: "271 Tours",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Jul, Aug, Sept Tours",
    tours: "670 Tours",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
  },
  {
    title: "Northern Lights",
    tours: "7 Tours",
    img: "https://images.unsplash.com/photo-1531366930477-4fbd2069b2d5",
  },
  {
    title: "Bespoke Luxury",
    tours: "20 Tours",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
];

const RecommendedExperiences = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: "#333" }}>
          Recommended Experiences
        </Typography>

        <Grid container spacing={1.5}>
          {experiences.map((item, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  position: "relative",
                  height: 200,
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&:hover .overlay": {
                    backgroundColor: "rgba(0,0,0,0.3)",
                  },
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                {/* Background Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />

                {/* Text Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: 2,
                    transition: "background-color 0.3s ease",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      lineHeight: 1.2,
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    {item.tours}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default RecommendedExperiences;
