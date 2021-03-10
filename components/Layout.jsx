import ButtonAppBar from "./AppBar";
import Box from "@material-ui/core/Box";

const Layout = ({ children }) => {
  return (
    <>
      <ButtonAppBar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
