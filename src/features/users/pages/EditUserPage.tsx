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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserInterface } from "../interfaces/userInterface";

const EditUserPage = () => {
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user);

    const { register, handleSubmit, setValue } = useForm();

    const [userData, setUserData] = useState<UserInterface>({
        username: "yehuda400",
        _id: "322418203",
        email: "ykoth04@gmail.com",
        isAdmin: true,
    });

    useEffect(() => {
        if (!user.loggedIn) {
            navigate("/user/login");
        } else {
            axios
                .get(`/api/users`, {
                    headers: { Authorization: `${user.token}` },
                })
                .then((response) => {
                    setUserData(response.data);
                    setValue("Username", response.data.username); // Use "Username" here
                    setValue("isAdmin", response.data.isAdmin === true);
                });
        }
    }, []);

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const updatedUserData = {
            ...userData,
            username: data.Username, // Assuming the form field is named 'Username'
            isAdmin: data.isAdmin ? true : false, // Assuming 'isAdmin' is a boolean
        };

        console.log(updatedUserData);

        // axios
        //     .put(`/api/users`, {
        //         data: {
        //             updatedUserData,
        //         },
        //         headers: { Authorization: `${user.token}` },
        //     })
        //     .then((response) => {
        //         console.log("User data updated successfully:", response.data);
        //     })
        //     .catch((error) => {
        //         console.error("Error updating user data:", error);
        //     });
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
            <TextField
                disabled
                value={userData.email}
                variant="outlined"
                fullWidth
            >
                Email: {userData ? userData.email : "No Data"}
            </TextField>
            <TextField
                value={userData.username}
                label="Username"
                variant="outlined"
                fullWidth
                onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                }
                sx={{ mb: 2 }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        {...register("isAdmin")}
                        defaultChecked={
                            userData ? userData.isAdmin === true : false
                        }
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
