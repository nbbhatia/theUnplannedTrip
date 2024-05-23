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
import { useRouter } from "next/router";
import style from "./style.module.scss";
const subDestionations = () => {
    let arrayOfSubDestinations = [
        {
            packageName: "11 Days in Uttarakhand",
            aboutTour: `Exciting Rishikesh river rafting & camping package with other fun-filled activities like Zipline, rock climbing, Moonlight trails, evening DJ music party & delicious meals/tempting snack to savor your taste buds.`,
            imageUrl: PkgeImage6, price: 500, NoOfTours: 5
        },
        {
            packageName: "10 Night and 11 Days in Uttarakhand ",
            aboutTour: `Exciting Rishikesh river rafting & camping package with other fun-filled activities like Zipline, rock climbing, Moonlight trails, evening DJ music party & delicious meals/tempting snack to savor your taste buds.`,
            imageUrl: PkgeImage2,
            price: 500,
            NoOfTours: 7,
        },
        {
            packageName: "4 Days in Kedarnath",
            aboutTour: `Exciting Rishikesh river rafting & camping package with other fun-filled activities like Zipline, rock climbing, Moonlight trails, evening DJ music party & delicious meals/tempting snack to savor your taste buds.`,
            imageUrl: PkgeImage3,
            price: 500,
            NoOfTours: 4,
        },
        {
            packageName: "2 Night and 3 Days in Rishikesh (Weekend)",
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
    let router = useRouter();
    const { city } = router.query;
    return (
        <Layout style={{ margin: 0 }}>
            <Image
                src={BGImage}
                alt="Vercel Logo"
                style={{ height: "80vh", width: "100%", objectFit: "cover" }}
                priority
            />

            <Grid md={12} sm={12} xs={12} item container style={{ padding: 48, display: "flex", flexWrap: "wrap", width: "100%" }}>
                <Typography className={style.heading}>
                    {city}
                </Typography>
                <Typography className={style.subHeading}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Grid>

            <Grid container spacing={2} style={{ padding: 48 }}>
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
            {/* </Grid> */}

        </Layout>
    );
}

export default subDestionations;
