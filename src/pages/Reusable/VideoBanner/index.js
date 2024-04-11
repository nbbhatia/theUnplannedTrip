import React from 'react';
import style from "./style.module.css"
import { Typography } from '@mui/material';


const VideoBanner = () => {
    return (
        <div className={style.banner_video}>
            <div className={style.video_div} />
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" className={style.video_banner}>
                <source src="https://player.vimeo.com/external/406227029.sd.mp4?s=9f5369cd52db12305a27c05935da15b13ab84f45&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div className={style.video_text}>
                <Typography className={style.heading}>The Unplanned Trip</Typography>
                <Typography className={style.subHeading}>Marvelous Uttarakhand</Typography>
            </div>
        </div>
    )
}

export default VideoBanner;