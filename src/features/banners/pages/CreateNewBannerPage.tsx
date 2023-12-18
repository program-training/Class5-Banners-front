import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { ProductInterface } from "../interface/ProductInterface";
import BannerCard from "../components/BannerCard";
import { centeredBox } from "../../utils/styles";
import CancelCreateBannerButton from "../components/CancelCreateBannerButton";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addBannerReq,
  getUnbanneredProducts,
} from "../service/bannerReqFromServer";
import { Navigate } from "react-router-dom";
import ROUTES from "../../router/routes";

const CreateNewBannerPage = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInterface | null>(null);
  const [bannerURL, setBannerURL] = useState("");
  const { products, pending } = useAppSelector((store) => store.banners);
  const { userState: user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [autocompleteValue, setAutocompleteValue] =
    useState<ProductInterface | null>(null);

  useEffect(() => {
    dispatch(getUnbanneredProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = () => {
    selectedProduct &&
      dispatch(
        addBannerReq({
          title: selectedProduct.title,
          imageURL: bannerURL,
          productID: selectedProduct?.id.toString(),
          category: selectedProduct.category,
          description: selectedProduct.description,
        })
      );
  };

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
        options={products || []}
        loading={pending}
        loadingText="Loading..."
        sx={{ width: 300 }}
        isOptionEqualToValue={(opt) => typeof opt.category === "string"}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Product Title" />
        )}
        value={autocompleteValue}
        onChange={(_, value) => {
          const selected = products?.find(
            (product) => product.id === value?.id
          );
          setSelectedProduct(selected || null);
          setAutocompleteValue(selected || null); // Set Autocomplete value
        }}
      />
      {selectedProduct && <BannerCard selectedProduct={selectedProduct} />}
      <Box
        sx={{
          mb: 5,
          display: "flex",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSave}
          disabled={!selectedProduct || !bannerURL}
        >
          Save
        </Button>
        <CancelCreateBannerButton
          {...{
            setAutocompleteValue,
            setBannerURL,
            setSelectedProduct,
          }}
        />
      </Box>
    </Box>
  );
};

export default CreateNewBannerPage;
