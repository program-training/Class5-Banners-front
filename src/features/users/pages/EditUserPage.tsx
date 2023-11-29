<<<<<<< HEAD
import { ChangeEvent, useState } from "react";
=======
import { ChangeEvent, useEffect, useState } from "react";
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Alert, CircularProgress, Container } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserInterface } from "../interfaces/userInterface";
<<<<<<< HEAD
import { editUserReq } from "../user-slice";

const EditUserPage = () => {
  const { error, loading, userState } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const [userData, setUserData] = useState<UserInterface | null>(
    userState || null
  );

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
      username: data.username,
      isAdmin: data.isAdmin ? true : false,
    };
    dispatch(editUserReq(updatedUserData));
  };

  return (
    <>
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
          label="username"
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
        {!loading && (
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
          >
            Save Changes
          </Button>
        )}
        {loading && <CircularProgress />}
        {error && (
          <Alert severity="error">
            an internal server error had occurred. try again later.
          </Alert>
        )}
      </Container>
    </>
  );
=======
import { Navigate } from "react-router-dom";

const EditUserPage = () => {
    const user = useAppSelector((state) => state.user);
    const { register, handleSubmit, setValue } = useForm();
    const [userData, setUserData] = useState<UserInterface>();
    const [status, setStatus] = useState<
        "none" | "pending" | "success" | "error"
    >("none");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUserData((prev) => ({
            ...prev!,
            username: value,
        }));
    };

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
                setValue("username", response.data.username);
                setValue("isAdmin", response.data.isAdmin === true);
                setUserData(response.data);
                setStatus("success");
            })
            .catch((err) => {
                console.error(err);
                setStatus("error");
            });
    }, []);

    if (!user.loggedIn || !user.isAdmin)
    return <Navigate replace to={"/banners/user/login"} />;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Update the isAdmin state directly based on the checkbox value
        setUserData((prev) => ({
            ...prev!,
            isAdmin: event.target.checked,
        }));
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const updatedUserData = {
            ...userData,
            username: data.username,
            isAdmin: data.isAdmin ? true : false,
        };

        console.log("updated data", updatedUserData);

        setStatus("pending");

        axios
            .put(
                `${import.meta.env.VITE_SERVER_HOST}:${
                    import.meta.env.VITE_SERVER_PORT
                }/api/users`,

                updatedUserData,

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
                onChange={handleUsernameChange}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        {...register("isAdmin")}
                        checked={userData?.isAdmin === true}
                        onChange={handleChange} // Use the handleChange directly here
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
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5
};

export default EditUserPage;
