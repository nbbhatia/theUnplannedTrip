import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react'
import PkgeImage2 from "../../../Assets/images/p-2.png";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { useRouter } from 'next/router';
import style from "./style.module.css";

const RightImagContentSection = () => {
    const location = useRouter();
    return (
        <Grid md={12} xs={12} sm={12} item container className={style.right_image_div}>
            <Grid md={7} xs={12} sm={12} item>
                <Typography className={style.heading}>
                    THE BEST TRAVEL AGENCY
                </Typography>
                <Typography className={style.subHeading}>
                    DISCOVER THE <span className={style.worldText} style={{ color: "#2095AE", fontWeight: "bold" }}>
                        WORLD </span><br /> WITH OUR GUIDE
                </Typography>
                <Typography className={style.bodyText}>
                    You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
                    <br />
                    You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.

                </Typography>
                <Typography className={style.bodyText}>
                    You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.
                    <br />
                    You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.

                </Typography>
            </Grid>
            <Grid md={5} xs={12} sm={12} item container justifyContent={"flex-end"} style={{ position: "relative" }}>
                <div style={{ background: "#2095AE", height: 500, width: 380, position: "relative", top: 50 }} />
                <Image
                    src={PkgeImage2}
                    alt="Vercel Logo"
                    style={{ height: 518, width: 400, objectFit: "cover", position: "absolute", right: 36 }}
                    priority
                />
            </Grid>
            {location.pathname === "/about" &&
                <div style={{ display: "block" }}>
                    <Grid style={{ display: "flex", marginBottom: 16 }}>
                        <CheckCircleIcon style={{ color: "#2095AE", marginRight: 8 }} />
                        <Typography style={{ color: "#676977" }}>20 Years of Experience</Typography>
                    </Grid>
                    <Grid style={{ display: "flex" }}>
                        <CheckCircleIcon style={{ color: "#2095AE", marginRight: 8 }} />
                        <Typography style={{ color: "#676977" }}>150+ Tour Destinations</Typography>
                    </Grid>
                    <Grid style={{ display: "flex", margin: 24, alignItems: "center" }}>
                        <PermPhoneMsgIcon style={{ color: "#2095AE", marginRight: 8, fontSize: 48 }} />
                        <span style={{ display: "block" }}>
                            <Typography variant='body1' style={{ color: "#676977" }}>For information</Typography>
                            <Typography variant='h4' style={{ color: "#676977", fontWeight: 300 }}>855 333 4444</Typography>
                        </span>

                    </Grid>
                </div>
            }
        </Grid>
    )
}

export default RightImagContentSection;