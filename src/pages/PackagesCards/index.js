import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { Box } from "@mui/material";
import "./card.css"

export default function BasicCard(props) {
  console.log(props)
  let { title, packgImage, price ,isDestinationCard} = props
  return (
    <Box sx={{ ml: 2 }}>


      <Card style={{ padding:0, boxShadow: "none", gap: 0 }}>

        <img
          src={packgImage?.src}
          alt="package-image"
          className="gradient-image"
          style={{ height: !isDestinationCard ? "100%" : 330, width: "100%",borderRadius: "7px 7px 0 0"}}
        />
        {isDestinationCard &&
          <div style={{ paddingLeft: 20, position: "absolute", bottom: 10 }}>
            <Typography level="title-lg" style={{ color: "#fff" }}>{title}</Typography>
            <Typography fontSize="lg" fontWeight="lg" style={{ color: "#fff" }}>
                  Rs.{price} k
                </Typography>
          </div>
        }
        {!isDestinationCard &&
          <div style={{padding:16}}>
            <Typography level="title-lg">{title}</Typography>


            <CardContent orientation="horizontal">
              <div>
                <Typography level="body-xs">Total price:</Typography>
                <Typography fontSize="lg" fontWeight="lg">
                  Rs.{price} k
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
              >
                Explore
              </Button>
            </CardContent>
          </div>
        }
      </Card>
    </Box>
  );
}

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Box } from "@mui/material";

// export default function MediaCard(props) {
//   let { title, packgImage, price } = props
//   return (
//     <Box sx={{ ml: 2 }}>
//       <Card sx={{ maxWidth: 345 }} style={{boxShadow:"none"}}>
//         {/* <CardMedia
//           sx={{ height: 140 }}
//           image={packgImage}
//           title="package Image"
//         /> */}
//         <img
//           src={packgImage?.src}
//           alt=""
//           style={{ height: 140, width: "100%" }}
//         />
//         {price ?
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {title}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Lizards are a widespread group of squamate reptiles, with over 6,000
//               species, ranging across all continents except Antarctica
//             </Typography>
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <Typography level="body-xs">Total price:</Typography>
//               <Typography fontSize="lg" fontWeight="lg">
//                 $2,900
//               </Typography>
//             </div>
//           </CardContent>

//           : <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography>
//         }
//       </Card>
//     </Box>
//   );
// }

