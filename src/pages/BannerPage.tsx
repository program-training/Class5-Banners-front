import React from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

interface ResponsiveAdProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  note?: string;
}

const BannerPage: React.FC<ResponsiveAdProps> = ({
  imageUrl,
  title,
  description,
  note,
}) => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        // height: "100vh",
        // width: "100Vw",
        flexGrow: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: "100%", height: "auto" }}>
            <Img alt="ad" src={imageUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
              {note && (
                <Typography variant="body2" color="text.secondary">
                  {note}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BannerPage;
