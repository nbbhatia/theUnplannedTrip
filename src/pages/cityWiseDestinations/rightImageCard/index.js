import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActions, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import TravelImage1 from "../../../Assets/images/travel1.jpg";
import Image from 'next/image';
import { Grid } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import Link from 'next/link';

export default function MediaControlCard(props) {
    let { title, packgImage, price, isDestinationCard, isSubDestinations, aboutTour } = props;
    let itemsWithPackage = ['Breakfast', 'Lunch', 'Dinner', 'EveningSnacks and Tea', 'Camping']
    return (
        <Grid md={12} xs={12} sm={12} item container style={{ marginRight: 20 }}>


            <Card sx={{ display: 'flex', width: "100%", }} >
                <Box sx={{ display: 'contents', flexDirection: 'column' }} >
                    <Image
                        src={TravelImage1}
                        alt="Vercel Logo"
                        style={{ height: "100%", width: 300, objectFit: "cover" }}
                        priority
                    />
                    <div style={{ padding: 16 }}>
                        <Typography component="div" variant="h5" style={{color:"#0f2454"}}>
                            {title}
                        </Typography>
                        <Typography component="div" variant="body2" style={{color:"#676977"}}>
                            {aboutTour}
                        </Typography>
                        <Typography variant="h5" style={{ marginTop: 18,color:"#2095AE" }}>
                            Rs. {price} <span style={{ fontSize: 16 }}>/ per person</span>
                        </Typography>
                        <div style={{ display: "flex" ,flexWrap:"wrap",margin:"10px 0px"}}>
                            {itemsWithPackage.map((obj, index) => (
                                <div key={index} style={{
                                    padding: "2px 15px",
                                    borderRadius: "24px",
                                    border: "2px solid #676977",
                                    width:"max-content",
                                    display:"flex",
                                    marginBottom:8,
                                    alignItems:"center"
                                }}>
                                <DoneIcon style={{fontSize:18,color:"green",marginRight:3,fontWeight:"bold"}}/>
                                    <Typography style={{color:"#676977"}}>
                                        {obj}
                                    </Typography>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", margin: "16px 0" }}>
                            <Button variant="contained" style={{background:"#0f2454",textDecoration:"none"}}>
                                <Link href={"/packageDetails"} style={{ color: "#fff", textDecoration: "none" }}> View Details</Link>
                            </Button>
                        </div>


                    </div>




                </Box>


            </Card>
        </Grid>
    );
}
