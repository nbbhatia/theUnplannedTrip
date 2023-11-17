import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { color_styling } from "../../../Assets/color";
import Logo from "../../../Assets/images/Logo.png";
import Container from "@mui/material/Container";
import "./header.css";

const Home = () => {
  const { backgroundColor, textColor } = color_styling;

  const [scrollYPosition, setScrollYPosition] = useState(0);

  let linksArray = [
    { title: "Home", url: "/" },
    { title: "Tours", url: "/" },
    { title: "Destinations", url: "/destinationsPackages" },
    { title: "Blog", url: "/" },
    { title: "Contact", url: "/" },
    { title: "Gallery", url: "/" },
  ];
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollYPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("scrollYPosition", scrollYPosition);
  return (
    <div
      style={{
        background: scrollYPosition > 666 ? "black" : "transparent",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        position:"fixed",
        zIndex:999
      }}
    >
      
        <Container
          fixed
          sx={{ display: "flex"}}
        >
          <Image
            src={Logo}
            alt="Vercel Logo"
            style={{
              height: "50px",
              width: "100px",
              objectFit: "contain",
              margin: 16,
              color: "#000",
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
              <li
                className="router_link"
                style={{ listStyle: "none", margin: 16 }}
              >
                <a href={link.url} style={{ color: "#fff" }}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
  );
};

export default Home;
