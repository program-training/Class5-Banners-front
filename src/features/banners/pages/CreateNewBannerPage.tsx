import { useState } from "react";
import {
    Typography,
    Box,
    Button,
    Autocomplete,
    TextField,
} from "@mui/material";
import { sampleProducts } from "../../utils/temporaryData";
import { ProductInterface } from "../interface/ProductInterface";
import BannerCard from "../components/BannerCard";
import axios from "axios";
import { centeredBox } from "../../utils/styles";

const CreateNewBannerPage = () => {
    const [selectedProduct, setSelectedProduct] =
        useState<ProductInterface | null>(null);
    const [bannerURL, setBannerURL] = useState("");
    const handleSave = () => {
        axios
            .post(
                `${import.meta.env.VITE_SERVER_HOST}:${
                    import.meta.env.VITE_SERVER_PORT
                }/api/banners/new`,
                {
                    banner: {
                        productID: `test-${Math.random()}`,
                        title: "test",
                        description: "test",
                        imageURL: "test",
                        note: "test",
                    },
                }
            )
            .then((res) => console.log("response:", res));
    };

    return (
        <Box sx={centeredBox}>
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
                options={sampleProducts}
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.title} // Assuming 'title' is the label property
                renderInput={(params) => (
                    <TextField {...params} label="Product Title" />
                )}
                onChange={(_, value) => {
                    const selected = sampleProducts.find(
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
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginLeft: "10px" }}
                >
                    Cancel
                </Button>
            </Box>
        </Box>
    );
};

export default CreateNewBannerPage;
