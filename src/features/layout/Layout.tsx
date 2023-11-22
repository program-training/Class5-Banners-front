import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box marginBottom={5}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
