import { Button } from "@mui/material";
import PropTypes from "prop-types";

const SignUpSubmitButton = ({ onClick }: { onClick: () => void }) => {
  const handleSubmit = () => {
    console.log("submitted");
    onClick();
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
SignUpSubmitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default SignUpSubmitButton;
