import { useState } from "react";
import {
    Typography,
    Box,
    Button,
    Autocomplete,
    TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import { sampleProducts } from "../utils/temporaryData";
import { Product } from "../types/interfaces";
import BannerCard from "../components/BannerCard";
const CenteredBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    textAlign: "center",
    paddingTop: "50px", // Adjust as needed for spacing
});

const CreateNewBannerPage = () => {
    const [selectedProduct] = useState<Product | null>(null);
    const [bannerURL, setBannerURL] = useState("");
    const handleSave = () => {};

    return (
        <CenteredBox>
            <Typography variant="h2">Banner Shop</Typography>
            <Typography variant="h5">Create New Banner</Typography>
            <TextField
                label="Banner URL"
                value={bannerURL}
                onChange={(e) => setBannerURL(e.target.value)}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={sampleProducts.map((product) => product.title)}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Product Title" />
                )}
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
