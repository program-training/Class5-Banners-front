import { Alert, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { BannerInterface } from "../interface/BannerInterface";
import { AddCircle, Pending } from "@mui/icons-material";
import { getBannerByUserId } from "../service/getBanners";

const MyBannersPage = () => {
    const [bannerToDelete, setBannerToDelete] = useState<string | null>(null);
    const [banners, setBanners] = useState<BannerInterface[]>([]);
    const [status, setStatus] = useState<"pending" | "success" | "error">(
        "pending"
    );
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        if (!user.loggedIn || !user.isAdmin) return navigate("/user/login");
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
    }, [navigate, user.loggedIn, user.isAdmin, user.token, bannerToDelete]);

    return (
        <Container maxWidth="md">
            <Typography variant="h2" padding={2} align="center">
                The Banners You Created
            </Typography>
            <Button onClick={() => navigate("/create")}>
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
                <Alert severity="error">
                    cant get banners list from server. try again later.
                </Alert>
            )}
            {status === "success" && banners.length === 0 && (
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
