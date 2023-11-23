import { AddCircle } from "@mui/icons-material";
import {
    Box,
    Autocomplete,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import { banners } from "../../utils/temporaryData";
import { useNavigate } from "react-router-dom";

const BannerManagementTop = () => {
    const navigate = useNavigate()
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
                        options={banners
                            .map((banner) => banner.title)
                            .concat(banners.map((banner) => banner.author))}
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
                <Button onClick={() => navigate('/create')}>
                    <Typography pr={2}>Create Banner</Typography>
                    <AddCircle />
                </Button>
            </Box>
        </>
    );
};

export default BannerManagementTop;
