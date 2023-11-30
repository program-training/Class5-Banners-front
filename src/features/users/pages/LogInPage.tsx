import LoginTop from "../components/LoginTop";
import EmailInput from "../components/EmailInput";
import { useState } from "react";
import PasswordInputs from "../components/PasswordInput";
import FormError from "../components/SignUpFormError";
import SignUpSubmitButton from "../components/SubmitButton";
import { Alert, CircularProgress, Grid, Typography } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { loginReq } from "../user-slice";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const {
    loading,
    error,
    userState: user,
  } = useAppSelector((store) => store.user);

  const dispatch = useAppDispatch();

  const isAllValid = email && isValidEmail && password && isValidPassword;

  const handleLogin = () => {
    if (isAllValid) {
      dispatch(loginReq({ email, password }));
    }
  };

  return (
    <>
      {user && <Navigate replace to={"/"} />}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ padding: "20px", mt: 2 }}
      >
        <Grid
          item
          xs={10}
          md={6}
          style={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
          }}
        >
          <LoginTop />
          <EmailInput
            email={email}
            setEmail={setEmail}
            isValidEmail={isValidEmail}
            setIsValidEmail={setIsValidEmail}
          />
          <PasswordInputs
            password={password}
            setPassword={setPassword}
            isValidPassword={isValidPassword}
            setIsValidPassword={setIsValidPassword}
          />
          {isAllValid ? (
            <SignUpSubmitButton onClick={handleLogin} />
          ) : (
            <>
              <FormError />
            </>
          )}
          {loading && <CircularProgress />}
          {error && (
            <Alert severity="error">
              an internal server error had occurred. try again later.
            </Alert>
          )}

          <Typography
            variant="body2"
            align="center"
            style={{ marginTop: "10px" }}
          >
            Don't have am account?
            <Link to="/user/sign-up"> Sign Up</Link>
          </Typography>
          <Typography
            variant="body2"
            align="center"
            style={{ marginTop: "10px" }}
          >
            <Link to="/user/forget-password">Forgot password?</Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default LogIn;
