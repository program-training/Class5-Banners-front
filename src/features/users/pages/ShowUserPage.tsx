import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";

// const containerStyle: SxProps = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "20px",
//   textAlign: "center",
//   padding: "20px",
//   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//   margin: "20px",
// };

const ShowUserPage = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.userState);

  if (!user) navigate("/user/login");

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
        Username: {user?.username}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
        user id: {user?.user_id}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
        Admin Status: {user?.isAdmin ? "Yes" : "No"}
      </Typography>
    </Paper>
  );
};

export default ShowUserPage;
