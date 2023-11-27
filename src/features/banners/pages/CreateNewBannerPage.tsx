import { useState, useEffect } from "react";
import {
    Typography,
    Box,
    Button,
    Autocomplete,
    TextField,
} from "@mui/material";
import { ProductInterface } from "../interface/ProductInterface";
import BannerCard from "../components/BannerCard";
import axios from "axios";
import { centeredBox } from "../../utils/styles";
import CancelButton from "../components/CancelButton";
import { useAppSelector } from "../../../redux/hooks";

const CreateNewBannerPage = () => {
    const { user } = useAppSelector((state) => state);
    const { token } = user;
    const [selectedProduct, setSelectedProduct] =
        useState<ProductInterface | null>(null);
    const [bannerURL, setBannerURL] = useState("");
    const [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        // Fetch products data when the component mounts
        axios
            .get(
                `${import.meta.env.VITE_SERVER_HOST}:${
                    import.meta.env.VITE_SERVER_PORT
                }/api/products`,
                {
                    headers: {
                        Authorization: `${token}`,
                        // Authorization: "token"
                    },
                }
            )
            .then((response) => {
                // Assuming the response contains an array of products
                setProducts(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error("Error fetching products:", error);
            });
    }, []);

    const handleSave = () => {
        // Your save logic here using axios.post
    };

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
                options={products} // Use fetched products here
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.title} // Assuming 'title' is the label property
                renderInput={(params) => (
                    <TextField {...params} label="Product Title" />
                )}
                onChange={(_, value) => {
                    const selected = products.find(
                        (product) => product.ID === value?.ID
                    );
                    setSelectedProduct(selected || null);
                }}
            />
            {selectedProduct && (
                <BannerCard selectedProduct={selectedProduct} />
            )}
            <Box marginBottom={5}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    Save
                </Button>
                <CancelButton />
            </Box>
        </Box>
    );
};

export default CreateNewBannerPage;
