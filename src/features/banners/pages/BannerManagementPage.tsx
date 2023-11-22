import {
    Typography,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button,
} from "@mui/material";
import { useState } from "react";
import { BannerTable } from "../components/BannerTable";
import { sampleProducts } from "../../utils/temporaryData";
import BannerManagementTop from "../components/BannerManagementTop";

const BannerManagementPage = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedBanner, setSelectedBanner] = useState<number | null>(null);

    const handleDeleteBanner = () => {
        // Implement deletion logic here
        setOpenDialog(false);
        // Placeholder log for deletion confirmation
        console.log(`Banner with ID ${selectedBanner} deleted.`);
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h2" padding={2}>
                Banner Shop
            </Typography>
            <BannerManagementTop />

            <BannerTable
                data={sampleProducts}
                setOpenDialog={setOpenDialog}
                setSelectedBanner={setSelectedBanner}
            />

            {/* Delete confirmation dialog */}
            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this banner?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => setOpenDialog(false)}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteBanner} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default BannerManagementPage;
