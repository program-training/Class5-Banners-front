import { Alert, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
=======
import { useAppSelector } from "../../../redux/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { BannerInterface } from "../interface/BannerInterface";
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
import { AddCircle } from "@mui/icons-material";
import Pending from "../components/Pending";
import { getMyBannersReq } from "../service/bannerReqFromServer";

const MyBannersPage = () => {
<<<<<<< HEAD
  const { bannersState, error, pending } = useAppSelector(
    (store) => store.banners
  );
  const [bannerToDelete, setBannerToDelete] = useState<string | null>(null);
  const dispatch = useAppDispatch();
=======
  const [bannerToDelete, setBannerToDelete] = useState<string | null>(null);
  const [banners, setBanners] = useState<BannerInterface[]>([]);
  const [status, setStatus] = useState<"pending" | "success" | "error">(
    "pending"
  );
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
<<<<<<< HEAD
    if (!user) return navigate("/user/login");
    dispatch(getMyBannersReq());
  }, []);

=======
    setStatus("pending");
    getBannerByUserId(user.token)
      .then((res) => {
        setBanners(res);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, [user.token]);

  if (!user.loggedIn || !user.isAdmin)
    return <Navigate replace to={"/banners/user/login"} />;

>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
  return (
    <Container maxWidth="md">
      <Typography variant="h2" padding={2} align="center">
        The Banners You Created
      </Typography>
<<<<<<< HEAD
      <Button onClick={() => navigate("/create")}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>

      {bannersState && (
        <BannerTable setOpenDialog={setBannerToDelete} page="my-banners" />
      )}
      {pending && <Pending />}
      {error && (
=======
      <Button onClick={() => navigate("/banners/create")}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>
      {status === "success" && banners.length > 0 && (
        <BannerTable
          data={banners}
          setOpenDialog={setBannerToDelete}
          page="my-banners"
        />
      )}
      {status === "pending" && <Pending />}
      {status === "error" && (
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
        <Alert severity="error">
          cant get banners list from server. try again later.
        </Alert>
      )}
<<<<<<< HEAD
      {!pending && !error && !bannersState && (
=======
      {status === "success" && banners.length === 0 && (
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
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
