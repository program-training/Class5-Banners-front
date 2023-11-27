import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { BannerInterface } from "../interface/BannerInterface";
import { AddCircle } from "@mui/icons-material";
import { getBannerByUserId } from "../service/getBanners";

const MyBannersPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [banners, setBanners] = useState<BannerInterface[]>([]);
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user.loggedIn || !user.isAdmin) {
      navigate("/user/login");
    } else
      try {
        getBannerByUserId("1").then((res) => {
          setBanners(res);
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      }
  }, [navigate, user.loggedIn, user.isAdmin]);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" padding={2} align="center">
        {`Banners' username ${user.token}`}
      </Typography>
      <Button onClick={() => navigate("/create")}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>
      <BannerTable data={banners} setOpenDialog={setOpenDialog} />
      <DeleteBannerDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  );
};

export default MyBannersPage;
