import BGImage from "../../Assets/images/BG.jpg";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "../../Assets/lib/mui";
import Image from "next/image";
import Icon from "@mui/material/Icon";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import StarRateIcon from "@mui/icons-material/StarRate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { color_styling } from "../../Assets/color";

const PackageList = ({ name, rating, imgUrl, price, stay }) => {
  const { secondaryTextColor, primaryTextColor } = color_styling;
  return (
    <Card>
      <Image
        src={imgUrl}
        alt="Vercel Logo"
        style={{ height: "140px", width: "100%", objectFit: "cover" }}
        // priority
      />

      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            component="div"
            style={{
              fontSize: 16,
              color: secondaryTextColor,
              fontWeight: "bold",
              fontFamily: "Dancing Script ,cursive",
              marginLeft:6
            }}
          >
            $ {price} / per person
          </Typography>
          <div style={{ display: "flex" }}>
            <CalendarMonthIcon
              style={{ color: secondaryTextColor, fontSize: 16, margin: 2 }}
            />
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{
                fontSize: 16,
                color: secondaryTextColor,
                fontFamily: "Dancing Script ,cursive",
              }}
            >
              {stay}
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <AddLocationIcon style={{ color: primaryTextColor }} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontSize: 20,
              color: primaryTextColor,
              fontFamily: "Dancing Script ,cursive",
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
        </div>

        <div style={{ display: "flex" }}>
          <StarRateIcon style={{ color: primaryTextColor ,fontSize:16,margin:3}} />
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontSize: 16,
              color: secondaryTextColor,
              fontFamily: "Dancing Script ,cursive",
             alignContent:"center"
            }}
          >
            {rating}k+ Rating
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageList;
