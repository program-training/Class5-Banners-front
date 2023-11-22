import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { Extension } from "@mui/icons-material";
import DeleteProfileButton from "../users/components/Deletedialog";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDisplayProfile = () => {
    navigate("/users/show/bla-bla");
  };

  const handleEditProfile = () => {
    navigate("Edit/bla-bla");
  };

  const handleLogout = () => {
    // navigate("xxxxxxxx");
  };

  // const handleDeleteProfile = () => {
  //   navigate("delete-user");
  // };

  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <IconButton
            onClick={() => {
              navigate("");
            }}
            size="large"
            aria-label="go to banner management page"
            color="inherit"
          >
            <Extension />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={() => {
              navigate("my-banners/bla-bla");
            }}
            variant="outlined"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Banners
          </Button>

          <Box sx={{ flexGrow: 1 }} />

          <Tooltip title="Open user menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
              <Avatar />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleDisplayProfile}>Display Profile</MenuItem>
            <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem onClick={DeleteProfileButton}>Delete Profile</MenuItem>
            <MenuItem>
              <DeleteProfileButton />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
