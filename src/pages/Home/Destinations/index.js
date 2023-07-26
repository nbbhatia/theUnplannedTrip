import React from "react";
import Image from 'next/image';
import BGImage from '../../../Assets/images/BG.jpg';
import Layout from "@/pages/page";

const index = () => {
  return (
    <Layout style={{margin:0}}>
      <Image
        src={BGImage}
        alt="Vercel Logo"
        style={{ height: "50vh", width: "100%" ,objectFit:'cover'}}
        priority
      />
    </Layout>
  );
};

export default index;
