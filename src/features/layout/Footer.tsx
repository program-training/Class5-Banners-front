import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AlternateEmail,
  Extension,
  Facebook,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <BottomNavigation
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "lightsteelblue",
        zIndex: 2,
      }}
      showLabels
    >
      <BottomNavigationAction
        onClick={() => navigate("")}
        label="management banner"
        icon={<Extension />}
      />
      <BottomNavigationAction label="050-7233332" icon={<Phone />} />
      <BottomNavigationAction
        label="Company@Banners.com"
        icon={<AlternateEmail />}
      />
      <Box display={"flex"}>
        <BottomNavigationAction icon={<Twitter />} />
        <BottomNavigationAction icon={<Instagram />} />
        <BottomNavigationAction icon={<Facebook />} />
      </Box>
    </BottomNavigation>
  );
};

export default Footer;
