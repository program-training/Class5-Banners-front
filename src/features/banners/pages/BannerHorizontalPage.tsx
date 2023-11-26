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

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const BannerPage = () => {
    const { id } = useParams();
    const [data, setData] = useState<BannerInterface>();
    useEffect(() => {
        getBannerById(id as string)
            .then((res) => {
                setData(res[0]);
            })
            .catch((error) => console.log(error));
    }, [id]);
    return (
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
                direction={"row"} // Changed to horizontal stacking
                width={"100vw"}
                height={"100vh"} // Changed height to fill the viewport height
                alignItems={"center"}
                justifyContent={"space-between"}
                overflow={"hidden"}
                textAlign={"center"}
                sx={{
                    cursor: "pointer",
                }}
            >
                <Box flex="1">
                    {/* Added Box for image */}
                    <Img
                        sx={{
                            m: 0,
                            height: "100vh", // Adjusted height to fill the viewport height
                            width: "100%", // Ensure image width takes up entire box
                            objectFit: "cover", // Maintain image aspect ratio
                            animation: `${slideInFromLeft} 1s ease-in-out`, // Added animation
                        }}
                        alt="ad"
                        src={data?.imageURL}
                    />
                </Box>
                <Box flex="1">
                    {/* Rest of your content */}
                    <Typography variant="h4" fontFamily="fantasy" color="white">
                        {data?.title || "Title"}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        fontFamily="fantasy"
                        color="white"
                    >
                        {data?.description || "Description"}
                    </Typography>
                    {data?.note && (
                        <Typography
                            variant="body1"
                            fontFamily="cursive"
                            color="lightyellow"
                        >
                            {data.note}
                        </Typography>
                    )}
                </Box>
            </Stack>
        </div>
    );
};

export default BannerPage;
