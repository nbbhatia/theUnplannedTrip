import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Stack,
  Chip,
  Paper,
  CircularProgress,
  Tabs,
  Tab,
} from "@mui/material";
import {
  LocationOn,
  Star,
  WhatsApp,
  WbSunny,
  Luggage,
  HelpOutline,
} from "@mui/icons-material";
import Layout from "../page";
import { allPackages } from "../../data/packagesList"; // <--- IMPORTING DATA

export default function LuxuryDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [pkg, setPkg] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    if (router.isReady && id) {
      // Find the specific package that matches the ID in the URL
      const foundPkg = allPackages.find((p) => p.id === parseInt(id));
      setPkg(foundPkg);
    }
  }, [router.isReady, id]);

  if (!pkg)
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Layout>
      <Box sx={{ bgcolor: "#FAFBFC", minHeight: "100vh", pb: 10 }}>
        {/* HERO SECTION */}
        <Box sx={{ position: "relative", height: "60vh", width: "100%" }}>
          <Image
            src={pkg.img}
            fill
            style={{ objectFit: "cover" }}
            alt={pkg.title}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 100%)",
            }}
          />
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              pb: 5,
            }}
          >
            <Box sx={{ color: "white" }}>
              <Chip
                label={pkg.theme.toUpperCase()}
                sx={{
                  bgcolor: "#2095AE",
                  color: "white",
                  fontWeight: 900,
                  mb: 2,
                }}
              />
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 1 }}>
                {pkg.title}
              </Typography>
              <Stack direction="row" spacing={3}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <LocationOn /> {pkg.location}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Star sx={{ color: "#FFB400" }} /> {pkg.rating}
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ mt: 5 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              {/* QUICK INFO CARDS */}
              <Grid container spacing={2} sx={{ mb: 5 }}>
                {[
                  {
                    icon: <WbSunny />,
                    label: "Best Time",
                    value: pkg.bestTime,
                  },
                  { icon: <Luggage />, label: "Duration", value: pkg.duration },
                  {
                    icon: <HelpOutline />,
                    label: "Price",
                    value: `₹${pkg.price}`,
                  },
                ].map((item, i) => (
                  <Grid item xs={4} key={i}>
                    <Paper
                      variant="outlined"
                      sx={{ p: 2, textAlign: "center", borderRadius: "15px" }}
                    >
                      <Box sx={{ color: "#2095AE", mb: 0.5 }}>{item.icon}</Box>
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 700, color: "#64748B" }}
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 900 }}>
                        {item.value}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>

              {/* TABS */}
              <Tabs
                value={tabValue}
                onChange={(e, v) => setTabValue(v)}
                sx={{ mb: 3 }}
              >
                <Tab label="Itinerary" sx={{ fontWeight: 900 }} />
                <Tab label="Highlights" sx={{ fontWeight: 900 }} />
              </Tabs>

              {tabValue === 0 && (
                <Box sx={{ pl: 2, borderLeft: "2px solid #F1F5F9" }}>
                  {pkg.itinerary.map((step, idx) => (
                    <Box key={idx} sx={{ mb: 4, position: "relative" }}>
                      <Box
                        sx={{
                          position: "absolute",
                          left: -25,
                          top: 0,
                          width: 16,
                          height: 16,
                          bgcolor: "#2095AE",
                          borderRadius: "50%",
                          border: "3px solid white",
                        }}
                      />
                      <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        Day {step.day}: {step.title}
                      </Typography>
                      <Typography sx={{ color: "#64748B" }}>
                        {step.desc}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}

              {tabValue === 1 && (
                <Stack spacing={2}>
                  {pkg.highlights.map((h, i) => (
                    <Paper
                      key={i}
                      sx={{ p: 2, borderRadius: "12px", bgcolor: "#F0F9FF" }}
                    >
                      <Typography sx={{ fontWeight: 800, color: "#2095AE" }}>
                        ✓ {h}
                      </Typography>
                    </Paper>
                  ))}
                </Stack>
              )}
            </Grid>

            {/* SIDEBAR */}
            <Grid item xs={12} md={4}>
              <Paper
                sx={{ p: 4, borderRadius: "25px", position: "sticky", top: 40 }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 900, color: "#2095AE", mb: 1 }}
                >
                  ₹{pkg.price}
                </Typography>
                <Typography sx={{ color: "#64748B", fontWeight: 700, mb: 4 }}>
                  Total package per person
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#1A2027",
                    py: 2,
                    borderRadius: "12px",
                    mb: 2,
                    fontWeight: 900,
                  }}
                >
                  Book This Trip
                </Button>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<WhatsApp />}
                  sx={{
                    color: "#10B981",
                    borderColor: "#10B981",
                    py: 1.5,
                    borderRadius: "12px",
                    fontWeight: 800,
                  }}
                >
                  Chat with Expert
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
