import { Alert, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import BannerManagementTop from "../components/BannerManagementTop";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { getBannersFromServer } from "../service/getBanners";
import { BannerInterface } from "../interface/BannerInterface";
import { useAppSelector } from "../../../redux/hooks";
import Pending from "../components/Pending";
import { Navigate } from "react-router-dom";

const BannerManagementPage = () => {
    const user = useAppSelector((state) => state.user);
    const [BannerToDelete, setBannerToDelete] = useState<string | null>(null);
    const [banners, setBanners] = useState<BannerInterface[]>([]);

    const [status, setStatus] = useState<"pending" | "success" | "error">(
        "pending"
    );

    useEffect(() => {
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
    }, []);

    if (!user.loggedIn || !user.isAdmin)
        return <Navigate replace to={"/user/login"} />;

    return (
        <Container maxWidth="md">
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
