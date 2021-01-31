import ButtonAppBar from "./AppBar";
import Box from "@material-ui/core/Box";

const theme = {
  spacing: 8,
};

const Layout = ({ children }) => {
  return (
    <>
      <ButtonAppBar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
