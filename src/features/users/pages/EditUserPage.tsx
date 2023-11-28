import { ChangeEvent, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import { useAppSelector } from "../../../redux/hooks";
import { Alert, CircularProgress, Container } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserInterface } from "../interfaces/userInterface";
import { Navigate } from "react-router-dom";

const EditUserPage = () => {
  const user = useAppSelector((state) => state.user);

  const { register, handleSubmit, setValue } = useForm();

  const [userData, setUserData] = useState<UserInterface>();

  console.log("user data", userData);

  const [status, setStatus] = useState<
    "none" | "pending" | "success" | "error"
  >("none");

  useEffect(() => {
    setStatus("pending");

    axios
      .get(
        `${import.meta.env.VITE_SERVER_HOST}:${
          import.meta.env.VITE_SERVER_PORT
        }/api/users`,
        {
          headers: { Authorization: `${user.token}` },
        }
      )
      .then((response) => {
        console.log("res data", response.data);

        setValue("username", response.data.username);
        setValue("isAdmin", response.data.isAdmin === true);

        setUserData(response.data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, [setValue, user.token]);

  if (!user.loggedIn || !user.isAdmin)
    return <Navigate replace to={"/user/login"} />;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUserData((prev) => ({
      ...prev!,
      [name]: value,
    }));
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updatedUserData = {
      ...userData,
      username: data.Username,
      isAdmin: data.isAdmin ? true : false,
    };

    console.log("updated data", updatedUserData);

    setStatus("pending");

    axios
      .put(
        `${import.meta.env.VITE_SERVER_HOST}:${
          import.meta.env.VITE_SERVER_PORT
        }/api/users`,
        {
          updatedUserData,
        },
        {
          headers: { Authorization: `${user.token}` },
        }
      )
      .then((response) => {
        setStatus("success");
        console.log("User data updated successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        setStatus("error");
      });
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
      <Typography variant="h4">Edit User Details</Typography>
      <Typography variant="subtitle1">Edit Name and Status</Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
        Email: {userData?.email || "waiting to server..."}
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        {...register("username")}
        value={userData?.username || ""}
        sx={{ mb: 2 }}
        onChange={handleChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            {...register("isAdmin")}
            defaultChecked={userData?.isAdmin === true}
          />
        }
        label={"Admin"}
        sx={{ mb: 2 }}
      />
      {status !== "pending" && (
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="contained"
          color="primary"
        >
          Save Changes
        </Button>
      )}
      {status === "pending" && <CircularProgress />}
      {status === "error" && (
        <Alert severity="error">
          an internal server error had occurred. try again later.
        </Alert>
      )}
    </Container>
  );
};

export default EditUserPage;
