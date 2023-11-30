import { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  editBannerReq,
  getBannerByIdReq,
} from "../service/bannerReqFromServer";

const EditBannerPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { bannerID } = useParams();
  const { specificBanner, error, pending } = useAppSelector(
    (store) => store.banners
  );

  const [editedBanner, setEditedBanner] = useState(specificBanner || null);

  useEffect(() => {
    bannerID && dispatch(getBannerByIdReq(bannerID));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    editedBanner && dispatch(editBannerReq(editedBanner));

    navigate("/");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setEditedBanner((prevBanner) => ({
      ...prevBanner!,
      [name]: value,
    }));
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
      <Typography variant="h2">Edit Banner</Typography>
      <Typography variant="h5">Edit Banner's Details</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="ProductID"
          name="productID"
          value={specificBanner?.productID || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        <TextField
          label="Title"
          name="title"
          value={specificBanner?.title || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={specificBanner?.description || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={specificBanner?.imageURL || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Category"
          name="category"
          value={specificBanner?.category || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author ID"
          name="authorID"
          value={specificBanner?.authorID || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        <TextField
          label="Created At"
          name="createdAt"
          value={specificBanner?.createdAt || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        <TextField
          label="Updated At"
          name="updatedAt"
          value={specificBanner?.updatedAt || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        <Box display="flex" justifyContent="space-evenly" marginTop={2}>
          {!pending && (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </>
          )}
          {pending && <CircularProgress />}
          {error && (
            <Alert severity="error">
              an internal server error had occurred. try again later.
            </Alert>
          )}
        </Box>
      </form>
    </Container>
  );
};

export default EditBannerPage;
