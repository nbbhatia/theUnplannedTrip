// pages/_app.js

import { Montserrat_Alternates } from 'next/font/google';

const montserrat_font = Montserrat_Alternates({ subsets: ['latin'], weight: ['400', '700'],})
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
      <Component className={montserrat_font.className} {...pageProps} style={{margin:0}}/>
    // </Layout>
  );
};

export default MyApp;
