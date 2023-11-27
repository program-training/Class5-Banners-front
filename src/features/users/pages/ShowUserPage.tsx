import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useAppSelector } from "../../../redux/hooks";

const ShowUserPage = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const [data, setData] = useState({ username: "", email: "", isAdmin: false });

  useEffect(() => {
    if (!user.loggedIn) {
      navigate("/user/login");
    } else
      try {
        axios
          .get("YOUR_API_ENDPOINT")
          .then((response) => setData(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  }, [user.loggedIn, navigate]);

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        marginTop: "50px",
        backgroundColor: "#f5f5f8",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "#333" }}>
        User Profile
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
        Username: {data.username}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
        Email: {data.email}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
        Admin Status: {data.isAdmin ? "Yes" : "No"}
      </Typography>
    </Paper>
  );
};

export default ShowUserPage;
