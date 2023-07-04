// pages/_app.js
import Layout from "@/pages/page";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  //   const router = useRouter();

  //   // Check if the current route is an authentication route
  //   const isAuthRoute = router.pathname.startsWith("/auth");

  //   // You can perform any common layout or logic for all pages here

  //   // Wrap authentication pages with a layout or authentication-specific logic
  //   if (isAuthRoute) {
  //     // Add authentication layout or logic here if needed

  //     // For example, you can add a common navigation component
  //     // or apply styles specific to authentication pages

  //     return <Component {...pageProps} />;
  //   }

  //   For non-authentication pages, you can apply a different layout or logic
  //   or simply return the component as it is
  return (
    // <div style={{margin: 0 }}>
    //   <Component {...pageProps} />
    // </div>
    // <Layout>
      <Component {...pageProps} style={{margin:0}}/>
    // </Layout>
  );
};

export default MyApp;
