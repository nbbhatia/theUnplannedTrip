import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography, Button, Container } from "@mui/material";

// Styles import
import style from "./style.module.css";

// Asset imports
import Badrinath from "../../Assets/images/charDham/badrinath.jpeg";
import Kedarnath from "../../Assets/images/charDham/kedar1.jpeg";
import Yamnotri from "../../Assets/images/charDham/yamunotri.jpeg";
import Gangotri from "../../Assets/images/charDham/gangotri.jpeg";
import ChardhamImage from "../../Assets/images/charDham/chardham.jpeg";

export const CharDhamYatra = () => {
  const destinations = [
    {
      id: 1,
      title: "CharDham",
      text: "Experience the ultimate spiritual journey across the four sacred abodes of Uttarakhand.",
      imageUrl: ChardhamImage,
    },
    {
      id: 2,
      title: "Gangotri",
      text: "The origin of the holy river Ganges, nestled deep in the Greater Himalayas.",
      imageUrl: Gangotri,
    },
    {
      id: 3,
      title: "Yamnotri",
      text: "The seat of Goddess Yamuna, famous for its thermal springs and rugged glaciers.",
      imageUrl: Yamnotri,
    },
    {
      id: 4,
      title: "Kedarnath",
      text: "One of the twelve Jyotirlingas of Lord Shiva, set against majestic snow-capped peaks.",
      imageUrl: Kedarnath,
    },
    {
      id: 5,
      title: "Badrinath",
      text: "The holy abode of Lord Vishnu, situated between the Nar and Narayan mountains.",
      imageUrl: Badrinath,
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            className={style.heading}
            sx={{ fontWeight: 800 }}
          >
            Char Dham{" "}
            <span className={style.uniqueText} style={{ color: "#2095AE" }}>
              Yatra
            </span>
          </Typography>
        </Box>

        {/* Interactive Accordion Container */}
        <Box
          sx={{
            display: "flex",
            height: "450px", // Decreased height
            gap: 1.5,
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {destinations.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "relative",
                flex: 1,
                transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                overflow: "hidden",
                borderRadius: "20px", // Slightly smaller radius for smaller height
                cursor: "pointer",
                "&:hover": {
                  flex: { md: 4 },
                },
                "&:hover .details-overlay": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
                "&:hover .collapsed-title-bar": {
                  opacity: 0,
                  transform: "translateY(10px)",
                },
              }}
            >
              {/* Background Image */}
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                priority
                style={{ objectFit: "cover" }}
              />

              {/* Horizontal Title Bar (Visible when collapsed) */}
              <Box
                className="collapsed-title-bar"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "15px 5px",
                  textAlign: "center",
                  zIndex: 3,
                  transition: "all 0.3s ease",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1rem", // Slightly smaller font for smaller height
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>

              {/* Expanded Details Overlay */}
              <Box
                className="details-overlay"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: { xs: "20px", md: "30px" }, // Reduced padding
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                  color: "white",
                  opacity: { xs: 1, md: 0 },
                  transform: { md: "translateY(20px)" },
                  transition: "all 0.4s ease",
                  zIndex: 4,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    fontSize: { xs: "1.5rem", md: "2.2rem" },
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    maxWidth: "450px",
                    fontSize: "0.95rem",
                    lineHeight: 1.4,
                    color: "rgba(255,255,255,0.9)",
                    display: { xs: "block", md: "block" },
                  }}
                >
                  {item.text}
                </Typography>

                <Link
                  href={{
                    pathname: `/subDestinations`,
                    query: { city: item.title },
                  }}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      bgcolor: "#2095AE",
                      px: 3,
                      py: 1,
                      borderRadius: "6px",
                      fontWeight: 700,
                      textTransform: "none",
                      "&:hover": { bgcolor: "#1a7a8f" },
                    }}
                  >
                    View Packages
                  </Button>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CharDhamYatra;
