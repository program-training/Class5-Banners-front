import { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { keyframes } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { BannerInterface } from "../interface/BannerInterface";
import { getBannerById } from "../service/getBanners";
import { useParams } from "react-router-dom";

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
  const { id } = useParams();
  const [data, setData] = useState<BannerInterface>();
  useEffect(() => {
    getBannerById(id as string)
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    // <Link to={to}>
    <div onClick={() => open(data?.imageURL)}>
      <Box
        sx={{
          backgroundImage: `url("/ad-background.png")`,
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      ></Box>
      <Stack
        width={"100vw"}
        height={"100vh"}
        alignItems={"center"}
        justifyContent={"space-between"}
        overflow={"hidden"}
        textAlign={"center"}
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          p={1}
          fontFamily={"fantasy"}
          color={"white"}
        >
          {data?.title}
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily={"fantasy"}
          gutterBottom
          color={"white"}
          p={1}
          sx={{
            textShadow: "1px 1px black",
          }}
        >
          {data?.description}
        </Typography>
        {data?.note && (
          <Typography
            variant="body1"
            fontFamily={"cursive"}
            borderRadius={"px"}
            p={1}
            color={"lightyellow"}
            // m={1}
            sx={{
              textShadow: "2px 2px black",
              fontSize: "1.5rem",
              position: "absolute",
              bottom: 0,
              translate: "0 -100%",
              animation: `${blinkAndGrow} 2.5s infinite ease-in-out`,
            }}
          >
            {data.note}
          </Typography>
        )}
        <Img
          sx={{
            m: 0,
            minHeight: "50vh",
          }}
          alt="ad"
          src={data?.imageURL}
        />
      </Stack>
    </div>
    // </Link>
  );
};
export default BannerPage;
