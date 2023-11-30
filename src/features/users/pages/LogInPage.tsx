import LoginTop from "../components/LoginTop";
import EmailInput from "../components/EmailInput";
import { useState } from "react";
import PasswordInputs from "../components/PasswordInput";
import FormError from "../components/SignUpFormError";
import SignUpSubmitButton from "../components/SubmitButton";
import { Alert, CircularProgress, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../user-slice";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [status, setStatus] = useState<'none' | 'pending' | 'success' | 'error'>('none')

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isAllValid = email && isValidEmail && password && isValidPassword;

  const url = import.meta.env.VITE_BASE_URL;
  const handleLogin = () => {
    if (isAllValid) {
      setStatus('pending')
      axios
        .post(`${url}/api/users/login`, {
          email: email,
          password: password,
        })
        .then((response) => {
          setStatus('success')
          console.log("Login successful:", response.data);
          dispatch(
            setUser({
              isAdmin: true,
              loggedIn: true,
              token: response.data,
            })
          );
          navigate("/banners/");
        })
        .catch((error) => {
          setStatus('error')
          console.error("Login failed:", error);
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
        {status !== 'pending' && (isAllValid ? (
          <SignUpSubmitButton onClick={handleLogin} />
        ) : (
          <>
            <FormError />
          </>
        ))}
        {status === 'pending' && <CircularProgress />}
        {status === 'error' && <Alert severity="error">an internal server error had occurred. try again later.</Alert>}

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
  );
};

export default LogIn;
