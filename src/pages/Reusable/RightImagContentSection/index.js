import React from "react";
import { Grid, Typography, Box, Stack, Divider } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import PkgeImage2 from "../../../Assets/images/p-2.png";

const RightImagContentSection = () => {
  const location = useRouter();
  const isAboutPage = location.pathname === "/about";

  return (
    // Reduced vertical padding from 10 to 4
    <Box sx={{ py: 4, px: { xs: 2, md: 6 }, overflow: "hidden" }}>
      <Grid container spacing={3} alignItems="center">
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={6}>
          <Stack spacing={1.5}>
            <Typography
              sx={{
                color: "#2095AE",
                fontWeight: 700,
                fontSize: "0.85rem",
                textTransform: "uppercase",
              }}
            >
              The Best Travel Agency
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
            >
              Discover The <span style={{ color: "#2095AE" }}>World</span>{" "}
              <br />
              With Our Guide
            </Typography>

            <Typography
              sx={{ color: "#676977", fontSize: "0.95rem", lineHeight: 1.6 }}
            >
              You can choose any country with good tourism. Agency elementum
              sesue the aucan vestibulum aliquam justo in sapien rutrum
              volutpat.
            </Typography>

            {isAboutPage && (
              <Stack spacing={2} sx={{ mt: 1 }}>
                {/* Horizontal Compact Stats */}
                <Stack direction="row" spacing={3}>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ color: "#2095AE", fontWeight: 800, mb: -0.5 }}
                    >
                      20+
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#676977" }}>
                      Years Experience
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ color: "#2095AE", fontWeight: 800, mb: -0.5 }}
                    >
                      150+
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#676977" }}>
                      Destinations
                    </Typography>
                  </Box>
                </Stack>

                <Divider sx={{ width: "60%" }} />

                {/* Compact Phone Section */}
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PermPhoneMsgIcon sx={{ color: "#2095AE", fontSize: 32 }} />
                  <Box>
                    <Typography
                      sx={{ fontSize: "0.75rem", color: "#676977", mb: -0.5 }}
                    >
                      For information
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                      855 333 4444
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            )}
          </Stack>
        </Grid>

        {/* RIGHT IMAGE SECTION */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Main Image - Reduced size and tighter border radius */}
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                width: "100%",
                maxWidth: 420, // Prevents it from getting too large
              }}
            >
              <Image
                src={PkgeImage2}
                alt="Travel Guide"
                width={420}
                height={480}
                style={{ objectFit: "cover", display: "block" }}
                priority
              />

              {/* Overlaid Label for a unique look */}
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  bgcolor: "#2095AE",
                  color: "white",
                  px: 2,
                  py: 0.5,
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                SINCE 2004
              </Box>
            </Box>

            {/* Smaller Floating Badge */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                position: "absolute",
                bottom: 20,
                left: { md: 0, xs: 20 },
                bgcolor: "white",
                py: 1,
                px: 2,
                borderRadius: "8px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                zIndex: 2,
              }}
            >
              <CheckCircleIcon sx={{ color: "#2095AE", fontSize: 20 }} />
              <Typography sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
                Top Rated Guide
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightImagContentSection;
