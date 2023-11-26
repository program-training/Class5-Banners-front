import { Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BannerInterface } from "../interface/BannerInterface";
import { AddCircle } from "@mui/icons-material";

const MyBannersPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [banners, setBanners] = useState<BannerInterface[]>([
    // {
    //   _id: "",
    //   title: "",
    //   image: {
    //     url: "",
    //     alt: "",
    //   },
    //   text: "",
    //   createdAt: "",
    //   author: "",
    // },
  ]);
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    // if (!user.loggedIn) {
    //   navigate("/user/login");
    // }
    try {
      axios
        .get(
          `${import.meta.env.VITE_SERVER_HOST}:${
            import.meta.env.VITE_SERVER_PORT
          }/api/users/my`
        )
        .then((response) => setBanners(response.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [navigate, user.loggedIn]);

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
