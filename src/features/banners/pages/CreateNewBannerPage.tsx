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
import CancelButton from "../components/CancelButton";
<<<<<<< HEAD
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addBannerReq,
  getUnbannerdProducts,
} from "../service/bannerReqFromServer";

const CreateNewBannerPage = () => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInterface | null>(null);
  const [bannerURL, setBannerURL] = useState("");
  const { pending, error, products } = useAppSelector((store) => store.banners);
  const dispatch = useAppDispatch();

  const handleSave = () => {
    dispatch(addBannerReq({ imageURL: bannerURL }));
  };
  useEffect(() => {
    dispatch(getUnbannerdProducts());
  }, []);

=======
import { useAppSelector } from "../../../redux/hooks";
import { Navigate } from "react-router-dom";

const CreateNewBannerPage = () => {
  const user = useAppSelector((state) => state.user);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductInterface | null>(null);
  const [bannerURL, setBannerURL] = useState("");
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [status, setStatus] = useState<
    "none" | "pending" | "success" | "error"
  >("none");

  console.log("user", user);

    useEffect(() => {        
        axios
            .get(
                `${import.meta.env.VITE_BASE_URL}/api/banners/products`, {
                    headers: {
            Authorization: `${user.token}`,
          },
        }
      )
      .then((response) => {
        setProducts(response.data);
        console.log("products data:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [user.token]);

  const handleSave = () => {
    setStatus("pending");
    axios
      .post(
        `${import.meta.env.VITE_SERVER_HOST}:${
          import.meta.env.VITE_SERVER_PORT
        }/api/banners/new`,
        {
          banner: {
            productID: `${selectedProduct?.id}`,
            title: selectedProduct?.title,
            description: selectedProduct?.description,
            imageURL: selectedProduct?.imageUrl,
            productURL: bannerURL,
            category: selectedProduct?.category,
          },
        },
        {
          headers: {
            Authorization: `${user.token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setStatus("success");
        setBannerURL("");
        setSelectedProduct(null);
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  };

  console.log("products", products);
  console.log("status", status);

  if (!user.loggedIn || !user.isAdmin)
    return <Navigate replace to={"/banners/user/login"} />;

>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
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
        options={products}
        sx={{ width: 300 }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label="Product Title" />
        )}
        onChange={(_, value) => {
<<<<<<< HEAD
          const selected = products?.find(
            (product) => product.id === value?.id
          );
=======
          const selected = products.find((product) => product.id === value?.id);
          console.log("selected", selected);
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
          setSelectedProduct(selected || null);
        }}
      />
      {selectedProduct && <BannerCard selectedProduct={selectedProduct} />}
      <Box marginBottom={5}>
<<<<<<< HEAD
        {(!pending || !error) && (
=======
        {(status === "none" || status === "error") && (
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              disabled={!selectedProduct || !bannerURL}
            >
              Save
            </Button>
            <CancelButton {...{ setBannerURL, setSelectedProduct }} />
          </>
        )}
<<<<<<< HEAD
        {pending && <CircularProgress />}
        {error && (
=======
        {status === "pending" && <CircularProgress />}
        {status === "error" && (
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
          <Alert severity="error">
            an internal server error had occurred. try again later.
          </Alert>
        )}
<<<<<<< HEAD
        {!pending && !error && (
=======
        {status === "success" && (
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
          <Alert severity="success">banner created successfully!</Alert>
        )}
      </Box>
    </Box>
  );
};

export default CreateNewBannerPage;
