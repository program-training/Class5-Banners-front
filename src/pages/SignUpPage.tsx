import { useState } from "react";
import {
    TextField,
    Button,
    Grid,
    Typography,
    FormControlLabel,
    Checkbox,
    Link,
} from "@mui/material";
import EmailInput from "../components/EmailInput";
import PasswordInputs from "../components/PasswordInput";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";

const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [email] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isAllValid, setIsAllValid] = useState(false);
    const [confirmPassword] = useState("");
    const [IsValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

    const handleSubmit = () => {
        if (
            username &&
            email &&
            password &&
            confirmPassword &&
            isValidEmail &&
            isValidPassword &&
            IsValidConfirmPassword
        ) {
            setIsAllValid(true);
            console.log("Submitted:", { username, email, password, isAdmin });
        } else {
            setIsAllValid(false);
        }
    };

    return (
        <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ minHeight: "100vh", padding: "20px" }}
        >
            <Grid
                item
                xs={10}
                md={6}
                lg={4}
                style={{
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Sign In
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="textSecondary"
                    gutterBottom
                >
                    Welcome back!
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: "10px" }}
                />
                <EmailInput setIsValidEmail={setIsValidEmail} />
                <PasswordInputs
                    password={password}
                    setPassword={setPassword}
                    setIsValidPassword={setIsValidPassword}
                    isValidPassword={isValidPassword}
                />
                <ConfirmPasswordInput
                    setIsValidConfirmPassword={setIsValidConfirmPassword}
                    prevPassword={password}
                    IsValidConfirmPassword={IsValidConfirmPassword}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}
                        />
                    }
                    label="Do you want to be registered as an administrator?"
                    style={{ marginBottom: "10px" }}
                />
                {isAllValid ? (
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                ) : (
                    <Typography
                        variant="body2"
                        color="error"
                        align="center"
                        style={{ margin: "10px 0" }}
                    >
                        Please fill out all fields properly to submit.
                    </Typography>
                )}
                <Typography
                    variant="body2"
                    align="center"
                    style={{ marginTop: "10px" }}
                >
                    Already registered?{" "}
                    <Link href="#" variant="body2">
                        Log In
                    </Link>
                </Typography>
            </Grid>
        </Grid>
    );
};

export default SignUpPage;
