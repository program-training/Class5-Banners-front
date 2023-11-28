import { Alert, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import BannerManagementTop from "../components/BannerManagementTop";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { getBannersFromServer } from "../service/getBanners";
import { BannerInterface } from "../interface/BannerInterface";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router";
import { Pending } from "@mui/icons-material";

const BannerManagementPage = () => {
    const user = useAppSelector((state) => state.user);
    const navigate = useNavigate();
    const [BannerToDelete, setBannerToDelete] = useState<string | null>(null);
    const [banners, setBanners] = useState<BannerInterface[]>([]);

    const [status, setStatus] = useState<"pending" | "success" | "error">(
        "pending"
    );

    useEffect(() => {
        if (!user.loggedIn || !user.isAdmin) {
            navigate("/user/login");
        } else {
            setStatus("pending");
            getBannersFromServer(user.token)
                .then((res) => {
                    setBanners(res);
                    setStatus("success");
                })
                .catch((err) => {
                    setStatus("error");
                    console.log(err);
                });
        }
    }, [user.loggedIn, user.isAdmin, navigate, BannerToDelete]);

    return (
        <Container maxWidth="md">
            <Typography variant="h2" padding={2} align="center">
                Banner Management
            </Typography>
            <BannerManagementTop banners={banners} setBanners={setBanners} />
            {status === "success" && (
                <BannerTable
                    data={banners}
                    setOpenDialog={setBannerToDelete}
                    page="banner-management"
                />
            )}
            {status === "pending" && <Pending />}
            {status === "error" && (
                <Alert severity="error">
                    can't get banners list from server. try again later.
                </Alert>
            )}
            <DeleteBannerDialog
                openDialog={BannerToDelete}
                setOpenDialog={setBannerToDelete}
            />
        </Container>
    );
};

export default BannerManagementPage;
