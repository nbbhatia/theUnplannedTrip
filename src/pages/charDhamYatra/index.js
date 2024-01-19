import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Badrinath from "../../Assets/images/charDham/badrinath.jpeg";
import Kedarnath from "../../Assets/images/charDham/kedar1.jpeg";
import Yamnotri from "../../Assets/images/charDham/yamunotri.jpeg";
import Gangotri from "../../Assets/images/charDham/gangotri.jpeg";
import ChardhamImage from "../../Assets/images/charDham/chardham.jpeg";
import Image from "next/image";
import { Button, Typography } from '@mui/material';



export const CharDhamYatra = () => {
    const items = {
        bootstrap: [],
        elastic: [],
        responsive: [
            {
                id: 1,
                title:
                    "CharDham Yatra",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                imageUrl: ChardhamImage,
            },
            {
                id: 2,
                title: "Gangotri Temple",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                imageUrl: Gangotri,
            },
            {
                id: 3,
                title: "Yamnotri Temple",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                imageUrl: Yamnotri,
            },
            {
                id: 4,
                title: "Kedarnath Temple",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                imageUrl: Kedarnath,
            },
            {
                id: 5,
                title: "Badrinath Temple",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                imageUrl: Badrinath,
            },
        ],
    };
    return (
        <div>
            <div style={{ display: "block", padding: 52 }}>
                <Typography variant="h3" style={{ color: "#2095AE" }}>
                    <span style={{ color: "#0f2454", fontWeight: "bold" ,fontFamily:"monospace"}}>
                        Char Dham
                    </span> Yatra
                </Typography>
            </div>

            <Carousel
                showArrows={false}
                infiniteLoop={true}
                dynamicHeight={false}
                // autoPlay={true}
                showThumbs={false}
            >
                {items?.responsive?.map((item, index) => (
                    <div key={index}>
                        <div
                            style={{
                                width: "100%",
                                height: "780px",
                                alignItems: "center",
                                display: "flex",
                            }}
                        >
                            <Image
                                src={item.imageUrl}
                                alt="Vercel Logo"
                                fill={true}
                                priority
                            />
                            <div
                                style={{
                                    background: "transparent",
                                    display: "flex",
                                    alignContent: "center",
                                    backgroundImage:
                                        "linear-gradient(to bottom, rgba(0, 0, 0, 0) -70%, rgba(0, 0, 0, 1) 200%)",
                                    width: "100%",
                                    height: "780px",
                                    backgroundSize: 'cover',
                                    color: 'white',
                                    padding: '20px',
                                    zIndex: 1,
                                    justifyContent: "center",

                                }}
                            >
                                <div style={{
                                    position: "absolute",
                                    bottom: 100
                                }}>
                                    <Typography variant="h3" style={{ fontWeight: 700,fontFamily:"monospace",letterSpacing:"20px" }}>
                                        {item.title}
                                    </Typography>
                                    <Typography style={{ color: "#fff", fontSize: 24,fontFamily:"monospace",letterSpacing:"normal" ,padding:24}}>{item.text}</Typography>
                                    <Button
                                        variant="contained"
                                        size="md"
                                       sx={{ ml: "auto", alignSelf: "center", fontWeight: 600,background:"#2095AE",margin:"24px 0" }}
                                    >
                                        <a href={"/cityWiseDestinations"} style={{ color: "#fff", textDecoration: "none" }}> View Packages</a>
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
export default CharDhamYatra;
