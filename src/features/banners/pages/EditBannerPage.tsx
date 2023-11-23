import { ChangeEvent, useState } from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { banners } from "../../utils/temporaryData";
import { BannerInterface } from "../interface/BannerInterface";

const EditBannerPage = () => {
  const navigate = useNavigate();
  const { bannerID } = useParams<{ bannerID: string }>();
  const [banner, setBanner] = useState<BannerInterface | undefined>(
    banners.find((banner) => banner._id === bannerID)
  );

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
          label="Title"
          name="title"
          value={banner?.title || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image URL"
          name="image.url"
          value={banner?.image.url || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Image Alt Text"
          name="image.alt"
          value={banner?.image.alt || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Text"
          name="text"
          value={banner?.text || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Creation Date"
          name="createdAt"
          value={banner?.createdAt || ""}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Author"
          name="author"
          value={banner?.author || ""}
          onChange={handleChange}
          fullWidth
        />
        {/* Additional fields as per the interface */}
        <Box display="flex" justifyContent="space-evenly" marginTop={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("")}
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
