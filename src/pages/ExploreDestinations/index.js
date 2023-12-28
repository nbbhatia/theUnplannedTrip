import { Typography, Grid } from '@mui/material';
import React from 'react';
import PackageCards from "../PackagesCards"
import PkgeImage1 from "../../Assets/images/p-1.png";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";

const ExploreDestinations = () => {
    let destinationList = [
        {
            title: "Uttarakhand",
            price: 50,
            image: PkgeImage1,

        },
        {
            title: "Himachal",
            price: 20,
            image: PkgeImage2,

        },
        {
            title: "Goa",
            price: 80,
            image: PkgeImage3,

        },
        {
            title: "Jammu & Kashmir",
            price: 60,
            image: PkgeImage4,

        },

    ];
    return (
        <div style={{ marginTop: 100 }}>
            <Typography variant="h5" style={{ padding: "0 48px", textAlign: "center" }}>
                Explore Destinations
            </Typography>
            <Grid md={12} xs={12} sm={12} item container style={{ display: "flex", padding: 32 }}>
                {destinationList?.map((card, index) =>
                (
                    <Grid md={3} key={index}>
                        <PackageCards title={card.title} packgImage={card.image} price={card.price} isDestinationCard={true} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ExploreDestinations;