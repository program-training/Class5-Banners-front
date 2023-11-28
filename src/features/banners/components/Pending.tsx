import { Stack, CircularProgress } from "@mui/material";
import React from "react";

const Pending = () => {
    return (
        <Stack
            width={"100%"}
            alignContent={"center"}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <CircularProgress />
        </Stack>
    );
};

export default Pending;
