import { AddCircle } from "@mui/icons-material";
import {
    Box,
    Autocomplete,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
import { BannerInterface } from "../interface/BannerInterface";

type Props = {
    banners: BannerInterface[];
    setBanners: Dispatch<SetStateAction<BannerInterface[]>>;
};

const BannerManagementTop = ({ banners, setBanners }: Props) => {
    const [, setSearchValue] = useState<string>("");
    const navigate = useNavigate();

    const handleSearch = (value: string) => {
        setSearchValue(value);
        const filteredBanners = banners.filter(
            (banner) =>
                banner.title.toLowerCase().includes(value.toLowerCase()) ||
                banner.authorID.toLowerCase().includes(value.toLowerCase())
        );
        setBanners(filteredBanners);
    };

    return (
        <Box>
            <Typography variant="h2" padding={2} align="center">
                Banner Management
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Autocomplete
                    sx={{ width: "200px" }}
                    freeSolo
                    disableClearable
                    options={Array.from(
                        new Set(banners.map((banner) => banner.authorID))
                    ).concat(
                        Array.from(
                            new Set(banners.map((banner) => banner.title))
                        )
                    )}
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
                    onChange={(_, value) => {
                        handleSearch(value || "");
                    }}
                />
                <Typography variant="h5">Edit or Delete Banners</Typography>
                <Button onClick={() => navigate("/banners/create")}>
                    <Typography pr={2}>Create Banner</Typography>
                    <AddCircle />
                </Button>
            </Box>
        </Box>
    );
};

export default BannerManagementTop;
