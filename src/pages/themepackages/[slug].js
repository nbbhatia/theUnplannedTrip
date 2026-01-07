import React from "react";
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
  Divider,
} from "@mui/material";
import {
  Star,
  FlightTakeoff,
  Hotel,
  Restaurant,
  CameraAlt,
  SearchOff,
  ArrowForward,
} from "@mui/icons-material";
import Layout from "../page";

const themeBanners = {
  honeymoon: "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
  adventure: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  solo: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
  wildlife: "https://images.unsplash.com/photo-1547407139-3c921a66005c",
};

const allPackages = [
  // --- HONEYMOON (10) ---
  {
    id: 1,
    theme: "honeymoon",
    title: "Maldives Private Water Villa & Spa",
    price: "85,000",
    duration: "5D/4N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
  },
  {
    id: 2,
    theme: "honeymoon",
    title: "Bali Romantic Sunset & Private Pool",
    price: "62,500",
    duration: "6D/5N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    id: 3,
    theme: "honeymoon",
    title: "Santorini Oia Luxury Suite Cruise",
    price: "1,45,000",
    duration: "4D/3N",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
  },
  {
    id: 4,
    theme: "honeymoon",
    title: "Parisian Elegance: Eiffel View Stay",
    price: "1,10,000",
    duration: "5D/4N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    id: 5,
    theme: "honeymoon",
    title: "Swiss Alps: St. Moritz Rail Escape",
    price: "1,55,000",
    duration: "7D/6N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e",
  },
  {
    id: 6,
    theme: "honeymoon",
    title: "Kerala Premium Houseboat Stay",
    price: "35,000",
    duration: "4D/3N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },
  {
    id: 7,
    theme: "honeymoon",
    title: "Mauritius Beachfront & Snorkeling",
    price: "72,000",
    duration: "6D/5N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1589979485637-a9a3f0450f1e",
  },
  {
    id: 8,
    theme: "honeymoon",
    title: "Seychelles Island Hopping Bliss",
    price: "1,30,000",
    duration: "7D/6N",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1473445711224-df386b91e7d5",
  },
  {
    id: 9,
    theme: "honeymoon",
    title: "Andaman Havelock Romantic Shore",
    price: "42,000",
    duration: "5D/4N",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1589394810304-990d82959679",
  },
  {
    id: 10,
    theme: "honeymoon",
    title: "Udaipur Royal Palace Anniversary",
    price: "55,000",
    duration: "4D/3N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1548013146-72479768bbaa",
  },

  // --- ADVENTURE (10) ---
  {
    id: 11,
    theme: "adventure",
    title: "Leh Ladakh Bike Expedition",
    price: "34,999",
    duration: "9D/8N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1506466010722-395aa2bef877",
  },
  {
    id: 12,
    theme: "adventure",
    title: "Everest Base Camp Trek",
    price: "1,10,000",
    duration: "14D/13N",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62",
  },
  {
    id: 13,
    theme: "adventure",
    title: "Rishikesh White Water Rafting",
    price: "8,500",
    duration: "3D/2N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1530866495547-08b978682117",
  },
  {
    id: 14,
    theme: "adventure",
    title: "Spiti Valley Jeep Safari",
    price: "24,500",
    duration: "8D/7N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1581791534721-e599df4417f7",
  },
  {
    id: 15,
    theme: "adventure",
    title: "Skydiving in Dubai",
    price: "45,000",
    duration: "1D",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1521330784802-dc56ec46112c",
  },
  {
    id: 16,
    theme: "adventure",
    title: "Annapurna Circuit Trek",
    price: "75,000",
    duration: "12D/11N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a",
  },
  {
    id: 17,
    theme: "adventure",
    title: "Iceland Northern Lights Quest",
    price: "1,95,000",
    duration: "6D/5N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1531366930477-4f2118db836d",
  },
  {
    id: 18,
    theme: "adventure",
    title: "Scuba Diving in Havelock",
    price: "12,000",
    duration: "2D/1N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
  },
  {
    id: 19,
    theme: "adventure",
    title: "Desert Safari & Dune Bashing",
    price: "5,500",
    duration: "1D",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: 20,
    theme: "adventure",
    title: "Bungee Jumping Rishikesh",
    price: "4,000",
    duration: "1D",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1563293754-0820f1883196",
  },

  // --- SOLO (10) ---
  {
    id: 21,
    theme: "solo",
    title: "Backpacking Spiti Valley",
    price: "22,000",
    duration: "7D/6N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
  },
  {
    id: 22,
    theme: "solo",
    title: "Hostel Hopping in Goa",
    price: "12,000",
    duration: "5D/4N",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1512100356956-c1227c331f01",
  },
  {
    id: 23,
    theme: "solo",
    title: "Varanasi Spiritual Walk",
    price: "6,500",
    duration: "3D/2N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
  },
  {
    id: 24,
    theme: "solo",
    title: "Solo Retreat in Dharamshala",
    price: "15,000",
    duration: "6D/5N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1598305312693-e3805f12359d",
  },
  {
    id: 25,
    theme: "solo",
    title: "Udaipur Art & Lake Tour",
    price: "11,500",
    duration: "4D/3N",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
  },
  {
    id: 26,
    theme: "solo",
    title: "Pondicherry French Colony",
    price: "9,000",
    duration: "4D/3N",
    rating: 4.4,
    img: "https://images.unsplash.com/photo-1582512253835-12500d7bb04a",
  },
  {
    id: 27,
    theme: "solo",
    title: "Jaipur Pink City Expedition",
    price: "10,000",
    duration: "3D/2N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
  },
  {
    id: 28,
    theme: "solo",
    title: "Munnar Tea Garden Hike",
    price: "14,000",
    duration: "5D/4N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1599946340650-601472933610",
  },
  {
    id: 29,
    theme: "solo",
    title: "Hampi Ruins Exploration",
    price: "8,500",
    duration: "4D/3N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1600100397608-f010e4aa3984",
  },
  {
    id: 30,
    theme: "solo",
    title: "Alleppey Solo Houseboat",
    price: "18,000",
    duration: "3D/2N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
  },

  // --- WILDLIFE (10) ---
  {
    id: 31,
    theme: "wildlife",
    title: "Jim Corbett Jungle Safari",
    price: "15,400",
    duration: "3D/2N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1547407139-3c921a66005c",
  },
  {
    id: 32,
    theme: "wildlife",
    title: "Ranthambore Tiger Trail",
    price: "19,500",
    duration: "4D/3N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1581022295087-35e593704911",
  },
  {
    id: 33,
    theme: "wildlife",
    title: "Kaziranga Rhino Discovery",
    price: "21,000",
    duration: "5D/4N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1581264258246-886297341334",
  },
  {
    id: 34,
    theme: "wildlife",
    title: "Bandhavgarh Tiger Safari",
    price: "24,000",
    duration: "4D/3N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8",
  },
  {
    id: 35,
    theme: "wildlife",
    title: "Gir National Park Lion Tour",
    price: "16,500",
    duration: "3D/2N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1517030330234-94c4fa9fc8ca",
  },
  {
    id: 36,
    theme: "wildlife",
    title: "Periyar Elephant Sanctuary",
    price: "12,500",
    duration: "3D/2N",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1516715667182-c515c1e52f6c",
  },
  {
    id: 37,
    theme: "wildlife",
    title: "Kabini River Safari Experience",
    price: "28,000",
    duration: "3D/2N",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1549480017-d76466a4b7e8",
  },
  {
    id: 38,
    theme: "wildlife",
    title: "Sundarbans Delta Expedition",
    price: "14,000",
    duration: "4D/3N",
    rating: 4.5,
    img: "https://images.unsplash.com/photo-1580974852861-f3817e0826a3",
  },
  {
    id: 39,
    theme: "wildlife",
    title: "Tadoba Tiger Reserve Safari",
    price: "18,000",
    duration: "4D/3N",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1591824438708-218337735a11",
  },
  {
    id: 40,
    theme: "wildlife",
    title: "Nagarhole Wilderness Stay",
    price: "22,500",
    duration: "4D/3N",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1549366021-9f761d450615",
  },
];

export default function ThemeListingPage() {
  const router = useRouter();
  const { slug } = router.query;
  const filteredPackages = allPackages.filter((pkg) => pkg.theme === slug);
  const bannerImg =
    themeBanners[slug] ||
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1";

  const handleViewDetails = (id) => {
    router.push(`/package-details/${id}`);
  };

  return (
    <Layout style={{ margin: 0 }}>
      <Box sx={{ backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
        {/* 1. CINEMATIC HERO BANNER */}
        <Box
          sx={{
            position: "relative",
            height: "80vh",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            src={bannerImg}
            alt="Hero Banner"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)",
            }}
          />

          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 2,
              color: "white",
            }}
          >
            <Typography
              variant="overline"
              sx={{ letterSpacing: 6, fontWeight: 700, color: "#2095AE" }}
            >
              EXPLORE CURATED
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3.5rem", md: "6rem" },
                textTransform: "uppercase",
                lineHeight: 1,
                mb: 2,
              }}
            >
              {slug?.toString().replace("-", " ")}
            </Typography>
            <Typography
              variant="h6"
              sx={{ mt: 1, fontWeight: 400, opacity: 0.9, maxWidth: "600px" }}
            >
              Discover the finest {slug} experiences. Handpicked destinations
              designed for memories that last a lifetime.
            </Typography>
          </Container>
        </Box>

        {/* 2. PACKAGE GRID */}
        <Container
          maxWidth="lg"
          sx={{ mt: -8, pb: 10, position: "relative", zIndex: 5 }}
        >
          {filteredPackages.length > 0 ? (
            <Grid container spacing={3}>
              {filteredPackages.map((pkg) => (
                <Grid item xs={12} sm={6} md={4} key={pkg.id}>
                  <Box
                    sx={{
                      bgcolor: "white",
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
                      transition: "0.4s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                      },
                    }}
                  >
                    {/* Image Section */}
                    <Box sx={{ position: "relative", height: 220 }}>
                      <Image
                        src={pkg.img}
                        alt={pkg.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                      <Chip
                        label={pkg.duration}
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 15,
                          left: 15,
                          bgcolor: "rgba(255,255,255,0.95)",
                          fontWeight: 900,
                          fontSize: "0.75rem",
                          color: "#1A2027",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 15,
                          right: 15,
                          bgcolor: "white",
                          px: 1.2,
                          py: 0.4,
                          borderRadius: "50px",
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        }}
                      >
                        <Star sx={{ color: "#FFB400", fontSize: 16 }} />
                        <Typography variant="caption" sx={{ fontWeight: 900 }}>
                          {pkg.rating}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Content Section */}
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          height: "54px",
                          overflow: "hidden",
                          mb: 2,
                          lineHeight: 1.3,
                          color: "#1A2027",
                        }}
                      >
                        {pkg.title}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ mb: 2.5, color: "#94A3B8" }}
                      >
                        <Stack alignItems="center">
                          <Hotel fontSize="small" />
                          <Typography
                            sx={{ fontSize: "10px", fontWeight: 700 }}
                          >
                            Stay
                          </Typography>
                        </Stack>
                        <Stack alignItems="center">
                          <Restaurant fontSize="small" />
                          <Typography
                            sx={{ fontSize: "10px", fontWeight: 700 }}
                          >
                            Food
                          </Typography>
                        </Stack>
                        <Stack alignItems="center">
                          <FlightTakeoff fontSize="small" />
                          <Typography
                            sx={{ fontSize: "10px", fontWeight: 700 }}
                          >
                            Fly
                          </Typography>
                        </Stack>
                        <Stack alignItems="center">
                          <CameraAlt fontSize="small" />
                          <Typography
                            sx={{ fontSize: "10px", fontWeight: 700 }}
                          >
                            Sight
                          </Typography>
                        </Stack>
                      </Stack>

                      <Divider sx={{ mb: 2.5, borderStyle: "dashed" }} />

                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Box>
                          <Typography
                            sx={{
                              color: "#94A3B8",
                              fontWeight: 700,
                              fontSize: "11px",
                              textTransform: "uppercase",
                              letterSpacing: 0.5,
                            }}
                          >
                            Per Person
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 900, color: "#2095AE" }}
                          >
                            ₹{pkg.price}
                          </Typography>
                        </Box>

                        {/* VIEW DETAILS BUTTON */}
                        <Button
                          variant="contained"
                          onClick={() => handleViewDetails(pkg.id)}
                          endIcon={<ArrowForward sx={{ fontSize: "12px" }} />}
                          sx={{
                            bgcolor: "#2095AE",
                            borderRadius: "12px",
                            fontWeight: 800,
                            px: 2.5,
                            py: 1.2,
                            textTransform: "none",
                            fontSize: "0.85rem",
                            boxShadow: "0 8px 15px rgba(32, 149, 174, 0.2)",
                            "&:hover": {
                              bgcolor: "#1A2027",
                              transform: "scale(1.05)",
                            },
                            transition: "0.3s",
                          }}
                        >
                          View Details
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box
              sx={{
                textAlign: "center",
                py: 12,
                bgcolor: "white",
                borderRadius: "32px",
                boxShadow: "0 20px 50px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <SearchOff sx={{ fontSize: 80, color: "#CBD5E1", mb: 2 }} />
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, color: "#1A2027", mb: 1 }}
              >
                No Packages Found
              </Typography>
              <Typography variant="body1" sx={{ color: "#64748B", mb: 4 }}>
                We couldn't find any {slug} packages right now. Try exploring
                another theme!
              </Typography>
              <Button
                variant="outlined"
                onClick={() => router.push("/")}
                sx={{
                  borderColor: "#2095AE",
                  color: "#2095AE",
                  borderRadius: "12px",
                  fontWeight: 800,
                  px: 4,
                }}
              >
                Go Back Home
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Layout>
  );
}
