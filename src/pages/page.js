import Header from "./Reusable/Header";
import Footer from "./Reusable/Footer";
import "./style.css";
export default function Layout({ children }) {
  return (
    <div style={{ margin: 0 ,overflowX:"hidden"}}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
