import { ChangeEvent, useEffect, useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { BannerInterface } from "../interface/BannerInterface";
import { getBannerById } from "../service/getBanners";

const EditBannerPage = () => {
  const navigate = useNavigate();
  const { bannerID } = useParams<{ bannerID: string }>();
  const [banner, setBanner] = useState<BannerInterface>();

  useEffect(() => {
    getBannerById(bannerID as string)
      .then((res) => {
        setBanner(res);
      })
      .catch((err) => console.log(err));
  }, [bannerID]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setBanner((prevBanner) => ({
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
          value={banner?.productID || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        <TextField
          label="Title"
          name="title"
          value={banner?.title || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Description"
          name="description"
          value={banner?.description || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          value={banner?.imageURL || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Category"
          name="category"
          value={banner?.category || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author ID"
          name="authorID"
          value={banner?.authorID || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        <TextField
          label="Created At"
          name="createdAt"
          value={banner?.createdAt || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        <TextField
          label="Updated At"
          name="updatedAt"
          value={banner?.updatedAt || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          disabled={true}
        />
        {/* Additional fields as per the interface */}
        <Box display="flex" justifyContent="space-evenly" marginTop={2}>
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
        </Box>
      </form>
    </Container>
  );
};

export default EditBannerPage;
