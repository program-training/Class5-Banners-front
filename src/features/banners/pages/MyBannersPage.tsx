import { Alert, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import Pending from "../components/Pending";
import { getMyBannersReq } from "../service/bannerReqFromServer";
import ROUTES from "../../router/routes";

const MyBannersPage = () => {
  const { bannersToDisplay, error, pending } = useAppSelector(
    (store) => store.banners
  );
  const user = useAppSelector((state) => state.user.userState);
  const [bannerToDelete, setBannerToDelete] = useState<string | null | boolean>(
    null
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!user) navigate(ROUTES.LogInPage);
  useEffect(() => {
    dispatch(getMyBannersReq());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pending) return <Pending />;
  return (
    <Container maxWidth="md">
      <Typography variant="h2" padding={2} align="center">
        The Banners You Created
      </Typography>
      <Button onClick={() => navigate(ROUTES.CreateNewBannerPage)}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>

      {bannersToDisplay && (
        <BannerTable
          setOpenDialog={setBannerToDelete}
          page="my-banners"
          banners={bannersToDisplay}
        />
      )}
      {!pending && !error && !bannersToDisplay && (
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
