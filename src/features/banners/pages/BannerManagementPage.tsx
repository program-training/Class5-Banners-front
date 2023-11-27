import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import BannerManagementTop from "../components/BannerManagementTop";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { getBannersFromServer } from "../service/getBanners";
import { BannerInterface } from "../interface/BannerInterface";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router";

const BannerManagementPage = () => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [banners, setBanners] = useState<BannerInterface[]>([]);

  useEffect(() => {
    if (!user.loggedIn || !user.isAdmin) {
      navigate("/user/login");
    } else {
      getBannersFromServer()
        .then((res) => {
          setBanners(res);
        })
        .catch((err) => console.log(err));
    }
  }, [user.loggedIn, user.isAdmin, navigate]);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" padding={2} align="center">
        Banner Management
      </Typography>
      <BannerManagementTop banners={banners} setBanners={setBanners} />
      <BannerTable data={banners} setOpenDialog={setOpenDialog} />
      <DeleteBannerDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  );
};

export default BannerManagementPage;
