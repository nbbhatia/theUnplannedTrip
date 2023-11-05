import Image from "next/image";
import Link from "next/link";
import { color_styling } from "../../../Assets/color";
import Logo from "../../../Assets/images/Logo.png";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Home() {
  const { backgroundColor, textColor } = color_styling;
  let linksArray = [
    "Home",
    "Tours",
    "Destinations",
    "Blog",
    "Contact",
    "Gallery",
  ];

  return (
    <div
      style={{
        background: "lightseagreen",
        //height: 0,
        display: "flex",
        position: "relative",
        width: "100%",
      }}
    >
      <Container fixed sx={{ display: "flex" }}>
        <Image
          src={Logo}
          alt="Vercel Logo"
          style={{
            height: "50px",
            width: "100px",
            objectFit: "contain",
            margin: 16,
          }}
          // priority
        />

        <ul
          style={{
            justifyContent: "flex-end",
            width: "100%",
            margin: "16px",
            display: "flex",
          }}
        >
          {linksArray.map((link, key) => (
            <li style={{ listStyle: "none", margin: 16 }}>
              <Link
                href="/"
                style={{
                  color: textColor,
                  fontSize: 16,
                  textDecoration: "none",
                }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Home;
