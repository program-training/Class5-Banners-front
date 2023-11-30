import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  Autocomplete,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import { ProductInterface } from "../interface/ProductInterface";
import BannerCard from "../components/BannerCard";
import { centeredBox } from "../../utils/styles";
import CancelCreateBannerButton from "../components/CancelCreateBannerButton";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addBannerReq,
  getUnbannerdProducts,
} from "../service/bannerReqFromServer";
import { Navigate } from "react-router-dom";
import ROUTES from "../../router/routes";

const CreateNewBannerPage = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInterface | null>(null);
  const [bannerURL, setBannerURL] = useState("");
  const { pending, error, products } = useAppSelector((store) => store.banners);
  const { userState: user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const handleSave = () => {
    dispatch(addBannerReq({ imageURL: bannerURL }));
  };
  useEffect(() => {
    dispatch(getUnbannerdProducts());
  }, []);

  if (!user) return <Navigate replace to={ROUTES.LogInPage} />;

  return (
    <Box sx={centeredBox}>
      <Typography variant="h2">Create Banner</Typography>
      <Typography variant="h5">
        Create your own Banners with any link you want!
      </Typography>
      <TextField
        sx={{ width: "300px" }}
        label="Banner URL"
        value={bannerURL}
        onChange={(e) => setBannerURL(e.target.value)}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={products as ProductInterface[]}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Product Title" />
        )}
        onChange={(_, value) => {
          const selected = products?.find(
            (product) => product.id === value?.id
          );
          console.log("selected", selected);
          setSelectedProduct(selected || null);
        }}
      />
      {selectedProduct && <BannerCard selectedProduct={selectedProduct} />}
      <Box marginBottom={5}>
        {!products ||
          (!error && (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                disabled={!selectedProduct || !bannerURL}
              >
                Save
              </Button>
              <CancelCreateBannerButton
                {...{ setBannerURL, setSelectedProduct }}
              />
            </>
          ))}
        {pending && <CircularProgress />}
        {error && (
          <Alert severity="error">
            an internal server error had occurred. try again later.
          </Alert>
        )}
        {!pending ||
          (!error && (
            <Alert severity="success">banner created successfully!</Alert>
          ))}
      </Box>
    </Box>
  );
};

export default CreateNewBannerPage;
