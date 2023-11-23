// import React from "react";
// import { styled } from "@mui/system";
// import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import { Stack } from "@mui/material";
// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   minWidth: "100%",
//   maxHeight: "100%",
//   objectFit: "cover",
// });
// interface ResponsiveAdProps {
//   imageUrl: string;
//   title: string;
//   description: string;
//   note?: string;
//   to?: string;
// }
// const BannerPage: React.FC<ResponsiveAdProps> = ({
//   imageUrl,
//   title,
//   description,
//   note,
//   to = "/",
// }) => {
//   return (
//     <Link to={to}>
//       <Stack
//         width={"100vw"}
//         height={"100vh"}
//         alignItems={"center"}
//         justifyContent={"space-between"}
//         overflow={"hidden"}
//       >
//         {note && (
//           <Typography
//             variant="body2"
//             color="text.secondary"
//             sx={{ fontSize: "1rem", color: "#777" }}
//           >
//             {note}
//           </Typography>
//         )}
//         <Typography
//           gutterBottom
//           variant="h6"
//           component="div"
//           sx={{ fontSize: "2rem", fontWeight: "bold", color: "#3F51B5" }}
//         >
//           {title}
//         </Typography>
//         <Typography
//           variant="body1"
//           gutterBottom
//           sx={{ fontSize: "1.2rem", color: "#333" }}
//         >
//           {description}
//         </Typography>
//         <Img sx={{ m: 0 }} alt="ad" src={imageUrl} />
//       </Stack>
//     </Link>
//   );
// };
// export default BannerPage;
import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { keyframes } from '@mui/system';
// import { Link } from "react-router-dom";
// import axios from "axios";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

interface ResponsiveAdProps {
  imageUrl: string;
  title: string;
  description: string;
  note?: string;
  to?: string;
}

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  minWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
});

const blinkAndGrow = keyframes`
  0% {
    visibility: hidden;
    transform: scale(1)
  }

  4% {
    visibility: hidden;
  }

  5% {
    visibility: visible;
  }

  12% {
    visibility: visible;
  }

  13% {
    visibility: hidden;
  }

  16% {
    visibility: hidden;
  }

  17% {
    visibility: visible;
  }

  24% {
    visibility: visible;
  }

  25% {
    visibility: hidden;
  }

  27% {
    visibility: hidden;
  }

  28% {
    visibility: visible;
  }

  36% {
    visibility: visible;
  }

  60% {
    visibility: visible;

  }

  100% {
    visibility: visible;
  }
`;

const BannerPage = () => {
  const [data, setData] = useState<ResponsiveAdProps>({
    imageUrl: "",
    title: "",
    description: "",
    note: "",
  });
  useEffect(() => {
    // try {
    //   axios.get("YOUR_API_ENDPOINT").then((response) => setData(response.data));
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
    setData({
      title: "Wireless Headphones",
      description: "Bluetooth over-ear headphones",
      // imageUrl: "https://cdn.discordapp.com/attachments/1061944547246088242/1175870410601009272/meir_asulin_Cotton_short_sleeve_t-shirt_blue_71fa9687-e15c-4961-ba15-eac5122b3c51.png",
      imageUrl: "https://cdn.discordapp.com/attachments/1061944547246088242/1175872330061316229/meir_asulin_Wireless_Headphones._Bluetooth_over-ear_headphones._400d5722-da66-4549-8017-9de6650b5a2f.png",
      note: 'now on sale!'      
    });
  }, []);
  return (
    // <Link to={to}>
    <div onClick={() => open(data.imageUrl)}>
    <Box sx={{
      backgroundImage: `url("/ad-background.png")`,
      height: '100%',
      width: '100%',
      position: 'absolute',
      backgroundSize: 'cover',
      filter: 'blur(10px)',
      zIndex: -1
    }}></Box>
    <Stack
      width={"100vw"}
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"space-between"}
      overflow={"hidden"}
      textAlign={'center'}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Typography
        gutterBottom
        variant="h4"
        p={1}
        fontFamily={'fantasy'}
      >
        {data.title}
      </Typography>
      <Typography
        variant="subtitle1"
        fontFamily={'fantasy'}
        gutterBottom
        p={1}
      >
        {data.description}
      </Typography>
      {data.note && (
        <Typography
          variant="body1"
          fontFamily={'cursive'}
          borderRadius={'10000px'}
          p={1}
          // m={1}
          sx={{
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 0,
            translate: '0 -100%',
            animation: `${blinkAndGrow} 2.5s infinite ease-in-out`,
          }}
        >
          {data.note}
        </Typography>
      )}
      <Img
        sx={{
          m: 0,
          minHeight: '50vh',
        }}
        alt="ad" src={data.imageUrl}
        />
    </Stack>
    </div>
    // </Link>
  );
};
export default BannerPage;