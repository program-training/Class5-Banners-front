import React from "react";
import { styled } from "@mui/material/styles";
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

const BannerPage = () => {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 3000,
        maxHeight: 3000,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="https://placekitten.com/800/400" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                {" "}
                כותרת המודעה
              </Typography>
              <Typography variant="body1" gutterBottom>
                זהו המקום לתיאור המודעה שלך. כתוב כמה משפטים שיתארו בקצרה את
                התוכן והיתרונות של המוצר או השירות שאתה מציע.
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                מידע נוסף
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              {" "}
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BannerPage;
