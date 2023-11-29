<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
=======
import { useEffect, useState } from "react";
import axios from "axios";
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
import { useAppSelector } from "../../../redux/hooks";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Container, SxProps, Typography, IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import Pending from "../../banners/components/Pending";
import EditIcon from "@mui/icons-material/Edit";
import HomeIcon from "@mui/icons-material/Home";

const containerStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    textAlign: "center",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    margin: "20px",
};

const ShowUserPage = () => {
<<<<<<< HEAD
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
=======
    const navigate = useNavigate()
    const user = useAppSelector((state) => state.user);
    const [data, setData] = useState({
        username: "test",
        isAdmin: true,
        email: "test",
    });
    const [status, setStatus] = useState<
        "none" | "pending" | "success" | "error"
    >("none");

    useEffect(() => {
        setStatus("pending");
        try {
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
                    setData(response.data);
                    setStatus("success");
                })
                .catch(() => {
                    setStatus("error");
                });
        } catch (error) {
            setStatus("error");
        }
    }, []);

    if (!user.loggedIn || !user.isAdmin)
      return <Navigate replace to={"/banners/user/login"} />;

    const handleEdit = () => {
        navigate("/banners/user/edit");
    };

    const handleHome = () => {
        navigate("");
    };

    return (
        <>
            <Container maxWidth="sm">
                <Box sx={containerStyle}>
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <IconButton onClick={handleEdit}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleHome}>
                            <HomeIcon />
                        </IconButton>
                    </Box>

                    <Typography variant="h4" sx={{ mb: "8px" }}>
                        Hi, {data.username}!
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mb: "20px" }}>
                        See your profile here
                    </Typography>
                    {status === "error" && (
                        <Alert severity="error" sx={{ m: "20px" }}>
                            Can't retrieve user data from the server. Please try
                            again later.
                        </Alert>
                    )}
                    {status === "pending" && <Pending />}
                    {status === "success" && (
                        <>
                            <Typography variant="subtitle1">
                                Email: {data.email}
                            </Typography>
                            <Typography variant="subtitle1">
                                Admin Status: {data.isAdmin ? "Yes" : "No"}
                            </Typography>
                        </>
                    )}
                    <Box sx={{ mt: "auto", textAlign: "center" }}></Box>
                </Box>
            </Container>
        </>
    );
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
};

export default ShowUserPage;
