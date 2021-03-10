import ButtonAppBar from "./AppBar";
import Footer from "./Footer";
import Box from "@material-ui/core/Box";

const Layout = ({ children }) => {
  return (
    <>
      <ButtonAppBar />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
