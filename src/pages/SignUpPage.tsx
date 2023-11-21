import { useState } from "react";
import { TextField, Grid, FormControlLabel, Checkbox } from "@mui/material";
import EmailInput from "../components/EmailInput";
import PasswordInputs from "../components/PasswordInput";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";
import SignUpTopContent from "../components/SignUp/SignUpTopContent";
import SignUpBottomContent from "../components/SignUp/SignUpBottomContent";
import SignUpSubmitButton from "../components/SubmitButton";
import FormError from "../components/SignUp/FormError";

const SignUpPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

    const isAllValid =
        username &&
        email &&
        password &&
        isValidEmail &&
        isValidPassword &&
        isValidConfirmPassword;

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
                <SignUpTopContent />
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: "10px" }}
                />
                <EmailInput
                    email={email}
                    setEmail={setEmail}
                    isValidEmail={isValidEmail}
                    setIsValidEmail={setIsValidEmail}
                />
                <PasswordInputs
                    password={password}
                    setPassword={setPassword}
                    setIsValidPassword={setIsValidPassword}
                    isValidPassword={isValidPassword}
                />
                <ConfirmPasswordInput
                    isValidConfirmPassword={isValidConfirmPassword}
                    setIsValidConfirmPassword={setIsValidConfirmPassword}
                    prevPassword={password}
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
                {isAllValid ? <SignUpSubmitButton /> : <FormError />}
                <SignUpBottomContent />
            </Grid>
        </Grid>
    );
};

export default SignUpPage;
