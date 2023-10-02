import { Outlet } from "react-router-dom";
import Navbar from "../components/navigationbar/index";
import Footer from "../components/footer/index";

function RootLayout(props) {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
