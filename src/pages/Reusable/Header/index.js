import React, { useState, useEffect } from "react";
import Image from "next/image";
import { color_styling } from "../../../Assets/color";
import Logo from "../../../Assets/images/logo.jpeg";
import Container from "@mui/material/Container";
import "./header.css";

const Home = () => {
  const { backgroundColor, textColor } = color_styling;

  const [scrollYPosition, setScrollYPosition] = useState(0);

  let linksArray = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Tours", url: "/subDestinations" },
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
  return (
    <div
      style={{
        background: scrollYPosition > 666 ? "black" : "transparent",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        position: "fixed",
        zIndex: 999
      }}
    >

      <Container
        fixed
        sx={{ display: "flex" }}
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
        />

        <ul
          style={{
            justifyContent: "flex-end",
            width: "100%",
            margin: "16px",
            display: "flex",
          }}
        >
          {linksArray.map((link, index) => (
            <li
              key={index}
              className="router_link"
              style={{ listStyle: "none", margin: 16 }}
            >
              <a href={link.url} className="href-link">
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
