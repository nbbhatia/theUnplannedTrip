import React from "react";
import Layout from "../page";
import Image from "next/image";
import PackageCards from "./rightImageCard"
import BGImage from "../../Assets/images/imagesofharidwar/omPull.jpeg";
import PkgeImage1 from "../../Assets/images/p-1.png";
import PkgeImage2 from "../../Assets/images/p-2.png";
import PkgeImage3 from "../../Assets/images/p-3.png";
import PkgeImage4 from "../../Assets/images/p-4.png";
import PkgeImage5 from "../../Assets/images/p-5.png";
import PkgeImage6 from "../../Assets/images/p-5.png";
import { styled } from '@mui/material/styles';
import { Grid, Box, Typography, Paper } from "@mui/material";
import Form from "../Reusable/FormContainer"
const subDestionations = () => {
    let arrayOfSubDestinations = [
        {
            packageName: "Rishikesh River Rafting",
            aboutTour: `Exciting Rishikesh river rafting & camping package with other fun-filled activities like Zipline, rock climbing, Moonlight trails, evening DJ music party & delicious meals/tempting snack to savor your taste buds.`,
            imageUrl: PkgeImage6, price: 500, NoOfTours: 5
        },
        {
            packageName: "Rishikesh",
            aboutTour: `Exciting Rishikesh river rafting & camping package with other fun-filled activities like Zipline, rock climbing, Moonlight trails, evening DJ music party & delicious meals/tempting snack to savor your taste buds.`,
            imageUrl: PkgeImage2,
            price: 500,
            NoOfTours: 7,
        },
        {
            packageName: "Bungee Jumping Rishikesh",
            aboutTour: `Exciting Rishikesh river rafting & camping package with other fun-filled activities like Zipline, rock climbing, Moonlight trails, evening DJ music party & delicious meals/tempting snack to savor your taste buds.`,
            imageUrl: PkgeImage3,
            price: 500,
            NoOfTours: 4,
        },
        {
            packageName: "Almora",
            aboutTour: `Exciting Rishikesh river rafting & camping package with other fun-filled activities like Zipline, rock climbing, Moonlight trails, evening DJ music party & delicious meals/tempting snack to savor your taste buds.`,
            imageUrl: PkgeImage4,
            price: 500,
            NoOfTours: 4,
        },


    ];
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <Layout style={{ margin: 0 }}>
            <Image
                src={BGImage}
                alt="Vercel Logo"
                style={{ height: "80vh", width: "100%", objectFit: "cover" }}
                priority
            />

            <Grid md={12} sm={12} xs={12} item container style={{ padding: 48, display: "flex", flexWrap: "wrap", width: "100%" }}>
                <Typography variant="body1" style={{ textAlign: "center" }}>
                    Rishikesh is town in the Dehradun District of Uttarakhand state in India. Total population of Rishikesh is 75,020 (53% male and 47 % female) as of 2001. Rishikesh is situated at 409 meters above sea level in the foothills of Garhwal Himalayan Range and surrounded by the Shivalik range. Rishikesh is 35 kms far from Haridwar, 90 Kms from Mussoorie, 25 Kms far from Jollygrant airport Dehradun, and 240 kms far from New Delhi.
                </Typography>
                <Typography variant="body1" style={{ textAlign: "center", paddingBottom: 32 }}>
                    Rishikesh has spectacular view of jungle-clad hills. Rishikesh has also confluence of River Ganges and Chandrabhaga. The glorious attraction of Rishikesh is none other than the great river Ganges herself, running rapidly throughout the city. In the ancient time and still so many yogis, rishis, sages and sannyasis attracted to Rishikesh to practice yoga in this peaceful location. Since then, Rishikesh has known as an abode of sages. Rishikesh is a holy town with so many Ashrams and it is famous for the yoga world wide. Rishikesh is now world famous as a Yoga Capital of the world. Every year during the March month one week long International yoga festival is hosted by Rishikesh.
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={8} >
                        {arrayOfSubDestinations.map((card, index) => (
                            <Grid item md={12} key={index} style={{ marginBottom: 16 }}>
                                <PackageCards title={card.packageName} packgImage={card.imageUrl} price={card.price} isSubDestinations={true} aboutTour={card.aboutTour} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item md={4} >
                        <Form />
                    </Grid>
                </Grid>
            </Grid>

        </Layout>
    );
}

export default subDestionations;
