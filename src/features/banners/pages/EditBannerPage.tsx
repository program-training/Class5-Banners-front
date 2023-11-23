import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { banners } from "../../utils/temporaryData";

const EditBannerPage = () => {
  const { bannerID } = useParams();
  const banner = banners.find((banner) => banner._id == bannerID);
  console.log(banner);

  return (
    <Box>
      <Typography variant="h2"> Banner Shop </Typography>
      <Typography variant="h5"> Edit Banner </Typography>
      {banner?.title}
    </Box>
  );
};

export default EditBannerPage;
