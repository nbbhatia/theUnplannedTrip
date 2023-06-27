import * as React from 'react';
import Image from 'next/image';
import BGImage from '../../../Assets/images/BG.jpg'
import {Card,CardActions,CardContent,CardMedia,Typography,Button} from '../../../Assets/lib/mui';

export default function MediaCard({packageName}) {
  return (
    <Card >
         <Image
            src={BGImage}
            alt="Vercel Logo"
             
            style={{height:'140',width:'100%'}}
            // priority
          /> 
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {packageName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}