import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const CancelButton = () => {
    const navigate = useNavigate();
    return (
        <Button
            sx={{ ml: 2 }}
            variant="contained"
            color="secondary"
            onClick={() => navigate("/")}
        >
            Cancel
        </Button>
    );
};

export default CancelButton;
