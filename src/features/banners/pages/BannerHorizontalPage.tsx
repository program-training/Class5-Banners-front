// import { useEffect, useState } from "react";
// import { styled } from "@mui/system";
// import { keyframes } from "@mui/system";
// import Typography from "@mui/material/Typography";
// import { Box, Stack } from "@mui/material";
// import { BannerInterface } from "../interface/BannerInterface";
// import { getBannerById } from "../service/getBanners";
// import { useParams } from "react-router-dom";

// const Img = styled("img")({
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     minWidth: "100%",
//     maxHeight: "100%",
//     objectFit: "cover",
// });

// const slideInFromLeft = keyframes`
//   from {
//     transform: translateX(-100%);
//   }
//   to {
//     transform: translateX(0);
//   }
// `;

// const BannerPage = () => {
//     const { id } = useParams();
//     const [data, setData] = useState<BannerInterface>();
//     useEffect(() => {
//         getBannerById(id as string)
//             .then((res) => {
//                 setData(res[0]);
//             })
//             .catch((error) => console.log(error));
//     }, [id]);
//     return (
//         <div onClick={() => open(data?.imageURL)}>
//             <Box
//                 sx={{
//                     backgroundImage: `url("/ad-background.png")`,
//                     height: "100%",
//                     width: "100%",
//                     position: "absolute",
//                     backgroundSize: "cover",
//                     zIndex: -1,
//                 }}
//             ></Box>
//             <Stack
//                 direction={"row"} // Changed to horizontal stacking
//                 width={"100vw"}
//                 height={"100vh"}
//                 alignItems={"center"}
//                 justifyContent={"space-between"}
//                 overflow={"hidden"}
//                 textAlign={"center"}
//                 sx={{
//                     cursor: "pointer",
//                 }}
//             >
//                 <Box flex="1">
//                     {/* Added Box for image */}
//                     <Img
//                         sx={{
//                             m: 0,
//                             height: "100%", // Adjusted height to fill the Stack
//                             animation: `${slideInFromLeft} 1s ease-in-out`, // Added animation
//                         }}
//                         alt="ad"
//                         src={data?.imageURL}
//                     />
//                 </Box>
//                 <Box flex="1">
//                     {" "}
//                     {/* Added Box for details */}
//                     <Typography
//                         variant="h4"
//                         p={1}
//                         fontFamily={"fantasy"}
//                         color={"white"}
//                         textAlign="left"
//                     >
//                         {data?.title}
//                     </Typography>
//                     <Typography
//                         variant="subtitle1"
//                         fontFamily={"fantasy"}
//                         color={"white"}
//                         p={1}
//                         sx={{
//                             textShadow: "1px 1px black",
//                             textAlign: "left",
//                         }}
//                     >
//                         {data?.description}
//                     </Typography>
//                     {data?.note && (
//                         <Typography
//                             variant="body1"
//                             fontFamily={"cursive"}
//                             borderRadius={"px"}
//                             p={1}
//                             color={"lightyellow"}
//                             sx={{
//                                 textShadow: "2px 2px black",
//                                 fontSize: "1.5rem",
//                                 textAlign: "left",
//                                 animation: `${slideInFromLeft} 1s ease-in-out`, // Changed animation
//                             }}
//                         >
//                             {data.note}
//                         </Typography>
//                     )}
//                 </Box>
//             </Stack>
//         </div>
//     );
// };

// export default BannerPage;
