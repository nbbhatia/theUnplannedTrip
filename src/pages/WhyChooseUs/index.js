import React from "react";
import Image from "next/image";
import { Typography, Box, Container, Grid, Stack, Paper } from "@mui/material";
import {
  AutoAwesome,
  Map,
  VerifiedUser,
  Diversity3,
  Handshake,
  ThumbUpAlt,
} from "@mui/icons-material";

const WhyChooseUs = () => {
  const stats = [
    { icon: <Diversity3 />, title: "120k+", label: "Community Members" },
    { icon: <Map />, title: "150+", label: "Unique Destinations" },
    { icon: <AutoAwesome />, title: "500+", label: "Tailored Experiences" },
    {
      icon: <Handshake />,
      title: "B2B & Groups",
      label: "Specialized Services",
    },
    {
      icon: <VerifiedUser />,
      title: "Safety First",
      label: "Verified Partners",
    },
    { icon: <ThumbUpAlt />, title: "4.9/5", label: "Average Rating" },
  ];

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: "#0a1929",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          {/* Left Side: Asymmetric Image Gallery */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                gap: 2,
                height: { xs: 400, md: 550 },
              }}
            >
              {/* Column 1 */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    flex: 2,
                    borderRadius: 6,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1533130061792-64b345e4a833"
                    fill
                    alt="Traveler"
                    style={{ objectFit: "cover" }}
                  />
                </Paper>
                <Paper
                  elevation={10}
                  sx={{
                    flex: 1,
                    borderRadius: 6,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
                    fill
                    alt="Bonfire"
                    style={{ objectFit: "cover" }}
                  />
                </Paper>
              </Box>
              {/* Column 2 - Shifted Down */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  mt: 6,
                }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    flex: 1,
                    borderRadius: 6,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                    fill
                    alt="Mountains"
                    style={{ objectFit: "cover" }}
                  />
                </Paper>
                <Paper
                  elevation={10}
                  sx={{
                    flex: 2,
                    borderRadius: 6,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1506466010722-395aa2bef877"
                    fill
                    alt="Biking"
                    style={{ objectFit: "cover" }}
                  />
                </Paper>
              </Box>
            </Box>
          </Grid>

          {/* Right Side: Content & Feature Grid */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#00d2ff",
                  fontWeight: 600,
                  mb: 1,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                Our Essence
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontWeight: 900, mb: 3, lineHeight: 1.1 }}
              >
                Beyond Just <br />
                <span style={{ color: "#00d2ff" }}>Exploration</span>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.1rem",
                  mb: 5,
                  maxWidth: "500px",
                }}
              >
                We don't just plan trips; we curate moments. With a decade of
                storytelling through travel, we bridge the gap between tourist
                spots and authentic soul-searching journeys.
              </Typography>

              {/* The Icon Grid */}
              <Grid container spacing={4}>
                {stats.map((item, index) => (
                  <Grid item xs={6} sm={4} key={index}>
                    <Box sx={{ textAlign: "left" }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          p: 1.5,
                          borderRadius: "15px",
                          background: "rgba(0, 210, 255, 0.1)",
                          color: "#00d2ff",
                          mb: 2,
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, mb: 0.5 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 500 }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
