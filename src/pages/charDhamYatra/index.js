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
import Link from 'next/link';
import style from "./style.module.css"



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
                <Typography variant="h3" className={style.heading}>
                    Char Dham  <span className={style.uniqueText}>
                        Yatra
                    </span>
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
                                    <Typography className={style.heading_text}>
                                        {item.title}
                                    </Typography>
                                    <Typography className={style.subheading_text}>{item.text}</Typography>
                                    <Button
                                        variant="contained"
                                        size="md"
                                        className={style.viewPackageText}
                                        sx={{ ml: "auto", alignSelf: "center", fontWeight: 600, background: "#2095AE", margin: "24px 0" }}
                                    >
                                        <Link href={"/cityWiseDestinations"} style={{ color: "#fff", textDecoration: "none" }}> View Packages</Link>
                                        {/* <a href={"/cityWiseDestinations"} style={{ color: "#fff", textDecoration: "none" }}> View Packages</a> */}
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
