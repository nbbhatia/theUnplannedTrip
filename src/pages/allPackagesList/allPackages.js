import React, { useState } from "react";
import { Typography, Box, Container, Grid, Button, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

// Your existing imports
import PkgeImage1 from "../../Assets/images/imagesofharidwar/haridwar6.jpg";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import PkgeImage6 from "../../Assets/images/p-6.png";

const AllPackages = () => {
  const [activeState, setActiveState] = useState("Uttarakhand");

  const stateData = [
    {
      stateName: "Uttarakhand",
      bannerText: "Experience the Divine Serenity of the Himalayas",
      bannerImg: PkgeImage1,
      packages: [
        {
          name: "Char Dham Yatra",
          price: "₹25,500",
          img: PkgeImage1,
          duration: "11 Days / 10 Nights",
        },
        {
          name: "Valley of Flowers",
          price: "₹18,200",
          img: PkgeImage3,
          duration: "6 Days / 5 Nights",
        },
        {
          name: "Hemkund Sahib",
          price: "₹15,000",
          img: PkgeImage5,
          duration: "5 Days / 4 Nights",
        },
      ],
    },
    {
      stateName: "Himachal",
      bannerText: "Explore the Land of Infinite Snow and Adventure",
      bannerImg: PkgeImage2,
      packages: [
        {
          name: "Shimla & Manali",
          price: "₹22,000",
          img: PkgeImage2,
          duration: "7 Days / 6 Nights",
        },
        {
          name: "Spiti Valley",
          price: "₹32,500",
          img: PkgeImage4,
          duration: "9 Days / 8 Nights",
        },
        {
          name: "Dharamshala",
          price: "₹14,000",
          img: PkgeImage6,
          duration: "4 Days / 3 Nights",
        },
      ],
    },
    {
      stateName: "Rajasthan",
      bannerText: "The Royal Land of Forts and Desert Sunsets",
      bannerImg: PkgeImage4,
      packages: [
        {
          name: "Jaipur & Udaipur",
          price: "₹19,000",
          img: PkgeImage4,
          duration: "6 Days / 5 Nights",
        },
        {
          name: "Jaisalmer Desert",
          price: "₹12,500",
          img: PkgeImage2,
          duration: "3 Days / 2 Nights",
        },
      ],
    },
    {
      stateName: "Maharashtra",
      bannerText: "From Bustling Metros to Pristine Konkan Coasts",
      bannerImg: PkgeImage5,
      packages: [
        {
          name: "Mahabaleshwar",
          price: "₹11,000",
          img: PkgeImage5,
          duration: "4 Days / 3 Nights",
        },
        {
          name: "Lonavala Stay",
          price: "₹8,500",
          img: PkgeImage1,
          duration: "2 Days / 1 Night",
        },
      ],
    },
    {
      stateName: "Gujarat",
      bannerText: "The Vibrant Soul of Heritage and Wildlife",
      bannerImg: PkgeImage6,
      packages: [
        {
          name: "Rann of Kutch",
          price: "₹21,000",
          img: PkgeImage6,
          duration: "5 Days / 4 Nights",
        },
        {
          name: "Somnath & Dwarka",
          price: "₹16,000",
          img: PkgeImage3,
          duration: "6 Days / 5 Nights",
        },
      ],
    },
  ];

  const currentData = stateData.find((s) => s.stateName === activeState);

  return (
    <Box sx={{ background: "#f8f9fa", minHeight: "100vh" }}>
      {/* 1. HERO BANNER */}
      <Box
        sx={{
          position: "relative",
          height: "75vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Image
          src={currentData.bannerImg}
          alt="Banner"
          fill
          priority
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)",
            zIndex: 1,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(15px)",
              padding: { xs: "40px 20px", md: "60px 80px" },
              borderRadius: "40px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 8,
                fontWeight: 800,
                color: "#2095AE",
                display: "block",
                mb: 2,
              }}
            >
              PREMIUM TOURS
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3rem", md: "5rem" },
                mb: 2,
                textShadow: "0px 4px 20px rgba(0,0,0,0.6)",
              }}
            >
              {activeState}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.95,
                fontWeight: 400,
                maxWidth: "550px",
                mx: "auto",
              }}
            >
              {currentData.bannerText}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* 2. STATE NAVIGATION PILLS */}
      <Container
        maxWidth="xl"
        sx={{ mt: -5, position: "relative", zIndex: 10, pb: 10 }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
          <Stack
            direction="row"
            sx={{
              bgcolor: "white",
              p: 1.2,
              borderRadius: "100px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
              overflowX: "auto", // Mobile friendly
              maxWidth: "95vw",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {stateData.map((s) => (
              <Button
                key={s.stateName}
                onClick={() => setActiveState(s.stateName)}
                sx={{
                  px: { xs: 4, md: 6 },
                  py: 2,
                  borderRadius: "100px",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                  bgcolor:
                    activeState === s.stateName ? "#2095AE" : "transparent",
                  color: activeState === s.stateName ? "white" : "#0f2454",
                  transition: "0.4s ease",
                  "&:hover": {
                    bgcolor:
                      activeState === s.stateName ? "#1a7a8f" : "#f5f5f5",
                  },
                }}
              >
                {s.stateName}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* 3. PACKAGE CARDS GRID */}
        <Grid container spacing={5}>
          {currentData.packages.map((pkg, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Link
                href={`/subDestinations?city=${pkg.name}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: "32px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    transition: "0.4s ease",
                    "&:hover": {
                      transform: "translateY(-15px)",
                      boxShadow: "0 30px 60px rgba(15, 36, 84, 0.2)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", height: "300px" }}>
                    <Image
                      src={pkg.img}
                      alt={pkg.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />

                    {/* FIXED VISIBILITY BADGE - DEEP NAVY CONTRAST */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        bgcolor: "#0f2454",
                        color: "#fff",
                        px: 2,
                        py: 1.2,
                        borderRadius: "14px",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {pkg.duration}
                    </Box>
                  </Box>

                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 800, color: "#0f2454", mb: 1 }}
                    >
                      {pkg.name}
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      sx={{ mb: 4 }}
                    >
                      <TravelExploreIcon
                        sx={{ fontSize: "1.2rem", color: "#2095AE" }}
                      />
                      <Typography sx={{ color: "gray", fontSize: "0.9rem" }}>
                        Explore {activeState}
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            color: "gray",
                            fontWeight: 700,
                            textTransform: "uppercase",
                          }}
                        >
                          Pkg Price
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "1.6rem",
                            fontWeight: 900,
                            color: "#2095AE",
                          }}
                        >
                          {pkg.price}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          width: "55px",
                          height: "55px",
                          borderRadius: "18px",
                          bgcolor: "#0f2454",
                          "&:hover": { bgcolor: "#2095AE" },
                        }}
                      >
                        <ArrowForwardIcon />
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllPackages;
