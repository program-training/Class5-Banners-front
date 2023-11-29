import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

// import { useAppSelector } from "../../redux/hooks";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  // const user = useAppSelector((state) => state.user);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    // if (!user.loggedIn) {
    //   navigate("/banners/user/login");
    // }
    //  else
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSignUp = () => {
    navigate("/banners/user/sign-up");
    handleCloseUserMenu();
  };

  const handleLogin = () => {
    navigate("/banners/user/login");
    handleCloseUserMenu();
  };

  return (
    <>
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
        <MenuItem onClick={handleSignUp}>SignUp</MenuItem>
        <MenuItem onClick={handleLogin}>Login</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
