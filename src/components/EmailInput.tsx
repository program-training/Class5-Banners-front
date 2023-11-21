import { Email } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { validateEmail } from "../utils/functions";
type Props = {
    setIsValidEmail: Dispatch<SetStateAction<boolean>>;
};
const EmailInput = ({ setIsValidEmail }: Props) => {
    const [email, setEmail] = useState("");
    const [isValidEmail] = useState(true);

    const handleEmailChange = (value: string) => {
        setEmail(value);
        setIsValidEmail(validateEmail(value));
    };

    return (
        <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            error={!isValidEmail}
            helperText={!isValidEmail && "Please enter a valid email"}
            InputProps={{
                startAdornment: <Email />,
            }}
            style={{ marginBottom: "10px" }}
        />
    );
};

export default EmailInput;
