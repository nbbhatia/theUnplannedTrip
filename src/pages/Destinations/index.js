import React from "react";
import Image from 'next/image';
import Header from "../Reusable/Header";
import Footer from "../Reusable/Footer";
import BGImage from '../../Assets/images/BG.jpg';

const index = () => {
  return (
    <main style={{margin:0}}>
      <Header />
      <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "50vh", width: "100%" ,objectFit:'cover'}}
        priority
      />
      <Footer />
    </main>
  );
};

export default index;
