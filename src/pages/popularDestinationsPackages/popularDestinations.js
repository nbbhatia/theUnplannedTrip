import React from "react";
import { Typography, Box, IconButton, Container, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Original Imports
import PkgeImage1 from "../../Assets/images/imagesofharidwar/haridwar6.jpg";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import PkgeImage6 from "../../Assets/images/p-6.png";

const CustomLeftArrow = ({ onClick }) => (
  <IconButton
    onClick={() => onClick()}
    sx={{
      position: "absolute",
      left: "10px",
      zIndex: 10,
      bgcolor: "#2095AE",
      color: "#fff",
      "&:hover": { bgcolor: "#0f2454" },
      boxShadow: 3,
      width: 40,
      height: 40,
    }}
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </IconButton>
);

const CustomRightArrow = ({ onClick }) => (
  <IconButton
    onClick={() => onClick()}
    sx={{
      position: "absolute",
      right: "10px",
      zIndex: 10,
      bgcolor: "#2095AE",
      color: "#fff",
      "&:hover": { bgcolor: "#0f2454" },
      boxShadow: 3,
      width: 40,
      height: 40,
    }}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </IconButton>
);

const Destinations = (props) => {
  const arrayOfDestinations = [
    { packageName: "Uttarakhand", imageUrl: PkgeImage1, NoOfTours: 5 },
    { packageName: "Himachal Pradesh", imageUrl: PkgeImage2, NoOfTours: 7 },
    { packageName: "Gangotri", imageUrl: PkgeImage3, NoOfTours: 7 },
    { packageName: "Yamnotri", imageUrl: PkgeImage4, NoOfTours: 7 },
    { packageName: "Kedarnath", imageUrl: PkgeImage5, NoOfTours: 7 },
    { packageName: "Badrinath", imageUrl: PkgeImage6, NoOfTours: 7 },
  ];

  const popularPackData = props?.data || arrayOfDestinations;

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Box sx={{ py: 8, background: "#fff", width: "100%" }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ mb: 4, px: 2 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: "#0f2454", mb: 1 }}
          >
            Popular <span style={{ color: "#2095AE" }}>Places</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary" }}>
            Handpicked destinations for your next trip
          </Typography>
        </Box>

        {/* Carousel Wrapper with forced visibility */}
        <Box sx={{ position: "relative", width: "100%", minHeight: "340px" }}>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            arrows={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            renderButtonGroupOutside={true}
          >
            {popularPackData.map((item, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Link
                  href={{
                    pathname: `/subDestinations`,
                    query: { city: item.packageName },
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "320px",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "translateY(-8px)" },
                    }}
                  >
                    {/* Image */}
                    <Image
                      src={item.imageUrl}
                      alt={item.packageName}
                      fill
                      style={{ objectFit: "cover" }}
                      priority={index < 4}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(15, 36, 84, 0.9) 0%, transparent 60%)",
                      }}
                    />

                    {/* Badge */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        right: 15,
                        bgcolor: "#2095AE",
                        color: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "12px",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {item.NoOfTours || 0} Tours
                    </Box>

                    {/* Content */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        right: 20,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: "1.2rem",
                        }}
                      >
                        {item.packageName}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ mt: 0.5 }}
                      >
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "0.8rem",
                          }}
                        >
                          Explore Packages
                        </Typography>
                        <ArrowForwardIcon
                          sx={{ color: "#2095AE", fontSize: "1rem" }}
                        />
                      </Stack>
                    </Box>
                  </Box>
                </Link>
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
};

// Internal small helper to fix missing Stack import in some MUI versions
const Stack = ({
  children,
  direction = "row",
  spacing = 1,
  alignItems = "center",
  sx = {},
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: direction,
      gap: spacing,
      alignItems,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default Destinations;
