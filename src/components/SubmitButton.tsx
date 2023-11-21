import { Button } from "@mui/material";
const SignUpSubmitButton = () => {
    const handleSubmit = () => {
        console.log("submitted");
    };

    return (
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
        >
            Submit
        </Button>
    );
};

export default SignUpSubmitButton;
