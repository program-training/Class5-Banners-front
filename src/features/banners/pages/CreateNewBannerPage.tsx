import { useState } from "react";
import {
    Typography,
    Box,
    Button,
    Autocomplete,
    TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { sampleProducts } from "../../utils/temporaryData";
import { ProductInterface } from "../interface/ProductInterface";
import BannerCard from "../components/BannerCard";
import axios from "axios";

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
        useState<ProductInterface | null>(null);

    const [bannerURL, setBannerURL] = useState("");
    const handleSave = () => {
        
        axios.post(`${import.meta.env.VITE_SERVER_HOST}:${import.meta.env.VITE_SERVER_PORT}/api/banners/new`, {
                banner: {
                    productID: `test-${Math.random()}`,
                    title: "test",
                    description: "test",
                    imageURL: "test",
                    note: "test",
                },
            })
            .then((res) => console.log("response:", res));
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
        </CenteredBox>
    );
};

export default CreateNewBannerPage;
