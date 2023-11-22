import React from "react";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  // maxWidth: "100%",
  // minWidth: "100%",
  maxHeight: "100%",
  minHeight: "100%",
  // height: "100%",
  objectFit: "cover",
});
interface ResponsiveAdProps {
  imageUrl: string;
  title: string;
  description: string;
  note?: string;
  to?: string;
}
const BannerHorizontalPage: React.FC<ResponsiveAdProps> = ({
  imageUrl,
  title,
  description,
  note,
  to = "/",
}) => {
  return (
    // <Link to={to}>
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"space-between"}
      overflow={"hidden"}
    >
      {note && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "1rem", color: "#777" }}
        >
          {note}
        </Typography>
      )}
      <Box
        display={"flex"}
        width={"100vw"}
        height={"100vh"}
        alignItems={"stretch"}
        justifyContent={"space-between"}
        overflow={"hidden"}
      >
        <Box alignItems={"center"} display={"flex"} flexDirection={"row"}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#8F31B5",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: "1.2rem", color: "#333", p: 3 }}
          >
            {description}
          </Typography>
        </Box>
        <Img
          sx={{
            m: 0,
            width: "100vw",
            height: "100vh",
            alignItems: "stretch",
            justifyContent: "space-between",
            overflow: "hidden",
          }}
          alt="ad"
          src={imageUrl}
        />
      </Box>
    </Stack>
    // </Link>
  );
};
export default BannerHorizontalPage;
// קוד עם axios
// import React, { useEffect, useState } from "react";
// import { styled } from "@mui/system";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Typography from "@mui/material/Typography";
// import { Stack, Box } from "@mui/material";
// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   minWidth: "100%",
//   maxHeight: "100%",
//   objectFit: "cover",
// });
// interface ResponsiveAdProps {
//   to?: string;
// }
// const BannerHorizontalPage: React.FC<ResponsiveAdProps> = ({ to = "/" }) => {
//   const [data, setData] = useState({
//     imageUrl: "",
//     title: "",
//     description: "",
//     note: "",
//   });
//   useEffect(() => {
//     try {
//       axios.get("YOUR_API_ENDPOINT")
//         .then(response => setData(response.data));
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }, []);
//   return (
//     <Link to={to}>
//       <Stack
//         width={"100vw"}
//         height={"100vh"}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         overflow={"hidden"}
//       >
//         <Box>
//           <Typography
//             gutterBottom
//             variant="h6"
//             component="div"
//             sx={{ fontSize: "2rem", fontWeight: "bold", color: "#3F51B5" }}
//           >
//             {data.title}
//           </Typography>
//           <Typography
//             variant="body1"
//             gutterBottom
//             sx={{ fontSize: "1.2rem", color: "#333" }}
//           >
//             {data.description}
//           </Typography>
//           {data.note && (
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{ fontSize: "1rem", color: "#777" }}
//             >
//               {data.note}
//             </Typography>
//           )}
//         </Box>
//         <Img sx={{ m: 0 }} alt="ad" src={data.imageUrl} />
//       </Stack>
//     </Link>
//   );
// };
// export default BannerHorizontalPage;