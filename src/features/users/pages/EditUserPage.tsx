import { ChangeEvent, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Alert, Container } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserInterface } from "../interfaces/userInterface";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { editUserReq, getUserReq } from "../service/asyncReq";
import Pending from "../../banners/components/Pending";

const EditUserPage = () => {
<<<<<<< HEAD
  const dispatch = useAppDispatch();
  const { userState, loading, error } = useAppSelector((store) => store.user);
  const [userData, setUserData] = useState<UserInterface | null>(userState);
  const [successUpdate, setSuccessUpdate] = useState<boolean>(false); // State to track successful update

  useEffect(() => {
    dispatch(getUserReq());
    setUserData(userState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name.length)
      setUserData((prev) => ({
        ...prev!,
        [name]: value,
      }));
  };

  const onSubmit = async (data: FieldValues) => {
=======
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const { userState, loading, error } = useAppSelector((store) => store.user);
  const [userData, setUserData] = useState<UserInterface | null>(null);
  useEffect(() => {
    dispatch(getUserReq());
    setUserData(userState);
  }, [userState]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name.length)
      setUserData((prev) => ({
        ...prev!,
        [name]: value,
      }));
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
>>>>>>> origin/itzik-gql
    const updatedUserData = {
      ...userData,
      username: data.username,
      isAdmin: data.isAdmin ? true : false,
    };
<<<<<<< HEAD
    await dispatch(editUserReq(updatedUserData));
    setSuccessUpdate(true);
  };

=======
    dispatch(editUserReq(updatedUserData));
    dispatch(getUserReq());
  };
  if (loading) return <Pending />;
>>>>>>> origin/itzik-gql
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
<<<<<<< HEAD
        <Typography variant="subtitle1">
          Hi, {userData ? userData.username : "Loading..."}!
        </Typography>
=======
        <Typography variant="subtitle1">Edit Name and Status</Typography>
>>>>>>> origin/itzik-gql
        <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
          Email Address: {userData?.email || "waiting to server..."}
        </Typography>
        <TextField
          label="username"
          variant="outlined"
          fullWidth
<<<<<<< HEAD
=======
          {...register("username")}
>>>>>>> origin/itzik-gql
          value={userData?.username || ""}
          sx={{ mb: 2 }}
          onChange={handleChange}
        />
        <FormControlLabel
<<<<<<< HEAD
          control={<Checkbox defaultChecked={userData?.isAdmin || false} />}
=======
          control={
            <Checkbox
              {...register("isAdmin")}
              defaultChecked={userData?.isAdmin || false}
            />
          }
>>>>>>> origin/itzik-gql
          label={"Admin"}
          sx={{ mb: 2 }}
        />
        {!loading && (
          <Button
<<<<<<< HEAD
            onClick={onSubmit} // Call onSubmit directly
=======
            onClick={handleSubmit(onSubmit)}
>>>>>>> origin/itzik-gql
            variant="contained"
            color="primary"
          >
            Save Changes
          </Button>
        )}
<<<<<<< HEAD
        {loading && <CircularProgress />}
        {successUpdate && !error && (
          <Alert severity="success">Update succeeded</Alert>
=======
        {!error && !loading && userState === userData && (
          <Alert severity="success">update succeeded</Alert>
>>>>>>> origin/itzik-gql
        )}
      </Container>
    </>
  );
};

export default EditUserPage;
