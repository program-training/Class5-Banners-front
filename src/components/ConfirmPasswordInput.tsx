import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
type Props = {
    setIsValidConfirmPassword: Dispatch<SetStateAction<boolean>>;
    prevPassword: string;
    IsValidConfirmPassword: boolean;
};
const PasswordInputs = ({
    setIsValidConfirmPassword,
    prevPassword,
    IsValidConfirmPassword,
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    function handlePasswordChange(value: string): void {
        setPassword(value);
        setIsValidConfirmPassword(password == prevPassword);

        console.log("new: ", password, "prev: ", prevPassword);
    }

    return (
        <TextField
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            error={!IsValidConfirmPassword}
            helperText={!IsValidConfirmPassword && "Passwords doesn't match"}
            style={{ marginBottom: "10px" }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default PasswordInputs;
