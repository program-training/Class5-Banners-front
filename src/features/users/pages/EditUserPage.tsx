import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useAppSelector } from "../../../redux/hooks";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [, setUserData] = useState(null);

  useEffect(() => {
    if (!user.loggedIn) {
      navigate("/user/login");
    } else {
      axios.get("/api/user").then((response) => {
        setUserData(response.data);
        setName(response.data.name);
        setStatus(response.data.status);
      });
    }
  }, [user.loggedIn, navigate]);

  const handleNameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setStatus(event.target.value);
  };

  const handleSubmit = () => {
    axios.put("/api/user", { name, status }).then(() => {});
  };

  return (
    <Paper>
      <Typography variant="h4">Edit User Details</Typography>
      <Typography variant="subtitle1">Edit Name and Status</Typography>

      <form>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <TextField
          label="Status"
          variant="outlined"
          value={status}
          onChange={handleStatusChange}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </form>
    </Paper>
  );
};

export default EditProfilePage;
