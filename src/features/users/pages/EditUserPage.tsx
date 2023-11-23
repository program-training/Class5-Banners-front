// import { SetStateAction, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import axios from "axios";
// import { useAppSelector } from "../../../redux/hooks";

// const EditProfilePage = () => {
//   const navigate = useNavigate();
//   const user = useAppSelector((state) => state.user);

//   const [name, setName] = useState("");
//   const [status, setStatus] = useState("");
//   const [, setUserData] = useState(null);

//   useEffect(() => {
//     if (!user.loggedIn) {
//       navigate("/user/login");
//     } else {
//       axios.get("/api/user").then((response) => {
//         setUserData(response.data);
//         setName(response.data.name);
//         setStatus(response.data.status);
//       });
//     }
//   }, [user.loggedIn, navigate]);

//   const handleNameChange = (event: {
//     target: { value: SetStateAction<string> };
//   }) => {
//     setName(event.target.value);
//   };

//   const handleStatusChange = (event: { target: { checked: boolean } }) => {
//     setStatus(event.target.checked ? "active" : "inactive");
//   };

//   const handleSubmit = () => {
//     axios.put("/api/user", { name, status }).then(() => {});
//   };

//   return (
//     <Paper>
//       <Typography variant="h4">Edit User Details</Typography>
//       <Typography variant="subtitle1">Edit Name and Status</Typography>

//       <form>
//         <TextField
//           label="Name"
//           variant="outlined"
//           value={name}
//           onChange={handleNameChange}
//         />
//         <br />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={status === "active"}
//               onChange={handleStatusChange}
//             />
//           }
//           label={status === "active" ? "Active" : "Inactive"}
//         />
//         <br />
//         <Button variant="contained" color="primary" onClick={handleSubmit}>
//           Save Changes
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default EditProfilePage;

import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
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

  const handleStatusChange = (event: { target: { checked: boolean } }) => {
    setStatus(event.target.checked ? "active" : "inactive");
  };

  const handleSubmit = () => {
    axios.put("/api/user", { name, status }).then(() => {});
  };

  return (
    <Paper
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

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={status === "active"}
              onChange={handleStatusChange}
            />
          }
          label={"Admin"}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </form>
    </Paper>
  );
};

export default EditProfilePage;
