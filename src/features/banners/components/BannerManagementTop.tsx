import { AddCircle } from "@mui/icons-material";
import {
    Box,
    Autocomplete,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import { sampleProducts } from "../../utils/temporaryData";

const BannerManagementTop = () => {
    return (
        <>
            <Typography variant="h2" padding={2} align="center">
                Banner Management
            </Typography>
            <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                px={2} // Adds horizontal padding
                mt={2} // Adds top margin
            >
                <Box width={200}>
                    <Autocomplete
                        freeSolo
                        disableClearable
                        options={sampleProducts.map((banner) => banner.title)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search"
                                InputProps={{
                                    ...params.InputProps,
                                    type: "search",
                                }}
                            />
                        )}
                    />
                </Box>
                <Typography variant="h5">Edit or Delete Banners</Typography>
                <Button>
                    <Typography pr={2}>Create Banner</Typography>
                    <AddCircle />
                </Button>
            </Box>
        </>
    );
};

export default BannerManagementTop;
