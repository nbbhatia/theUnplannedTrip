import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography, Box, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

export const themes = [
  {
    title: "Honeymoon",
    slug: "honeymoon",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    title: "Adventure",
    slug: "adventure",
    img: "https://images.unsplash.com/photo-1533130061792-64b345e4a833",
  },
  {
    title: "Solo Travel",
    slug: "solo-travel",
    img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
  },
  {
    title: "Wildlife",
    slug: "wildlife",
    img: "https://images.unsplash.com/photo-1547407139-3c921a66005c",
  },
  {
    title: "Beach Side",
    slug: "beach-side",
    img: "https://images.unsplash.com/photo-1520483601560-389dff534f46",
  },
  {
    title: "Luxury",
    slug: "luxury",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "Religious",
    slug: "religious",
    img: "https://images.unsplash.com/photo-1548013146-72479768bbaa",
  },
  {
    title: "Road Trips",
    slug: "road-trips",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
  },
];

const ThemeSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const revealUp = {
    "@keyframes revealUp": {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#fff", width: "100%", ...revealUp }}>
      {/* Tightened Header */}
      <Box sx={{ px: 2, mb: 2 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 900, animation: "revealUp 0.5s ease forwards" }}
        >
          Explore by <span style={{ color: "#2095AE" }}>Theme</span>
        </Typography>
      </Box>

      <Box sx={{ position: "relative", width: "100%" }}>
        {/* LEFT ARROW - Pinned to absolute left edge */}
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            bgcolor: "rgba(255,255,255,0.9)",
            color: "#2095AE",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "#2095AE", color: "white" },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <ArrowBackIosNew fontSize="small" />
        </IconButton>

        {/* RIGHT ARROW - Pinned to absolute right edge */}
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            bgcolor: "rgba(255,255,255,0.9)",
            color: "#2095AE",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": { bgcolor: "#2095AE", color: "white" },
            display: { xs: "none", sm: "flex" },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 1.5, // Tight gap between cards
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
            px: 2, // Only minimal padding for the scroll start
          }}
        >
          {themes.map((theme, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 auto",
                animation: `revealUp 0.5s ease forwards`,
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
              }}
            >
              <Link
                href={`/themepackages/${theme.slug}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 180, md: 240 }, // Compact widths
                    height: { xs: 260, md: 320 }, // Compact heights
                    borderRadius: "16px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                    "&:hover img": { transform: "scale(1.1)" },
                    "&:hover .overlay": {
                      background:
                        "linear-gradient(to top, #2095AE, transparent)",
                    },
                  }}
                >
                  <Image
                    src={theme.img}
                    alt={theme.title}
                    fill
                    style={{ objectFit: "cover", transition: "0.6s ease" }}
                  />

                  {/* Text Overlay - Integrated for less bulk */}
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                      display: "flex",
                      alignItems: "flex-end",
                      p: 2,
                      transition: "0.3s ease",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "1rem",
                        lineHeight: 1.2,
                      }}
                    >
                      {theme.title}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeSection;
