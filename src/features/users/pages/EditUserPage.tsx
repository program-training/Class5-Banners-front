import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import { useAppSelector } from "../../../redux/hooks";
import { Container } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  isAdmin: boolean;
}

const EditUserPage = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const { register, handleSubmit, setValue } = useForm();

  const [userData, setUserData] = useState({
    name: "",
    isAdmin: "true",
    email: "",
  });

  useEffect(() => {
    if (!user.loggedIn) {
      navigate("/user/login");
    } else {
      axios.get("/api/user").then((response) => {
        setUserData(response.data);
        setValue("name", response.data.name);
        setValue("isAdmin", response.data.isAdmin === "true");
      });
    }
  }, []);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const updatedUserData = {
      ...userData,
      name: data.name,
      status: data.isAdmin ? "true" : "false",
    };

    axios.put("/api/user", updatedUserData).then(() => {});
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
        Email: {userData.email}
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        {...register("name")}
        sx={{ mb: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            {...register("isAdmin")}
            defaultChecked={userData.isAdmin === "true"}
          />
        }
        label={"Admin"}
        sx={{ mb: 2 }}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
      >
        Save Changes
      </Button>
    </Container>
  );
};

export default EditUserPage;
