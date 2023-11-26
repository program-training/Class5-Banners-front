import { useForm, SubmitHandler } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../../utils/functions";

interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
  isPasswordValid: boolean;
}

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ResetPasswordFormData>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = (data) => {
    if (data.isPasswordValid) {
      console.log("Password reset successful", data);

      navigate("/login");
    } else {
      console.log("Password validation failed");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        marginY: "50px",
      }}
    >
      <Typography variant="h4">Reset Password</Typography>
      <TextField
        label="New Password"
        type="password"
        variant="outlined"
        fullWidth
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          validate: (value) =>
            validatePassword(value) || "Password does not meet requirements",
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        {...register("confirmPassword", {
          required: "This field is required",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Reset Password
      </Button>
    </Container>
  );
};

export default ResetPasswordPage;
