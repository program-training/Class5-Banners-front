import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SignUpBottomContent = () => {
    return (
        <>
            <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "10px" }}
            >
                Already registered?
                <Link to="#">Log In</Link>
            </Typography>
        </>
    );
};

export default SignUpBottomContent;
