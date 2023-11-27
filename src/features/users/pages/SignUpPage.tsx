import { useState } from "react";
import { TextField, Grid, FormControlLabel, Checkbox } from "@mui/material";
import EmailInput from "../components/EmailInput";
import PasswordInputs from "../components/PasswordInput";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";
import SignUpTopContent from "../components/SignUpTopContent";
import SignUpBottomContent from "../components/SignUpBottomContent";
import SignUpSubmitButton from "../components/SubmitButton";
import FormError from "../components/SignUpFormError";
import axios from "axios";

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
  const url = import.meta.env.VITE_SERVER_HOST;
  const handleSignup = () => {
    if (isAllValid) {
      axios
        .post(url + "/api/users/sign-up", {
          username: username,
          email: email,
          password: password,
          isAdmin: isAdmin,
        })
        .then((response) => {
          console.log("Signup successful:", response.data);
        })
        .then(() =>
          axios
            .post(url + "/api/users/login", {
              email: email,
              password: password,
            })
            .then((res) => console.log(res))
        )
        .catch((error) => {
          console.error("Signup failed:", error);
        });
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ padding: "20px", mt: 2 }}
    >
      <Grid
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
        />
        {isAllValid ? (
          <SignUpSubmitButton onClick={handleSignup} />
        ) : (
          <FormError />
        )}
        <SignUpBottomContent />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
