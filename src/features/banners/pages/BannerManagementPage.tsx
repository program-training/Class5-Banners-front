import { Container, Typography } from "@mui/material";
import { useState } from "react";
import { BannerTable } from "../components/BannerTable";
import { banners as data } from "../../utils/temporaryData";
import BannerManagementTop from "../components/BannerManagementTop";
import DeleteBannerDialog from "../components/DeleteBannerDialog";

const BannerManagementPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [banners, setBanners] = useState(data);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" padding={2} align="center">
        Banner Management
      </Typography>
      <BannerManagementTop setBanners={setBanners} />
      <BannerTable data={banners} setOpenDialog={setOpenDialog} />
      <DeleteBannerDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  );
};

export default BannerManagementPage;
