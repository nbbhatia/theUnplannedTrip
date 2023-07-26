import Image from "next/image";
import Link from "next/link";
import { color_styling } from "../../../Assets/color";
import Logo from "../../../Assets/images/Logo.jpg";
function Home() {
  const { backgroundColor, textColor } = color_styling;
  return (
    <div
      style={{
        background: backgroundColor,
        height: 0,
        display: "flex",
        position: "relative",
        width: "100%",
      }}
    >
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
        <li style={{ listStyle: "none", margin: 16 }}>
          <Link
            href="/"
            style={{ color: textColor, fontSize: 16, textDecoration: "none" }}
          >
            Home
          </Link>
        </li>
        <li style={{ listStyle: "none", margin: 16 }}>
          <Link
            href="/about"
            style={{ color: textColor, fontSize: 16, textDecoration: "none" }}
          >
            About Us
          </Link>
        </li>
        <li style={{ listStyle: "none", margin: 16 }}>
          <Link
            href="/destinationsPackages"
            style={{ color: textColor, fontSize: 16, textDecoration: "none" }}
          >
            Destinations
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
