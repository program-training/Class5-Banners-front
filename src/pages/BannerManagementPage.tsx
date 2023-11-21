import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

const BannerManagementPage = () => {
  return (
    <Box>
      <Typography variant="h2"> Banner Shop </Typography>

      <Typography variant="h5"> Banner management </Typography>
      {/* <Link to={'/SignUp'} component={<SignUpPage/>} >
          {Children}
        </Link> */}
      <Outlet />
    </Box>
  );
};

export default BannerManagementPage;
