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
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      mt={2}
    >
      <Box width={200}>
        <Autocomplete
          freeSolo
          disableClearable
          options={banners
            .map((banner) => banner.title)
            .concat(banners.map((banner) => banner.authorID))}
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
      </Box>
      <Typography variant="h5">Edit or Delete Banners</Typography>
      <Button onClick={() => navigate("/create")}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>
    </Box>
  );
};

export default BannerManagementTop;
