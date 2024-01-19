import { Typography } from '@mui/material';
import React from 'react'

const VideoBanner = () => {
    return (
        <div style={{ width: "100%",position:"relative" }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: "100%",
                width: '100%',
                backgroundColor: 'black',
                opacity: 0.5,
                zIndex: 1,
            }}/>
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" style={{ height: "100%", width: "100%" }}>
                <source src="https://player.vimeo.com/external/406227029.sd.mp4?s=9f5369cd52db12305a27c05935da15b13ab84f45&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            </video>
            <div style={{hieght:"100%",textAlign:"center",position:"absolute",top:"50%",left:"35%",zIndex:1,display:"block"}}>
                <Typography  style={{color:"#fff",fontSize:48}}>The Unplanned Trip</Typography>
                <Typography style={{color:"#fff",fontSize:24}}>Marvelous Uttarakhand</Typography>
            </div>
        </div>
    )
}

export default VideoBanner;