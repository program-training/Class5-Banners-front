import { Alert, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import Pending from "../components/Pending";
import { getMyBannersReq } from "../service/bannerReqFromServer";

const MyBannersPage = () => {
  const navigate = useNavigate();
  const { bannersState, error, pending } = useAppSelector(
    (store) => store.banners
  );
  const [bannerToDelete, setBannerToDelete] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getMyBannersReq());
  }, []);

  if (!user) return <Navigate replace to={"/banners/user/login"} />;

  return (
    <Container maxWidth="md">
      <Typography variant="h2" padding={2} align="center">
        The Banners You Created
      </Typography>
      <Button onClick={() => navigate("/create")}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>

      {bannersState && (
        <BannerTable setOpenDialog={setBannerToDelete} page="my-banners" />
      )}
      {pending && <Pending />}
      {error && (
        <Alert severity="error">
          cant get banners list from server. try again later.
        </Alert>
      )}
      {!pending && !error && !bannersState && (
        <Alert severity="info">You hadn't created banners yet.</Alert>
      )}
      <DeleteBannerDialog
        openDialog={bannerToDelete}
        setOpenDialog={setBannerToDelete}
      />
    </Container>
  );
};

export default MyBannersPage;
