import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { banners } from "../../utils/temporaryData";
import { ProductInterface } from "../interface/ProductInterface";
import BannerCard from "../components/BannerCard";
import axios from "axios";
import { BannerInterface } from "../interface/BannerInterface";

const BACK_HOST = '127.0.0.1'
const BACK_PORT = '2121'

const CenteredBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  textAlign: "center",
  paddingTop: "50px", // Adjust as needed for spacing
});

const CreateNewBannerPage = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<BannerInterface | null>(null);

  const [bannerURL, setBannerURL] = useState("");
  const handleSave = () => {
    axios.post(`http://${BACK_HOST}:${BACK_PORT}/api/banners/new`, {
      banner:
        {productID: `test-${Math.random()}` , title: 'test', description: 'test', imageURL: 'test', note: 'test'}
    }).then(res => console.log('response:', res))
  };

  return (
    <CenteredBox>
      <Typography variant="h2">Banner Shop</Typography>
      <Typography variant="h5">Create New Banner</Typography>
      <TextField
        sx={{ width: "300px" }}
        label="Banner URL"
        value={bannerURL}
        onChange={(e) => setBannerURL(e.target.value)}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={banners}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.title} // Assuming 'title' is the label property
        renderInput={(params) => (
          <TextField {...params} label="Product Title" />
        )}
        onChange={(_, value) => {
          const selected = banners.find(
            (product) => product._id === value?._id
          );
          setSelectedProduct(selected || null);
        }}
      />
      {selectedProduct && <BannerCard selectedProduct={selectedProduct as any} />}
      <Box marginBottom={5}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginLeft: "10px" }}
        >
          Cancel
        </Button>
      </Box>
    </CenteredBox>
  );
};

export default CreateNewBannerPage;
