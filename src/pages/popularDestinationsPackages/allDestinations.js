import React, { useState } from "react";
import Image from "next/image";
import PackageCards from "../PackagesCards";
import styles from "./style.module.css";
import { Grid, Box, Typography, Container, TextField, InputAdornment, Chip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "../../items"; 
import PkgeImage1 from "../../Assets/images/imagesofharidwar/haridwar6.jpg";

const AllDestinationList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Pilgrimage", "Adventure", "Nature", "Heritage"];

  // Logic to filter the data
  const filteredData = data.filter((item) => {
    const matchesSearch = item.place.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCat === "All" || item.category === selectedCat;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box className={styles.pageWrapper}>
      <Box className={styles.destinationImage_div}>
        <Image src={PkgeImage1} alt="Banner" className={styles.destinationImage} priority fill />
        <Box className={styles.image_text}>
          <Typography className={styles.destinationName}>OUR DESTINATIONS</Typography>
          <Typography className={styles.noOfTour}>{filteredData.length} Packages Found</Typography>
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Search & Filter Bar */}
        <Box sx={{ mb: 6, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
          <TextField
            placeholder="Search destination (e.g. Chopta, Varanasi)..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: { xs: "100%", md: "50%" } }}
            InputProps={{
              startAdornment: (<InputAdornment position="start"><SearchIcon color="primary" /></InputAdornment>),
            }}
          />
          
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                clickable
                color={selectedCat === cat ? "primary" : "default"}
                onClick={() => setSelectedCat(cat)}
                sx={{ fontSize: "14px", px: 1 }}
              />
            ))}
          </Box>
        </Box>

        <Grid container spacing={4}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Grid item key={item.id} lg={3} md={4} sm={6} xs={12} sx={{ display: "flex" }}>
                <PackageCards
                  title={item.place}
                  packgImage={item.bannerImage}
                  subText={item.noOfDays}
                  // Added description support
                  description={item.description}
                />
              </Grid>
            ))
          ) : (
            <Box sx={{ width: "100%", textAlign: "center", py: 10 }}>
              <Typography variant="h5" color="textSecondary">No destinations found in this category.</Typography>
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllDestinationList;