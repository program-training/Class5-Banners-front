import { Button } from "@mui/material";
import { ProductInterface } from "../interface/ProductInterface";

const CancelCreateBannerButton = ({
    setSelectedProduct,
    setBannerURL,
}: {
    setBannerURL: React.Dispatch<React.SetStateAction<string>>;
    setSelectedProduct: React.Dispatch<
        React.SetStateAction<ProductInterface | null>
    >;
}) => {
    return (
        <Button
            sx={{ ml: 2 }}
            variant="contained"
            color="secondary"
            onClick={() => {
                setSelectedProduct(null);
                setBannerURL("");
            }}
        >
            Cancel
        </Button>
    );
};

export default CancelCreateBannerButton;
