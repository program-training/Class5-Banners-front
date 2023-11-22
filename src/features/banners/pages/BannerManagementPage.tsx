import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import { Autocomplete, TextField } from "@mui/material";

const BannerManagementPage = () => {
  return (
    <Box>
      <Typography variant="h2"> Banner Shop </Typography>
      <Typography variant="h5"> Banner management </Typography>
      <Autocomplete
        freeSolo
        disableClearable
        options={["1", "2", "3"]}
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

      <Link to={"create"}>
        צור באנר <AddCircle />
      </Link>
    </Box>
  );
};

export default BannerManagementPage;
